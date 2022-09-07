import { Deferred, deferred } from "std/async/deferred.ts";
import { ComputeStage } from "../engine.ts";
import type { TypeGraphDS, TypeMaterializer } from "../typegraph.ts";
import { Resolver, Runtime, RuntimeInitParams } from "./Runtime.ts";
import { getLogger } from "../log.ts";
import { FuncTask, ImportFuncTask } from "./utils/codes.ts";
import { ensure } from "../utils.ts";

const logger = getLogger(import.meta);

const workerFile = new URL("../src/runtimes/utils/worker.ts", Deno.mainModule)
  .href;

export class WorkerRuntime extends Runtime {
  w: OnDemandWorker;

  private constructor(name: string, lazy: boolean, tg: TypeGraphDS) {
    super();
    this.w = new OnDemandWorker(name, lazy, tg);
  }

  static init(params: RuntimeInitParams): Runtime {
    const { typegraph: tg, config, args } = params;

    return new WorkerRuntime(
      args.name as string,
      config.lazy as boolean ?? false,
      tg,
    );
  }

  deinit(): Promise<void> {
    return this.w.terminate();
  }

  materialize(
    stage: ComputeStage,
    waitlist: ComputeStage[],
    verbose: boolean,
  ): ComputeStage[] {
    if (!stage.props.materializer) {
      throw new Error("No materializer specified for WorkerRuntime.");
    }
    return [
      new ComputeStage({
        ...stage.props,
        resolver: this.delegate(stage.props.materializer),
      }),
    ];
  }

  delegate(mat: TypeMaterializer): Resolver {
    ensure(
      mat.name === "function" || mat.name === "import_function" ||
        mat.name === "predefined_function",
      `unsupported materializer ${mat.name}`,
    );
    return async ({ _: context, ...args }) => {
      return await this.w.execTask({
        args,
        context,
        mat,
      });
    };
  }
}

interface TaskInit {
  args: Record<string, unknown>;
  context: Record<string, string>;
  mat: TypeMaterializer;
}

interface TaskData {
  promise: Deferred<unknown>;
  hooks: Array<() => void | Promise<void>>;
}

const resetModulus = 1_000_000;
const inactivityThreshold = 1;
const inactivityIntervalMs = 15_000;

class OnDemandWorker {
  lazyWorker?: Worker;
  name: string;

  tasks: Map<number, TaskData> = new Map();
  counter = 0;

  gcState = 0;
  gcInterval?: number;

  modules: Map<TypeMaterializer, Promise<string>> = new Map();
  inlineFns: Map<TypeMaterializer, number> = new Map();

  constructor(name: string, lazy: boolean, private tg: TypeGraphDS) {
    this.name = name;
    if (lazy) {
      this.enableLazyWorker();
    } else {
      this.worker();
    }
  }

  enableLazyWorker() {
    logger.info(`enable laziness`);
    clearInterval(this.gcInterval);
    this.gcInterval = setInterval(
      () => this.checkJobLess(),
      inactivityIntervalMs,
    );
  }

  disableLazyWorker() {
    logger.info(`disable laziness`);
    clearInterval(this.gcInterval);
    this.worker();
  }

  checkJobLess(): void {
    if (!this.lazyWorker) {
      return;
    }

    const activity = (this.counter - this.gcState + resetModulus) %
      resetModulus;
    this.gcState = this.counter;

    if (activity <= inactivityThreshold && this.tasks.size < 1) {
      logger.info(`lazy close`);
      this.lazyWorker.terminate();
      this.lazyWorker = undefined;
    }
  }

  async terminate(): Promise<void> {
    clearInterval(this.gcInterval);
    await Promise.all([...this.tasks.values()].map((t) => t.promise));
    logger.info(`close`);
    if (this.lazyWorker) {
      this.lazyWorker.terminate();
      this.lazyWorker = undefined;
    }
  }

  worker(): Worker {
    if (!this.lazyWorker) {
      logger.info(`spawn`);
      this.lazyWorker = new Worker(workerFile, {
        type: "module",
        deno: {
          namespace: false,
          permissions: {
            read: ["/tmp/"],
          },
        },
      } as WorkerOptions);
      this.lazyWorker.onmessage = async (event) => {
        const { id, data } = event.data as { id: number; data: unknown };
        const task = this.tasks.get(id)!;
        task.promise.resolve(data);
        for await (const hook of task.hooks) {
          await hook();
        }
        this.tasks.delete(id);
      };
      this.lazyWorker.onerror = (error) => {
        // console.error(error);
        throw error;
      };
    }
    return this.lazyWorker;
  }

  private nextId(): number {
    const n = this.counter++;
    this.counter %= resetModulus;
    return n;
  }

  async execTask(task: TaskInit): Promise<unknown> {
    const { args, context, mat } = task;

    switch (mat.name) {
      case "function": {
        const id = this.nextId();
        let fnRef: Pick<FuncTask, "fnId" | "code">;
        if (!this.inlineFns.has(mat)) {
          this.inlineFns.set(mat, id);
          fnRef = { fnId: id, code: mat.data.fn_expr as string };
        } else {
          fnRef = { fnId: this.inlineFns.get(mat)! };
        }
        const promise = deferred<unknown>();
        this.worker().postMessage({
          type: "func",
          id,
          args,
          context,
          ...fnRef,
        } as FuncTask);

        this.tasks.set(id, { promise, hooks: [] });
        return promise;
      }

      case "import_function": {
        const modMat = this.tg.materializers[mat.data.mod as number];
        const hooks = [] as Array<() => Promise<void>>;
        if (!this.modules.has(modMat)) {
          const modPromise = Promise.resolve((async () => {
            const path = await Deno.makeTempFile({ suffix: ".js" });
            await Deno.writeTextFile(path, modMat.data.code as string);
            return path;
          })());
          this.modules.set(modMat, modPromise);
          hooks.push(async () => {
            const mod = await modPromise;
            Deno.remove(mod);
          });
        }
        const module = await this.modules.get(modMat)!;
        const promise = deferred<unknown>();
        const id = this.nextId();
        this.worker().postMessage({
          type: "import_func",
          id,
          module,
          args,
          context,
          name: mat.data.name as string,
        } as ImportFuncTask);

        this.tasks.set(id, { promise, hooks });
        return promise;
      }
    }
  }
}

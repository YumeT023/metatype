// Copyright Metatype under the Elastic License 2.0.

import {
  assert,
  assertEquals,
  assertStringIncludes,
} from "std/testing/asserts.ts";
import { Engine, initTypegraph } from "../src/engine.ts";
import { JSONValue } from "../src/utils.ts";
import { parse } from "std/flags/mod.ts";
import { deepMerge } from "std/collections/deep_merge.ts";
import { dirname, fromFileUrl, join, resolve } from "std/path/mod.ts";
import { Register } from "../src/register.ts";
import { typegate } from "../src/typegate.ts";
import { signJWT } from "../src/crypto.ts";
import { ConnInfo } from "std/http/server.ts";
import { RateLimiter } from "../src/rate_limiter.ts";
import { RuntimesConfig } from "../src/types.ts";
import { PrismaMigration } from "../src/runtimes/prisma_migration.ts";
import { PrismaRuntimeDS } from "../src/type_node.ts";
import { SystemTypegraph } from "../src/system_typegraphs.ts";
import { TypeGraph } from "../src/typegraph.ts";

const testRuntimesConfig = {
  worker: { lazy: false },
};

const localDir = dirname(fromFileUrl(import.meta.url));
const metaCli = resolve(localDir, "../../target/debug/meta");

export async function meta(...input: string[]): Promise<void> {
  console.log(await shell([metaCli, ...input]));
}

export async function shell(cmd: string[]): Promise<string> {
  const p = Deno.run({
    cwd: localDir,
    cmd,
    stdout: "piped",
    stderr: "piped",
  });

  const [_status, stdout, stderr] = await Promise.all([
    p.status(),
    p.output(),
    p.stderrOutput(),
  ]);
  p.close();

  const out = new TextDecoder().decode(stdout).trim();
  const err = new TextDecoder().decode(stderr).trim();

  if (err.length > 0) {
    throw new Error(err);
  }

  return out;
}

export class SingleRegister extends Register {
  constructor(private name: string, private engine: Engine) {
    super();
  }

  set(_payload: string): Promise<string> {
    return Promise.resolve(this.name);
  }

  remove(_name: string): Promise<void> {
    return Promise.resolve();
  }

  list(): Engine[] {
    return [this.engine];
  }

  get(name: string): Engine | undefined {
    return this.has(name) ? this.engine : undefined;
  }

  has(name: string): boolean {
    return name === this.name;
  }
}

export class MemoryRegister extends Register {
  private map = new Map<string, Engine>();

  async set(payload: string, config?: RuntimesConfig): Promise<string> {
    const engine = await initTypegraph(
      payload,
      SystemTypegraph.getCustomRuntimes(this),
      config,
      undefined, // no need to have introspection for tests
    );
    this.map.set(engine.name, engine);
    return engine.name;
  }
  remove(name: string): Promise<void> {
    this.map.delete(name);
    return Promise.resolve();
  }
  list(): Engine[] {
    return Array.from(this.map.values());
  }
  get(name: string): Engine | undefined {
    return this.map.get(name);
  }
  has(name: string): boolean {
    return this.map.has(name);
  }
}

export class NoLimiter extends RateLimiter {
  constructor() {
    super();
  }
  decr(_id: string, n: number): number | null {
    return n;
  }
  currentTokens(
    _id: string,
    _windowSec: number,
    _windowBudget: number,
    _maxLocalHit: number,
  ): Promise<number> {
    return Promise.resolve(1);
  }
}

class MetaTest {
  t: Deno.TestContext;
  register: Register;

  constructor(t: Deno.TestContext) {
    this.t = t;
    this.register = new MemoryRegister();
  }

  async load(name: string, config: RuntimesConfig = {}): Promise<Engine> {
    // TODO load from python file
    const engineName = await this.register.set(
      await Deno.readTextFile(join(localDir, `../src/typegraphs/${name}.json`)),
      deepMerge(testRuntimesConfig, config),
    );
    return this.register.get(engineName)!;
  }

  async pythonCode(code: string, config: RuntimesConfig = {}): Promise<Engine> {
    const path = await Deno.makeTempFile({ suffix: ".py" });
    try {
      await Deno.writeTextFile(path, code);
      return this.pythonFile(path, config);
    } finally {
      await Deno.remove(path);
    }
  }

  async pythonFile(path: string, config: RuntimesConfig = {}): Promise<Engine> {
    return await this.parseTypegraph(
      path,
      deepMerge(testRuntimesConfig, config),
    );
  }

  async parseTypegraph(
    path: string,
    config: RuntimesConfig = {},
  ): Promise<Engine> {
    const stdout = await shell([metaCli, "serialize", "-f", path, "-1"]);
    const engineName = await this.register.set(
      stdout,
      deepMerge(testRuntimesConfig, config),
    );
    return this.register.get(engineName)!;
  }

  async terminate() {
    await Promise.all(
      this.register.list().map((e) => e.terminate()),
    );
  }

  async should(
    fact: string,
    fn: (t: Deno.TestContext) => void | Promise<void>,
  ): Promise<boolean> {
    return await this.t.step({
      name: `should ${fact}`,
      fn,
      //sanitizeOps: false,
    });
  }
}

export function test(
  name: string,
  fn: (t: MetaTest) => void | Promise<void>,
  opts: Omit<Deno.TestDefinition, "name" | "fn"> = {},
): void {
  return Deno.test({
    name,
    async fn(t) {
      const mt = new MetaTest(t);
      try {
        await fn(mt);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        await mt.terminate();
      }
    },
    ...opts,
  });
}

const testConfig = parse(Deno.args);

export function testAll(engineName: string) {
  test(`Auto-tests for ${engineName}`, async (t) => {
    const e = await t.pythonFile(`typegraphs/${engineName}.py`);

    for await (
      const f of Deno.readDir(
        join(localDir, `queries/${engineName}`),
      )
    ) {
      if (f.name.endsWith(".graphql")) {
        await t.should(
          `run case ${f.name.replace(".graphql", "")}`,
          async () => {
            await Q.fs(`${engineName}/1`, e);
          },
        );
      }
    }
  });
}

export function gql(query: readonly string[], ...args: any[]) {
  const template = query
    .map((q, i) => `${q}${args[i] ? JSON.stringify(args[i]) : ""}`)
    .join("");
  return new Q(template, {}, {}, {}, []);
}

// std/fs/exists will be removed at v157.0
async function exists(path: string): Promise<boolean> {
  const stat = await Deno.stat(path);
  return stat.isFile || stat.isDirectory || stat.isSymlink;
}

type Expect = (res: Response) => Promise<void> | void;
type Variables = Record<string, JSONValue>;
type Context = Record<string, string>;

export class Q {
  query: string;
  context: Context;
  variables: Variables;
  headers: Record<string, string>;
  expects: Expect[];

  constructor(
    query: string,
    context: Context,
    variables: Variables,
    headers: Record<string, string>,
    expects: Expect[],
  ) {
    this.query = query;
    this.context = context;
    this.variables = variables;
    this.headers = headers;
    this.expects = expects;
  }

  static async fs(path: string, engine: Engine) {
    const input = join(localDir, `queries/${path}.graphql`);
    const output = join(localDir, `queries/${path}.json`);
    const query = Deno.readTextFile(input);
    if (testConfig.override || !(await exists(output))) {
      const { ...result } = await engine!.execute(
        await query,
        null,
        {},
        {},
        null,
      );
      await Deno.writeTextFile(output, JSON.stringify(result, null, 2));
    }
    const result = Deno.readTextFile(output);
    return new Q(await query, {}, {}, {}, [])
      .expectValue(JSON.parse(await result))
      .on(engine);
  }

  withContext(context: Context) {
    return new Q(
      this.query,
      deepMerge(this.context, context),
      this.variables,
      this.headers,
      this.expects,
    );
  }

  withVars(variables: Variables) {
    return new Q(
      this.query,
      this.context,
      deepMerge(this.variables, variables),
      this.headers,
      this.expects,
    );
  }

  withHeaders(headers: Record<string, string>) {
    return new Q(
      this.query,
      this.context,
      this.variables,
      deepMerge(this.headers, headers),
      this.expects,
    );
  }

  expect(expect: Expect) {
    return new Q(this.query, this.context, this.variables, this.headers, [
      ...this.expects,
      expect,
    ]);
  }

  expectStatus(status: number) {
    return this.expect((res) => {
      assertEquals(res.status, status);
    });
  }

  expectBody(expect: (body: any) => Promise<void> | void) {
    return this.expect(async (res) => {
      const json = await res.json();
      await expect(json);
    });
  }

  expectValue(result: JSONValue) {
    return this.expectBody((body) => {
      assertEquals(body, result);
    });
  }

  expectData(data: JSONValue) {
    return this.expectValue({ data });
  }

  expectErrorContains(partial: string) {
    return this.expectBody((body) => {
      assertEquals(Array.isArray(body.errors), true, "no 'errors' field found");
      assert(body.errors.length > 0);
      assertStringIncludes(body.errors[0].message, partial);
    });
  }

  async on(engine: Engine) {
    const { query, variables, headers, context, expects } = this;

    const defaults: Record<string, string> = {};

    if (Object.keys(context).length > 0) {
      const jwt = await signJWT(context, 5);
      defaults["Authorization"] = `Bearer ${jwt}`;
    }

    const request = new Request(`http://typegate.local/${engine.name}`, {
      method: "POST",
      body: JSON.stringify(
        {
          query,
          variables,
          operationName: null,
        },
      ),
      headers: {
        ...defaults,
        ...headers,
        "Content-Type": "application/json",
      },
    });
    const response = await execute(engine, request);

    for (const expect of expects) {
      expect(response);
    }
  }
}

export async function execute(
  engine: Engine,
  request: Request,
): Promise<Response> {
  const register = new SingleRegister(engine.name, engine);
  const limiter = new NoLimiter();
  const server = typegate(
    register,
    limiter,
  );
  return await server(
    request,
    { remoteAddr: { hostname: "localhost" } } as ConnInfo,
  );
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function recreateMigrations(engine: Engine) {
  const runtimeNames = engine.tg.tg.runtimes
    .filter((rt) => rt.name === "prisma")
    .map((rt) => (rt as unknown as PrismaRuntimeDS).data.name);

  for await (const runtime of runtimeNames) {
    const prisma = new PrismaMigration(engine, runtime);
    prisma.migrationFolderBase = join(localDir, "prisma-migrations");
    await Deno.remove(prisma.migrationFolder, { recursive: true })
      .catch(() => {});
    await prisma.create({ name: "init", apply: true } as any);
  }
}

export async function removeMigrations(engine: Engine) {
  await Deno.remove(join(localDir, "prisma-migrations", engine.name), {
    recursive: true,
  }).catch(() => {});
}

export async function cleanUp() {
  for await (const tg of TypeGraph.list) {
    console.log(`cleanup: ${tg.name}`);
    await tg.deinit();
  }
}

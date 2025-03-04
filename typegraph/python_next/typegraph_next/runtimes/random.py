# Copyright Metatype OÜ, licensed under the Mozilla Public License Version 2.0.
# SPDX-License-Identifier: MPL-2.0
from dataclasses import dataclass
from typing import Optional

from typegraph_next.runtimes.base import Materializer, Runtime

from typegraph_next.gen.exports.runtimes import (
    EffectNone,
    BaseMaterializer,
    MaterializerRandom,
    RandomRuntimeData,
)
from typegraph_next.gen.types import Err
from typegraph_next.wit import runtimes, store

from typegraph_next import t


class RandomRuntime(Runtime):
    def __init__(self, seed: int, reset: Optional[str] = ""):
        super().__init__(
            runtimes.register_random_runtime(
                store, data=RandomRuntimeData(seed=seed, reset=reset)
            )
        )

    def gen(
        self,
        inp: "t.typedef",
    ):
        effect = EffectNone()

        mat_id = runtimes.create_random_mat(
            store,
            base=BaseMaterializer(runtime=self.id.value, effect=effect),
            data=MaterializerRandom(runtime=self.id.value),
        )

        if isinstance(mat_id, Err):
            raise Exception(mat_id.value)

        return t.func(
            t.struct({}),
            inp,
            RandomMat(id=mat_id.value, runtime=self.id.value, effect=effect),
        )


@dataclass
class RandomMat(Materializer):
    runtime: int

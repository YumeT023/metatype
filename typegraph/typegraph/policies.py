# Copyright Metatype under the Elastic License 2.0.

from typing import Optional

from typegraph.graphs.builder import Collector
from typegraph.graphs.node import Node
from typegraph.graphs.typegraph import TypegraphContext
from typegraph.materializers.base import Materializer
from typegraph.materializers.deno import FunMat


class Policy(Node):
    mat: Materializer
    name: Optional[str]

    def __init__(self, mat: Materializer, **kwargs):
        super().__init__(Collector.policies)
        self.mat = mat
        tg = TypegraphContext.get_active()
        self.name = f"policy_{tg.next_type_id()}"

    def data(self, collector):
        return {
            "name": self.name,
            "materializer": collector.collects[Collector.materializers].add(self.mat),
        }

    def named(self, name: str):
        pol = Policy(**vars(self))
        pol.name = name
        return pol


def allow_all(name: str = "__allow_all"):
    return Policy(
        FunMat.from_lambda(lambda args: True),
    ).named(name)


# def header(name: str = "__allow_all"):
#     return t.policy(
#         t.struct(),
#         FunMat.from_lambda(lambda args: True),
#     ).named(name)

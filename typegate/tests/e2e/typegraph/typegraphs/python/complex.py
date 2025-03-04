# Copyright Metatype OÜ, licensed under the Mozilla Public License Version 2.0.
# SPDX-License-Identifier: MPL-2.0

from typegraph_next import t, typegraph
from typegraph_next.graph.typegraph import Graph
from typegraph_next.policy import Policy
from typegraph_next.runtimes.deno import DenoRuntime

someType = t.struct(
    {
        "one": t.array(t.integer(), min=3, name="Two"),
        "two": t.optional(t.proxy("SomeType")),
    },
    name="SomeType",
)

complexType = t.struct(
    {
        "a_string": t.string(),
        "a_float": t.float(min=1.0, multiple_of=2.0),
        "an_enum": t.enum(["one", "two"]),
        "an_integer_enum": t.integer(enumeration=[1, 2], config={"key": "value"}),
        "a_float_enum": t.float(enumeration=[1.5, 2.5]),
        "a_struct": t.struct({"value": t.float()}),
        "nested": t.array(t.either([t.string(), t.integer()])).optional(),
        "nested_with_ref": someType,
        "an_email": t.email(),
    },
    name="ComplexType",
)


@typegraph()
def test_complex_types(g: Graph):
    deno = DenoRuntime()
    pub = Policy.public()

    g.expose(
        test=deno.func(
            complexType,
            t.boolean(),
            code="() => true",
        ).with_policy(pub),
    )

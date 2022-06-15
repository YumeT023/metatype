from typegraph.graphs.typegraph import TypeGraph
from typegraph.materializers import worker
from typegraph.materializers.http import HTTPRuntime
from typegraph.types import typedefs as t

with TypeGraph("swagger-petstore") as g:

    remote = HTTPRuntime("https://petstore.swagger.io/v2")

    allow_all = t.policy(
        t.struct(),
        worker.JavascriptMat(
            worker.JavascriptMat.lift(lambda args: True),
            "policy",
        ),
    ).named("allow_all_policy")

    category = t.struct(
        {
            "id": t.integer(),
            "name": t.string(),
        }
    ).named("Category")

    # status = t.enum([t.literal("available"), t.literal("pending"), t.literal("sold")])
    # status = t.enum(["available", "pending", "sold"])
    status = t.string()

    pet = t.struct(
        {
            "id": t.integer(),
            "category": t.optional(g("Category")),
            "name": t.string(),
            "photoUrls": t.list(t.string()),
            "tags": t.optional(t.list(g("Tag"))),
            "status": t.optional(status),
        }
    ).named("Pet")

    tag = t.struct({"id": t.integer(), "name": t.string()}).named("Tag")

    find_pet_by_id = remote.get(
        r"/pet/{id}", t.struct({"id": t.integer()}), g("Pet")
    ).add_policy(allow_all)

    find_pets_by_status = remote.get(
        "/pet/findByStatus", t.struct({"status": status}), t.list(g("Pet"))
    ).add_policy(allow_all)

    find_pets_by_tags = remote.get(
        "/pet/findByTags", t.struct({"tags": t.list(t.string())}), t.list(g("Pet"))
    ).add_policy(allow_all)

    g.expose(
        pet=find_pet_by_id,
        petsByStatus=find_pets_by_status,
        petsByTags=find_pets_by_tags,
    )

// Copyright Metatype OÜ, licensed under the Mozilla Public License Version 2.0.
// SPDX-License-Identifier: MPL-2.0

use common::typegraph::{EitherTypeData, TypeNode};
use errors::Result;

use crate::{
    conversion::types::{gen_base, TypeConversion},
    errors,
    global_store::with_store,
    typegraph::TypegraphContext,
    types::{Either, TypeData},
    wit::core::TypeEither,
};

impl TypeConversion for Either {
    fn convert(&self, ctx: &mut TypegraphContext, runtime_id: Option<u32>) -> Result<TypeNode> {
        Ok(TypeNode::Either {
            base: gen_base(
                format!("either_{}", self.id),
                self.base.runtime_config.clone(),
                runtime_id.unwrap(),
                None,
            ),
            data: EitherTypeData {
                one_of: self
                    .data
                    .variants
                    .iter()
                    .map(|vid| {
                        with_store(|s| -> Result<_> {
                            let id = s.resolve_proxy(*vid)?;
                            ctx.register_type(s, id, runtime_id)
                        })
                    })
                    .collect::<Result<Vec<_>>>()?,
            },
        })
    }
}

impl TypeData for TypeEither {
    fn get_display_params_into(&self, params: &mut Vec<String>) {
        for (i, tpe_id) in self.variants.iter().enumerate() {
            params.push(format!("[v{}] => #{}", i, tpe_id));
        }
    }

    fn variant_name(&self) -> String {
        "either".to_string()
    }
}

import { MutationTuple } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { UpsertTopUpsProductEntity, UpsertTopUpsProductEntityVariables } from "../_core/schema";

export const GQL_MUTATION_UPSERT_TOP_UPS_PRODUCT_ENTITY = gql`
  mutation UpsertTopUpsProductEntity($product: ProductCode!) {
    upsertTopUpsProductEntity(product: $product) {
      id
    }
  }
`;

export type UpsertProductEntityMutationTuple = MutationTuple<
  UpsertTopUpsProductEntity,
  UpsertTopUpsProductEntityVariables
>;

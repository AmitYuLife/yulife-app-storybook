import { gql } from "@apollo/client";
import client from "../_core/client";
import { NormalisePersonalProductStep, NormalisePersonalProductStepVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_NORMALISE_PERSONAL_PRODUCT_STEP = gql`
  mutation NormalisePersonalProductStep($productId: String!) {
    normalisePersonalProductStep(productId: $productId)
  }
`;

export const normalisePersonalProductStep = (variables: NormalisePersonalProductStepVariables) =>
  client().mutate<NormalisePersonalProductStep>({
    mutation: GQL_MUTATION_NORMALISE_PERSONAL_PRODUCT_STEP,
    variables,
  });

export default normalisePersonalProductStep;

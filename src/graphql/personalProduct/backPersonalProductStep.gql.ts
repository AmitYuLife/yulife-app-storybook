import gql from "graphql-tag";
import client from "../_core/client";
import { BackPersonalProductStep, BackPersonalProductStepVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_BACK_PERSONAL_PRODUCT_STEP = gql`
  mutation BackPersonalProductStep($productId: String!) {
    backPersonalProductStep(productId: $productId)
  }
`;

export const backPersonalProductStep = (variables: BackPersonalProductStepVariables) =>
  client().mutate<BackPersonalProductStep>({
    mutation: GQL_MUTATION_BACK_PERSONAL_PRODUCT_STEP,
    variables,
    refetchQueries: ["GetPersonalProductStep"],
  });

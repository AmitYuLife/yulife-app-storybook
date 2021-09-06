import gql from "graphql-tag";
import client from "../_core/client";
import { SubmitPersonalProductStep, SubmitPersonalProductStepVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_SUBMIT_PERSONAL_PRODUCT_STEP = gql`
  mutation SubmitPersonalProductStep($stepId: String!, $productId: String!, $data: String!) {
    submitPersonalProductStep(stepId: $stepId, productId: $productId, data: $data)
  }
`;

export default (variables: SubmitPersonalProductStepVariables) =>
  client().mutate<SubmitPersonalProductStep>({
    mutation: GQL_MUTATION_SUBMIT_PERSONAL_PRODUCT_STEP,
    variables,
    refetchQueries: ["GetPersonalProductStep"],
  });

import { gql } from "@apollo/client";
import client from "../_core/client";
import { SubmitPersonalProductStep, SubmitPersonalProductStepVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_SUBMIT_PERSONAL_PRODUCT_STEP = gql`
  mutation SubmitPersonalProductStep($stepId: String!, $productId: String!, $data: String!) {
    submitPersonalProductStep(stepId: $stepId, productId: $productId, data: $data)
  }
`;

export const submitPersonalProductStep = (variables: SubmitPersonalProductStepVariables, refetchQueries: string[]) =>
  client().mutate<SubmitPersonalProductStep>({
    mutation: GQL_MUTATION_SUBMIT_PERSONAL_PRODUCT_STEP,
    variables,
    refetchQueries,
  });

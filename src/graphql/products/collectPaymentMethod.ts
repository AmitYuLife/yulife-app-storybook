import { MutationTuple } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { CollectPaymentMethod, CollectPaymentMethodVariables } from "../_core/schema";

export const GQL_MUTATION_COLLECT_PAYMENT_METHOD = gql`
  mutation CollectPaymentMethod($input: CollectPaymentMethodInput!) {
    collectPaymentMethod(input: $input) {
      collected
      nextStepUrl
      clientSecret
    }
  }
`;

export type CollectPaymentMethodMutationTuple = MutationTuple<CollectPaymentMethod, CollectPaymentMethodVariables>;

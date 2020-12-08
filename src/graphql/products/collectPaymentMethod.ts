import { MutationTuple } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { CollectPaymentMethod, CollectPaymentMethodVariables } from "../_core/schema/CollectPaymentMethod";

export const GQL_MUTATION_COLLECT_PAYMENT_METHOD = gql`
  mutation CollectPaymentMethod($token: String!, $type: PaymentMethodType!) {
    collectPaymentMethod(token: $token, type: $type) {
      collected
      purchased
    }
  }
`;

export type CollectPaymentMethodMutationTuple = MutationTuple<CollectPaymentMethod, CollectPaymentMethodVariables>;

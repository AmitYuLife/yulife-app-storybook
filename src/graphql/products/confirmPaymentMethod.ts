import { MutationTuple } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ConfirmPaymentMethod, ConfirmPaymentMethodVariables } from "../_core/schema";

export const GQL_MUTATION_CONFIRM_PAYMENT_METHOD = gql`
  mutation ConfirmPaymentMethod($paymentMethodId: String, $productCode: ProductCode) {
    confirmPaymentMethod(paymentMethodId: $paymentMethodId, productCode: $productCode) {
      confirmed
      purchased
    }
  }
`;

export type ConfirmPaymentMethodMutationTuple = MutationTuple<ConfirmPaymentMethod, ConfirmPaymentMethodVariables>;

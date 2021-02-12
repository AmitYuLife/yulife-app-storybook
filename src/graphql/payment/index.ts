import gql from "graphql-tag";

export const GQL_MUTATION_ADD_PAYMENT_CARD = gql`
  mutation AddPaymentCard($providerPaymentMethodId: String!) {
    addPaymentCard(providerPaymentMethodId: $providerPaymentMethodId) {
      paymentId
      redirectUrl
      clientSecret
    }
  }
`;

export const GQL_MUTATION_CONFIRM_PAYMENT_CARD = gql`
  mutation ConfirmPaymentCard($paymentId: String!, $providerPaymentMethodId: String!) {
    confirmPaymentCard(paymentId: $paymentId, providerPaymentMethodId: $providerPaymentMethodId)
  }
`;

import gql from "graphql-tag";

export const GQL_QUERY_GET_MOBILE_PAYMENT_CARD_SETUP = gql`
  query GetMobilePaymentCardSetup {
    setup: getMobilePaymentCardSetup {
      paymentId
      providerCustomerId
      clientSecret
      ephemeralSecret
    }
  }
`;

export const GQL_MUTATION_CONFIRM_PAYMENT_CARD = gql`
  mutation ConfirmPaymentCard($paymentId: String!) {
    confirmPaymentCard(paymentId: $paymentId) {
      cardValidTill
      cardLast4
      cardBrand
      customerPaymentMethodId
    }
  }
`;

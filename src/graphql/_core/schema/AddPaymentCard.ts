/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPaymentCard
// ====================================================

export interface AddPaymentCard_addPaymentCard {
  /**
   * Internal payment id.
   */
  paymentId: string | null;
  /**
   * Redirect URL for 3DS.
   */
  redirectUrl: string | null;
  /**
   * Client secret.
   */
  clientSecret: string | null;
}

export interface AddPaymentCard {
  /**
   * Attaches a payment card to a customer.
   */
  addPaymentCard: AddPaymentCard_addPaymentCard | null;
}

export interface AddPaymentCardVariables {
  providerPaymentMethodId: string;
}

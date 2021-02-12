/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmPaymentCard
// ====================================================

export interface ConfirmPaymentCard {
  /**
   * Sets the payment as active.
   */
  confirmPaymentCard: boolean | null;
}

export interface ConfirmPaymentCardVariables {
  paymentId: string;
  providerPaymentMethodId: string;
}

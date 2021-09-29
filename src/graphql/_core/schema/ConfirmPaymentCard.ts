/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmPaymentCard
// ====================================================

export interface ConfirmPaymentCard_confirmPaymentCard {
  cardValidTill: string;
  cardLast4: string;
  cardBrand: string;
}

export interface ConfirmPaymentCard {
  /**
   * Sets the payment as active
   */
  confirmPaymentCard: ConfirmPaymentCard_confirmPaymentCard;
}

export interface ConfirmPaymentCardVariables {
  paymentId: string;
}

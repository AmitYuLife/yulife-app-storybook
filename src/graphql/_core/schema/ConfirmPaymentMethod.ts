/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCode } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ConfirmPaymentMethod
// ====================================================

export interface ConfirmPaymentMethod_confirmPaymentMethod {
  confirmed: boolean;
  purchased: boolean;
}

export interface ConfirmPaymentMethod {
  /**
   * Confirm client stripe payment method
   */
  confirmPaymentMethod: ConfirmPaymentMethod_confirmPaymentMethod | null;
}

export interface ConfirmPaymentMethodVariables {
  paymentMethodId?: string | null;
  productCode?: ProductCode | null;
}

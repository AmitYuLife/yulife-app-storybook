/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentMethodType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CollectPaymentMethod
// ====================================================

export interface CollectPaymentMethod_collectPaymentMethod {
  collected: boolean | null;
  purchased: boolean | null;
}

export interface CollectPaymentMethod {
  /**
   * Collect client token for stripe payment method
   */
  collectPaymentMethod: CollectPaymentMethod_collectPaymentMethod | null;
}

export interface CollectPaymentMethodVariables {
  token: string;
  type: PaymentMethodType;
}

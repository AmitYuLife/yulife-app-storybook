/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CollectPaymentMethodInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CollectPaymentMethod
// ====================================================

export interface CollectPaymentMethod_collectPaymentMethod {
  collected: boolean;
  nextStepUrl: string | null;
  clientSecret: string | null;
}

export interface CollectPaymentMethod {
  /**
   * Collect client stripe payment method
   */
  collectPaymentMethod: CollectPaymentMethod_collectPaymentMethod | null;
}

export interface CollectPaymentMethodVariables {
  input: CollectPaymentMethodInput;
}

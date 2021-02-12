/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCode } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubscribeToProduct
// ====================================================

export interface SubscribeToProduct_subscribeToProduct {
  confirmed: boolean;
  purchased: boolean;
}

export interface SubscribeToProduct {
  /**
   * Confirm client stripe payment method
   */
  subscribeToProduct: SubscribeToProduct_subscribeToProduct | null;
}

export interface SubscribeToProductVariables {
  productCode?: ProductCode | null;
}

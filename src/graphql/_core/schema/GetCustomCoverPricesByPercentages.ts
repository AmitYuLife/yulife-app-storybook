/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductCode } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetCustomCoverPricesByPercentages
// ====================================================

export interface GetCustomCoverPricesByPercentages_getCustomCoverPricesByPercentages {
  prices: (number | null)[] | null;
}

export interface GetCustomCoverPricesByPercentages {
  /**
   * Query to obtain quote based on percentage
   */
  getCustomCoverPricesByPercentages: GetCustomCoverPricesByPercentages_getCustomCoverPricesByPercentages | null;
}

export interface GetCustomCoverPricesByPercentagesVariables {
  product: ProductCode;
}

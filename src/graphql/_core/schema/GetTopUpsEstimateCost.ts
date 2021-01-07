/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TopUpsEstimateCostInput, ProductCode } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetTopUpsEstimateCost
// ====================================================

export interface GetTopUpsEstimateCost_getTopUpsEstimateCost {
  estimatedCost: number | null;
  sumAssured: number | null;
  earnRate: number | null;
  salaryPercentageCovered: number | null;
  newEarnRate: number | null;
  descriptionHeading: string | null;
  term: number | null;
}

export interface GetTopUpsEstimateCost {
  /**
   * Deprecated on v2.8.1 Query to obtain an estimate cost for top ups
   */
  getTopUpsEstimateCost: GetTopUpsEstimateCost_getTopUpsEstimateCost | null;
}

export interface GetTopUpsEstimateCostVariables {
  input: TopUpsEstimateCostInput;
  product: ProductCode;
}

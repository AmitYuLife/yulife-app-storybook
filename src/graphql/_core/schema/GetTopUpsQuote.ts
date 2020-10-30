/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetTopUpsQuoteInput, ProductCode } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetTopUpsQuote
// ====================================================

export interface GetTopUpsQuote_getTopUpsQuote {
  id: string | null;
  productEntityId: string | null;
  actualCost: number | null;
  sumAssured: number | null;
  earnRate: number | null;
  salaryPercentageCovered: number | null;
  newEarnRate: number | null;
  descriptionHeading: string | null;
  term: number | null;
  rejected: boolean | null;
  medicalInvestigationRequired: boolean | null;
}

export interface GetTopUpsQuote {
  getTopUpsQuote: GetTopUpsQuote_getTopUpsQuote | null;
}

export interface GetTopUpsQuoteVariables {
  input: GetTopUpsQuoteInput;
  product: ProductCode;
}

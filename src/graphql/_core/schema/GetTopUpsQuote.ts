/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetTopUpsQuoteInput, ProductCode } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetTopUpsQuote
// ====================================================

export interface GetTopUpsQuote_getTopUpsQuote_userAnswers {
  questionId: string | null;
  value: string | null;
}

export interface GetTopUpsQuote_getTopUpsQuote {
  /**
   * Quote id
   */
  quoteId: string | null;
  /**
   * Customer product entity id
   */
  productEntityId: string | null;
  actualCost: number | null;
  sumAssured: number | null;
  earnRate: number | null;
  salaryPercentageCovered: number | null;
  newEarnRate: number | null;
  /**
   * String that describes different covers for top ups
   */
  descriptionHeading: string | null;
  term: number | null;
  /**
   * Flag to determinate is the user is eligible for insurance
   */
  rejected: boolean | null;
  /**
   * Flag to require medical investigations
   */
  medicalInvestigationRequired: boolean | null;
  /**
   * User answers to
   */
  userAnswers: (GetTopUpsQuote_getTopUpsQuote_userAnswers | null)[] | null;
}

export interface GetTopUpsQuote {
  /**
   * Query to obtain a quote for top ups
   */
  getTopUpsQuote: GetTopUpsQuote_getTopUpsQuote | null;
}

export interface GetTopUpsQuoteVariables {
  input: GetTopUpsQuoteInput;
  product: ProductCode;
}

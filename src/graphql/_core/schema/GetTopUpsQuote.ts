/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetTopUpsQuoteInput, ProductCode, CoverType } from "./globalTypes";

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
   * Quote status e.g: PAYMENT_PENDING, RGA_INVESTIGATION ...
   */
  status: string | null;
  /**
   * Flag to require medical investigations
   */
  medicalInvestigationRequired: boolean | null;
  /**
   * Date of creation
   */
  createdAt: string | null;
  /**
   * Selected cover
   */
  coverType: CoverType | null;
  /**
   * User answers to medical underwriting. IMPORTANT: Answers are stringify, client needs to JSON.parse
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

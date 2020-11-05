/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateTopUpsQuoteInput, ProductCode } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateTopUpsQuote
// ====================================================

export interface CreateTopUpsQuote_createTopUpsQuote {
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
}

export interface CreateTopUpsQuote {
  /**
   * Creates a new quote for top ups
   */
  createTopUpsQuote: CreateTopUpsQuote_createTopUpsQuote | null;
}

export interface CreateTopUpsQuoteVariables {
  input: CreateTopUpsQuoteInput;
  product: ProductCode;
}

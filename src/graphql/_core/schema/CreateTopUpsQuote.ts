/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateTopUpsQuoteInput, ProductCode } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateTopUpsQuote
// ====================================================

export interface CreateTopUpsQuote_createTopUpsQuote {
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

export interface CreateTopUpsQuote {
  createTopUpsQuote: CreateTopUpsQuote_createTopUpsQuote | null;
}

export interface CreateTopUpsQuoteVariables {
  input: CreateTopUpsQuoteInput;
  product: ProductCode;
}

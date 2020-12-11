/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FibQuote } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateTopUpsQuote
// ====================================================

export interface UpdateTopUpsQuote_updateFibQuote {
  updated: boolean | null;
}

export interface UpdateTopUpsQuote {
  updateFibQuote: UpdateTopUpsQuote_updateFibQuote | null;
}

export interface UpdateTopUpsQuoteVariables {
  fibQuote?: FibQuote | null;
  quoteId?: string | null;
}

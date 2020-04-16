/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChallengePayload } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddHistoricalSteps
// ====================================================

export interface AddHistoricalSteps_addHistoricalSteps {
  endDateTime: string | null;
  startDateTime: string | null;
  yucoin: number | null;
}

export interface AddHistoricalSteps {
  addHistoricalSteps: AddHistoricalSteps_addHistoricalSteps | null;
}

export interface AddHistoricalStepsVariables {
  payload?: (ChallengePayload | null)[] | null;
  shouldAward?: boolean | null;
  refreshWearables?: boolean | null;
}

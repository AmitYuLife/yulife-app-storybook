/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChallengePayload, PassiveChallengeType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddHistoricalData
// ====================================================

export interface AddHistoricalData_addHistoricalData {
  endDateTime: string | null;
  startDateTime: string | null;
  yucoin: number | null;
}

export interface AddHistoricalData {
  addHistoricalData: AddHistoricalData_addHistoricalData | null;
}

export interface AddHistoricalDataVariables {
  payload?: (ChallengePayload | null)[] | null;
  type?: PassiveChallengeType | null;
}

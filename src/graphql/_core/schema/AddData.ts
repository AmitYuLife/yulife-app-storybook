/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChallengePayload, PassiveChallengeType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddData
// ====================================================

export interface AddData_addData {
  endDateTime: string | null;
  startDateTime: string | null;
  yucoin: number | null;
}

export interface AddData {
  addData: AddData_addData | null;
}

export interface AddDataVariables {
  payload?: (ChallengePayload | null)[] | null;
  type?: PassiveChallengeType | null;
}

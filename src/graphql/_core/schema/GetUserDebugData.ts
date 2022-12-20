/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FitKitType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUserDebugData
// ====================================================

export interface GetUserDebugData_getUserDebugData_sampleQuery {
  startTime: string;
  endTime: string;
  fitKitTypes: FitKitType[];
  disableTypeFilter: boolean | null;
  active: boolean | null;
}

export interface GetUserDebugData_getUserDebugData {
  id: string | null;
  sampleQuery: GetUserDebugData_getUserDebugData_sampleQuery | null;
}

export interface GetUserDebugData {
  getUserDebugData: GetUserDebugData_getUserDebugData;
}

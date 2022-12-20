/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SampleDebugData } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitUserDebugData
// ====================================================

export interface SubmitUserDebugData_submitUserDebugData {
  success: boolean | null;
}

export interface SubmitUserDebugData {
  submitUserDebugData: SubmitUserDebugData_submitUserDebugData | null;
}

export interface SubmitUserDebugDataVariables {
  id?: string | null;
  results: (SampleDebugData | null)[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Metric } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddUserFeedback
// ====================================================

export interface AddUserFeedback_addUserFeedback {
  message: string | null;
}

export interface AddUserFeedback {
  addUserFeedback: AddUserFeedback_addUserFeedback | null;
}

export interface AddUserFeedbackVariables {
  rating: number;
  metric?: Metric | null;
  comment?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AnswerInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitFeedbackForm
// ====================================================

export interface SubmitFeedbackForm_submitFeedbackForm {
  message: string;
}

export interface SubmitFeedbackForm {
  submitFeedbackForm: SubmitFeedbackForm_submitFeedbackForm;
}

export interface SubmitFeedbackFormVariables {
  id: string;
  answers?: (AnswerInput | null)[] | null;
}

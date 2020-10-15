/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FeedbackFormQuestionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: PendingFeedbackForm
// ====================================================

export interface PendingFeedbackForm_pendingFeedbackForm_questions_range {
  __typename: "FeedbackFormQuestionRange";
  id: string;
  min: number | null;
  max: number | null;
}

export interface PendingFeedbackForm_pendingFeedbackForm_questions_labels {
  __typename: "FeedbackFormQuestionLabels";
  id: string;
  left: string | null;
  right: string | null;
  placeholder: string | null;
  submit: string | null;
}

export interface PendingFeedbackForm_pendingFeedbackForm_questions_nextConditions {
  __typename: "FeedbackFormQuestionNextCondition";
  id: string;
  questionKey: string;
  regexMatch: string;
}

export interface PendingFeedbackForm_pendingFeedbackForm_questions {
  __typename: "FeedbackFormQuestion";
  key: string;
  questionText: string;
  type: FeedbackFormQuestionType;
  isRoot: boolean | null;
  range: PendingFeedbackForm_pendingFeedbackForm_questions_range | null;
  labels: PendingFeedbackForm_pendingFeedbackForm_questions_labels | null;
  nextConditions: PendingFeedbackForm_pendingFeedbackForm_questions_nextConditions[];
}

export interface PendingFeedbackForm_pendingFeedbackForm {
  __typename: "FeedbackForm";
  id: string;
  title: string;
  questions: PendingFeedbackForm_pendingFeedbackForm_questions[];
}

export interface PendingFeedbackForm {
  pendingFeedbackForm: PendingFeedbackForm_pendingFeedbackForm | null;
}

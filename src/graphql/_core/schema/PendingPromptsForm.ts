/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FeedbackFormQuestionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: PendingPromptsForm
// ====================================================

export interface PendingPromptsForm_pendingAppStoreReview {
  __typename: "AppStoreReviewPrompt";
  id: string;
  image: string;
  title: string;
  body: string;
  rejectedTitle: string;
  rejectedBody: string;
  showAfterEvent: string | null;
  showAfterSeconds: number;
}

export interface PendingPromptsForm_pendingFeedbackForm_questions_range {
  __typename: "FeedbackFormQuestionRange";
  id: string;
  min: number | null;
  max: number | null;
}

export interface PendingPromptsForm_pendingFeedbackForm_questions_labels {
  __typename: "FeedbackFormQuestionLabels";
  id: string;
  left: string | null;
  right: string | null;
  placeholder: string | null;
  submit: string | null;
}

export interface PendingPromptsForm_pendingFeedbackForm_questions_nextConditions {
  __typename: "FeedbackFormQuestionNextCondition";
  id: string;
  questionKey: string;
  regexMatch: string;
}

export interface PendingPromptsForm_pendingFeedbackForm_questions {
  __typename: "FeedbackFormQuestion";
  key: string;
  questionText: string;
  type: FeedbackFormQuestionType;
  isRoot: boolean | null;
  range: PendingPromptsForm_pendingFeedbackForm_questions_range | null;
  labels: PendingPromptsForm_pendingFeedbackForm_questions_labels | null;
  nextConditions: PendingPromptsForm_pendingFeedbackForm_questions_nextConditions[];
}

export interface PendingPromptsForm_pendingFeedbackForm {
  __typename: "FeedbackForm";
  id: string;
  title: string;
  questions: PendingPromptsForm_pendingFeedbackForm_questions[];
}

export interface PendingPromptsForm {
  pendingAppStoreReview: PendingPromptsForm_pendingAppStoreReview | null;
  pendingFeedbackForm: PendingPromptsForm_pendingFeedbackForm | null;
}

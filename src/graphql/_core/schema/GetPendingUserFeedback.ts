/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { FeedbackFormQuestionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPendingUserFeedback
// ====================================================

export interface GetPendingUserFeedback_journey {
  __typename: "MobilePendingUserJourney";
  journeyId: string;
  delay: number;
}

export interface GetPendingUserFeedback_appStore {
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

export interface GetPendingUserFeedback_form_questions_image {
  id: string;
  uri: string | null;
}

export interface GetPendingUserFeedback_form_questions_icon {
  id: string;
  uri: string | null;
}

export interface GetPendingUserFeedback_form_questions_range {
  __typename: "FeedbackFormQuestionRange";
  id: string;
  min: number | null;
  max: number | null;
}

export interface GetPendingUserFeedback_form_questions_labels {
  __typename: "FeedbackFormQuestionLabels";
  id: string;
  left: string | null;
  right: string | null;
  placeholder: string | null;
  submit: string | null;
}

export interface GetPendingUserFeedback_form_questions_nextConditions {
  __typename: "FeedbackFormQuestionNextCondition";
  id: string;
  questionKey: string;
  regexMatch: string;
}

export interface GetPendingUserFeedback_form_questions_options {
  id: string;
  label: string;
  value: string;
}

export interface GetPendingUserFeedback_form_questions {
  __typename: "FeedbackFormQuestion";
  key: string;
  questionText: string;
  description: string | null;
  image: GetPendingUserFeedback_form_questions_image | null;
  icon: GetPendingUserFeedback_form_questions_icon | null;
  type: FeedbackFormQuestionType;
  isRoot: boolean | null;
  range: GetPendingUserFeedback_form_questions_range | null;
  labels: GetPendingUserFeedback_form_questions_labels | null;
  nextConditions: GetPendingUserFeedback_form_questions_nextConditions[];
  options: (GetPendingUserFeedback_form_questions_options | null)[] | null;
}

export interface GetPendingUserFeedback_form {
  __typename: "FeedbackForm";
  id: string;
  title: string;
  label: string;
  awardYucoin: number | null;
  questions: GetPendingUserFeedback_form_questions[];
}

export interface GetPendingUserFeedback {
  journey: GetPendingUserFeedback_journey | null;
  appStore: GetPendingUserFeedback_appStore | null;
  form: GetPendingUserFeedback_form | null;
}

export interface GetPendingUserFeedbackVariables {
  supportedTypes?: (FeedbackFormQuestionType | null)[] | null;
}

import { FeedbackFormQuestionType } from "./__generated/graphql";

// TODO: purge with feedback forms
export const SUPPORTED_FEEDBACK_FORM_TYPES = [
  FeedbackFormQuestionType.Comment,
  FeedbackFormQuestionType.NumberSlider,
  FeedbackFormQuestionType.MultipleChoice,
];

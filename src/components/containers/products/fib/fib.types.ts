import { LocalNavigation } from "@services/hooks/useLocalNavigation";

export type FibRoute =
  | "FibBrowse"
  | "FibIntroduction"
  | "FibFaq"
  | "FibEditSalary"
  | "FibSalaryDescription"
  | "FibCustomPercentage"
  | "FibFeedbackForm";

export type FibLocalNavigation = LocalNavigation<FibRoute>;

export const FIB_BROWSE = "FibBrowse";
export const FIB_INTRODUCTION = "FibIntroduction";
export const FIB_FAQ = "FibFaq";
export const FIB_EDIT_SALARY = "FibEditSalary";
export const FIB_SALARY_DESCRIPTION = "FibSalaryDescription";
export const FIB_CUSTOM_PERCENTAGE = "FibCustomPercentage";
export const FIB_FEEDBACK_FORM = "FibFeedbackForm";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

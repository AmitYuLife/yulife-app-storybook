import { LocalNavigation } from "@services/hooks/useLocalNavigation";

export type FibRoute =
  | "FibBrowse"
  | "FibIntroduction"
  | "FibFaq"
  | "FibEditSalary"
  | "FibSalaryDescription"
  | "FibCustomPercentage"
  | "FibFeedbackForm"
  | "FibUnderwritingJourney"
  | "FibUnderwritingJourneyIntroduction"
  | "FibUnderwritingReviewAnswers"
  | "FibConfirmPackages"
  | "FibContactDetails"
  | "FibDeclarationConfirmation"
  | "FibInfo"
  | "FibContactDetails"
  | "FibGPDetails";

export type FibLocalNavigation = LocalNavigation<FibRoute>;

export const FIB_BROWSE = "FibBrowse";
export const FIB_INTRODUCTION = "FibIntroduction";
export const FIB_FAQ = "FibFaq";
export const FIB_EDIT_SALARY = "FibEditSalary";
export const FIB_SALARY_DESCRIPTION = "FibSalaryDescription";
export const FIB_CUSTOM_PERCENTAGE = "FibCustomPercentage";
export const FIB_FEEDBACK_FORM = "FibFeedbackForm";
export const FIB_UNDERWRITING_JOURNEY = "FibUnderwritingJourney";
export const FIB_UNDERWRITING_JOURNEY_INTRODUCTION = "FibUnderwritingJourneyIntroduction";
export const FIB_UNDERWRITING_REVIEW_ANSWERS = "FibUnderwritingReviewAnswers";
export const FIB_CONFIRM_PACKAGES = "FibConfirmPackages";
export const FIB_CONTACT_DETAILS = "FibContactDetails";
export const FIB_DECLARATION_CONFIRMATION = "FibDeclarationConfirmation";
export const FIB_INFO = "FibInfo";
export const FIB_GP_DETAILS = "FibGPDetails";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Cover {
  coverName: string;
  companyName: string;
  coverAmount: number;
  coverReason: string;
  coverRemainInForce: string;
}

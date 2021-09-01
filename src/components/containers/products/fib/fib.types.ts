import { LocalNavigation } from "@services/hooks/useLocalNavigation";
import {
  GetYulifer_personal_pants,
  GetYulifer_personal_chest,
  GetYulifer_personal_gloves,
  GetYulifer_personal_boots,
  GetYulifer_additional,
} from "@graphql/_core/schema";

export type FibRoute =
  | "FibBrowse"
  | "FibIntroduction"
  | "FibFaq"
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
  | "FibGPDetails"
  | "FibFaqList"
  | "FIbIntroYugi"
  | "FibCheckoutHub"
  | "FibChooseStyle"
  | "FibPayoutCalculator"
  | "FibDocuments";

export type FibLocalNavigation = LocalNavigation<FibRoute>;

export const FIB_BROWSE = "FibBrowse";
export const FIB_INTRODUCTION = "FibIntroduction";
export const FIB_FAQ = "FibFaq";
export const FIB_CUSTOM_PERCENTAGE = "FibCustomPercentage";
export const FIB_FEEDBACK_FORM = "FibFeedbackForm";
export const FIB_UNDERWRITING_JOURNEY = "FibUnderwritingJourney";
export const FIB_UNDERWRITING_REVIEW_ANSWERS = "FibUnderwritingReviewAnswers";
export const FIB_CONFIRM_PACKAGES = "FibConfirmPackages";
export const FIB_CONTACT_DETAILS = "FibContactDetails";
export const FIB_DECLARATION_CONFIRMATION = "FibDeclarationConfirmation";
export const FIB_INFO = "FibInfo";
export const FIB_GP_DETAILS = "FibGPDetails";
export const FIB_FAQ_LIST = "FibFaqList";
export const FIB_INTRO_YUGI = "FIbIntroYugi";
export const FIB_CHECKOUT_HUB = "FibCheckoutHub";
export const FIB_CHOOSE_STYLE = "FibChooseStyle";
export const FIB_PAYOUT_CALCULATOR = "FibPayoutCalculator";
export const FIB_DOCUMENTS = "FibDocuments";

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
  coverId?: number;
}

export type PersonalProduct = (
  | GetYulifer_personal_pants
  | GetYulifer_personal_chest
  | GetYulifer_personal_gloves
  | GetYulifer_personal_boots
)[];

export type IProduct =
  | GetYulifer_personal_pants
  | GetYulifer_personal_chest
  | GetYulifer_personal_gloves
  | GetYulifer_personal_boots
  | GetYulifer_additional;

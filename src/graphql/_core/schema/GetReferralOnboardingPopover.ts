/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MobileOnboardingStepPerformed } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetReferralOnboardingPopover
// ====================================================

export interface GetReferralOnboardingPopover_getReferralOnboardingPopover_image {
  id: string;
  uri: string | null;
}

export interface GetReferralOnboardingPopover_getReferralOnboardingPopover {
  id: MobileOnboardingStepPerformed;
  showPopover: boolean;
  onboardingMessage: string | null;
  image: GetReferralOnboardingPopover_getReferralOnboardingPopover_image | null;
}

export interface GetReferralOnboardingPopover {
  getReferralOnboardingPopover: GetReferralOnboardingPopover_getReferralOnboardingPopover;
}

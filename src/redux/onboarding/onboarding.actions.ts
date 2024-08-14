import { createAction } from "@reduxjs/toolkit";
import { SetOnboardingReferralsBadgePayload, SetRedeemedOnboardingPayload } from "./onboarding.types";

const SET_REDEEMED_ONBOARDING = "SET_REDEEMED_ONBOARDING";
const SET_DUELS_INTRO_SHOWN = "SET_DUELS_INTRO_SHOWN";
const SET_ONBOARDING_REFERRALS_BADGE = "SET_ONBOARDING_REFERRALS_BADGE";
const HIDE_DAILY_SCREEN_INFORMATION_ICON = "HIDE_DAILY_SCREEN_INFORMATION_ICON";

export const setRedeemedOnboarding = createAction<SetRedeemedOnboardingPayload, typeof SET_REDEEMED_ONBOARDING>(
  SET_REDEEMED_ONBOARDING
);

export const setDuelsIntroShown = createAction(SET_DUELS_INTRO_SHOWN);

export const setOnboardingReferralsBadge = createAction<
  SetOnboardingReferralsBadgePayload,
  typeof SET_ONBOARDING_REFERRALS_BADGE
>(SET_ONBOARDING_REFERRALS_BADGE);

export const hideDailyScreenInformationIcon = createAction(HIDE_DAILY_SCREEN_INFORMATION_ICON);

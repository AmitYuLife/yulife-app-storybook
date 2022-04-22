export const SET_REDEEMED_ONBOARDING = "SET_REDEEMED_ONBOARDING";
export const SET_ONBOARDING_DONE = "SET_ONBOARDING_DONE";
export const SET_YUSCREEN_INTRO_SHOWN = "SET_YUSCREEN_INTRO_SHOWN";
export const SET_COMMUNITY_GOALS_INTRO_SHOWN = "SET_COMMUNITY_GOALS_INTRO_SHOWN";
export const SET_DUELS_INTRO_SHOWN = "SET_DUELS_INTRO_SHOWN";
export const SET_ONBOARDING_REFERRALS_BADGE = "SET_ONBOARDING_REFERRALS_BADGE";
export const SET_DAILY_SCREEN_INFORMATION_ICON = "SET_DAILY_SCREEN_INFORMATION_ICON";

export const setRedeemedOnboarding = (payload: number) => ({
  payload,
  type: SET_REDEEMED_ONBOARDING,
});

export const setYuscreenIntroShown = () => ({
  type: SET_YUSCREEN_INTRO_SHOWN,
});

export const setCommunityGoalsIntroShown = () => ({
  type: SET_COMMUNITY_GOALS_INTRO_SHOWN,
});

export const setDuelsIntroShown = () => ({
  type: SET_DUELS_INTRO_SHOWN,
});

export const setOnboardingReferralsBadge = (payload: boolean) => ({
  payload,
  type: SET_ONBOARDING_REFERRALS_BADGE,
});

export const hideDailyScreenInformationIcon = () => ({
  type: SET_DAILY_SCREEN_INFORMATION_ICON,
});

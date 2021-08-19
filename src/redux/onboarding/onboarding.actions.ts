export const SET_HISTORICAL_DATA_COLLECTED = "SET_HISTORICAL_DATA_COLLECTED";
export const SET_HISTORICAL_MEDITATION_DATA_COLLECTED = "SET_HISTORICAL_MEDITATION_DATA_COLLECTED";
export const SET_REDEEMED_ONBOARDING = "SET_REDEEMED_ONBOARDING";
export const GET_HISTORICAL_DATA = "GET_HISTORICAL_DATA";
export const SET_ONBOARDING_DONE = "SET_ONBOARDING_DONE";
export const SET_SHOW_INTRO = "SET_SHOW_INTRO";
export const SET_YUSCREEN_INTRO_SHOWN = "SET_YUSCREEN_INTRO_SHOWN";
export const SET_COMMUNITY_GOALS_INTRO_SHOWN = "SET_COMMUNITY_GOALS_INTRO_SHOWN";
export const SET_DUELS_INTRO_SHOWN = "SET_DUELS_INTRO_SHOWN";
export const START_REFERRALS_ONBOARDING = "START_REFERRALS_ONBOARDING";
export const SET_REFERRALS_ONBOARDING_POPOVER_SHOWN = "SET_REFERRALS_ONBOARDING_POPOVER_SHOWN";
export const SET_REFERRALS_ONBOARDING_COMPLETED = "SET_REFERRALS_ONBOARDING_COMPLETED";

export const setRedeemedOnboarding = (payload: number) => ({
  payload,
  type: SET_REDEEMED_ONBOARDING,
});

export const setShowIntro = (payload: boolean) => ({
  payload,
  type: SET_SHOW_INTRO,
});

export const setHistoricalDataCollected = () => ({
  type: SET_HISTORICAL_DATA_COLLECTED,
});

export const setHistoricalMeditationDataCollected = () => ({
  type: SET_HISTORICAL_MEDITATION_DATA_COLLECTED,
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

export const startReferralsOnboarding = () => ({
  type: START_REFERRALS_ONBOARDING,
});

export const setReferralsOnboardingPopoverShown = () => ({
  type: SET_REFERRALS_ONBOARDING_POPOVER_SHOWN,
});

export const setReferralsOnboardingCompleted = () => ({
  type: SET_REFERRALS_ONBOARDING_COMPLETED,
});

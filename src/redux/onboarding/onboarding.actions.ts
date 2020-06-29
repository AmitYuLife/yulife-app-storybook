export const SET_HISTORICAL_DATA_COLLECTED = "SET_HISTORICAL_DATA_COLLECTED";
export const SET_HISTORICAL_MEDITATION_DATA_COLLECTED = "SET_HISTORICAL_MEDITATION_DATA_COLLECTED";
export const SET_REDEEMED_ONBOARDING = "SET_REDEEMED_ONBOARDING";
export const GET_HISTORICAL_DATA = "GET_HISTORICAL_DATA";
export const SET_ONBOARDING_DONE = "SET_ONBOARDING_DONE";
export const SET_SHOW_INTRO = "SET_SHOW_INTRO";
export const SET_YUSCREEN_INTRO_SHOWN = "SET_YUSCREEN_INTRO_SHOWN";

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

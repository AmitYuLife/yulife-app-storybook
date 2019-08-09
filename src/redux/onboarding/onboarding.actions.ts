export const SET_HISTORICAL_DATA_COLLECTED = "SET_HISTORICAL_DATA_COLLECTED";
export const SET_REDEEMED_ONBOARDING = "SET_REDEEMED_ONBOARDING";
export const GET_HISTORICAL_DATA = "GET_HISTORICAL_DATA";

export const setRedeemedOnboarding = (payload: number) => ({
    payload,
    type: SET_REDEEMED_ONBOARDING
});

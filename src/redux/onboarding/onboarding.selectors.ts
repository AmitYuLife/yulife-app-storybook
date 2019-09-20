import { IReduxState } from "../_core/reducers";

export const getIsOnboardingRedeemed = (state: IReduxState) => state.onboarding.redeemedOnboarding;
export const getIsHistoricalDataCollected = (state: IReduxState) => state.onboarding.historicalDataCollected;
export const getIsOnboarding = (state: IReduxState) => state.onboarding.isOnboarding;
export const getShowIntro = (state: IReduxState) => state.onboarding.showIntro;
export const getOnboardingReward = (state: IReduxState) => state.onboarding.reward;

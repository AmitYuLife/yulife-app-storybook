import { IReduxState } from "../_core/reducers";

export const getIsOnboardingRedeemed = (state: IReduxState) => state.onboarding.redeemedOnboarding;
export const getIsHistoricalDataCollected = (state: IReduxState) => state.onboarding.historicalDataCollected;
export const getIsHistoricalMeditationDataCollected = (state: IReduxState) =>
  state.onboarding.historicalMeditationDataCollected;
export const getIsOnboarding = (state: IReduxState) => state.onboarding.isOnboarding;
export const getShowIntro = (state: IReduxState) => state.onboarding.showIntro;
export const getOnboardingReward = (state: IReduxState) => state.onboarding.reward;
export const getShowYuscreenIntro = (state: IReduxState) => state.onboarding.showYuscreenIntro;
export const getShowCommunityGoalsIntro = (state: IReduxState) => state.onboarding.showCommunityGoalsIntro;
export const getDuelsGoalsIntro = (state: IReduxState) => state.onboarding.showDuelsIntro;

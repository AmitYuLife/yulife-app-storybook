import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["onboarding"];
const reducer = (state: IReduxState) => state.onboarding;

const isOnboardingRedeemedSelector = (state: State) => state.redeemedOnboarding;
export const getIsOnboardingRedeemed = createSelector(reducer, isOnboardingRedeemedSelector);

const isOnboardingSelector = (state: State) => state.isOnboarding;
export const getIsOnboarding = createSelector(reducer, isOnboardingSelector);

const onboardingRewardSelector = (state: State) => state.reward;
export const getOnboardingReward = createSelector(reducer, onboardingRewardSelector);

const showCommunityGoalsIntroSelector = (state: State) => state.showCommunityGoalsIntro;
export const getShowCommunityGoalsIntro = createSelector(reducer, showCommunityGoalsIntroSelector);

const duelsGoalsIntroSelector = (state: State) => state.showDuelsIntro;
export const getDuelsGoalsIntro = createSelector(reducer, duelsGoalsIntroSelector);

const onboardingReferralsBadgeSelector = (state: State) => state.showReferralsBadge;
export const getOnboardingReferralsBadge = createSelector(reducer, onboardingReferralsBadgeSelector);

const dailyScreenInformationIconSelector = (state: State) => state.hideDailyScreenInformationIcon;
export const dailyScreenInformationIcon = createSelector(reducer, dailyScreenInformationIconSelector);

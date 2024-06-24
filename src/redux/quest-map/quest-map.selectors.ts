import { ROUTES } from "@navigation/constants";
import { IReduxState } from "../_core/reducers";

export const getShouldQuestMapAnimateOnboarding = (state: IReduxState) => {
  return (
    !state.questMap.seenQuestMapNewUserOnboardingAnimation &&
    state.levels.level === 1 &&
    state.user.features.tempQuestMapLevelReorder &&
    state.user.features.tempQuestMapLevelBubbleEaseInAnimation
  );
};

export const getShouldQuestMapAnimateOnboardingStart = (state: IReduxState) => {
  return getShouldQuestMapAnimateOnboarding(state) && state.app.activeRoute === ROUTES.quests && !state.app.activeModal;
};

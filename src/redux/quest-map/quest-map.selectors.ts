import { ROUTES } from "@navigation/constants";
import { IReduxState } from "../_core/reducers";

export const getShouldQuestMapAnimateOnboarding = (state: IReduxState) => {
  return !state.questMap.seenQuestMapNewUserOnboardingAnimation && state.levels.level === 1;
};

export const getShouldQuestMapAnimateOnboardingStart = (state: IReduxState) => {
  return getShouldQuestMapAnimateOnboarding(state) && state.app.activeRoute === ROUTES.quests && !state.app.activeModal;
};

export const getInventoryItemCount = (state: IReduxState) => state.questMap.inventoryItemCount || 0;
export const getStreakSaverCount = (state: IReduxState) => state.questMap.streakSaverCount || 0;

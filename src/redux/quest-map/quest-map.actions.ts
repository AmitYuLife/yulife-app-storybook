import { createAction } from "@reduxjs/toolkit";

export const SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION = "SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION";
export const CLEAR_SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION = "CLEAR_SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION";

export const setSeenQuestMapNewUserOnboardingAnimation = createAction(SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION);

export const clearSeenQuestMapNewUserOnboardingAnimation = createAction(
  CLEAR_SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION
);

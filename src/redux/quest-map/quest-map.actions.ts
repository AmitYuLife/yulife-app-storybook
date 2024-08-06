import { createAction } from "@reduxjs/toolkit";
import { GetInventoryInfoSuccessPayload } from "./quest-map.types";

export const SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION = "SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION";
export const CLEAR_SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION = "CLEAR_SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION";
export const GET_INVENTORY_BANNER_INFO_SUCCESS = "GET_INVENTORY_BANNER_INFO_SUCCESS";

export const setSeenQuestMapNewUserOnboardingAnimation = createAction(SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION);

export const clearSeenQuestMapNewUserOnboardingAnimation = createAction(
  CLEAR_SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION
);

export const getInventoryInfoSuccess = createAction<
  GetInventoryInfoSuccessPayload,
  typeof GET_INVENTORY_BANNER_INFO_SUCCESS
>(GET_INVENTORY_BANNER_INFO_SUCCESS);

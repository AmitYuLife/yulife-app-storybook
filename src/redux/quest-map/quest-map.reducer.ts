import {
  CLEAR_SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION,
  SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION,
} from "./quest-map.actions";
import { createReducer } from "@reduxjs/toolkit";
import { IQuestMapStore } from "./quest-map.types";

export const getInitialState = (): IQuestMapStore => ({
  seenQuestMapNewUserOnboardingAnimation: false,
});

const questMapReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION, (state) => {
    state.seenQuestMapNewUserOnboardingAnimation = true;
  });

  builder.addCase(CLEAR_SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION, (state) => {
    state.seenQuestMapNewUserOnboardingAnimation = false;
  });
});

export default questMapReducer;

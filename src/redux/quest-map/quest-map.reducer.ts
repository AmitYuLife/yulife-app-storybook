import {
  CLEAR_SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION,
  SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION,
} from "./quest-map.actions";
import { createReducer } from "@reduxjs/toolkit";

export type IQuestMapStore = typeof initialState;

const initialState = {
  seenQuestMapNewUserOnboardingAnimation: false,
};

export const getInitialState = (): typeof initialState => initialState;

const questMapReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION, (state) => {
    state.seenQuestMapNewUserOnboardingAnimation = true;
  });

  builder.addCase(CLEAR_SEEN_QUEST_MAP_NEW_USER_ONBOARDING_ANIMATION, (state) => {
    state.seenQuestMapNewUserOnboardingAnimation = false;
  });
});

export default questMapReducer;

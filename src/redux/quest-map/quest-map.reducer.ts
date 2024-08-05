import {
  clearSeenQuestMapNewUserOnboardingAnimation,
  setSeenQuestMapNewUserOnboardingAnimation,
} from "./quest-map.actions";
import { createReducer } from "@reduxjs/toolkit";
import { IQuestMapStore } from "./quest-map.types";

export const getInitialState = (): IQuestMapStore => ({
  seenQuestMapNewUserOnboardingAnimation: false,
});

const questMapReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(setSeenQuestMapNewUserOnboardingAnimation, (state) => {
    state.seenQuestMapNewUserOnboardingAnimation = true;
  });

  builder.addCase(clearSeenQuestMapNewUserOnboardingAnimation, (state) => {
    state.seenQuestMapNewUserOnboardingAnimation = false;
  });
});

export default questMapReducer;

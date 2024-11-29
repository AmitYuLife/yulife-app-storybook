import {
  clearSeenQuestMapNewUserOnboardingAnimation,
  setSeenQuestMapNewUserOnboardingAnimation,
  getInventoryInfoSuccess,
} from "./quest-map.actions";
import { createReducer } from "@reduxjs/toolkit";
import { IQuestMapStore } from "./quest-map.types";

export const getInitialState = (): IQuestMapStore => ({
  seenQuestMapNewUserOnboardingAnimation: false,
  inventoryItemCount: 0,
  streakSaverCount: 0,
});

const questMapReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(setSeenQuestMapNewUserOnboardingAnimation, (state) => {
    state.seenQuestMapNewUserOnboardingAnimation = true;
  });

  builder.addCase(clearSeenQuestMapNewUserOnboardingAnimation, (state) => {
    state.seenQuestMapNewUserOnboardingAnimation = false;
  });

  builder.addCase(getInventoryInfoSuccess, (state, { payload }) => {
    state.inventoryItemCount = payload.count;
    state.streakSaverCount = payload.streakSaverCount;
  });
});

export default questMapReducer;

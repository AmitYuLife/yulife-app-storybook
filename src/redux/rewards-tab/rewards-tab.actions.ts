import { createAction } from "@reduxjs/toolkit";
import { RewardsSection } from "./rewards-tab.types";

export const UPDATE_REWARDS_GAME_MODE = "UPDATE_REWARDS_GAME_MODE";
/** TODO: this is temporary, purge after the tabs are properly introduced */
export const TOGGLE_GAME_MODE = "TOGGLE_GAME_MODE";

export const updateRewardsGameMode = createAction<RewardsSection>(UPDATE_REWARDS_GAME_MODE);
export const toggleGameMode = createAction(TOGGLE_GAME_MODE);

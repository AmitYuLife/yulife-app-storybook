import { createAction } from "@reduxjs/toolkit";
import { Challenge } from "@redux/_core/types";

export const START_DAILY_STEPS = "START_DAILY_STEPS";
export const START_STEPS_SYNCING = "START_STEPS_SYNCING";
export const UPDATE_DAILY_STEPS_NO_NEW_DATA = "UPDATE_DAILY_STEPS_NO_NEW_DATA";
export const UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE = "UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE";
export const UPDATE_DAILY_STEPS_SUCCESS_FROM_LOCAL = "UPDATE_DAILY_STEPS_SUCCESS_FROM_LOCAL";
export const UPDATE_DAILY_STEPS_FAILED = "UPDATE_DAILY_STEPS_FAILED";
export const CHANGE_PANEL_VISIBILITY = "CHANGE_PANEL_VISIBILITY";

export const startDailySteps = createAction(START_DAILY_STEPS);

export const startStepsSyncing = createAction(START_STEPS_SYNCING);

export const updateDailyStepsSuccessFromRemote = createAction<{ challenge: Challenge; currentBalance: number }>(
  UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE
);

export const updateDailyStepsSuccessFromLocal = createAction<number>(UPDATE_DAILY_STEPS_SUCCESS_FROM_LOCAL);

export const updateDailyStepsFailed = createAction<string>(UPDATE_DAILY_STEPS_FAILED);

export const stepsWithNoUpdate = createAction(UPDATE_DAILY_STEPS_NO_NEW_DATA);

export const changePanelVisibility = createAction<boolean>(CHANGE_PANEL_VISIBILITY);

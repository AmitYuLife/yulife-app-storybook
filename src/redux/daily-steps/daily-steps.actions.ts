import { UpsertPassiveChallenge } from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";

export const START_DAILY_STEPS = "START_DAILY_STEPS";
export const UPDATE_DAILY_STEPS_SUCCESS = "UPDATE_DAILY_STEPS_SUCCESS";
export const UPDATE_DAILY_STEPS_FAILED = "UPDATE_DAILY_STEPS_FAILED";
export const STEPS_SINCE_LAST_UPDATED_SUCCESS = "STEPS_SINCE_LAST_UPDATED_SUCCESS";

export const startDailySteps = (): SyncAction => ({
    type: START_DAILY_STEPS
});

export const updateDailyStepsSuccess = (results: UpsertPassiveChallenge) => ({
    payload: results,
    type: UPDATE_DAILY_STEPS_SUCCESS
});

export const updateDailyStepsFailed = (error: string) => ({
    payload: error,
    type: UPDATE_DAILY_STEPS_FAILED
});

export const stepsSinceLastUpdateSuccess = (): SyncAction => ({
    type: STEPS_SINCE_LAST_UPDATED_SUCCESS
});

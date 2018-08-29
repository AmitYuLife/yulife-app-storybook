import { AddDailySteps } from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";

export const START_DAILY_STEPS = "START_DAILY_STEPS";
export const STOP_DAILY_STEPS = "STOP_DAILY_STEPS";
export const UPDATE_DAILY_STEPS_SUCCESS = "UPDATE_DAILY_STEPS_SUCCESS";
export const UPDATE_DAILY_STEPS_FAILED = "UPDATE_DAILY_STEPS_FAILED";

export const startDailySteps = (): SyncAction => ({
    type: START_DAILY_STEPS
});

export const stopDailySteps = (): SyncAction => ({
    type: STOP_DAILY_STEPS
});

export type UpdateDailyStepsSuccessAction = SyncAction<AddDailySteps>;
export const updateDailyStepsSuccess = (results: AddDailySteps): UpdateDailyStepsSuccessAction => ({
    payload: results,
    type: UPDATE_DAILY_STEPS_SUCCESS
});

export type UpdateDailyStepsFailedAction = SyncAction<string>;
export const updateDailyStepsFailed = (error: string): UpdateDailyStepsFailedAction => ({
    payload: error,
    type: UPDATE_DAILY_STEPS_FAILED
});

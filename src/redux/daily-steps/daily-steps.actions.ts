import { UpsertPassiveChallenge } from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";

export const START_DAILY_STEPS = "START_DAILY_STEPS";
export const UPDATE_DAILY_STEPS_SUCCESS = "UPDATE_DAILY_STEPS_SUCCESS";
export const UPDATE_DAILY_STEPS_FAILED = "UPDATE_DAILY_STEPS_FAILED";
export const UPDATE_DAILY_STEPS_NOTIFICATION = "UPDATE_DAILY_STEPS_NOTIFICATION";

export const startDailySteps = (): SyncAction => ({
    type: START_DAILY_STEPS
});

export type UpdateDailyStepsSuccessAction = SyncAction<UpsertPassiveChallenge>;
export const updateDailyStepsSuccess = (results: UpsertPassiveChallenge): UpdateDailyStepsSuccessAction => ({
    payload: results,
    type: UPDATE_DAILY_STEPS_SUCCESS
});

export type UpdateDailyStepsFailedAction = SyncAction<string>;
export const updateDailyStepsFailed = (error: string): UpdateDailyStepsFailedAction => ({
    payload: error,
    type: UPDATE_DAILY_STEPS_FAILED
});

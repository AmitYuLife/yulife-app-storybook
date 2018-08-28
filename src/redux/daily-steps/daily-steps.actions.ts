import { AddDailySteps } from "../../graphql/_core/schema";

export const START_DAILY_STEPS = "START_DAILY_STEPS";
export const STOP_DAILY_STEPS = "STOP_DAILY_STEPS";
export const UPDATE_DAILY_STEPS_SUCCESS = "UPDATE_DAILY_STEPS_SUCCESS";
export const UPDATE_DAILY_STEPS_FAILED = "UPDATE_DAILY_STEPS_FAILED";

export const startDailySteps = () => ({
    type: START_DAILY_STEPS
});

export const stopDailySteps = () => ({
    type: STOP_DAILY_STEPS
});

export const updateDailyStepsSuccess = (results: AddDailySteps) => ({
    payload: results,
    type: UPDATE_DAILY_STEPS_SUCCESS
});

export const updateDailyStepsFailed = (error: string) => ({
    payload: error,
    type: UPDATE_DAILY_STEPS_FAILED
});

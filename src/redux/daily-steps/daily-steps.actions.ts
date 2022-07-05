import { UpsertDailyPassives_upsertDailyPassives_challenges as Challenge } from "@graphql/_core/schema";
import { SyncAction } from "../_core/types";

export const START_DAILY_STEPS = "START_DAILY_STEPS";
export const START_STEPS_SYNCING = "START_STEPS_SYNCING";
export const UPDATE_DAILY_STEPS_NO_NEW_DATA = "UPDATE_DAILY_STEPS_NO_NEW_DATA";
export const UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE = "UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE";
export const UPDATE_DAILY_STEPS_SUCCESS_FROM_LOCAL = "UPDATE_DAILY_STEPS_SUCCESS_FROM_LOCAL";
export const UPDATE_DAILY_STEPS_FAILED = "UPDATE_DAILY_STEPS_FAILED";
export const UPDATE_STEPS_MAX_ANOMALY_WINDOW = "UPDATE_STEPS_MAX_ANOMALY_WINDOW";

export const startDailySteps = (): SyncAction => ({
  type: START_DAILY_STEPS,
});

export const startStepsSyncing = (): SyncAction => ({
  type: START_STEPS_SYNCING,
});

export const updateDailyStepsSuccessFromRemote = (payload: { challenge: Challenge; currentBalance: number }) => ({
  payload,
  type: UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE,
});

export const updateDailyStepsSuccessFromLocal = (steps: number) => ({
  payload: steps,
  type: UPDATE_DAILY_STEPS_SUCCESS_FROM_LOCAL,
});

export const updateDailyStepsFailed = (error: string) => ({
  payload: error,
  type: UPDATE_DAILY_STEPS_FAILED,
});

export const stepsWithNoUpdate = (): SyncAction => ({
  type: UPDATE_DAILY_STEPS_NO_NEW_DATA,
});

export const updateStepsMaxAnomalyDetectionWindow = (ms: number) => ({
  type: UPDATE_STEPS_MAX_ANOMALY_WINDOW,
  payload: ms,
});

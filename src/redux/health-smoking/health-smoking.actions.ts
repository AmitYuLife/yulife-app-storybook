import { createAction } from "@reduxjs/toolkit";
import { HealthSmokingState } from "./health-smoking.types";

export const QUERY_HEALTH_SMOKING_STATE = "QUERY_HEALTH_SMOKING_STATE";
export const UPDATE_HEALTH_SMOKING_STATE = "UPDATE_HEALTH_SMOKING_STATE";
export const MUTATION_START_SMOKING_STREAK = "MUTATION_START_SMOKING_STREAK";
export const MUTATION_UPDATE_SMOKING_STREAK = "MUTATION_UPDATE_SMOKING_STREAK";

export const queryHealthSmokingState = createAction<null, typeof QUERY_HEALTH_SMOKING_STATE>(
  QUERY_HEALTH_SMOKING_STATE
);

export const updateHealthSmokingStateAction = createAction<HealthSmokingState, typeof UPDATE_HEALTH_SMOKING_STATE>(
  UPDATE_HEALTH_SMOKING_STATE
);

export const startSmokingStreak = createAction<null, typeof MUTATION_START_SMOKING_STREAK>(
  MUTATION_START_SMOKING_STREAK
);

export const updateSmokingStreak = createAction<
  { failed?: boolean; failDate?: string },
  typeof MUTATION_UPDATE_SMOKING_STREAK
>(MUTATION_UPDATE_SMOKING_STREAK);

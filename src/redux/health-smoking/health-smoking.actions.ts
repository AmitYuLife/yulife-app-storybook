import { createAction } from "@reduxjs/toolkit";
import { HealthSmokingState } from "./health-smoking.types";

export const QUERY_HEALTH_SMOKING_STATE = "QUERY_HEALTH_SMOKING_STATE";
export const UPDATE_HEALTH_SMOKING_STATE = "UPDATE_HEALTH_SMOKING_STATE";
export const MUTATION_START_SMOKING_STREAK = "MUTATION_START_SMOKING_STREAK";
export const MUTATION_UPDATE_SMOKING_STREAK = "MUTATION_UPDATE_SMOKING_STREAK";
export const UPDATE_SMOKING_EDITABLE_FIELDS = "UPDATE_SMOKING_EDITABLE_FIELDS";

export const queryHealthSmokingState = createAction<void, typeof QUERY_HEALTH_SMOKING_STATE>(
  QUERY_HEALTH_SMOKING_STATE
);

export const updateHealthSmokingStateAction = createAction<HealthSmokingState, typeof UPDATE_HEALTH_SMOKING_STATE>(
  UPDATE_HEALTH_SMOKING_STATE
);

export const updateSmokingEditableFieldsAction = createAction<
  Partial<Pick<HealthSmokingState, "triggers" | "reasons" | "customTriggers" | "customReasons">>,
  typeof UPDATE_SMOKING_EDITABLE_FIELDS
>(UPDATE_SMOKING_EDITABLE_FIELDS);

export const startSmokingStreak = createAction<void, typeof MUTATION_START_SMOKING_STREAK>(
  MUTATION_START_SMOKING_STREAK
);

export const updateSmokingStreak = createAction<
  { failed?: boolean; dateLastSmoked?: string },
  typeof MUTATION_UPDATE_SMOKING_STREAK
>(MUTATION_UPDATE_SMOKING_STREAK);

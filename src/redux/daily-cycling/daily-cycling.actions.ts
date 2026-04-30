import { Challenge, DistanceMeasurementType } from "@redux/_core/types";
import { createAction } from "@reduxjs/toolkit";

export const UPDATE_DAILY_CYCLING_SUCCESS = "UPDATE_DAILY_CYCLING_SUCCESS";
export const UPDATE_DAILY_CYCLING_EMPTY_RESULT = "UPDATE_DAILY_CYCLING_EMPTY_RESULT";
export const UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE = "UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE";

export const updateDailyCycling = createAction<Challenge, "UPDATE_DAILY_CYCLING_SUCCESS">(UPDATE_DAILY_CYCLING_SUCCESS);

export const updateDailyCyclingEmptyResult = createAction<void, "UPDATE_DAILY_CYCLING_EMPTY_RESULT">(
  UPDATE_DAILY_CYCLING_EMPTY_RESULT
);

export const updateDailyCyclingDistanceMeasurementType = createAction<
  DistanceMeasurementType,
  "UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE"
>(UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE);

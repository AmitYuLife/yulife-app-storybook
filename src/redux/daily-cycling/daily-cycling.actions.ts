import { Challenge } from "@redux/_core/types";

import { DistanceMeasurementType } from "@graphql/_core/schema/globalTypes";
export const UPDATE_DAILY_CYCLING_SUCCESS = "UPDATE_DAILY_CYCLING_SUCCESS";
export const UPDATE_DAILY_CYCLING_EMPTY_RESULT = "UPDATE_DAILY_CYCLING_EMPTY_RESULT";
export const UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE = "UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE";

export const updateDailyCycling = (results: Challenge) => ({
  payload: results,
  type: UPDATE_DAILY_CYCLING_SUCCESS,
});

export const updateDailyCyclingEmptyResult = () => ({
  type: UPDATE_DAILY_CYCLING_EMPTY_RESULT,
});

export const updateDailyCyclingDistanceMeasurementType = (payload: DistanceMeasurementType) => ({
  payload,
  type: UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE,
});

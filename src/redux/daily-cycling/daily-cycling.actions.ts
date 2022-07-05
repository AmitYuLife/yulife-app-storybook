import {
  LoginUser_loginUser_user_passiveCycling_levelSlot_milestones,
  UpsertDailyPassives_upsertDailyPassives_challenges as Challenge,
} from "@graphql/_core/schema";
import { DistanceMeasurementType } from "@graphql/_core/schema/globalTypes";
export const UPDATE_DAILY_CYCLING_SUCCESS = "UPDATE_DAILY_CYCLING_SUCCESS";
export const UPDATE_DAILY_CYCLING_EMPTY_RESULT = "UPDATE_DAILY_CYCLING_EMPTY_RESULT";
export const UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE = "UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE";

export type PassiveCyclingMilestones = LoginUser_loginUser_user_passiveCycling_levelSlot_milestones[];

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

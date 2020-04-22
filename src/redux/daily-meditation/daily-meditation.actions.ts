import { UpsertPassiveChallenge } from "../../graphql/_core/schema";
export const UPDATE_DAILY_MEDITATION_SUCCESS = "UPDATE_DAILY_MEDITATION";
export const MEDITATION_SINCE_LAST_UPDATE_SUCCESS = "MEDITATION_SINCE_LAST_UPDATE_SUCCESS";
export const UPDATE_DAILY_MEDITATION_EMPTY_RESULT = "UPDATE_DAILY_MEDITATION_EMPTY_RESULT";

export const updateDailyMeditation = (results: UpsertPassiveChallenge) => ({
  payload: results,
  type: UPDATE_DAILY_MEDITATION_SUCCESS,
});

export const meditationSinceLastUpdateSuccess = () => ({
  type: MEDITATION_SINCE_LAST_UPDATE_SUCCESS,
});

export const updateDailyMeditationEmptyResult = () => ({
  type: UPDATE_DAILY_MEDITATION_EMPTY_RESULT,
});

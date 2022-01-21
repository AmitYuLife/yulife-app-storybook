import { UpsertPassiveChallenges_upsertPassiveChallenges_challenges as Challenge } from "@graphql/_core/schema";
export const UPDATE_DAILY_MEDITATION_SUCCESS = "UPDATE_DAILY_MEDITATION";
export const UPDATE_DAILY_MEDITATION_EMPTY_RESULT = "UPDATE_DAILY_MEDITATION_EMPTY_RESULT";

export const updateDailyMeditation = (payload: Challenge) => ({
  payload,
  type: UPDATE_DAILY_MEDITATION_SUCCESS,
});

export const updateDailyMeditationEmptyResult = () => ({
  type: UPDATE_DAILY_MEDITATION_EMPTY_RESULT,
});

import { createAction } from "@reduxjs/toolkit";
import { Challenge } from "@redux/_core/types";
import { IAppMeditationPayloadLocal } from "./daily-meditation.types";

export const UPDATE_DAILY_MEDITATION_SUCCESS = "UPDATE_DAILY_MEDITATION";
export const UPDATE_DAILY_MEDITATION_EMPTY_RESULT = "UPDATE_DAILY_MEDITATION_EMPTY_RESULT";
export const UPDATE_IN_APP_MEDITATION = "UPDATE_IN_APP_MEDITATION";

export const updateDailyMeditation = createAction<Challenge, "UPDATE_DAILY_MEDITATION">(
  UPDATE_DAILY_MEDITATION_SUCCESS
);

export const updateDailyMeditationEmptyResult = createAction<void, "UPDATE_DAILY_MEDITATION_EMPTY_RESULT">(
  UPDATE_DAILY_MEDITATION_EMPTY_RESULT
);

export const updateInAppMeditation = createAction<IAppMeditationPayloadLocal, "UPDATE_IN_APP_MEDITATION">(
  UPDATE_IN_APP_MEDITATION
);

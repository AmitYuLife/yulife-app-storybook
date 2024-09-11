import { ActionCreatorWithOptionalPayload, createAction } from "@reduxjs/toolkit";

export const UPDATE_GAME_2048_HIGH_SCORE = "UPDATE_GAME_2048_HIGH_SCORE";

export const updateGame2048HighScore: ActionCreatorWithOptionalPayload<number> = createAction<
  number,
  typeof UPDATE_GAME_2048_HIGH_SCORE
>(UPDATE_GAME_2048_HIGH_SCORE);

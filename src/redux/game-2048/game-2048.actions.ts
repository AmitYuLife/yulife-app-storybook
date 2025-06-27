import { createAction } from "@reduxjs/toolkit";
import { CompleteGame2048Params, GetGame2048HighScoreParams } from "./game-2048.types";

export const FETCH_GAME_2048_HIGH_SCORE = "FETCH_GAME_2048_HIGH_SCORE";
export const UPDATE_GAME_2048_HIGH_SCORE = "UPDATE_GAME_2048_HIGH_SCORE";
export const COMPLETE_GAME_2048 = "COMPLETE_GAME_2048";

export const updateGame2048HighScore = createAction<number, typeof UPDATE_GAME_2048_HIGH_SCORE>(
  UPDATE_GAME_2048_HIGH_SCORE
);

export const fetchGame2048HighScore = createAction<GetGame2048HighScoreParams, typeof FETCH_GAME_2048_HIGH_SCORE>(
  FETCH_GAME_2048_HIGH_SCORE
);

export const completeGame2048 = createAction<CompleteGame2048Params, typeof COMPLETE_GAME_2048>(COMPLETE_GAME_2048);

import { takeEvery } from "redux-saga/effects";
import { COMPLETE_GAME_2048, FETCH_GAME_2048_HIGH_SCORE } from "../game-2048.actions";

import fetchGame2048HighScoreSaga from "./fetchGame2048HighScore.saga";
import completeGame2048Saga from "./completeGame2048.saga";

export default [
  takeEvery(FETCH_GAME_2048_HIGH_SCORE, fetchGame2048HighScoreSaga),
  takeEvery(COMPLETE_GAME_2048, completeGame2048Saga),
];

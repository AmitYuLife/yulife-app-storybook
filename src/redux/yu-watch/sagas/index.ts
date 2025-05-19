import { takeLeading } from "redux-saga/effects";
import {
  CHALLENGE_CANCEL_SUCCESS,
  CHALLENGE_END_FAIL,
  CHALLENGE_END_SUCCESS,
  CHALLENGE_RESET_FAIL,
  CHALLENGE_RESET_SUCCESS,
  CHALLENGE_START_SUCCESS,
} from "@redux/levels/levels.actions";
import yuWatchRefetchActiveChallengeSaga from "./yuWatchRefetchActiveChallenge.saga";

export default [
  takeLeading(
    [
      CHALLENGE_START_SUCCESS,
      CHALLENGE_CANCEL_SUCCESS,
      CHALLENGE_RESET_FAIL,
      CHALLENGE_RESET_SUCCESS,
      CHALLENGE_END_FAIL,
      CHALLENGE_END_SUCCESS,
    ],
    yuWatchRefetchActiveChallengeSaga
  ),
];

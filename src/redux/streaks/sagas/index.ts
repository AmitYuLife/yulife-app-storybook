import { takeLatest } from "redux-saga/effects";
import { DISPLAY_STREAKS_COMPLETED } from "../streaks.actions";

// sagas
import showStreakOnChallengeCompleteSaga from "./showStreakOnChallengeComplete.saga";

export default [takeLatest(DISPLAY_STREAKS_COMPLETED, showStreakOnChallengeCompleteSaga)];

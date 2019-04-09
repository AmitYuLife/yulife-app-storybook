import { takeLatest } from "redux-saga/effects";
import { START_DAILY_STEPS } from "../../daily-steps/daily-steps.actions";
import { DISPLAY_STREAKS_COMPLETED } from "../streaks.actions";

// sagas
import showFirstStreakModalSaga from "./showFirstStreakModal.saga";
import showStreakOnChallengeCompleteSaga from "./showStreakOnChallengeComplete.saga";

export default [
    takeLatest(START_DAILY_STEPS, showFirstStreakModalSaga),
    takeLatest(DISPLAY_STREAKS_COMPLETED, showStreakOnChallengeCompleteSaga)
];

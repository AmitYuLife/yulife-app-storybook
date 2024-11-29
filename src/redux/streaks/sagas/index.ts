import { takeLatest } from "redux-saga/effects";
import { DISPLAY_STREAKS_COMPLETED } from "../streaks.actions";

// sagas
import showStreakOnChallengeCompleteSaga from "./showStreakOnChallengeComplete.saga";
import showStreakSavedModalSaga from "./showStreakSavedModal.saga";
import { GET_USER_ACTIVE_STREAK_SUCCESS } from "@redux/user/user.actions";

export default [
  takeLatest(DISPLAY_STREAKS_COMPLETED, showStreakOnChallengeCompleteSaga),
  takeLatest(GET_USER_ACTIVE_STREAK_SUCCESS, showStreakSavedModalSaga),
];

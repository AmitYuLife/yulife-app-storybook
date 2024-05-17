import { takeLatest } from "redux-saga/effects";
import { DISPLAY_STREAKS_COMPLETED } from "../streaks.actions";

// sagas
import showStreakOnChallengeCompleteSaga from "./showStreakOnChallengeComplete.saga";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import showStreakSavedModalSaga from "./showStreakSavedModal.saga";

export default [
  takeLatest(DISPLAY_STREAKS_COMPLETED, showStreakOnChallengeCompleteSaga),
  takeLatest(UPDATE_APP_STATE, showStreakSavedModalSaga),
];

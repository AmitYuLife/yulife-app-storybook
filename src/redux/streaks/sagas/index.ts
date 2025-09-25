import { takeLeading } from "redux-saga/effects";

// sagas
import showStreakSavedModalSaga from "./showStreakSavedModal.saga";
import { GET_USER_ACTIVE_STREAK_SUCCESS } from "@redux/user/user.actions";

export default [takeLeading(GET_USER_ACTIVE_STREAK_SUCCESS, showStreakSavedModalSaga)];

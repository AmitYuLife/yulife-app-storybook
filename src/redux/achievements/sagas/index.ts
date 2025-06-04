import { takeLatest } from "redux-saga/effects";
import getUserAchievementsSaga from "./getUserAchievements.saga";
import { UPDATE_APP_STATE, AUTHENTICATED } from "@redux/app/app.actions";

export default [takeLatest([AUTHENTICATED, UPDATE_APP_STATE], getUserAchievementsSaga)];

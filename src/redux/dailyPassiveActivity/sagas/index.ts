import { takeLatest } from "@redux-saga/core/effects";
import getDailyPassiveActivity from "./getDailyPassiveActivity.saga";
import { GET_USER_TODAY_ACTIVITY_SUCCESS } from "@redux/user/user.actions";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import { UPDATE_IN_APP_MEDITATION } from "@redux/daily-meditation/daily-meditation.actions";

export default [
  takeLatest([UPDATE_APP_STATE, UPDATE_IN_APP_MEDITATION], getDailyPassiveActivity),
  takeLatest([GET_USER_TODAY_ACTIVITY_SUCCESS], getDailyPassiveActivity),
];

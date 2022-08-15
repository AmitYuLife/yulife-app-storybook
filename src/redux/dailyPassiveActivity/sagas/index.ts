import { takeLatest } from "@redux-saga/core/effects";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import { UPDATE_IN_APP_MEDITATION } from "@redux/daily-meditation/daily-meditation.actions";
import getDailyPassiveActivity from "./getDailyPassiveActivity.saga";

export default [takeLatest([UPDATE_APP_STATE, UPDATE_IN_APP_MEDITATION], getDailyPassiveActivity)];

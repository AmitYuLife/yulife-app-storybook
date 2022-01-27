import { takeLatest } from "@redux-saga/core/effects";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import getDailyPassiveActivity from "./getDailyPassiveActivity.saga";

export default [takeLatest(UPDATE_APP_STATE, getDailyPassiveActivity)];

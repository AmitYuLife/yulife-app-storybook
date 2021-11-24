import { takeLatest } from "redux-saga/effects";
import { UPDATE_APP_STATE } from "../../app/app.actions";
import sendPassiveActivity from "./sendPassiveActivitySinceLastUpdate.saga";

export default [takeLatest(UPDATE_APP_STATE, sendPassiveActivity)];

import { takeLatest } from "redux-saga/effects";
import { UPDATE_APP_STATE } from "../../app/app.actions";
import sendPassiveActivity from "./sendAllPassiveActivitySinceLastUpdate.saga";

export default [takeLatest(UPDATE_APP_STATE, sendPassiveActivity)];

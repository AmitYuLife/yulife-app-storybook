import { takeLatest } from "redux-saga/effects";
import { AUTHENTICATED } from "../../app/app.actions";
import sendPassiveActivity from "./sendPassiveActivitySinceLastUpdate.saga";

export default [takeLatest(AUTHENTICATED, sendPassiveActivity)];

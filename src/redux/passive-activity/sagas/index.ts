import { UPDATE_USER_PROFILE } from "@redux/user/user.actions";
import { takeLatest } from "redux-saga/effects";
import sendPassiveActivity from "./sendAllPassiveActivitySinceLastUpdate.saga";
import sendPassiveHourlyActivity from "./sendAllPassiveHourlyActivitySinceLastUpdate.saga";

export default [
  takeLatest(UPDATE_USER_PROFILE, sendPassiveActivity),
  takeLatest(UPDATE_USER_PROFILE, sendPassiveHourlyActivity),
];

import { UPDATE_USER_PROFILE } from "@redux/user/user.actions";
import { takeLatest } from "redux-saga/effects";
import sendPassiveActivity from "./sendAllPassiveActivitySinceLastUpdate.saga";

export default [takeLatest(UPDATE_USER_PROFILE, sendPassiveActivity)];

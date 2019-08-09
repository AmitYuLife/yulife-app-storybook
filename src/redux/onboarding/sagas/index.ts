import { takeLatest } from "redux-saga/effects";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../../user/user.actions";
import { GET_HISTORICAL_DATA } from "../onboarding.actions";

import onboardOnGetUserSaga from "./onboardOnGetUser.saga";
import onboardOnLoginSaga from "./onboardOnLogin.saga";
import sendHistoricalDataOnPushSaga from "./sendHistoricalDataOnPush.saga";

export default [
    takeLatest(GET_USER_SUCCESS, onboardOnGetUserSaga),
    takeLatest(LOGIN_USER_SUCCESS, onboardOnLoginSaga),
    takeLatest(GET_HISTORICAL_DATA, sendHistoricalDataOnPushSaga)
];

import { takeLatest } from "redux-saga/effects";
import { AUTHENTICATED } from "@redux/app/app.actions";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "@redux/user/user.actions";
import { GET_HISTORICAL_DATA } from "@redux/onboarding/onboarding.actions";

import onboardOnGetUserSaga from "./onboardOnGetUser.saga";
import onboardOnLoginSaga from "./onboardOnLogin.saga";
import sendHistoricalDataOnPushSaga from "./sendHistoricalDataOnPush.saga";
import { getMobileWhatsNewModalSaga } from "./getMobileWhatsNewModal.saga";

export default [
  takeLatest(GET_USER_SUCCESS, onboardOnGetUserSaga),
  takeLatest(LOGIN_USER_SUCCESS, onboardOnLoginSaga),
  takeLatest(GET_HISTORICAL_DATA, sendHistoricalDataOnPushSaga),
  takeLatest(AUTHENTICATED, getMobileWhatsNewModalSaga),
];

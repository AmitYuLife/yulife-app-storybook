import { takeLatest } from "redux-saga/effects";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "@redux/user/user.actions";

import onboardOnGetUserSaga from "./onboardOnGetUser.saga";
import onboardOnLoginSaga from "./onboardOnLogin.saga";
import { getMobileWhatsNewModalSaga } from "./getMobileWhatsNewModal.saga";

export default [
  takeLatest(GET_USER_SUCCESS, onboardOnGetUserSaga),
  takeLatest(LOGIN_USER_SUCCESS, onboardOnLoginSaga),
  takeLatest(UPDATE_APP_STATE, getMobileWhatsNewModalSaga),
];

import { takeEvery, takeLatest } from "redux-saga/effects";
import { CHALLENGE_START_SUCCESS } from "../../levels/levels.actions";
import { LOGOUT_SUCCESS } from "../../user/user.actions";
import { ADD_DEVICE_TOKEN } from "../device.actions";
import { REQUIRE_PUSH_ENABLED } from "../device.actions";

import listenForPermissionsChangeSaga from "./listenForPermissionsChange.saga";
import registerIntercomAndMixpanelSaga from "./registerIntercomAndMixpanel.saga";
import registerPushSaga from "./registerPush.saga";
import requestPushSaga from "./requestPush.saga";
import showPushNotificationModalSaga from "./showPushNotificationModal.saga";
import unregisterIntercomSaga from "./unregisterIntercom.saga";
import unregisterPushNotificationsSaga from "./unregisterPushNotifications.saga";

export default [
  takeLatest("AUTHENTICATED", registerPushSaga),
  takeLatest("AUTHENTICATED", listenForPermissionsChangeSaga),
  takeLatest(ADD_DEVICE_TOKEN, registerIntercomAndMixpanelSaga),
  takeLatest(CHALLENGE_START_SUCCESS, showPushNotificationModalSaga),
  takeLatest(LOGOUT_SUCCESS, unregisterPushNotificationsSaga),
  takeLatest(LOGOUT_SUCCESS, unregisterIntercomSaga),
  takeEvery(REQUIRE_PUSH_ENABLED, requestPushSaga),
];

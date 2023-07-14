import { REHYDRATE } from "redux-persist";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { CHALLENGE_START_SUCCESS } from "../../levels/levels.actions";
import { LOGOUT_SUCCESS } from "../../user/user.actions";
import { ADD_DEVICE_TOKEN, REQUIRE_PUSH_ENABLED, SET_DEVICE_LOCALE } from "../device.actions";

import listenForPermissionsChangeSaga from "./listenForPermissionsChange.saga";
import registerIntercomAndMixpanelSaga from "./registerIntercomAndMixpanel.saga";
import registerPushSaga from "./registerPush.saga";
import requestPushSaga from "./requestPush.saga";
import showPushNotificationModalSaga from "./showPushNotificationModal.saga";
import unregisterPushNotificationsSaga from "./unregisterPushNotifications.saga";
import listenForLanguageChange from "./listenForLanguageChange.saga";
import updateTranslatorLanguage from "./updateTranslatorLanguage.saga";

export default [
  takeLatest("AUTHENTICATED", registerPushSaga),
  takeLatest("AUTHENTICATED", listenForPermissionsChangeSaga),
  takeLatest(SET_DEVICE_LOCALE, updateTranslatorLanguage),
  takeLatest(REHYDRATE, listenForLanguageChange),
  takeLatest(ADD_DEVICE_TOKEN, registerIntercomAndMixpanelSaga),
  takeLatest(CHALLENGE_START_SUCCESS, showPushNotificationModalSaga),
  takeLatest(LOGOUT_SUCCESS, unregisterPushNotificationsSaga),
  takeEvery(REQUIRE_PUSH_ENABLED, requestPushSaga),
];

import { takeLatest, takeEvery, takeLeading } from "redux-saga/effects";
import {
  SET_MAIN_ROOT,
  SHOW_MAINTENANCE,
  CHECK_CONNECTION,
  UPDATE_OFFLINE_STATE,
  AUTHENTICATED,
  SET_REGION_CONFIG,
  READY_TO_SET_MAIN_ROOT,
} from "../app.actions";

import listenToAppStateSaga from "./listenToAppState.saga";
import listenToDeepLinkingSaga from "./listenToDeepLinking.saga";
import listenToComponentDidAppear from "./listenToComponentDidAppear";
import listenToComponentDidDisappear from "./listenToComponentDidDisappear";
import listenToNetworkStateSaga from "./listenToNetworkState.saga";
import hydrateApiConfig from "./hydrateApiConfig/hydrateApiConfig.saga";
import setMainRootSaga from "./setMainRoot.saga";
import showMaintenanceSaga from "./showMaintenance.saga";
import checkConnectionSaga from "./checkConnection.saga";
import showOfflineScreenSaga from "./showOfflineScreen.saga";
import loggingNetworkState from "./loggingNetworkState.saga";
import logDeviceStateSaga from "./logDeviceStateSaga.saga";
import checkDateChangedSaga from "./checkDateChanged.saga";
import listenToMemoryWarning from "./listenToMemoryWarning.saga";
import cancelExpiredChalllengeSaga from "./cancelExpiredChallengesSaga";
import listenOnDateChangeSaga from "./listenOnDateChangeSaga";
import logBreadcrumbsSaga from "./logBreadcrumbs.saga";
import { SET_DEVICE_LOCALE } from "@redux/device/device.actions";

export default [
  takeLeading(["INIT", SET_REGION_CONFIG, SET_DEVICE_LOCALE, READY_TO_SET_MAIN_ROOT], hydrateApiConfig),
  takeLatest(AUTHENTICATED, listenToAppStateSaga),
  takeLatest(AUTHENTICATED, cancelExpiredChalllengeSaga),
  takeLatest(AUTHENTICATED, listenOnDateChangeSaga),
  takeLatest("INIT", listenToComponentDidAppear),
  takeLatest("INIT", listenToComponentDidDisappear),
  takeLatest("INIT", listenToDeepLinkingSaga),
  takeLatest("INIT", listenToMemoryWarning),
  takeLatest("INIT", loggingNetworkState),
  takeLatest(SET_MAIN_ROOT, setMainRootSaga),
  takeLatest(AUTHENTICATED, listenToNetworkStateSaga),
  takeLatest(SHOW_MAINTENANCE, showMaintenanceSaga),
  takeLatest(CHECK_CONNECTION, checkConnectionSaga),
  takeLatest(UPDATE_OFFLINE_STATE, showOfflineScreenSaga),
  takeEvery("*", logDeviceStateSaga),
  takeEvery("*", checkDateChangedSaga),
  takeEvery("*", logBreadcrumbsSaga),
];

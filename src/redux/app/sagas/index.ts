import { takeLatest } from "redux-saga/effects";
import { SET_MAIN_ROOT, SHOW_MAINTENANCE, CHECK_CONNECTION, UPDATE_OFFLINE_STATE, AUTHENTICATED } from "../app.actions";

import listenToAppStateSaga from "./listenToAppState.saga";
import listenToLinkingSaga from "./listenToIOSLinking.saga";
import listenToComponentDidAppear from "./listenToComponentDidAppear";
import listenToComponentDidDisappear from "./listenToComponentDidDisappear";
import listenToNetworkStateSaga from "./listenToNetworkState.saga";
import setMainRootSaga from "./setMainRoot.saga";
import showMaintenanceSaga from "./showMaintenance.saga";
import checkConnectionSaga from "./checkConnection.saga";
import showOfflineScreenSaga from "./showOfflineScreen.saga";
import loggingNetworkState from "./loggingNetworkState.saga";

export default [
  takeLatest("INIT", listenToAppStateSaga),
  takeLatest("INIT", listenToComponentDidAppear),
  takeLatest("INIT", listenToComponentDidDisappear),
  takeLatest("INIT", listenToLinkingSaga),
  takeLatest("INIT", loggingNetworkState),
  takeLatest(SET_MAIN_ROOT, setMainRootSaga),
  takeLatest(AUTHENTICATED, listenToNetworkStateSaga),
  // takeEvery("*", logBreadcrumbsSaga),
  takeLatest(SHOW_MAINTENANCE, showMaintenanceSaga),
  takeLatest(CHECK_CONNECTION, checkConnectionSaga),
  takeLatest(UPDATE_OFFLINE_STATE, showOfflineScreenSaga),
];

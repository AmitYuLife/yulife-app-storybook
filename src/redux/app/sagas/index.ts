import { takeLatest } from "redux-saga/effects";
import { SET_MAIN_ROOT, SHOW_MAINTENANCE, CHECK_CONNECTION, UPDATE_OFFLINE_STATE, AUTHENTICATED } from "../app.actions";

import listenToAppStateSaga from "./listenToAppState.saga";
import listenToIOSLinkingSaga from "./listenToIOSLinking.saga";
import listenToNavigationSaga from "./listenToNavigation.saga";
import listenToNetworkStateSaga from "./listenToNetworkState.saga";
import setMainRootSaga from "./setMainRoot.saga";
import showMaintenanceSaga from "./showMaintenance.saga";
import checkConnectionSaga from "./checkConnection.saga";
import showOfflineScreenSaga from "./showOfflineScreen.saga";

export default [
  takeLatest("INIT", listenToAppStateSaga),
  takeLatest("INIT", listenToNavigationSaga),
  takeLatest("INIT", listenToIOSLinkingSaga),
  takeLatest(SET_MAIN_ROOT, setMainRootSaga),
  takeLatest(AUTHENTICATED, listenToNetworkStateSaga),
  // takeEvery("*", logBreadcrumbsSaga),
  takeLatest(SHOW_MAINTENANCE, showMaintenanceSaga),
  takeLatest(CHECK_CONNECTION, checkConnectionSaga),
  takeLatest(UPDATE_OFFLINE_STATE, showOfflineScreenSaga),
];

import { takeLatest, takeEvery } from "redux-saga/effects";
import {
  SET_MAIN_ROOT,
  SHOW_MAINTENANCE,
  CHECK_CONNECTION,
  UPDATE_OFFLINE_STATE,
  AUTHENTICATED,
  SET_REGION_CONFIG,
} from "../app.actions";

import listenToAppStateSaga from "./listenToAppState.saga";
import listenToLinkingSaga from "./listenToIOSLinking.saga";
import listenToComponentDidAppear from "./listenToComponentDidAppear";
import listenToComponentDidDisappear from "./listenToComponentDidDisappear";
import listenToNetworkStateSaga from "./listenToNetworkState.saga";
import hydrateApiConfig from "./hydrateApiConfig.saga";
import setMainRootSaga from "./setMainRoot.saga";
import showMaintenanceSaga from "./showMaintenance.saga";
import checkConnectionSaga from "./checkConnection.saga";
import showOfflineScreenSaga from "./showOfflineScreen.saga";
import loggingNetworkState from "./loggingNetworkState.saga";
import logDeviceStateSaga from "./logDeviceStateSaga.saga";
import listenToMemoryWarning from "./listenToMemoryWarning.saga";
// import logBreadcrumbsSaga from "./logBreadcrumbs.saga";

export default [
  takeLatest(AUTHENTICATED, listenToAppStateSaga),
  takeLatest("INIT", listenToComponentDidAppear),
  takeLatest("INIT", listenToComponentDidDisappear),
  takeLatest("INIT", listenToLinkingSaga),
  takeLatest("INIT", listenToMemoryWarning),
  takeLatest("INIT", loggingNetworkState),
  takeLatest(["INIT", SET_REGION_CONFIG], hydrateApiConfig),
  takeLatest(SET_MAIN_ROOT, setMainRootSaga),
  takeLatest(AUTHENTICATED, listenToNetworkStateSaga),
  takeLatest(SHOW_MAINTENANCE, showMaintenanceSaga),
  takeLatest(CHECK_CONNECTION, checkConnectionSaga),
  takeLatest(UPDATE_OFFLINE_STATE, showOfflineScreenSaga),
  takeEvery("*", logDeviceStateSaga),
  // takeEvery("*", logBreadcrumbsSaga), // disabled, leads to memory leaks on iOS when dropping big breadcrumbs,
  // need @bugsnag/react-native version >= 7.3 to work properly
  // https://github.com/bugsnag/bugsnag-react-native/issues/467
];

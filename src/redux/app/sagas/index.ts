import { takeLatest } from "redux-saga/effects";
import { AUTHENTICATED, CHECK_CONNECTION, SET_MAIN_ROOT, SHOW_MAINTENANCE } from "../app.actions";

import checkConnectionSaga from "./checkConnection.saga";
import listenToAppStateSaga from "./listenToAppState.saga";
import listenToNavigationSaga from "./listenToNavigation.saga";
import listenToNetworkStateSaga from "./listenToNetworkState.saga";
import setMainRootSaga from "./setMainRoot.saga";
import showMaintenanceSaga from "./showMaintenance.saga";

export default [
    takeLatest("INIT", listenToAppStateSaga),
    takeLatest("INIT", listenToNavigationSaga),
    takeLatest(SET_MAIN_ROOT, setMainRootSaga),
    takeLatest(AUTHENTICATED, listenToNetworkStateSaga),
    // takeEvery("*", logBreadcrumbsSaga),
    takeLatest(SHOW_MAINTENANCE, showMaintenanceSaga),
    takeLatest(CHECK_CONNECTION, checkConnectionSaga)
];

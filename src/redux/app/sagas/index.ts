import { takeLatest } from "redux-saga";
import { CHECK_CONNECTION, SHOW_MAINTENANCE } from "../app.actions";

import checkConnectionSaga from "./checkConnection.saga";
import listenToAppStateSaga from "./listenToAppState.saga";
import listenToNavigationSaga from "./listenToNavigation.saga";
import listenToNetworkStateSaga from "./listenToNetworkState.saga";
import showMaintenanceSaga from "./showMaintenance.saga";

export default [
    takeLatest("INIT", listenToAppStateSaga),
    takeLatest("INIT", listenToNetworkStateSaga),
    takeLatest("INIT", listenToNavigationSaga),
    // takeEvery("*", logBreadcrumbsSaga),
    takeLatest(SHOW_MAINTENANCE, showMaintenanceSaga),
    takeLatest(CHECK_CONNECTION, checkConnectionSaga)
];

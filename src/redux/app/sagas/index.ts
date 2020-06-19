import { takeLatest } from "redux-saga/effects";
import { AUTHENTICATED, APOLLO_EVENT, SET_MAIN_ROOT, SHOW_MAINTENANCE, CHECK_CONNECTION } from '../app.actions';

import watchApolloRequestsSaga from "./watchApolloRequests.saga";
import listenToAppStateSaga from "./listenToAppState.saga";
import listenToIOSLinkingSaga from "./listenToIOSLinking.saga";
import listenToNavigationSaga from "./listenToNavigation.saga";
import listenToNetworkStateSaga from "./listenToNetworkState.saga";
import setMainRootSaga from "./setMainRoot.saga";
import showMaintenanceSaga from "./showMaintenance.saga";
import checkConnectionSaga from "./checkConnection.saga";

export default [
  takeLatest("INIT", listenToAppStateSaga),
  takeLatest("INIT", listenToNavigationSaga),
  takeLatest("INIT", listenToIOSLinkingSaga),
  takeLatest(SET_MAIN_ROOT, setMainRootSaga),
  takeLatest(AUTHENTICATED, listenToNetworkStateSaga),
  // takeEvery("*", logBreadcrumbsSaga),
  takeLatest(SHOW_MAINTENANCE, showMaintenanceSaga),
  takeLatest(APOLLO_EVENT, watchApolloRequestsSaga),
  takeLatest(CHECK_CONNECTION, checkConnectionSaga),
];

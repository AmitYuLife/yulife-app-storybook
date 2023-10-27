import { AppStateStatus } from "react-native";
import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";
import { IAppStore } from "./app.reducer";

const reducer = (state: IReduxState): IAppStore => state.app;

const appStateSelector = (state: IAppStore): AppStateStatus => state.appState;
export const getAppState = createSelector(reducer, appStateSelector);

const isOfflineSelector = (state: IAppStore): boolean => state.isOffline;
export const getOfflineState = createSelector(reducer, isOfflineSelector);

const routeSelector = (state: IAppStore): string => state.activeRoute;
export const getRouteState = createSelector(reducer, routeSelector);

const modalSelector = (state: IAppStore): string => state.activeModal;
export const getModalState = createSelector(reducer, modalSelector);

const currentDateSelector = (state: IAppStore): string => state.currentDate;
export const getCurrentDateState = createSelector(reducer, currentDateSelector);

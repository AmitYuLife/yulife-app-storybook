import { createSelector } from "reselect";
import { IAppStore } from "./app.reducer";
import { IReduxState } from "../_core/reducers";

const reducer = (state: IReduxState): IAppStore => state.app;

const appStateSelector = (state: IAppStore): string => state.appState;
export const getAppState = createSelector(reducer, appStateSelector);

const isOfflineSelector = (state: IAppStore): boolean => state.isOffline;
export const getOfflineState = createSelector(reducer, isOfflineSelector);

import { createSelector } from "@reduxjs/toolkit";
import { AppStateStatus } from "react-native";
import { IReduxState } from "../_core/reducers";
import { IAppStore, IHighlightedTabOptions } from "./app.types";
import { ROUTES } from "@navigation/constants";

const reducer = (state: IReduxState): IAppStore => state.app;

const appStateSelector = (state: IAppStore): AppStateStatus => state.appState;
export const getAppState = createSelector(reducer, appStateSelector);

const isOfflineSelector = (state: IAppStore): boolean => state.isOffline;
export const getOfflineState = createSelector(reducer, isOfflineSelector);

const routeSelector = (state: IAppStore): string => state.activeRoute;
export const getRouteState = createSelector(reducer, routeSelector);

const modalSelector = (state: IAppStore): string => state.activeModal;
export const getModalState = createSelector(reducer, modalSelector);

export const highlightedTabSelector = (
  state: IAppStore
): Partial<Record<keyof typeof ROUTES, IHighlightedTabOptions>> => state.highlightedTabs;
export const getHighlightedTabs = createSelector(reducer, highlightedTabSelector);

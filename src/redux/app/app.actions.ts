import { createAction } from "@reduxjs/toolkit";
import { SyncAction } from "../_core/types";

export const SET_MAIN_ROOT = "SET_MAIN_ROOT";
export const AUTHENTICATED = "AUTHENTICATED";
export const UNAUTHENTICATED = "UNAUTHENTICATED";
export const SET_REGION_CONFIG = "SET_REGION_CONFIG";
export const SHOW_MAINTENANCE = "SHOW_MAINTENANCE";
export const CHECK_CONNECTION = "CHECK_CONNECTION";
export const UPDATE_APP_STATE = "UPDATE_APP_STATE";
export const UPDATE_APP_STATE_ACTIVE = "UPDATE_APP_STATE_ACTIVE";
export const UPDATE_CURRENT_ROUTE = "UPDATE_CURRENT_ROUTE";
export const UPDATE_CURRENT_MODAL = "UPDATE_CURRENT_MODAL";
export const UPDATE_OFFLINE_STATE = "UPDATE_OFFLINE_STATE";
export const HIGHLIGHT_NAVBAR_TAB = "HIGHLIGHT_NAVBAR_TAB";
export const HIGHTLIGHT_NAVBAR_TAB_RESET = "HIGHLIGHT_NAVBAR_TAB_RESET";

export const updateAppState = (appState: string): SyncAction<string> => ({
  payload: appState,
  type: UPDATE_APP_STATE,
});

export const updateAppStateActive = () => ({
  type: UPDATE_APP_STATE_ACTIVE,
});

export const updateCurrentRoute = (route: string): SyncAction<string> => ({
  payload: route,
  type: UPDATE_CURRENT_ROUTE,
});

export const updateCurrentModal = (route: string | null): SyncAction<string> => ({
  payload: route,
  type: UPDATE_CURRENT_MODAL,
});

export const updateOfflineState = (isOffline: boolean): SyncAction<boolean> => ({
  payload: isOffline,
  type: UPDATE_OFFLINE_STATE,
});

export const setAuthenticated = (isLogin?: boolean) => ({
  type: AUTHENTICATED,
  payload: isLogin,
});

export const setUnauthenticated = () => ({
  type: UNAUTHENTICATED,
});

export const setRegionConfig = (shouldFetchConfig = true) => ({
  type: SET_REGION_CONFIG,
  payload: { shouldFetchConfig },
});

export const checkConnection = (hasDelay = false) => ({
  type: CHECK_CONNECTION,
  payload: { hasDelay },
});

export const setMainRoot = () => ({
  type: SET_MAIN_ROOT,
});

export const highlightNavbarTabs = createAction<{ tabs: string[] }, typeof HIGHLIGHT_NAVBAR_TAB>(HIGHLIGHT_NAVBAR_TAB);

export const highlightNavbarTabReset = createAction<{ tab: string }, typeof HIGHTLIGHT_NAVBAR_TAB_RESET>(
  HIGHTLIGHT_NAVBAR_TAB_RESET
);

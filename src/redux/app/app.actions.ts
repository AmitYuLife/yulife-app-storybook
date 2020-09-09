import { SyncAction } from "../_core/types";

export const SET_MAIN_ROOT = "SET_MAIN_ROOT";
export const AUTHENTICATED = "AUTHENTICATED";
export const UNAUTHENTICATED = "UNAUTHENTICATED";
export const SHOW_MAINTENANCE = "SHOW_MAINTENANCE";
export const CHECK_CONNECTION = "CHECK_CONNECTION";
export const UPDATE_APP_STATE = "UPDATE_APP_STATE";
export const UPDATE_NAVIGATION_STATE = "UPDATE_NAVIGATION_STATE";
export const UPDATE_OFFLINE_STATE = "UPDATE_OFFLINE_STATE";

export const updateAppState = (appState: string): SyncAction<string> => ({
  payload: appState,
  type: UPDATE_APP_STATE,
});

export const updateNavigationState = (route: string): SyncAction<string> => ({
  payload: route,
  type: UPDATE_NAVIGATION_STATE,
});

export const updateOfflineState = (isOffline: boolean): SyncAction<boolean> => ({
  payload: isOffline,
  type: UPDATE_OFFLINE_STATE,
});

export const setAuthenticated = () => ({
  type: AUTHENTICATED,
});

export const setUnauthenticated = () => ({
  type: UNAUTHENTICATED,
});

export const checkConnection = (hasDelay = false) => ({
  type: CHECK_CONNECTION,
  payload: { hasDelay },
});

export const setMainRoot = (url: string) => ({
  payload: url,
  type: SET_MAIN_ROOT,
});

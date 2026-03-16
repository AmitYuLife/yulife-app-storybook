import { createAction } from "@reduxjs/toolkit";
import {
  UpdateAppStatePayload,
  UpdateCurrentRoutePayload,
  UpdateCurrentModalPayload,
  UpdateOfflineStatePayload,
  SetRegionConfigPayload,
  CheckConnectionPayload,
  HighlightNavbarTabsPayload,
  HighlightNavbarTabResetPayload,
} from "./app.types";

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
export const READY_TO_SET_MAIN_ROOT = "READY_TO_SET_MAIN_ROOT";

export const updateAppState = createAction<UpdateAppStatePayload, typeof UPDATE_APP_STATE>(UPDATE_APP_STATE);

export const updateAppStateActive = createAction(UPDATE_APP_STATE_ACTIVE);

export const updateCurrentRoute = createAction<UpdateCurrentRoutePayload, typeof UPDATE_CURRENT_ROUTE>(
  UPDATE_CURRENT_ROUTE
);

export const updateCurrentModal = createAction<UpdateCurrentModalPayload, typeof UPDATE_CURRENT_MODAL>(
  UPDATE_CURRENT_MODAL
);

export const updateOfflineState = createAction<UpdateOfflineStatePayload, typeof UPDATE_OFFLINE_STATE>(
  UPDATE_OFFLINE_STATE
);

export const setAuthenticated = createAction(AUTHENTICATED);

export const setUnauthenticated = createAction(UNAUTHENTICATED);

export const setRegionConfig = createAction<SetRegionConfigPayload, typeof SET_REGION_CONFIG>(SET_REGION_CONFIG);

export const checkConnection = createAction<CheckConnectionPayload, typeof CHECK_CONNECTION>(CHECK_CONNECTION);

export const setMainRoot = createAction(SET_MAIN_ROOT);

export const readyToSetMainRoot = createAction(READY_TO_SET_MAIN_ROOT);

export const highlightNavbarTabs = createAction<HighlightNavbarTabsPayload, typeof HIGHLIGHT_NAVBAR_TAB>(
  HIGHLIGHT_NAVBAR_TAB
);

export const highlightNavbarTabReset = createAction<HighlightNavbarTabResetPayload, typeof HIGHTLIGHT_NAVBAR_TAB_RESET>(
  HIGHTLIGHT_NAVBAR_TAB_RESET
);

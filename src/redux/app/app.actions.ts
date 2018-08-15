import { SyncAction } from "../_core/types";

export const UPDATE_APP_STATE = "UPDATE_APP_STATE";
export const UPDATE_OFFLINE_STATE = "UPDATE_OFFLINE_STATE";
export const SHOW_MAINTENANCE = "SHOW_MAINTENANCE";

export const updateAppState = (appState: string): SyncAction => ({
    type: UPDATE_APP_STATE,
    payload: appState,
});

export const updateOfflineState = (isOffline: boolean): SyncAction => ({
    type: UPDATE_OFFLINE_STATE,
    payload: isOffline,
});

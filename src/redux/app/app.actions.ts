import { SyncAction } from "../_core/types";

export const AUTHORISE_FITKIT = "AUTHORISE_FITKIT";
export const UPDATE_APP_STATE = "UPDATE_APP_STATE";
export const UPDATE_OFFLINE_STATE = "UPDATE_OFFLINE_STATE";
export const SHOW_MAINTENANCE = "SHOW_MAINTENANCE";

export const authoriseFitKit = (): SyncAction => ({
    type: AUTHORISE_FITKIT
});

export const updateAppState = (appState: string): SyncAction => ({
    payload: appState,
    type: UPDATE_APP_STATE
});

export const updateOfflineState = (isOffline: boolean): SyncAction => ({
    payload: isOffline,
    type: UPDATE_OFFLINE_STATE
});

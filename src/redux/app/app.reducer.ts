import { AppState } from "react-native";
import { SyncAction } from "../_core/types";
import {
    UPDATE_APP_STATE,
    UPDATE_OFFLINE_STATE,
} from "./app.actions";

export interface IAppStore {
    appState: string;
    isOffline: boolean;
}

export const initialState: IAppStore = {
    appState: AppState.currentState,
    isOffline: false,
};

const appReducer = (state: IAppStore = initialState, action: SyncAction) => {
    switch (action.type) {

        case UPDATE_APP_STATE:
            return updateAppState(state, action.payload);

        case UPDATE_OFFLINE_STATE:
            return updateOfflineState(state, action.payload);

        default:
            return state;
    }
};

export default appReducer;

// cases
const updateAppState = (state: IAppStore, appState: string): IAppStore => ({
    ...state,
    appState,
});

const updateOfflineState = (state: IAppStore, isOffline: boolean): IAppStore => ({
    ...state,
    isOffline,
});

import { AppState } from "react-native";
import { ROUTES } from "../../navigation/routes";
import { SyncAction } from "../_core/types";
import {
    UPDATE_APP_STATE,
    UPDATE_NAVIGATION_STATE,
    UPDATE_OFFLINE_STATE
} from "./app.actions";

export interface IAppStore {
    appState: string;
    currentRoute: string;
    isOffline: boolean;
}

export const initialState: IAppStore = {
    appState: AppState.currentState,
    currentRoute: ROUTES.dailySteps,
    isOffline: false
};

const appReducer = (state: IAppStore = initialState, action: SyncAction) => {
    switch (action.type) {

        case UPDATE_APP_STATE:
            return updateAppState(state, action.payload);

        case UPDATE_NAVIGATION_STATE:
            return updateNavigationState(state, action.payload);

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
    appState
});

const updateNavigationState = (state: IAppStore, currentRoute: string): IAppStore => ({
    ...state,
    currentRoute
});

const updateOfflineState = (state: IAppStore, isOffline: boolean): IAppStore => ({
    ...state,
    isOffline
});

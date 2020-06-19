import { ROUTES } from "@navigation/constants";
import { AppState, AppStateStatus } from "react-native";
import { SyncAction } from "../_core/types";
import {
    UPDATE_APP_STATE,
    UPDATE_NAVIGATION_STATE,
    UPDATE_OFFLINE_STATE,
    APOLLO_EVENT,
    ApolloRequestPayload,
} from "./app.actions";

export const initialState = {
    appState: AppState.currentState,
    currentRoute: ROUTES.dailySteps,
    isOffline: false
};

export type IAppStore = typeof initialState;

const appReducer = (state = initialState, action: SyncAction) => {
    switch (action.type) {

        case UPDATE_APP_STATE:
            return updateAppState(state, action.payload);

        case UPDATE_NAVIGATION_STATE:
            return updateNavigationState(state, action.payload);

        case UPDATE_OFFLINE_STATE:
            return updateOfflineState(state, action.payload);

        case APOLLO_EVENT:
            return apolloEvent(state, action.payload);

        default:
            return state;
    }
};

export default appReducer;

// cases
const updateAppState = (state: IAppStore, appState: AppStateStatus): IAppStore => ({
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

const apolloEvent = (state: IAppStore, payload: ApolloRequestPayload) => ({
    ...state,
    isOffline: payload.networkError ? true : false,
});

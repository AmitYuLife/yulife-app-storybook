import { ROUTES } from "@navigation/constants";
import { AppState } from "react-native";
import {
  updateAppState as updateAppStateAction,
  updateCurrentRoute as updateCurrentRouteAction,
  updateCurrentModal as updateCurrentModalAction,
  updateOfflineState as updateOfflineStateAction,
  highlightNavbarTabs as highlightNavbarTabsAction,
  highlightNavbarTabReset as highlightNavbarTabResetAction,
} from "./app.actions";
import { createReducer } from "@reduxjs/toolkit";
import {
  HighlightNavbarTabResetPayload,
  HighlightNavbarTabsPayload,
  IAppStore,
  UpdateAppStatePayload,
  UpdateCurrentModalPayload,
  UpdateCurrentRoutePayload,
  UpdateOfflineStatePayload,
} from "./app.types";

export const getInitialState = (): IAppStore => ({
  appState: AppState.currentState,
  isOffline: false,
  activeRoute: ROUTES.dailySteps,
  activeModal: null,
  highlightedTabs: {},
});

const appReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(updateAppStateAction, (state, action) => updateAppState(state, action.payload));
  builder.addCase(updateCurrentRouteAction, (state, action) => updateRouteState(state, action.payload));
  builder.addCase(updateCurrentModalAction, (state, action) => updateModalState(state, action.payload));
  builder.addCase(updateOfflineStateAction, (state, action) => updateOfflineState(state, action.payload));
  builder.addCase(highlightNavbarTabsAction, (state, action) => highlightNavbarTabs(state, action.payload));
  builder.addCase(highlightNavbarTabResetAction, (state, action) => highlightNavbarTabReset(state, action.payload));
  builder.addDefaultCase((state) => state);
});

const updateAppState = (state: IAppStore, { appState }: UpdateAppStatePayload): IAppStore => ({
  ...state,
  appState,
});

const updateRouteState = (state: IAppStore, { route }: UpdateCurrentRoutePayload): IAppStore => ({
  ...state,
  activeRoute: route,
  activeModal: null,
});

const updateModalState = (state: IAppStore, { modal }: UpdateCurrentModalPayload): IAppStore => ({
  ...state,
  activeModal: modal,
});

const updateOfflineState = (state: IAppStore, { isOffline }: UpdateOfflineStatePayload): IAppStore => ({
  ...state,
  isOffline,
});

const highlightNavbarTabs = (state: IAppStore, route: HighlightNavbarTabsPayload): IAppStore => {
  return {
    ...state,
    highlightedTabs: {
      ...state.highlightedTabs,
      ...route.tabs.reduce((acc, tab) => ({ ...acc, [tab.tab]: true }), {}),
    },
  };
};

const highlightNavbarTabReset = (state: IAppStore, route: HighlightNavbarTabResetPayload): IAppStore => ({
  ...state,
  highlightedTabs: {
    ...state.highlightedTabs,
    [route.tab]: undefined,
  },
});

export default appReducer;

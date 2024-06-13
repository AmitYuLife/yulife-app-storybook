import { ROUTES } from "@navigation/constants";
import { AppState, AppStateStatus } from "react-native";
import { SyncAction } from "../_core/types";
import {
  UPDATE_APP_STATE,
  UPDATE_CURRENT_ROUTE,
  UPDATE_CURRENT_MODAL,
  UPDATE_OFFLINE_STATE,
  HIGHLIGHT_NAVBAR_TAB,
  HIGHTLIGHT_NAVBAR_TAB_RESET,
} from "./app.actions";

export const getInitialState = () => ({
  appState: AppState.currentState,
  isOffline: false,
  activeRoute: ROUTES.dailySteps as string,
  activeModal: null as string,
  highlightedTabs: {} as Partial<Record<keyof typeof ROUTES, boolean>>,
});

export type IAppStore = ReturnType<typeof getInitialState>;

const appReducer = (state = getInitialState(), action: SyncAction): IAppStore => {
  switch (action.type) {
    case UPDATE_APP_STATE:
      return updateAppState(state, action.payload);

    case UPDATE_CURRENT_ROUTE:
      return updateRouteState(state, action.payload);

    case UPDATE_CURRENT_MODAL:
      return updateModalState(state, action.payload);

    case UPDATE_OFFLINE_STATE:
      return updateOfflineState(state, action.payload);

    case HIGHLIGHT_NAVBAR_TAB:
      return highlightNavbarTabs(state, action.payload);

    case HIGHTLIGHT_NAVBAR_TAB_RESET:
      return highlightNavbarTabReset(state, action.payload);

    default:
      return state;
  }
};

export default appReducer;

// cases
const updateAppState = (state: IAppStore, appState: AppStateStatus): IAppStore => ({
  ...state,
  appState,
});

const updateRouteState = (state: IAppStore, currentRoute: string): IAppStore => ({
  ...state,
  activeRoute: currentRoute,
  activeModal: null,
});

const updateModalState = (state: IAppStore, currentModal: string | null): IAppStore => ({
  ...state,
  activeModal: currentModal,
});

const updateOfflineState = (state: IAppStore, isOffline: boolean): IAppStore => ({
  ...state,
  isOffline,
});

const highlightNavbarTabs = (state: IAppStore, route: { tabs: (keyof typeof ROUTES)[] }): IAppStore => {
  return {
    ...state,
    highlightedTabs: {
      ...state.highlightedTabs,
      ...route.tabs.reduce((acc, tab) => ({ ...acc, [tab]: true }), {}),
    },
  };
};

const highlightNavbarTabReset = (state: IAppStore, route: { tab: keyof typeof ROUTES }): IAppStore => ({
  ...state,
  highlightedTabs: {
    ...state.highlightedTabs,
    [route.tab]: false,
  },
});

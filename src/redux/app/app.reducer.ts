import { ROUTES } from "@navigation/constants";
import { DATE_FORMAT } from "@utils";
import moment from "moment";
import { AppState, AppStateStatus } from "react-native";
import { SyncAction } from "../_core/types";
import { UPDATE_APP_STATE, UPDATE_CURRENT_ROUTE, UPDATE_CURRENT_MODAL, UPDATE_OFFLINE_STATE } from "./app.actions";

const getCurrentDate = () => moment().format(DATE_FORMAT);

export const getInitialState = () => ({
  appState: AppState.currentState,
  isOffline: false,
  activeRoute: ROUTES.dailySteps as string,
  activeModal: null as string,
  currentDate: getCurrentDate(),
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

    default:
      return { ...state, currentDate: getCurrentDate() };
  }
};

export default appReducer;

// cases
const updateAppState = (state: IAppStore, appState: AppStateStatus): IAppStore => ({
  ...state,
  currentDate: getCurrentDate(),
  appState,
});

const updateRouteState = (state: IAppStore, currentRoute: string): IAppStore => ({
  ...state,
  currentDate: getCurrentDate(),
  activeRoute: currentRoute,
  activeModal: null,
});

const updateModalState = (state: IAppStore, currentModal: string | null): IAppStore => ({
  ...state,
  currentDate: getCurrentDate(),
  activeModal: currentModal,
});

const updateOfflineState = (state: IAppStore, isOffline: boolean): IAppStore => ({
  ...state,
  currentDate: getCurrentDate(),
  isOffline,
});

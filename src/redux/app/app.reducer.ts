import { ROUTES } from "@navigation/constants";
import { DATE_FORMAT } from "@utils";
import moment from "moment";
import { AppState, AppStateStatus } from "react-native";
import { SyncAction } from "../_core/types";
import {
  UPDATE_APP_STATE,
  UPDATE_CURRENT_ROUTE,
  UPDATE_CURRENT_MODAL,
  UPDATE_OFFLINE_STATE,
  UPDATE_CURRENT_DATE,
} from "./app.actions";

export const getInitialState = () => ({
  appState: AppState.currentState,
  isOffline: false,
  activeRoute: ROUTES.dailySteps as string,
  activeModal: null as string,
  currentDate: moment().format(DATE_FORMAT),
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

    case UPDATE_CURRENT_DATE:
      return updateCurrentDate(state, action.payload);

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

const updateCurrentDate = (state: IAppStore, payload: { date: string }): IAppStore => ({
  ...state,
  currentDate: payload.date,
});

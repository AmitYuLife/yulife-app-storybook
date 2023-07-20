import moment from "moment";
import { REHYDRATE } from "redux-persist";
import { LOGOUT_SUCCESS } from "../user/user.actions";
import { SyncAction } from "@redux/_core/types";
import { UPDATE_APP_STATE_ACTIVE } from "@redux/app/app.actions";
import { UPDATE_DAILY_PENSION_SUCCESS } from "./daily-pension.actions";
import { GetCurrentUser_getDailyPensionContribution as DailyPension } from "@graphql/_core/schema";
import { PEDOMETER_RESTART_ON_NEW_DAY } from "@redux/pedometer/pedometer.actions";

export interface IDailyPensionStore {
  active: boolean;
  yuCoinAwarded: number;
  contribution: string;
  lastUpdated: string;
}

export const getInitialState = (): IDailyPensionStore => ({
  active: false,
  yuCoinAwarded: 0,
  contribution: "",
  lastUpdated: moment().startOf("day").format(),
});

const dailyPensionReducer = (state: IDailyPensionStore = getInitialState(), action: SyncAction): IDailyPensionStore => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.dailyPension) {
        return updatePersistedState(state, action.payload.dailyPension);
      }

      return state;

    case UPDATE_APP_STATE_ACTIVE:
      return updateStateOnAppStateActive(state);

    case UPDATE_DAILY_PENSION_SUCCESS:
      return updateDailyPension(state, action.payload);

    case PEDOMETER_RESTART_ON_NEW_DAY:
      return { ...state, contribution: "", yuCoinAwarded: 0 };

    case LOGOUT_SUCCESS:
      return getInitialState();

    default:
      return state;
  }
};

const updateDailyPension = (state: IDailyPensionStore, data: DailyPension) => ({
  ...state,
  active: data.active,
  yuCoinAwarded: data?.yuCoinAwarded || 0,
  contribution: data?.contribution || "",
  lastUpdated: moment().format(),
});

const updatePersistedState = (state: IDailyPensionStore, persistedState: IDailyPensionStore) => {
  if (!persistedState.lastUpdated) {
    return { ...state };
  }

  const lastUpdated = moment(persistedState.lastUpdated).startOf("day").format();
  const today = moment().startOf("day").format();

  if (lastUpdated !== today) {
    return {
      ...persistedState,
      contribution: "",
      yuCoinAwarded: 0,
    };
  }

  return { ...persistedState };
};

const updateStateOnAppStateActive = (state: IDailyPensionStore) => {
  const lastUpdated = moment(state.lastUpdated).startOf("day").format();
  const today = moment().startOf("day").format();

  if (lastUpdated !== today) {
    return {
      ...state,
      contribution: "",
      yuCoinAwarded: 0,
    };
  }

  return { ...state };
};

export default dailyPensionReducer;

import moment from "moment";
import { logOutSuccess } from "../user/user.actions";
import { updateDailyPensionSuccess } from "./daily-pension.actions";
import { DailyPension, IDailyPensionStore } from "./daily-pension.types";
import { restartPedometerOnNewDay } from "@redux/pedometer/pedometer.actions";
import { updateCurrentDate } from "@redux/device/device.actions";
import { createReducer } from "@reduxjs/toolkit";
import { rehydrateAction } from "@redux/persist/persist.actions";

export const getInitialState = (): IDailyPensionStore => ({
  active: false,
  yuCoinAwarded: 0,
  contribution: "",
  lastUpdated: moment().startOf("day").format(),
});

const dailyPensionReducer = createReducer<IDailyPensionStore>(getInitialState(), (builder) => {
  builder.addCase(rehydrateAction, (state, action) => updatePersistedState(state, action.payload?.dailyPension));
  builder.addCase(updateCurrentDate, (state) => resetPensionState(state));
  builder.addCase(updateDailyPensionSuccess, (state, action) => updateDailyPension(state, action.payload));
  builder.addCase(restartPedometerOnNewDay, (state) => ({ ...state, contribution: "", yuCoinAwarded: 0 }));
  builder.addCase(logOutSuccess, () => getInitialState());
  builder.addDefaultCase((state) => state);
});

const updateDailyPension = (state: IDailyPensionStore, data: DailyPension) => ({
  ...state,
  active: data?.active || false,
  yuCoinAwarded: data?.yuCoinAwarded || 0,
  contribution: data?.contribution || "",
  lastUpdated: moment().format(),
});

const updatePersistedState = (state: IDailyPensionStore, persistedState: IDailyPensionStore) => {
  if (!persistedState?.lastUpdated) {
    return state;
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

const resetPensionState = (state: IDailyPensionStore) => ({
  ...state,
  contribution: "",
  yuCoinAwarded: 0,
});

export default dailyPensionReducer;

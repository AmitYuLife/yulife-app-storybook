import moment from "moment";
import { logOutSuccess } from "../user/user.actions";
import {
  updateDailyMeditation,
  updateDailyMeditationEmptyResult,
  updateInAppMeditation,
} from "./daily-meditation.actions";
import { Challenge } from "@redux/_core/types";
import { restartPedometerOnNewDay } from "@redux/pedometer/pedometer.actions";
import { updateCurrentDate } from "@redux/device/device.actions";
import { IAppMeditationPayloadLocal, IDailyMeditationStore } from "./daily-meditation.types";
import { createReducer } from "@reduxjs/toolkit";
import { rehydrateAction } from "@redux/persist/persist.actions";

export const getInitialState = (): IDailyMeditationStore => ({
  dailyMeditation: 0,
  inAppMeditation: {
    duration: 0,
    lastUpdated: "",
    createdAt: null,
    date: null,
  },
  lastUpdated: moment().startOf("day").format(),
});

const dailyMeditationReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(rehydrateAction, (state, action) => updatePersistedState(state, action.payload?.dailyMeditation));
  builder.addCase(updateCurrentDate, (state) => resetDailyMeditationState(state));
  builder.addCase(updateDailyMeditation, (state, action) => updateDailyMeditationSuccess(state, action.payload));
  builder.addCase(restartPedometerOnNewDay, (state) => ({ ...state, dailyMeditation: 0 }));
  builder.addCase(updateDailyMeditationEmptyResult, (state) => ({ ...state, dailyMeditation: 0 }));
  builder.addCase(updateInAppMeditation, (state, action) => updateInAppMeditationPayloadLocal(state, action.payload));
  builder.addCase(logOutSuccess, () => getInitialState());
  builder.addDefaultCase((state) => state);
});

const updateDailyMeditationSuccess = (state: IDailyMeditationStore, challenge: Challenge) => {
  if (challenge?.updatedAt) {
    const updatedAt = moment.unix(challenge.updatedAt).format();

    return {
      ...state,
      dailyMeditation: challenge.incomingData?.meditation || 0,
      lastUpdated: updatedAt,
    };
  }

  return state;
};

const updatePersistedState = (state: IDailyMeditationStore, persistedState: IDailyMeditationStore) => {
  if (!persistedState?.lastUpdated) {
    return state;
  }

  const lastUpdated = moment(persistedState.lastUpdated).startOf("day").format();
  const today = moment().startOf("day").format();

  if (lastUpdated !== today) {
    return {
      ...persistedState,
      dailyMeditation: 0,
      inAppMeditation: {
        ...state.inAppMeditation,
        duration: 0,
      },
      lastUpdated: moment().format(),
    };
  }

  return { ...persistedState };
};

const resetDailyMeditationState = (state: IDailyMeditationStore) => ({
  ...state,
  dailyMeditation: 0,
  inAppMeditation: {
    ...state.inAppMeditation,
    duration: 0,
  },
  lastUpdated: moment().format(),
});

const updateInAppMeditationPayloadLocal = (
  state: IDailyMeditationStore,
  payload: IAppMeditationPayloadLocal
): IDailyMeditationStore => {
  const { duration, createdAt } = payload;
  const lastUpdated = moment().format();

  const lastUpdatedStartOfDay = moment(state.inAppMeditation.lastUpdated).startOf("day").format();
  const today = moment().startOf("day").format();

  return {
    ...state,
    inAppMeditation: {
      duration: lastUpdatedStartOfDay !== today ? duration : state.inAppMeditation.duration + duration,
      lastUpdated,
      createdAt,
      date: "",
    },
  };
};

export default dailyMeditationReducer;

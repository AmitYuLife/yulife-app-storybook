import moment from "moment";
import { logOutSuccess, updateUserProfile } from "../user/user.actions";
import { Challenge, DistanceMeasurementType } from "@redux/_core/types";
import {
  updateDailyCycling,
  updateDailyCyclingEmptyResult,
  updateDailyCyclingDistanceMeasurementType,
} from "./daily-cycling.actions";
import { restartPedometerOnNewDay } from "@redux/pedometer/pedometer.actions";
import { updateCurrentDate } from "@redux/device/device.actions";
import { createReducer } from "@reduxjs/toolkit";
import { rehydrateAction } from "@redux/persist/persist.actions";

export interface IDailyCyclingStore {
  cyclingMeasurement: DistanceMeasurementType;
  dailyCycling: number;
  lastUpdated: string;
}

export const getInitialState = (): IDailyCyclingStore => ({
  cyclingMeasurement: DistanceMeasurementType.Km,
  dailyCycling: 0,
  lastUpdated: moment().startOf("day").format(),
});

const dailyCyclingReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(rehydrateAction, (state, action) => {
    if (action.payload && action.payload.dailyCycling) {
      return updatePersistedState(state, action.payload.dailyCycling);
    }

    return state;
  });

  builder.addCase(updateDailyCycling, (state, action) => updateDailyCyclingSuccess(state, action.payload));

  builder.addCase(updateDailyCyclingEmptyResult, (state) => ({ ...state, dailyCycling: 0 }));

  builder.addCase(restartPedometerOnNewDay, (state) => ({ ...state, dailyCycling: 0 }));

  builder.addCase(updateCurrentDate, (state) => ({ ...state, dailyCycling: 0 }));

  builder.addCase(updateDailyCyclingDistanceMeasurementType, (state, action) => ({
    ...state,
    cyclingMeasurement: action.payload,
  }));

  builder.addCase(updateUserProfile, (state, action) => ({
    ...state,
    cyclingMeasurement: action.payload.cyclingGameSettings.cyclingMeasurement,
  }));

  builder.addCase(logOutSuccess, () => getInitialState());

  builder.addDefaultCase((state) => state);
});

const updateDailyCyclingSuccess = (state: IDailyCyclingStore, data: Challenge) => {
  if (data?.updatedAt) {
    const updatedAt = moment.unix(data.updatedAt).format();
    return {
      ...state,
      dailyCycling: data.incomingData.distance,
      lastUpdated: updatedAt,
    };
  }

  return state;
};

const updatePersistedState = (state: IDailyCyclingStore, persistedState: IDailyCyclingStore) => {
  if (!persistedState.lastUpdated) {
    return { ...state };
  }

  const lastUpdated = moment(persistedState.lastUpdated).startOf("day").format();
  const today = moment().startOf("day").format();

  if (lastUpdated !== today) {
    return {
      ...persistedState,
      dailyCycling: 0,
    };
  }

  return { ...persistedState };
};

export default dailyCyclingReducer;

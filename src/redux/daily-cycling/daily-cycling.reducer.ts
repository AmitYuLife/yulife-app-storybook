import moment from "moment";
import { REHYDRATE } from "redux-persist";
import { LOGOUT_SUCCESS, UPDATE_USER_PROFILE } from "../user/user.actions";
import { SyncAction, Challenge, DistanceMeasurementType } from "@redux/_core/types";
import {
  UPDATE_DAILY_CYCLING_SUCCESS,
  UPDATE_DAILY_CYCLING_EMPTY_RESULT,
  UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE,
} from "./daily-cycling.actions";
import { PEDOMETER_RESTART_ON_NEW_DAY } from "@redux/pedometer/pedometer.actions";
import { UPDATE_CURRENT_DATE } from "@redux/device/device.actions";

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

const dailyCyclingReducer = (state: IDailyCyclingStore = getInitialState(), action: SyncAction): IDailyCyclingStore => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.dailyCycling) {
        return updatePersistedState(state, action.payload.dailyCycling);
      }

      return state;

    case UPDATE_CURRENT_DATE:
    case PEDOMETER_RESTART_ON_NEW_DAY:
    case UPDATE_DAILY_CYCLING_EMPTY_RESULT:
      return { ...state, dailyCycling: 0 };

    case UPDATE_DAILY_CYCLING_SUCCESS:
      return updateDailyCyclingSuccess(state, action.payload);

    case UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE:
      return { ...state, cyclingMeasurement: action.payload };

    case UPDATE_USER_PROFILE:
      return { ...state, cyclingMeasurement: action.payload.gameSettings.cyclingMeasurement };

    case LOGOUT_SUCCESS:
      return getInitialState();

    default:
      return state;
  }
};

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

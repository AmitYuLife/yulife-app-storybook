import moment from "moment";
import { REHYDRATE } from "redux-persist";
import {
  GetCurrentUser,
  LoginUser,
  UpsertPassiveChallenges_upsertPassiveChallenges_challenges as Challenge,
} from "@graphql/_core/schema";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_SUCCESS } from "../user/user.actions";
import { SyncAction } from "@redux/_core/types";
import {
  UPDATE_DAILY_CYCLING_SUCCESS,
  UPDATE_DAILY_CYCLING_EMPTY_RESULT,
  PassiveCyclingMilestones,
  UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE,
} from "./daily-cycling.actions";
import { DistanceMeasurementType } from "@graphql/_core/schema/globalTypes";

export interface IDailyCyclingStore {
  cyclingMeasurement: DistanceMeasurementType;
  dailyCycling: number;
  lastUpdated: string;
  cyclingPassiveMilestones: PassiveCyclingMilestones;
}

export const getInitialState = (): IDailyCyclingStore => ({
  cyclingMeasurement: DistanceMeasurementType.km,
  dailyCycling: 0,
  lastUpdated: moment().startOf("day").format(),
  cyclingPassiveMilestones: [],
});

const dailyCyclingReducer = (state: IDailyCyclingStore = getInitialState(), action: SyncAction): IDailyCyclingStore => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.dailyCycling) {
        return updatePersistedState(state, action.payload.dailyCycling);
      }

      return state;

    case UPDATE_DAILY_CYCLING_SUCCESS:
      return updateDailyCyclingSuccess(state, action.payload);

    case UPDATE_DAILY_CYCLING_DISTANCE_MEASUREMENT_TYPE:
      return { ...state, cyclingMeasurement: action.payload };

    case UPDATE_DAILY_CYCLING_EMPTY_RESULT:
      return { ...state, dailyCycling: 0 };

    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);

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

const getUserSuccess = (state: IDailyCyclingStore, res: GetCurrentUser) => ({
  ...state,
  cyclingPassiveMilestones: res?.getCurrentUser?.passiveCycling?.levelSlot?.milestones || [],
});

const loginUserSuccess = (state: IDailyCyclingStore, res: LoginUser) => ({
  ...state,
  cyclingPassiveMilestones: res?.loginUser?.user?.passiveCycling?.levelSlot?.milestones || [],
});

export default dailyCyclingReducer;

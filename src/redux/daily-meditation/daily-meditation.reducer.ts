import moment from "moment";
import { REHYDRATE } from "redux-persist";
import {
  GetCurrentUser,
  LoginUser,
  GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate,
} from "@graphql/_core/schema";
import {
  GET_PASSIVE_CHALLENGES_EARN_RATE_SUCCESS,
  GET_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
} from "../user/user.actions";
import {
  UPDATE_DAILY_MEDITATION_EMPTY_RESULT,
  UPDATE_DAILY_MEDITATION_SUCCESS,
  UPDATE_IN_APP_MEDITATION,
} from "./daily-meditation.actions";
import { SyncAction, Challenge, PassiveExchangeRate } from "@redux/_core/types";
import { PEDOMETER_RESTART_ON_NEW_DAY } from "@redux/pedometer/pedometer.actions";
import { UPDATE_CURRENT_DATE } from "@redux/device/device.actions";
import { IAppMeditationPayload } from "./daily-meditation.types";

export interface IAppDailyMeditationProps {
  duration: number;
  lastUpdated: string;
  createdAt: number;
}

export interface IDailyMeditationStore {
  dailyMeditation: number;
  inAppMeditation: IAppDailyMeditationProps;
  exchangeRate: PassiveExchangeRate;
  lastUpdated: string;
}

export const getInitialState = (): IDailyMeditationStore => ({
  dailyMeditation: 0,
  exchangeRate: {
    yucoin: 1,
    steps: null,
    meditation: 300,
    surge: 1,
  },
  inAppMeditation: {
    duration: 0,
    lastUpdated: "",
    createdAt: null,
  },
  lastUpdated: moment().startOf("day").format(),
});

const dailyMeditationReducer = (
  state: IDailyMeditationStore = getInitialState(),
  action: SyncAction
): IDailyMeditationStore => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.dailyMeditation) {
        return updatePersistedState(state, action.payload.dailyMeditation);
      }

      return state;

    case UPDATE_CURRENT_DATE:
      return resetDailyMeditationState(state);

    case UPDATE_DAILY_MEDITATION_SUCCESS:
      return updateDailyMeditationSucces(state, action.payload);

    case PEDOMETER_RESTART_ON_NEW_DAY:
    case UPDATE_DAILY_MEDITATION_EMPTY_RESULT:
      return { ...state, dailyMeditation: 0 };

    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

    case GET_PASSIVE_CHALLENGES_EARN_RATE_SUCCESS:
      return getPassiveChallengesEarnRateSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);

    case UPDATE_IN_APP_MEDITATION:
      return updateInAppMeditation(state, action.payload);

    case LOGOUT_SUCCESS:
      return getInitialState();

    default:
      return state;
  }
};

const updateDailyMeditationSucces = (state: IDailyMeditationStore, challenge: Challenge) => {
  if (challenge?.updatedAt) {
    const updatedAt = moment.unix(challenge.updatedAt).format();

    return {
      ...state,
      dailyMeditation: challenge.incomingData.meditation,
      lastUpdated: updatedAt,
    };
  }

  return state;
};

const updatePersistedState = (state: IDailyMeditationStore, persistedState: IDailyMeditationStore) => {
  if (!persistedState.lastUpdated) {
    return { ...state };
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

const getUserSuccess = (state: IDailyMeditationStore, res: GetCurrentUser) => ({
  ...state,
  exchangeRate: res?.getCurrentUser?.passiveMeditation?.exchange || getInitialState().exchangeRate,
  meditationPassiveMilestones: res?.getCurrentUser?.passiveMeditation?.levelSlot?.milestones || [],
});

const getPassiveChallengesEarnRateSuccess = (
  state: IDailyMeditationStore,
  res: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate
) => ({
  ...state,
  exchangeRate: res?.MEDITATION.exchange || getInitialState().exchangeRate,
  meditationPassiveMilestones: res?.MEDITATION?.levelSlot?.milestones || [],
});

const loginUserSuccess = (state: IDailyMeditationStore, res: LoginUser) => ({
  ...state,
  exchangeRate: res?.loginUser?.user?.passiveMeditation?.exchange || getInitialState().exchangeRate,
  meditationPassiveMilestones: res?.loginUser?.user?.passiveMeditation?.levelSlot?.milestones || [],
});

const updateInAppMeditation = (state: IDailyMeditationStore, payload: IAppMeditationPayload): IDailyMeditationStore => {
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
    },
  };
};

export default dailyMeditationReducer;

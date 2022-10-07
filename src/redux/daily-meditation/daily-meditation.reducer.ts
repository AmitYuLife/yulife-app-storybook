import moment from "moment";
import { REHYDRATE } from "redux-persist";
import {
  GetCurrentUser,
  LoginUser,
  UpsertDailyPassives_upsertDailyPassives_challenges as Challenge,
} from "@graphql/_core/schema";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_SUCCESS } from "../user/user.actions";
import {
  UPDATE_DAILY_MEDITATION_EMPTY_RESULT,
  UPDATE_DAILY_MEDITATION_SUCCESS,
  UPDATE_IN_APP_MEDITATION,
} from "./daily-meditation.actions";
import { PassiveMeditationMilestones, ExchangeRateMeditation as ExchangeRate } from "./daily-meditation.selectors";
import { SyncAction } from "@redux/_core/types";
import { UPDATE_APP_STATE_ACTIVE } from "@redux/app/app.actions";
import { PEDOMETER_RESTART_ON_NEW_DAY } from "@redux/pedometer/pedometer.actions";
export interface IDailyMeditationStore {
  dailyMeditation: number;
  inAppDailyMeditation: number;
  exchangeRate: ExchangeRate;
  meditationPassiveMilestones: PassiveMeditationMilestones;
  inAppMeditationLastUpdated: string;
  lastUpdated: string;
}

export const getInitialState = (): IDailyMeditationStore => ({
  dailyMeditation: 0,
  inAppDailyMeditation: 0,
  exchangeRate: {
    yucoin: 1,
    steps: null,
    meditation: 300,
    surge: 1,
  },
  meditationPassiveMilestones: [],
  inAppMeditationLastUpdated: "",
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

    case UPDATE_APP_STATE_ACTIVE:
      return updateStateOnAppUpdate(state);
    case UPDATE_DAILY_MEDITATION_SUCCESS:
      return updateDailyMeditationSucces(state, action.payload);

    case PEDOMETER_RESTART_ON_NEW_DAY:
    case UPDATE_DAILY_MEDITATION_EMPTY_RESULT:
      return { ...state, dailyMeditation: 0 };

    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

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
      inAppDailyMeditation: 0,
    };
  }

  return { ...persistedState };
};

const updateStateOnAppUpdate = (state: IDailyMeditationStore) => {
  const lastUpdated = moment(state.lastUpdated).startOf("day").format();
  const today = moment().startOf("day").format();

  if (lastUpdated !== today) {
    return {
      ...state,
      dailyMeditation: 0,
      inAppDailyMeditation: 0,
    };
  }

  return { ...state };
};

const getUserSuccess = (state: IDailyMeditationStore, res: GetCurrentUser) => ({
  ...state,
  exchangeRate: res?.getCurrentUser?.passiveMeditation?.exchange || getInitialState().exchangeRate,
  meditationPassiveMilestones: res?.getCurrentUser?.passiveMeditation?.levelSlot?.milestones || [],
});

const loginUserSuccess = (state: IDailyMeditationStore, res: LoginUser) => ({
  ...state,
  exchangeRate: res?.loginUser?.user?.passiveMeditation?.exchange || getInitialState().exchangeRate,
  meditationPassiveMilestones: res?.loginUser?.user?.passiveMeditation?.levelSlot?.milestones || [],
});

const updateInAppMeditation = (state: IDailyMeditationStore, inAppDailyMeditation: number) => {
  if (moment().diff(state.inAppMeditationLastUpdated, "minutes") < 2) {
    return state;
  }

  return {
    ...state,
    inAppDailyMeditation: state.inAppDailyMeditation + inAppDailyMeditation,
    inAppMeditationLastUpdated: moment().format(),
  };
};

export default dailyMeditationReducer;

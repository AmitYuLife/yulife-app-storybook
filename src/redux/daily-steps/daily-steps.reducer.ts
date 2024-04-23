import moment from "moment";
import { REHYDRATE } from "redux-persist";
import {
  PEDOMETER_UPDATES_NO_NEW_DATA,
  PEDOMETER_UPDATES_START,
  PEDOMETER_START,
} from "../pedometer/pedometer.actions";
import {
  GET_PASSIVE_CHALLENGES_EARN_RATE_SUCCESS,
  GET_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_USER_PROFILE,
} from "../user/user.actions";
import {
  UPDATE_DAILY_STEPS_FAILED,
  UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE,
  UPDATE_DAILY_STEPS_SUCCESS_FROM_LOCAL,
  UPDATE_DAILY_STEPS_NO_NEW_DATA,
  START_STEPS_SYNCING,
  CHANGE_PANEL_VISIBILITY,
} from "./daily-steps.actions";
import { SyncAction, Challenge, PassiveExchangeRate } from "@redux/_core/types";
import { UPDATE_CURRENT_DATE } from "@redux/device/device.actions";
import { IDailyStepsGetUserSuccessPayload, IDailyStepsUpdateUserProfilePayload } from "./daily-steps.types";

const MAX_ANOMALY_DETECTION_WINDOW_MS = 10000; // in ms

export interface IDailyStepsStore {
  /**
   * @description
   * This is the value displayed on the daily yucoin screen
   */
  dailySteps: number;
  /**
   * @description
   * The value of steps from local pedometer
   */
  localSteps: number;
  /**
   * @description
   * We don't wanna make an API request every 1-2 steps,
   * hence we need to store what we last sent to the server
   */
  serverSteps: number;
  /**
   * @description
   * The default exchange rate is 1 yucoin for 2000 steps. But that varies
   */
  exchangeRate: PassiveExchangeRate;
  /**
   * @description
   * Describes if we're fetching the results from the pedometer
   */
  isFetching: boolean;
  /**
   * @description
   * Describes if we've started the sync with the server
   */
  isSyncing: boolean;
  /**
   * @description
   * We wanna make an API request every time the app starts, no matter what. We use this value for that.
   */
  isServerFetchedThisSession: boolean;
  /**
   * @description
   * When was the last sync with the server
   */
  lastUpdated: string;
  /**
   * @description
   * Max window time in ms to detect spikes on pedometer reads
   */
  maxStepsAnomalyWindowMs: number;
  /**
   * @description
   * Steps data from these apps  will be filtered/ignored
   */
  blackListApps: string[];
  showPanel: boolean;
}

export const getInitialState = (): IDailyStepsStore => ({
  dailySteps: 0,
  serverSteps: 0,
  exchangeRate: {
    steps: 2000,
    yucoin: 1,
    meditation: null,
    surge: 1,
  },
  localSteps: 0,
  isFetching: true,
  isSyncing: false,
  isServerFetchedThisSession: false,
  lastUpdated: moment().startOf("day").format(),
  maxStepsAnomalyWindowMs: MAX_ANOMALY_DETECTION_WINDOW_MS,
  blackListApps: [],
  showPanel: false,
});

const dailyStepsReducer = (state: IDailyStepsStore = getInitialState(), action: SyncAction): IDailyStepsStore => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.dailySteps) {
        return updatePersistedState(state, action.payload.dailySteps);
      }

      return { ...state };

    case UPDATE_CURRENT_DATE:
      return updateCurrentDate(state);

    case PEDOMETER_UPDATES_START:
      return { ...state, isFetching: true };

    case UPDATE_DAILY_STEPS_NO_NEW_DATA:
    case PEDOMETER_UPDATES_NO_NEW_DATA:
      return { ...state, isFetching: false };

    case UPDATE_DAILY_STEPS_SUCCESS_FROM_LOCAL:
      return updateDailyStepsLocal(state, action.payload);

    case UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE:
      return updateDailyStepsSuccessFromRemote(state, action.payload);

    case UPDATE_DAILY_STEPS_FAILED:
      return { ...state, isFetching: false, isSyncing: false };

    case PEDOMETER_START:
      return { ...state, isServerFetchedThisSession: false };

    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

    case GET_PASSIVE_CHALLENGES_EARN_RATE_SUCCESS:
      return getPassiveChallengesEarnRateSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return getPassiveChallengesEarnRateSuccess(state, action.payload);

    case START_STEPS_SYNCING:
      return { ...state, isSyncing: true };

    case LOGOUT_SUCCESS:
      return getInitialState();

    case UPDATE_USER_PROFILE:
      return updateUserProfile(state, action.payload);

    case CHANGE_PANEL_VISIBILITY:
      return changePanelVisibility(state, action.payload);

    default:
      return state;
  }
};

export default dailyStepsReducer;

const updatePersistedState = (state: IDailyStepsStore, persistedState: IDailyStepsStore) => {
  if (!persistedState.lastUpdated) {
    return { ...state, isServerFetchedThisSession: false, isSyncing: false };
  }

  const lastUpdated = moment(persistedState.lastUpdated).startOf("day").format();
  const today = moment().startOf("day").format();

  if (lastUpdated !== today) {
    return {
      ...persistedState,
      localSteps: 0,
      dailySteps: 0,
      serverSteps: 0,
      isSyncing: false,
      isFetching: true,
      isServerFetchedThisSession: false,
    };
  }

  return { ...persistedState, isSyncing: false, isServerFetchedThisSession: false };
};

const updateUserProfile = (state: IDailyStepsStore, res: IDailyStepsUpdateUserProfilePayload) => ({
  ...state,
  maxStepsAnomalyWindowMs: res?.stepsGameSettings?.maxStepsAnomalyWindowMs,
  blackListApps: res?.stepsGameSettings?.blackListApps || [],
});

const updateDailyStepsSuccessFromRemote = (
  state: IDailyStepsStore,
  { challenge, sentSteps }: { challenge: Challenge; sentSteps: number }
) => {
  const lastUpdated = moment.unix(challenge.updatedAt).format();

  const incomingSteps = challenge.incomingData?.steps || 0;
  return {
    ...state,
    dailySteps: Math.max(state.dailySteps, incomingSteps), // for cases when the wearables data is higher than the current device's data
    serverSteps: sentSteps,
    isFetching: false,
    isSyncing: false,
    isServerFetchedThisSession: true,
    lastUpdated,
  };
};

const updateDailyStepsLocal = (state: IDailyStepsStore, localSteps: number) => ({
  ...state,
  localSteps,
  dailySteps: Math.max(state.dailySteps, localSteps),
});

const getUserSuccess = (state: IDailyStepsStore, res: IDailyStepsGetUserSuccessPayload) => ({
  ...state,
  exchangeRate: res?.passiveSteps?.exchangeRate || getInitialState().exchangeRate,
});

const getPassiveChallengesEarnRateSuccess = (state: IDailyStepsStore, res: IDailyStepsGetUserSuccessPayload) => {
  const defaultExchangeRate = getInitialState().exchangeRate;
  return {
    ...state,
    exchangeRate: {
      yucoin: res?.passiveSteps.exchangeRate.yucoin || defaultExchangeRate.yucoin,
      steps: res?.passiveSteps.exchangeRate.steps || defaultExchangeRate.steps,
      meditation: res?.passiveSteps.exchangeRate.meditation || defaultExchangeRate.meditation,
      surge: res?.passiveSteps.exchangeRate.surge || defaultExchangeRate.surge,
    },
  };
};

const changePanelVisibility = (state: IDailyStepsStore, payload: boolean): IDailyStepsStore => ({
  ...state,
  showPanel: payload,
});

const updateCurrentDate = (state: IDailyStepsStore) => ({
  ...state,
  localSteps: 0,
  dailySteps: 0,
  serverSteps: 0,
  isFetching: false,
  isServerFetchedThisSession: false,
});

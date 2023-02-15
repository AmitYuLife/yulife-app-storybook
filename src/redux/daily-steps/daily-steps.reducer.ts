import moment from "moment";
import { REHYDRATE } from "redux-persist";
import {
  GetCurrentUser,
  UpsertDailyPassives_upsertDailyPassives_challenges as Challenge,
  GetUserProfile_getUserProfile_gameSettings as GameSettings,
  GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate,
} from "@graphql/_core/schema";
import { LoginUser } from "@graphql/_core/schema";
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
import { SyncAction } from "@redux/_core/types";
import { ExchangeRate, PassiveStepsMilestones } from "./daily-steps.selectors";
import { UPDATE_APP_STATE_ACTIVE } from "@redux/app/app.actions";

const MAX_ANOMALY_DETECTION_WINDOW_MS = 10000; // in ms

export interface IDailyStepsStore {
  /**
   * @description
   * This is the value displayed on the daily yucoin screen
   */
  dailySteps: number;
  /**
   * @description
   * We don't wanna make an API request every 1-2 steps,
   * hence we need to store what's the latest server steps value
   */
  serverSteps: number;
  /**
   * @description
   * The default exchange rate is 1 yucoin for 2000 steps. But that varies
   */
  exchangeRate: ExchangeRate;
  stepsPassiveMilestones: PassiveStepsMilestones;
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
  stepsPassiveMilestones: [],
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

    case UPDATE_APP_STATE_ACTIVE:
      return updateStateOnAppStateActive(state);
    case PEDOMETER_UPDATES_START:
      return { ...state, isFetching: true };

    case UPDATE_DAILY_STEPS_NO_NEW_DATA:
    case PEDOMETER_UPDATES_NO_NEW_DATA:
      return { ...state, isFetching: false };

    case UPDATE_DAILY_STEPS_SUCCESS_FROM_LOCAL:
      return updateDailyStepsLocal(state, action.payload);

    case UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE:
      return updateDailyStepsSuccess(state, action.payload);

    case UPDATE_DAILY_STEPS_FAILED:
      return { ...state, isFetching: false };

    case PEDOMETER_START:
      return { ...state, isServerFetchedThisSession: false };

    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

    case GET_PASSIVE_CHALLENGES_EARN_RATE_SUCCESS:
      return getPassiveChallengesEarnRateSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);

    case START_STEPS_SYNCING:
      return { ...state, isSyncing: true };

    case LOGOUT_SUCCESS:
      return getInitialState();

    case UPDATE_USER_PROFILE:
      return updateUserProfile(state, action.payload.gameSettings);

    case CHANGE_PANEL_VISIBILITY:
      return changePanelVisibility(state, action.payload);

    default:
      return state;
  }
};

export default dailyStepsReducer;

const updatePersistedState = (state: IDailyStepsStore, persistedState: IDailyStepsStore) => {
  if (!persistedState.lastUpdated) {
    return { ...state, isServerFetchedThisSession: false };
  }

  const lastUpdated = moment(persistedState.lastUpdated).startOf("day").format();
  const today = moment().startOf("day").format();

  if (lastUpdated !== today) {
    return {
      ...persistedState,
      dailySteps: 0,
      serverSteps: 0,
      isFetching: true,
      isServerFetchedThisSession: false,
    };
  }

  return { ...persistedState, isServerFetchedThisSession: false };
};

const updateUserProfile = (state: IDailyStepsStore, gameSettings: GameSettings) => ({
  ...state,
  maxStepsAnomalyWindowMs: gameSettings?.maxStepsAnomalyWindowMs,
  blackListApps: gameSettings?.blackListApps?.steps,
});

const updateStateOnAppStateActive = (state: IDailyStepsStore) => {
  const lastUpdated = moment(state.lastUpdated).startOf("day").format();
  const today = moment().startOf("day").format();

  if (lastUpdated !== today) {
    return {
      ...state,
      dailySteps: 0,
      serverSteps: 0,
      isFetching: true,
      isServerFetchedThisSession: false,
    };
  }

  return state;
};

const updateDailyStepsSuccess = (state: IDailyStepsStore, { challenge }: { challenge: Challenge }) => {
  const lastUpdated = moment.unix(challenge.updatedAt).format();
  return {
    ...state,
    dailySteps: challenge.incomingData.steps,
    serverSteps: challenge.incomingData.steps,
    isFetching: false,
    isSyncing: false,
    isServerFetchedThisSession: true,
    lastUpdated,
  };
};

const updateDailyStepsLocal = (state: IDailyStepsStore, dailySteps: number) => ({
  ...state,
  isSyncing: false,
  dailySteps: Math.max(state.dailySteps, dailySteps),
});

const getUserSuccess = (state: IDailyStepsStore, res: GetCurrentUser) => ({
  ...state,
  exchangeRate: res?.getCurrentUser?.passiveSteps?.exchange || getInitialState().exchangeRate,
  stepsPassiveMilestones: res?.getCurrentUser?.passiveSteps?.levelSlot?.milestones || [],
});

const getPassiveChallengesEarnRateSuccess = (
  state: IDailyStepsStore,
  res: GetUserPassiveChallengesEarnRate_getUserPassiveChallengesEarnRate
) => ({
  ...state,
  exchangeRate: res?.STEPS?.exchange || getInitialState().exchangeRate,
  stepsPassiveMilestones: res?.STEPS?.levelSlot?.milestones || [],
});

const loginUserSuccess = (state: IDailyStepsStore, res: LoginUser) => ({
  ...state,
  exchangeRate: res?.loginUser?.user?.passiveSteps?.exchange || getInitialState().exchangeRate,
  stepsPassiveMilestones: res?.loginUser?.user?.passiveSteps?.levelSlot?.milestones || [],
});

const changePanelVisibility = (state: IDailyStepsStore, payload: boolean): IDailyStepsStore => ({
  ...state,
  showPanel: payload,
});

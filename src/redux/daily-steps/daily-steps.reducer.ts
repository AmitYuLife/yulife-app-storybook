import moment from "moment";
import { REHYDRATE } from "redux-persist";
import {
  GetCurrentUser,
  GetCurrentUser_getCurrentUser_passiveSteps_exchange,
  UpsertPassiveChallenge,
} from "../../graphql/_core/schema";
import { LoginUser } from "../../graphql/_core/schema";
import {
  PEDOMETER_UPDATES_NO_NEW_DATA,
  PEDOMETER_UPDATES_START,
  PEDOMETER_START,
} from "../pedometer/pedometer.actions";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_SUCCESS } from "../user/user.actions";
import {
  STEPS_SINCE_LAST_UPDATED_SUCCESS,
  UPDATE_DAILY_STEPS_FAILED,
  UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE,
  UPDATE_DAILY_STEPS_SUCCESS_FROM_LOCAL,
  UPDATE_DAILY_STEPS_NO_NEW_DATA,
  START_STEPS_SYNCING,
} from "./daily-steps.actions";
import { SyncAction } from "@redux/_core/types";

type ExchangeRate = GetCurrentUser_getCurrentUser_passiveSteps_exchange;

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
   * When the app is opened first thing in the day, there is a steps gap between yesterday's lastUpdated
   * and midnight this morning. This value `lastUpdatedBeforeToday` records that gap.
   *
   * We can't use `lastUpdated` for that, because as soon as the app opens,
   * the pedometer starts, and `lastUpdated` is set to now.
   *
   * A null value indicates there is no known steps gap before the current value of `lastUpdated`,
   * in which case we can use `lastUpdated` as the last step update.
   */
  lastUpdatedBeforeToday: string;
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
  isFetching: true,
  isSyncing: false,
  isServerFetchedThisSession: false,
  lastUpdated: moment().startOf("day").format(),
  lastUpdatedBeforeToday: null,
});

const dailyStepsReducer = (state: IDailyStepsStore = getInitialState(), action: SyncAction): IDailyStepsStore => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.dailySteps) {
        return updatePersistedState(state, action.payload.dailySteps);
      }

      return { ...state };

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

    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);

    case STEPS_SINCE_LAST_UPDATED_SUCCESS:
      return { ...state, lastUpdatedBeforeToday: null };

    case START_STEPS_SYNCING:
      return { ...state, isSyncing: true };

    case LOGOUT_SUCCESS:
      return getInitialState();

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
      lastUpdatedBeforeToday: persistedState.lastUpdatedBeforeToday || lastUpdated,
    };
  }

  return { ...persistedState, isServerFetchedThisSession: false };
};

const updateDailyStepsSuccess = (
  state: IDailyStepsStore,
  { upsertPassiveChallenge: { challenge } }: UpsertPassiveChallenge
) => {
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
});

const loginUserSuccess = (state: IDailyStepsStore, res: LoginUser) => ({
  ...state,
  exchangeRate: res?.loginUser?.user?.passiveSteps?.exchange || getInitialState().exchangeRate,
});

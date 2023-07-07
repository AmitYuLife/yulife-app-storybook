import moment from "moment";
import { REHYDRATE } from "redux-persist";
import { DATE_FORMAT } from "@utils";
import {
  GetCurrentUser,
  GetCurrentUser_getCurrentUser_todayActivity,
  LoginUser,
  UpsertDailyPassives_upsertDailyPassives_challenges as Challenge,
  GetCurrentUser_getDailyPensionContribution as DailyPension,
  GetUserCoinLedgerTodayActivity,
} from "@graphql/_core/schema";
import { SyncAction } from "../_core/types";
import {
  UPDATE_DAILY_MEDITATION_EMPTY_RESULT,
  UPDATE_DAILY_MEDITATION_SUCCESS,
} from "../daily-meditation/daily-meditation.actions";
import { UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE, START_DAILY_STEPS } from "../daily-steps/daily-steps.actions";
import {
  GET_USER_COIN_LEDGER_TODAY_ACTIVITY_SUCCESS,
  GET_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
} from "../user/user.actions";
import { UPDATE_TOTAL_COINS } from "./coins.actions";
import { UPDATE_DAILY_CYCLING_SUCCESS } from "@redux/daily-cycling/daily-cycling.actions";
import { UPDATE_APP_STATE_ACTIVE } from "@redux/app/app.actions";
import { PEDOMETER_RESTART_ON_NEW_DAY } from "@redux/pedometer/pedometer.actions";
import { UPDATE_DAILY_PENSION } from "@redux/daily-pension/daily-pension.actions";

export interface ICoinsStore {
  dailyChallengeEarned: number; // number of coins earned in the current day through challenges
  dailyStepsEarned: number; // number of coins earned in the current day through daily steps
  dailyMeditationEarned: number; // number of coins earned in the current day through daily meditation
  dailyCyclingEarned: number; // number of coins earned in the current day through daily cycling
  dailyPensionEarned: number; // number of coins earned in the current day through daily pension contribution
  total: number;
  lastUpdated: string; // total coins the user has earned
}

export const getInitialState = (): ICoinsStore => ({
  dailyChallengeEarned: 0,
  dailyStepsEarned: 0,
  dailyMeditationEarned: 0,
  dailyCyclingEarned: 0,
  dailyPensionEarned: 0,
  total: 0,
  lastUpdated: moment().format(DATE_FORMAT),
});

const getDailyResetCoinStore = () => ({
  dailyChallengeEarned: 0,
  dailyStepsEarned: 0,
  dailyMeditationEarned: 0,
  dailyCyclingEarned: 0,
  dailyPensionEarned: 0,
});

const coinsReducer = (state: ICoinsStore = getInitialState(), action: SyncAction) => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.coins) {
        return updatePersistedState(action.payload.coins);
      }

      return { ...state };
    case UPDATE_APP_STATE_ACTIVE:
      return updateStateOnAppStateActive(state);
    case START_DAILY_STEPS:
      return startDailyStepsSuccess(state);
    case UPDATE_DAILY_MEDITATION_SUCCESS:
      return updateDailyMeditationSuccess(state, action.payload);
    case UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE:
      return updateDailyStepsSuccess(state, action.payload);
    case UPDATE_DAILY_CYCLING_SUCCESS:
      return updateDailyCyclingSuccess(state, action.payload);
    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);
    case GET_USER_COIN_LEDGER_TODAY_ACTIVITY_SUCCESS:
      return coinLedgerTodayActivitySuccess(state, action.payload);
    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);
    case UPDATE_TOTAL_COINS:
      return totalCoinsUpdated(state, action.payload);
    case UPDATE_DAILY_MEDITATION_EMPTY_RESULT:
      return { ...state, dailyMeditationEarned: 0 };

    case PEDOMETER_RESTART_ON_NEW_DAY:
      return { ...state, ...getDailyResetCoinStore() };

    case UPDATE_DAILY_PENSION:
      return updateDailyPension(state, action.payload);

    case LOGOUT_SUCCESS:
      return getInitialState();
    default:
      return state;
  }
};

export default coinsReducer;

function getShouldResetCoinStore(lastUpdated: string) {
  const today = moment().format(DATE_FORMAT);

  return lastUpdated !== today;
}

const updatePersistedState = (persistedState: ICoinsStore) => {
  /**
   * Whever a new version of the app introduced a new field into the store,
   * the old version during update does not have it, for such use cases we should add it manually.
   *
   * Every time we add new field in the store we should take care to do that, for now we have it for
   * lastUpdated and dailyMeditationEarned
   */
  if (!persistedState.lastUpdated || !persistedState.dailyMeditationEarned || !persistedState.dailyCyclingEarned) {
    const newState = { ...persistedState };

    if (!persistedState.dailyMeditationEarned) {
      newState.dailyMeditationEarned = 0;
    }

    if (!persistedState.lastUpdated) {
      newState.lastUpdated = moment().format(DATE_FORMAT);
    }

    if (!persistedState.dailyCyclingEarned) {
      newState.dailyCyclingEarned = 0;
    }

    return newState;
  }

  const shouldResetCoinStore = getShouldResetCoinStore(persistedState.lastUpdated);

  if (shouldResetCoinStore) {
    return { ...persistedState, ...getDailyResetCoinStore() };
  }

  return { ...persistedState };
};

const updateStateOnAppStateActive = (state: ICoinsStore) => {
  const shouldResetCoinStore = getShouldResetCoinStore(state.lastUpdated);

  if (shouldResetCoinStore) {
    return { ...state, ...getDailyResetCoinStore() };
  }

  return { ...state };
};

const startDailyStepsSuccess = (state: ICoinsStore) => {
  // Ensures that the coin state is reset immediately when the user access the app for the first time that day.
  const shouldResetCoinStore = getShouldResetCoinStore(state.lastUpdated);

  if (shouldResetCoinStore) {
    return { ...state, ...getDailyResetCoinStore() };
  }

  return state;
};

const sumCompletedChallenges = (challenges: GetCurrentUser_getCurrentUser_todayActivity[] = []): number =>
  challenges.reduce((prev, challenge) => prev + challenge.earned, 0);

const updateDailyStepsSuccess = (
  state: ICoinsStore,
  { challenge, currentBalance }: { challenge: Challenge; currentBalance: number }
): ICoinsStore => ({
  ...state,
  dailyStepsEarned: challenge?.yuCoinAwarded || 0,
  total: currentBalance || state.total,
  lastUpdated: moment().format(DATE_FORMAT),
});

const updateDailyMeditationSuccess = (state: ICoinsStore, challenge: Challenge): ICoinsStore => ({
  ...state,
  dailyMeditationEarned: challenge?.yuCoinAwarded || 0,
  lastUpdated: moment().format(DATE_FORMAT),
});

const updateDailyCyclingSuccess = (state: ICoinsStore, challenge: Challenge): ICoinsStore => ({
  ...state,
  dailyCyclingEarned: challenge?.yuCoinAwarded || 0,
});

const updateDailyPension = (state: ICoinsStore, pension: DailyPension): ICoinsStore => ({
  ...state,
  dailyPensionEarned: pension?.yuCoinAwarded || 0,
});

const loginUserSuccess = (state: ICoinsStore, { loginUser }: LoginUser): ICoinsStore => {
  return {
    ...state,
    dailyChallengeEarned: sumCompletedChallenges(loginUser?.user?.todayActivity),
    total: loginUser?.user?.coinLedger?.currentBalance || state.total,
    lastUpdated: moment().format(DATE_FORMAT),
  };
};

const coinLedgerTodayActivitySuccess = (
  state: ICoinsStore,
  coinLedgerTodayActivity: GetUserCoinLedgerTodayActivity
): ICoinsStore => ({
  ...state,
  total: coinLedgerTodayActivity?.coinLedger?.currentBalance || state.total,
  dailyChallengeEarned: sumCompletedChallenges(coinLedgerTodayActivity?.todayActivity),
  lastUpdated: moment().format(DATE_FORMAT),
});

const getUserSuccess = (state: ICoinsStore, { getCurrentUser }: GetCurrentUser): ICoinsStore => ({
  ...state,
  dailyChallengeEarned: sumCompletedChallenges(getCurrentUser?.todayActivity),
  total: getCurrentUser?.coinLedger?.currentBalance || state.total,
  lastUpdated: moment().format(DATE_FORMAT),
});

const totalCoinsUpdated = (state: ICoinsStore, totalCoins: number): ICoinsStore => ({
  ...state,
  total: totalCoins,
});

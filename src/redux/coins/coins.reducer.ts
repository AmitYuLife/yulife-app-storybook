import moment from "moment";
import { REHYDRATE } from "redux-persist";
import { DATE_FORMAT } from "@services/utils";
import {
  GetCurrentUser,
  GetCurrentUser_getCurrentUser_todayActivity,
  LoginUser,
  UpsertPassiveChallenge,
} from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";
import {
  UPDATE_DAILY_MEDITATION_EMPTY_RESULT,
  UPDATE_DAILY_MEDITATION_SUCCESS,
} from "../daily-meditation/daily-meditation.actions";
import { UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE, START_DAILY_STEPS } from "../daily-steps/daily-steps.actions";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_SUCCESS } from "../user/user.actions";

export interface ICoinsStore {
  dailyChallengeEarned: number; // number of coins earned in the current day through challenges
  dailyStepsEarned: number; // number of coins earned in the current day through daily steps
  dailyMeditationEarned: number; // number of coins earned in the current day through daily meditation
  total: number;
  lastUpdated: string; // total coins the user has earned
}

export const getInitialState = (): ICoinsStore => ({
  dailyChallengeEarned: 0,
  dailyStepsEarned: 0,
  dailyMeditationEarned: 0,
  total: 0,
  lastUpdated: moment().format(DATE_FORMAT),
});

const getDailyResetCoinStore = () => ({
  dailyChallengeEarned: 0,
  dailyStepsEarned: 0,
  dailyMeditationEarned: 0,
});

const coinsReducer = (state: ICoinsStore = getInitialState(), action: SyncAction) => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.coins) {
        return updatePersistedState(action.payload.coins);
      }

      return { ...state };
    case START_DAILY_STEPS:
      return startDailyStepsSuccess(state);
    case UPDATE_DAILY_MEDITATION_SUCCESS:
      return updateDailyMeditationSuccess(state, action.payload);
    case UPDATE_DAILY_STEPS_SUCCESS_FROM_REMOTE:
      return updateDailyStepsSuccess(state, action.payload);
    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);
    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);
    case UPDATE_DAILY_MEDITATION_EMPTY_RESULT:
      return { ...state, dailyMeditationEarned: 0 };

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
  if (!persistedState.lastUpdated || !persistedState.dailyMeditationEarned) {
    const newState = { ...persistedState };

    if (!persistedState.dailyMeditationEarned) {
      newState.dailyMeditationEarned = 0;
    }

    if (!persistedState.lastUpdated) {
      newState.lastUpdated = moment().format(DATE_FORMAT);
    }

    return newState;
  }

  const shouldResetCoinStore = getShouldResetCoinStore(persistedState.lastUpdated);

  if (shouldResetCoinStore) {
    return { ...persistedState, ...getDailyResetCoinStore() };
  }

  return { ...persistedState };
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
  { upsertPassiveChallenge }: UpsertPassiveChallenge
): ICoinsStore => ({
  ...state,
  dailyStepsEarned: upsertPassiveChallenge?.challenge?.yuCoinAwarded || 0,
  total: upsertPassiveChallenge?.totalCoins || state.total,
  lastUpdated: moment().format(DATE_FORMAT),
});

const updateDailyMeditationSuccess = (
  state: ICoinsStore,
  { upsertPassiveChallenge }: UpsertPassiveChallenge
): ICoinsStore => ({
  ...state,
  dailyMeditationEarned: upsertPassiveChallenge?.challenge?.yuCoinAwarded || 0,
  total: upsertPassiveChallenge?.totalCoins || state.total,
  lastUpdated: moment().format(DATE_FORMAT),
});

const loginUserSuccess = (state: ICoinsStore, { loginUser }: LoginUser): ICoinsStore => ({
  ...state,
  dailyChallengeEarned: sumCompletedChallenges(loginUser?.user?.todayActivity),
  total: loginUser?.user?.coinLedger?.currentBalance || state.total,
  lastUpdated: moment().format(DATE_FORMAT),
});

const getUserSuccess = (state: ICoinsStore, { getCurrentUser }: GetCurrentUser): ICoinsStore => ({
  ...state,
  dailyChallengeEarned: sumCompletedChallenges(getCurrentUser?.todayActivity),
  total: getCurrentUser?.coinLedger?.currentBalance || state.total,
  lastUpdated: moment().format(DATE_FORMAT),
});

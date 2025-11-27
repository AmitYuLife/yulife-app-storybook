import moment from "moment";
import { DATE_FORMAT } from "@utils";

import { Challenge } from "../_core/types";
import { updateDailyMeditation, updateDailyMeditationEmptyResult } from "../daily-meditation/daily-meditation.actions";
import { updateDailyStepsSuccessFromRemote } from "../daily-steps/daily-steps.actions";

import { totalCoinsUpdated as totalCoinsUpdatedAction } from "./coins.actions";
import { updateDailyCycling } from "@redux/daily-cycling/daily-cycling.actions";
import { restartPedometerOnNewDay } from "@redux/pedometer/pedometer.actions";
import { updateDailyPensionSuccess } from "@redux/daily-pension/daily-pension.actions";
import { getUserCoinLedgerSuccess, getUserTodayActivitySuccess, logOutSuccess } from "@redux/user/user.actions";
import { updateCurrentDate } from "@redux/device/device.actions";
import { ChallengeCoinsEarned, ICoinsStore, ICoinsStoreGetCoinLedger, ICoinsTodayEarned } from "./coins.types";
import { DailyPension } from "@redux/daily-pension/daily-pension.types";
import { createReducer } from "@reduxjs/toolkit";
import { rehydrateAction } from "@redux/persist/persist.actions";

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

const coinsReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(rehydrateAction, (state, action) => {
    if (action.payload && action.payload.coins) {
      return updatePersistedState(action.payload.coins);
    }

    return { ...state };
  });
  builder.addCase(updateCurrentDate, (state) => {
    return { ...state, ...getDailyResetCoinStore() };
  });
  builder.addCase(updateDailyMeditation, (state, action) => updateDailyMeditationSuccess(state, action.payload));
  builder.addCase(updateDailyStepsSuccessFromRemote, (state, action) => updateDailyStepsSuccess(state, action.payload));
  builder.addCase(updateDailyCycling, (state, action) => updateDailyCyclingSuccess(state, action.payload));
  builder.addCase(updateDailyPensionSuccess, (state, action) => updateDailyPension(state, action.payload));
  builder.addCase(getUserCoinLedgerSuccess, (state, action) => coinLedgerSuccess(state, action.payload));
  builder.addCase(getUserTodayActivitySuccess, (state, action) => todayActivitySuccess(state, action.payload));
  builder.addCase(totalCoinsUpdatedAction, (state, action) => totalCoinsUpdated(state, action.payload));
  builder.addCase(updateDailyMeditationEmptyResult, (state) => ({ ...state, dailyMeditationEarned: 0 }));
  builder.addCase(restartPedometerOnNewDay, (state) => ({ ...state, ...getDailyResetCoinStore() }));
  builder.addCase(logOutSuccess, () => getInitialState());
  builder.addDefaultCase((state) => state);
});

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

  // do we want the reset to only run after UPDATE_CURRENT_DATE
  // might show a bit of the numbers showing a number then going down.
  const shouldResetCoinStore = getShouldResetCoinStore(persistedState.lastUpdated);

  if (shouldResetCoinStore) {
    return { ...persistedState, ...getDailyResetCoinStore() };
  }

  return { ...persistedState };
};

const sumCompletedChallenges = (challenges: ChallengeCoinsEarned[] = []): number =>
  challenges.reduce((prev, challenge) => prev + (challenge.earned || 0), 0);

const updateDailyStepsSuccess = (
  state: ICoinsStore,
  { challenge, currentBalance }: { challenge: Challenge; currentBalance: number }
): ICoinsStore => ({
  ...state,
  dailyStepsEarned: challenge?.yuCoinAwarded || 0,
  total: currentBalance ?? state.total,
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

const coinLedgerSuccess = (state: ICoinsStore, coinLedger: ICoinsStoreGetCoinLedger): ICoinsStore => ({
  ...state,
  total: coinLedger?.total ?? state.total,
  lastUpdated: moment().format(DATE_FORMAT),
});

const todayActivitySuccess = (state: ICoinsStore, res: ICoinsTodayEarned): ICoinsStore => ({
  ...state,
  dailyChallengeEarned: sumCompletedChallenges(res?.todayActivity),
  dailyCyclingEarned: res?.dailyCyclingEarned ?? state.dailyCyclingEarned,
  lastUpdated: moment().format(DATE_FORMAT),
});

const totalCoinsUpdated = (state: ICoinsStore, totalCoins: number): ICoinsStore => ({
  ...state,
  total: totalCoins,
});

export default coinsReducer;

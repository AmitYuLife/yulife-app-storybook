import moment from "moment";
import {
  updatePedometerStartAction,
  updatePedometerNoNewDataAction,
  startPedometerUpdates,
} from "../pedometer/pedometer.actions";
import {
  getUserPassiveChallengesEarnRateSuccess,
  getUserSuccess,
  logOutSuccess,
  loginUserSuccess,
  updateUserProfile,
} from "../user/user.actions";
import {
  stepsWithNoUpdate,
  updateDailyStepsSuccessFromLocal,
  updateDailyStepsSuccessFromRemote,
  updateDailyStepsFailed,
  startStepsSyncing,
  changePanelVisibility,
} from "./daily-steps.actions";
import { Challenge } from "@redux/_core/types";
import { updateCurrentDate } from "@redux/device/device.actions";
import {
  IDailyStepsGetUserSuccessPayload,
  IDailyStepsStore,
  IDailyStepsUpdateUserProfilePayload,
} from "./daily-steps.types";
import { createReducer } from "@reduxjs/toolkit";
import { rehydrateAction } from "@redux/persist/persist.actions";

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
  blackListApps: [],
  showPanel: false,
});

const dailyStepsReducer = createReducer<IDailyStepsStore>(getInitialState(), (builder) => {
  builder.addCase(rehydrateAction, (state, action) => updatePersistedState(state, action.payload?.dailySteps));
  builder.addCase(updateCurrentDate, (state) => updateCurrentDatePayload(state));
  builder.addCase(updatePedometerStartAction, (state) => ({ ...state, isFetching: true }));
  builder.addCase(stepsWithNoUpdate, (state) => ({ ...state, isFetching: false }));
  builder.addCase(updatePedometerNoNewDataAction, (state) => ({ ...state, isFetching: false }));
  builder.addCase(updateDailyStepsSuccessFromLocal, (state, action) => updateDailyStepsLocal(state, action.payload));
  builder.addCase(updateDailyStepsSuccessFromRemote, (state, action) =>
    updateDailyStepsSuccessFromRemotePayload(state, action.payload)
  );
  builder.addCase(updateDailyStepsFailed, (state) => ({ ...state, isFetching: false, isSyncing: false }));
  builder.addCase(startPedometerUpdates, (state) => ({ ...state, isServerFetchedThisSession: false }));
  builder.addCase(getUserSuccess, (state, action) => getUserSuccessPayload(state, action.payload));
  builder.addCase(getUserPassiveChallengesEarnRateSuccess, (state, action) =>
    getPassiveChallengesEarnRateSuccess(state, action.payload)
  );
  builder.addCase(loginUserSuccess, (state, action) => getPassiveChallengesEarnRateSuccess(state, action.payload));
  builder.addCase(startStepsSyncing, (state) => ({ ...state, isSyncing: true }));
  builder.addCase(logOutSuccess, getInitialState);
  builder.addCase(updateUserProfile, (state, action) => updateUserProfilePayload(state, action.payload));
  builder.addCase(changePanelVisibility, (state, action) => changePanelVisibilityPayload(state, action.payload));

  builder.addDefaultCase((state) => state);
});

export default dailyStepsReducer;

const updatePersistedState = (state: IDailyStepsStore, persistedState: IDailyStepsStore) => {
  if (!persistedState) {
    return state;
  }

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

const updateUserProfilePayload = (state: IDailyStepsStore, res: IDailyStepsUpdateUserProfilePayload) => ({
  ...state,
  blackListApps: res?.stepsGameSettings?.blackListApps || [],
});

const updateDailyStepsSuccessFromRemotePayload = (
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

const getUserSuccessPayload = (state: IDailyStepsStore, res: IDailyStepsGetUserSuccessPayload) => ({
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

const changePanelVisibilityPayload = (state: IDailyStepsStore, payload: boolean): IDailyStepsStore => ({
  ...state,
  showPanel: payload,
});

const updateCurrentDatePayload = (state: IDailyStepsStore) => ({
  ...state,
  localSteps: 0,
  dailySteps: 0,
  serverSteps: 0,
  isFetching: false,
  isServerFetchedThisSession: false,
});

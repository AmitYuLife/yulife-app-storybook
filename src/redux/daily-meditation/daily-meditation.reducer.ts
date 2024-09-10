import moment from "moment";
import {
  getUserPassiveChallengesEarnRateSuccess,
  getUserSuccess,
  getUserTodayActivitySuccess,
  logOutSuccess,
  loginUserSuccess,
} from "../user/user.actions";
import {
  updateDailyMeditation,
  updateDailyMeditationEmptyResult,
  updateInAppMeditation,
} from "./daily-meditation.actions";
import { Challenge } from "@redux/_core/types";
import { restartPedometerOnNewDay } from "@redux/pedometer/pedometer.actions";
import { updateCurrentDate } from "@redux/device/device.actions";
import {
  IAppMeditationPayload,
  IAppMeditationPayloadLocal,
  IDailyMeditationGetCurrentUserPayload,
  IDailyMeditationStore,
} from "./daily-meditation.types";
import { createReducer } from "@reduxjs/toolkit";
import { rehydrateAction } from "@redux/persist/persist.actions";

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
    date: null,
  },
  lastUpdated: moment().startOf("day").format(),
});

const dailyMeditationReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(rehydrateAction, (state, action) => updatePersistedState(state, action.payload?.dailyMeditation));
  builder.addCase(updateCurrentDate, (state) => resetDailyMeditationState(state));
  builder.addCase(updateDailyMeditation, (state, action) => updateDailyMeditationSuccess(state, action.payload));
  builder.addCase(restartPedometerOnNewDay, (state) => ({ ...state, dailyMeditation: 0 }));
  builder.addCase(updateDailyMeditationEmptyResult, (state) => ({ ...state, dailyMeditation: 0 }));
  builder.addCase(getUserSuccess, (state, action) => getUserSuccessPayload(state, action.payload));
  builder.addCase(loginUserSuccess, (state, action) => getPassiveChallengesEarnRateSuccess(state, action.payload));
  builder.addCase(getUserPassiveChallengesEarnRateSuccess, (state, action) =>
    getPassiveChallengesEarnRateSuccess(state, action.payload)
  );
  builder.addCase(updateInAppMeditation, (state, action) => updateInAppMeditationPayloadLocal(state, action.payload));
  builder.addCase(logOutSuccess, () => getInitialState());
  builder.addCase(getUserTodayActivitySuccess, (state, action) =>
    updateInAppMeditationPayload(
      state,
      action.payload.inAppMeditation,
      action.payload.tempGameGetInAppMeditationFromServer
    )
  );

  builder.addDefaultCase((state) => state);
});

const updateDailyMeditationSuccess = (state: IDailyMeditationStore, challenge: Challenge) => {
  if (challenge?.updatedAt) {
    const updatedAt = moment.unix(challenge.updatedAt).format();

    return {
      ...state,
      dailyMeditation: challenge.incomingData?.meditation || 0,
      lastUpdated: updatedAt,
    };
  }

  return state;
};

const updatePersistedState = (state: IDailyMeditationStore, persistedState: IDailyMeditationStore) => {
  if (!persistedState?.lastUpdated) {
    return state;
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

const getUserSuccessPayload = (state: IDailyMeditationStore, res: IDailyMeditationGetCurrentUserPayload) => ({
  ...state,
  exchangeRate: res?.passiveMeditation?.exchangeRate || getInitialState().exchangeRate,
});

const getPassiveChallengesEarnRateSuccess = (
  state: IDailyMeditationStore,
  res: IDailyMeditationGetCurrentUserPayload
) => {
  const defaultExchangeRate = getInitialState().exchangeRate;
  return {
    ...state,
    exchangeRate: {
      yucoin: res?.passiveMeditation.exchangeRate.yucoin || defaultExchangeRate.yucoin,
      steps: res?.passiveMeditation.exchangeRate.steps || defaultExchangeRate.steps,
      meditation: res?.passiveMeditation.exchangeRate.meditation || defaultExchangeRate.meditation,
      surge: res?.passiveMeditation.exchangeRate.surge || defaultExchangeRate.surge,
    },
  };
};

const updateInAppMeditationPayload = (
  state: IDailyMeditationStore,
  payload: IAppMeditationPayload,
  tempGameGetInAppMeditationFromServer: boolean
): IDailyMeditationStore => {
  const { duration, date } = payload;
  const lastUpdated = moment().format();

  if (!tempGameGetInAppMeditationFromServer) {
    return { ...state };
  }

  return {
    ...state,
    inAppMeditation: {
      duration,
      lastUpdated,
      date,
    },
  };
};

const updateInAppMeditationPayloadLocal = (
  state: IDailyMeditationStore,
  payload: IAppMeditationPayloadLocal
): IDailyMeditationStore => {
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
      date: "",
    },
  };
};

export default dailyMeditationReducer;

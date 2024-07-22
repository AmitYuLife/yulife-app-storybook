import { createReducer } from "@reduxjs/toolkit";
import { getUserActiveStreakSuccess, getUserSuccess, logOutSuccess, loginUserSuccess } from "../user/user.actions";
import { IStreaksGetUserSuccessPayload, IStreaksStore } from "./streaks.types";

const DEFAULT_ACTIVE_STREAK = {
  id: "",
  nextStreakAvailableAt: "",
  maxStreak: 0,
  streak: 0,
  streakAwardId: "",
  type: "yucoin",
  value: 0,
  canUseStreakSaver: false,
  availableStreakSavers: 0,
};

export const getInitialState = (): IStreaksStore => ({
  id: "",
  isAvailable: false,
  isRedeemed: false,
  maxStreak: 0,
  nextStreakAvailableAt: "",
  streak: 0,
  streakAwardId: "",
  type: "yucoin",
  value: 0,
  canUseStreakSaver: false,
  availableStreakSavers: 0,
});

const streaksReducer = createReducer(getInitialState(), (builder) => {
  builder
    .addCase(getUserSuccess, (state, action) => getActiveStreakSuccess(state, action.payload))
    .addCase(loginUserSuccess, (state, action) => getActiveStreakSuccess(state, action.payload))
    .addCase(getUserActiveStreakSuccess, (state, action) => getActiveStreakSuccess(state, action.payload))
    .addCase(logOutSuccess, () => getInitialState())
    .addDefaultCase((state) => state);
});

const getActiveStreakSuccess = (state: IStreaksStore, data: IStreaksGetUserSuccessPayload): IStreaksStore => {
  const activeStreak: Omit<IStreaksStore, "isAvailable" | "isRedeemed"> = {
    id: data?.activeStreak.id || DEFAULT_ACTIVE_STREAK.id,
    nextStreakAvailableAt: data?.activeStreak.nextStreakAvailableAt || DEFAULT_ACTIVE_STREAK.nextStreakAvailableAt,
    maxStreak: data?.activeStreak.maxStreak || DEFAULT_ACTIVE_STREAK.maxStreak,
    streak: data?.activeStreak.streak || DEFAULT_ACTIVE_STREAK.streak,
    streakAwardId: data?.activeStreak.streakAwardId || DEFAULT_ACTIVE_STREAK.streakAwardId,
    type: data?.activeStreak.type || DEFAULT_ACTIVE_STREAK.type,
    value: data?.activeStreak.value || DEFAULT_ACTIVE_STREAK.value,
    canUseStreakSaver: data?.activeStreak.canUseStreakSaver || DEFAULT_ACTIVE_STREAK.canUseStreakSaver,
    availableStreakSavers: data?.activeStreak.availableStreakSavers || DEFAULT_ACTIVE_STREAK.availableStreakSavers,
  };

  return {
    ...state,
    isAvailable: !!activeStreak.id,
    isRedeemed: activeStreak.streak === activeStreak.maxStreak && !activeStreak.streakAwardId,
    ...activeStreak,
  };
};

export default streaksReducer;

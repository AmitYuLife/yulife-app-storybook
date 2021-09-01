import { GetCurrentUser, LoginUser } from "@graphql/_core/schema";
import { SyncAction } from "../_core/types";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_SUCCESS } from "../user/user.actions";
import { DISPLAY_STREAKS_FIRST } from "./streaks.actions";

export interface IStreaksStore {
  displayStreak: boolean;
  id: string;
  isAvailable: boolean;
  isRedeemed: boolean;
  maxStreak: number;
  nextStreakAvailableAt: string;
  streak: number;
  streakAwardId: string;
  type: string;
  value: number;
}

const DEFAULT_ACTIVE_STREAK = {
  id: "",
  nextStreakAvailableAt: "",
  maxStreak: 0,
  streak: 0,
  streakAwardId: "",
  type: "yucoin",
  value: 0,
};

export const getInitialState = (): IStreaksStore => ({
  displayStreak: false,
  id: "",
  isAvailable: false,
  isRedeemed: false,
  maxStreak: 0,
  nextStreakAvailableAt: "",
  streak: 0,
  streakAwardId: "",
  type: "yucoin",
  value: 0,
});

const streaksReducer = (state: IStreaksStore = getInitialState(), action: SyncAction): IStreaksStore => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action.payload);

    case DISPLAY_STREAKS_FIRST:
      return displayStreaks(state);

    case LOGOUT_SUCCESS:
      return getInitialState();

    default:
      return state;
  }
};

export default streaksReducer;

const getUserSuccess = (state: IStreaksStore, data: GetCurrentUser): IStreaksStore => {
  const activeStreak = data?.getCurrentUser?.activeStreak || DEFAULT_ACTIVE_STREAK;

  return {
    ...state,
    isAvailable: !!activeStreak.id,
    isRedeemed: activeStreak.streak === activeStreak.maxStreak && !activeStreak.streakAwardId,
    ...activeStreak,
  };
};

const loginUserSuccess = (state: IStreaksStore, data: LoginUser): IStreaksStore => {
  const activeStreak = data?.loginUser?.user.activeStreak || DEFAULT_ACTIVE_STREAK;

  return {
    ...state,
    isAvailable: !!activeStreak.id,
    isRedeemed: activeStreak.streak === activeStreak.maxStreak && !activeStreak.streakAwardId,
    ...activeStreak,
  };
};

const displayStreaks = (state: IStreaksStore): IStreaksStore => ({
  ...state,
  displayStreak: true,
});

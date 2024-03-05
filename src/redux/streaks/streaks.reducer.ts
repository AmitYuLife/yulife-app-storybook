import { GetUserActiveStreak_getUserActiveStreak, LoginUser } from "@graphql/_core/schema";
import { SyncAction } from "../_core/types";
import {
  GET_USER_ACTIVE_STREAK_SUCCESS,
  GET_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_SUCCESS,
} from "../user/user.actions";
import { IStreaksGetUserSuccessPayload } from "./streaks.types";

export interface IStreaksStore {
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

    case GET_USER_ACTIVE_STREAK_SUCCESS:
      return getActiveStreakSuccess(state, action.payload);

    case LOGOUT_SUCCESS:
      return getInitialState();

    default:
      return state;
  }
};

export default streaksReducer;

const getUserSuccess = (state: IStreaksStore, data: IStreaksGetUserSuccessPayload): IStreaksStore => {
  const activeStreak = data?.activeStreak || DEFAULT_ACTIVE_STREAK;

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

const getActiveStreakSuccess = (
  state: IStreaksStore,
  data: GetUserActiveStreak_getUserActiveStreak = DEFAULT_ACTIVE_STREAK
): IStreaksStore => {
  return {
    ...state,
    isAvailable: !!data.id,
    isRedeemed: data.streak === data.maxStreak && !data.streakAwardId,
    ...data,
  };
};

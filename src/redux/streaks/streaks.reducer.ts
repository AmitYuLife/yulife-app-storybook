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
  canUseStreakSaver: boolean;
  availableStreakSavers: number;
}

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

const streaksReducer = (state: IStreaksStore = getInitialState(), action: SyncAction): IStreaksStore => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return getActiveStreakSuccess(state, action.payload);

    case LOGIN_USER_SUCCESS:
      return getActiveStreakSuccess(state, action.payload);

    case GET_USER_ACTIVE_STREAK_SUCCESS:
      return getActiveStreakSuccess(state, action.payload);

    case LOGOUT_SUCCESS:
      return getInitialState();

    default:
      return state;
  }
};

export default streaksReducer;

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

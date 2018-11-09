import { GetCurrentUser, LoginUser } from "../../graphql/_core/schema";
import { pathOr } from "../../services/utils";
import { SyncAction } from "../_core/types";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import { DISPLAY_STREAKS_FIRST, REDEEM_STREAK } from "./streaks.actions";

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

export const initialState: IStreaksStore = {
    displayStreak: false,
    id: "",
    isAvailable: false,
    isRedeemed: false,
    maxStreak: 0,
    nextStreakAvailableAt: "",
    streak: 0,
    streakAwardId: "",
    type: "yucoin",
    value: 0
};

const streaksReducer = (state: IStreaksStore = initialState, action: SyncAction): IStreaksStore => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return getUserSuccess(state, action.payload);

        case LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action.payload);

        case DISPLAY_STREAKS_FIRST:
            return displayStreaks(state);

        case REDEEM_STREAK:
            return redeemStreak(state);

        default:
            return state;
    }
};

export default streaksReducer;

const getUserSuccess = (state: IStreaksStore, data: GetCurrentUser): IStreaksStore => {
    const id = pathOr<string>(data, "getCurrentUser.activeStreak.id", "");
    const nextStreakAvailableAt = pathOr<string>(data, "getCurrentUser.coinLedger.nextStreakAvailableAt", "");
    const isAvailable = !!id;

    if (id !== state.id) {
        return {
            displayStreak: state.displayStreak,
            id,
            isAvailable,
            isRedeemed: false,
            maxStreak: pathOr<number>(data, "getCurrentUser.activeStreak.maxStreak", 0),
            nextStreakAvailableAt,
            streak: pathOr<number>(data, "getCurrentUser.coinLedger.currentStreak", 0),
            streakAwardId: "",
            type: pathOr<string>(data, "getCurrentUser.activeStreak.type", "yucoin"),
            value: pathOr<number>(data, "getCurrentUser.activeStreak.value", 0)
        };
    }

    return {
        ...state,
        id,
        isAvailable,
        nextStreakAvailableAt,
        streak: pathOr<number>(data, "getCurrentUser.coinLedger.currentStreak", 0),
        streakAwardId: pathOr<string>(data, "getCurrentUser.activeStreak.streakAwardId", "")
    };
};

const loginUserSuccess = (state: IStreaksStore, data: LoginUser): IStreaksStore => {
    const id = pathOr<string>(data, "loginUser.user.activeStreak.id", "");
    const nextStreakAvailableAt = pathOr<string>(data, "loginUser.user.coinLedger.nextStreakAvailableAt", "");
    const streak = pathOr<number>(data, "getCurrentUser.coinLedger.currentStreak", 0);
    const isAvailable = !!id;

    if (id !== state.id) {
        return {
            displayStreak: state.displayStreak,
            id,
            isAvailable,
            isRedeemed: false,
            maxStreak: pathOr<number>(data, "loginUser.user.activeStreak.maxStreak", 0),
            nextStreakAvailableAt,
            streak,
            streakAwardId: "",
            type: pathOr<string>(data, "loginUser.user.activeStreak.type", "yucoin"),
            value: pathOr<number>(data, "loginUser.user.activeStreak.value", 0)
        };
    }

    return {
        ...state,
        displayStreak: streak > 0 ? true : state.displayStreak,
        id,
        isAvailable,
        nextStreakAvailableAt,
        streak,
        streakAwardId: pathOr<string>(data, "loginUser.user.activeStreak.id", "")
    };
};

const displayStreaks = (state: IStreaksStore): IStreaksStore => ({
    ...state,
    displayStreak: true
});

const redeemStreak = (state: IStreaksStore): IStreaksStore => ({
    ...state,
    isRedeemed: true
});

import { GetCurrentUser, LoginUser } from "../../graphql/_core/schema";
import { pathOr } from "../../services/utils";
import { SyncAction } from "../_core/types";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";
import { calculateStreak } from "./streaks.helpers";

export interface IStreaksStore {
    id: string;
    isAvailable: boolean;
    maxStreak: number;
    nextStreakAvailableAt: string;
    streak: number;
    type: string;
    value: number;
}

export const initialState: IStreaksStore = {
    id: "",
    isAvailable: false,
    maxStreak: 0,
    nextStreakAvailableAt: "",
    streak: 0,
    type: "yucoin",
    value: 0
};

const streaksReducer = (state: IStreaksStore = initialState, action: SyncAction): IStreaksStore => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return getUserSuccess(state, action.payload);

        case LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action.payload);

        default:
            return state;
    }
};

export default streaksReducer;

const getUserSuccess = (state: IStreaksStore, data: GetCurrentUser): IStreaksStore => {
    const id = pathOr<string>(data, "getCurrentUser.activeStreak.id", "");
    const isAvailable = !!id;

    if (id !== state.id) {
        const maxStreak = pathOr<number>(data, "getCurrentUser.activeStreak.maxStreak", 0);

        return {
            id,
            isAvailable,
            maxStreak,
            nextStreakAvailableAt: pathOr<string>(data, "getCurrentUser.coinLedger.nextStreakAvailableAt", ""),
            streak: calculateStreak(pathOr<number>(data, "getCurrentUser.coinLedger.currentStreak", 0), maxStreak),
            type: pathOr<string>(data, "getCurrentUser.activeStreak.type", "yucoin"),
            value: pathOr<number>(data, "getCurrentUser.activeStreak.value", 0)
        };
    }

    return {
        ...state,
        id,
        isAvailable,
        nextStreakAvailableAt: pathOr<string>(data, "getCurrentUser.coinLedger.nextStreakAvailableAt", ""),
        streak: calculateStreak(pathOr<number>(data, "getCurrentUser.coinLedger.currentStreak", 0), state.maxStreak)
    };
};

const loginUserSuccess = (state: IStreaksStore, data: LoginUser): IStreaksStore => {
    const id = pathOr<string>(data, "loginUser.user.activeStreak.id", "");
    const isAvailable = !!id;

    if (id !== state.id) {
        const maxStreak = pathOr<number>(data, "loginUser.user.activeStreak.maxStreak", 0);

        return {
            id,
            isAvailable,
            maxStreak,
            nextStreakAvailableAt: pathOr<string>(data, "loginUser.user.coinLedger.nextStreakAvailableAt", ""),
            streak: calculateStreak(pathOr<number>(data, "loginUser.user.coinLedger.currentStreak", 0), maxStreak),
            type: pathOr<string>(data, "loginUser.user.activeStreak.type", "yucoin"),
            value: pathOr<number>(data, "loginUser.user.activeStreak.value", 0)
        };
    }

    return {
        ...state,
        id,
        isAvailable,
        nextStreakAvailableAt: pathOr<string>(data, "loginUser.user.coinLedger.nextStreakAvailableAt", ""),
        streak: calculateStreak(pathOr<number>(data, "loginUser.user.coinLedger.currentStreak", 0), state.maxStreak)
    };
};

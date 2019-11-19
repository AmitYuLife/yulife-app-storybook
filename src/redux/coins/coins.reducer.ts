import moment from "moment";
import { REHYDRATE } from "redux-persist";
import {
    GetCurrentUser,
    GetCurrentUser_getCurrentUser_todayActivity,
    LoginUser,
    UpsertPassiveChallenge
} from "../../graphql/_core/schema";
import { pathOr } from "../../services/utils";
import { SyncAction } from "../_core/types";
import {
    UPDATE_DAILY_MEDITATION_EMPTY_RESULT,
    UPDATE_DAILY_MEDITATION_SUCCESS
} from "../daily-meditation/daily-meditation.actions";
import { UPDATE_DAILY_STEPS_SUCCESS } from "../daily-steps/daily-steps.actions";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";

const FORMAT = "YYYY-MM-DD";
export interface ICoinsStore {
    dailyChallengeEarned: number; // number of coins earned in the current day through challenges
    dailyStepsEarned: number; // number of coins earned in the current day through daily steps
    dailyMeditationEarned: number; // number of coins earned in the current day through daily meditation
    total: number;
    lastUpdated: string; // total coins the user has earned
}

export const initialState: ICoinsStore = {
    dailyChallengeEarned: 0,
    dailyStepsEarned: 0,
    dailyMeditationEarned: 0,
    total: 0,
    lastUpdated: moment().format(FORMAT)
};

const coinsReducer = (state: ICoinsStore = initialState, action: SyncAction) => {
    switch (action.type) {
        case REHYDRATE:
            if (action.payload && action.payload.coins) {
                return updatePersistedState(action.payload.coins);
            }
            return { ...state };
        case UPDATE_DAILY_MEDITATION_SUCCESS:
            return updateDailyMeditationSuccess(state, action.payload);
        case UPDATE_DAILY_STEPS_SUCCESS:
            return updateDailyStepsSuccess(state, action.payload);
        case LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action.payload);
        case GET_USER_SUCCESS:
            return getUserSuccess(state, action.payload);
        case UPDATE_DAILY_MEDITATION_EMPTY_RESULT:
            return { ...state, dailyMeditationEarned: 0 };
        default:
            return state;
    }
};

export default coinsReducer;

const updatePersistedState = (persistedState: ICoinsStore) => {
    if (!persistedState.lastUpdated) {
        return { ...persistedState, lastUpdated: moment().format(FORMAT) };
    }
    const lastUpdated = persistedState.lastUpdated;
    const today = moment().format(FORMAT);

    if (lastUpdated !== today) {
        return { ...persistedState, dailyChallengeEarned: 0, dailyStepsEarned: 0, dailyMeditationEarned: 0 };
    }

    return { ...persistedState };
};

const sumCompletedChallenges = (challenges: GetCurrentUser_getCurrentUser_todayActivity[] = []): number =>
    challenges.reduce((prev, challenge) => prev + challenge.earned, 0);

const updateDailyStepsSuccess = (
    state: ICoinsStore,
    { upsertPassiveChallenge }: UpsertPassiveChallenge
): ICoinsStore => ({
    ...state,
    dailyStepsEarned: pathOr<number>(upsertPassiveChallenge, "challenge.yuCoinAwarded", initialState.dailyStepsEarned),
    total: pathOr<number>(upsertPassiveChallenge, "totalCoins", initialState.total),
    lastUpdated: moment().format(FORMAT)
});

const updateDailyMeditationSuccess = (
    state: ICoinsStore,
    { upsertPassiveChallenge }: UpsertPassiveChallenge
): ICoinsStore => ({
    ...state,
    dailyMeditationEarned: pathOr<number>(
        upsertPassiveChallenge,
        "challenge.yuCoinAwarded",
        initialState.dailyMeditationEarned
    ),
    total: pathOr<number>(upsertPassiveChallenge, "totalCoins", initialState.total),
    lastUpdated: moment().format(FORMAT)
});

const loginUserSuccess = (state: ICoinsStore, { loginUser }: LoginUser): ICoinsStore => ({
    ...state,
    dailyChallengeEarned: sumCompletedChallenges(loginUser.user.todayActivity),
    total: pathOr<number>(loginUser, "user.coinLedger.currentBalance", initialState.total),
    lastUpdated: moment().format(FORMAT)
});

const getUserSuccess = (state: ICoinsStore, { getCurrentUser }: GetCurrentUser): ICoinsStore => ({
    ...state,
    dailyChallengeEarned: sumCompletedChallenges(getCurrentUser.todayActivity),
    total: pathOr<number>(getCurrentUser, "coinLedger.currentBalance", initialState.total),
    lastUpdated: moment().format(FORMAT)
});

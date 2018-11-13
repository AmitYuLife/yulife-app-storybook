import {
    GetCurrentUser,
    GetCurrentUser_getCurrentUser_todayActivity,
    LoginUser,
    UpsertPassiveChallenge
} from "../../graphql/_core/schema";
import { pathOr } from "../../services/utils";
import { SyncAction } from "../_core/types";
import { UPDATE_DAILY_STEPS_SUCCESS } from "../daily-steps/daily-steps.actions";
import { GET_USER_SUCCESS, LOGIN_USER_SUCCESS } from "../user/user.actions";

export interface ICoinsStore {
    dailyChallengeEarned: number; // number of coins earned in the current day through challenges
    dailyStepsEarned: number; // number of coins earned in the current day through daily steps
    total: number; // total coins the user has earned
}

export const initialState: ICoinsStore = {
    dailyChallengeEarned: 0,
    dailyStepsEarned: 0,
    total: 0
};

const coinsReducer = (state: ICoinsStore = initialState, action: SyncAction) => {
    switch (action.type) {
        case UPDATE_DAILY_STEPS_SUCCESS:
            return updateDailyStepsSuccess(state, action.payload);
        case LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action.payload);
        case GET_USER_SUCCESS:
            return getUserSuccess(state, action.payload);
        default:
            return state;
    }
};

export default coinsReducer;

const sumCompletedChallenges = (challenges: GetCurrentUser_getCurrentUser_todayActivity[] = []): number =>
    challenges.reduce((prev, challenge) => prev + challenge.earned, 0);

const updateDailyStepsSuccess = (
    state: ICoinsStore,
    { upsertPassiveChallenge }: UpsertPassiveChallenge
): ICoinsStore => ({
    ...state,
    dailyStepsEarned: pathOr<number>(upsertPassiveChallenge, "challenge.yuCoinAwarded", initialState.dailyStepsEarned),
    total: pathOr<number>(upsertPassiveChallenge, "totalCoins", initialState.total)
});

const loginUserSuccess = (state: ICoinsStore, { loginUser }: LoginUser): ICoinsStore => ({
    ...state,
    dailyChallengeEarned: sumCompletedChallenges(loginUser.user.todayActivity),
    total: pathOr<number>(loginUser, "user.coinLedger.currentBalance", initialState.total)
});

const getUserSuccess = (state: ICoinsStore, { getCurrentUser }: GetCurrentUser): ICoinsStore => ({
    ...state,
    dailyChallengeEarned: sumCompletedChallenges(getCurrentUser.todayActivity),
    total: pathOr<number>(getCurrentUser, "coinLedger.currentBalance", initialState.total)
});

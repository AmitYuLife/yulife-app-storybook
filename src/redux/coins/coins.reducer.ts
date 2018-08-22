import { UPDATE_DAILY_STEPS_SUCCESS } from "../daily-steps/daily-steps.actions";
import { AddDailySteps, Challenge } from "../../graphql/_core/schema";
import { SyncAction } from "../_core/types";

export interface ICoinsStore {
    dailyChallengeEarned: number;   // number of coins earned in the current day through challenges
    dailyStepsEarned: number;       // number of coins earned in the current day through daily steps
    total: number;                  // total coins the user has earned
}

export const initialState: ICoinsStore = {
    dailyChallengeEarned: 0,
    dailyStepsEarned: 0,
    total: 0,
};

const coinsReducer = (state: ICoinsStore = initialState, action: SyncAction) => {
    switch (action.type) {

        case UPDATE_DAILY_STEPS_SUCCESS:
            return updateDailyStepsSuccess(state, action.payload);

        default:
            return state;
    }
};

export default coinsReducer;

const updateDailyStepsSuccess = (state: ICoinsStore, { challengeAction }: AddDailySteps): ICoinsStore => ({
    ...state,
    dailyChallengeEarned: sumCompletedChallenges(challengeAction.completedActiveChallenges),
    dailyStepsEarned: challengeAction.currentPassiveChallenge.yuCoinAwarded,
    total: challengeAction.userStatus.totalCoins,
});

const sumCompletedChallenges = (challenges: Challenge[]): number =>
    challenges.reduce((prev, challenge) => prev + challenge.yuCoinAwarded, 0);

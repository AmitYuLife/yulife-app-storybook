// tslint:disable:max-line-length
import { IReduxState } from "../_core/reducers";

export const getDailyChallengeCoins = (state: IReduxState): number => state.coins.dailyChallengeEarned;
export const getDailyEarnedCoins = (state: IReduxState): number => getDailyChallengeCoins(state) + getDailyStepsCoins(state);
export const getDailyStepsCoins = (state: IReduxState): number => state.coins.dailyStepsEarned;
export const getTotalCoins = (state: IReduxState): number => state.coins.total;

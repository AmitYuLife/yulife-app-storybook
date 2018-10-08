// tslint:disable:max-line-length
import { IReduxState } from "../_core/reducers";

export const getDailyChallengeCoins = (state: IReduxState): number => state.coins.dailyChallengeEarned;
export const getDailyEarnedCoins = ({ coins }: IReduxState): number =>
    coins.dailyChallengeEarned + coins.dailyStepsEarned;
export const getDailyStepsCoins = (state: IReduxState): number => state.coins.dailyStepsEarned;
export const getTotalCoins = (state: IReduxState): number => state.coins.total;

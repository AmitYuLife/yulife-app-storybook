// tslint:disable:max-line-length
import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["coins"];
const reducer = (state: IReduxState) => state.coins;

const dailyChallengeCoinsSelector = (coins: State) => coins.dailyChallengeEarned;
export const getDailyChallengeCoins = createSelector(reducer, dailyChallengeCoinsSelector);

const dailyEarnedCoinsSelector = (coins: State) =>
  coins.dailyChallengeEarned +
  coins.dailyStepsEarned +
  coins.dailyMeditationEarned +
  coins.dailyCyclingEarned +
  coins.dailyPensionEarned;
export const getDailyEarnedCoins = createSelector(reducer, dailyEarnedCoinsSelector);

const dailyStepsCoins = (coins: State) => coins.dailyStepsEarned;
export const getDailyStepsCoins = createSelector(reducer, dailyStepsCoins);

const dailyMeditationCoins = (coins: State) => coins.dailyMeditationEarned;
export const getDailyMeditationCoins = createSelector(reducer, dailyMeditationCoins);

const dailyTotalCoins = (coins: State) => coins.total;
export const getTotalCoins = createSelector(reducer, dailyTotalCoins);

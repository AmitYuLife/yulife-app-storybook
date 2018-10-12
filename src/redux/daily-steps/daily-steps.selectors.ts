import { GetCurrentUser_getCurrentUser_passiveChallenge_exchange } from "../../graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type ExchangeRate = GetCurrentUser_getCurrentUser_passiveChallenge_exchange;

export const getDailySteps = (state: IReduxState) => state.dailySteps.dailySteps;
export const getLastUpdated = (state: IReduxState) => state.dailySteps.lastUpdated;
export const exchangeRateSelector = (state: IReduxState) => state.dailySteps.exchangeRate;

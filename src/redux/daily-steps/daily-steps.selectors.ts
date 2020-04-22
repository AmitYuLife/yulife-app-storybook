import { GetCurrentUser_getCurrentUser_passiveSteps_exchange } from "../../graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type ExchangeRate = GetCurrentUser_getCurrentUser_passiveSteps_exchange;

export const getDailySteps = (state: IReduxState) => state.dailySteps.dailySteps;
export const getLastUpdated = (state: IReduxState) => state.dailySteps.lastUpdated;
export const getLastUpdatedBeforeToday = (state: IReduxState) => state.dailySteps.lastUpdatedBeforeToday;
export const getExchangeRate = (state: IReduxState) => state.dailySteps.exchangeRate;
export const getDailyStepsIsFetching = (state: IReduxState) => state.dailySteps.isFetching;

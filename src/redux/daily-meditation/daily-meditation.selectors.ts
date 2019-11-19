import { GetCurrentUser_getCurrentUser_passiveMeditation_exchange } from "@graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type ExchangeRateMeditation = GetCurrentUser_getCurrentUser_passiveMeditation_exchange;

export const getDailyMeditation = (state: IReduxState) => state.dailyMeditation.dailyMeditation;
export const getLastUpdated = (state: IReduxState) => state.dailyMeditation.lastUpdated;
export const getLastUpdatedBeforeToday = (state: IReduxState) => state.dailyMeditation.lastUpdatedBeforeToday;
export const getMeditationExchangeRate = (state: IReduxState) => state.dailyMeditation.exchangeRate;

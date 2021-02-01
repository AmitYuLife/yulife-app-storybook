import { createSelector } from "reselect";
import { GetCurrentUser_getCurrentUser_passiveSteps_exchange } from "../../graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type ExchangeRate = GetCurrentUser_getCurrentUser_passiveSteps_exchange;

type State = IReduxState["dailySteps"];
const reducer = (state: IReduxState) => state.dailySteps;

const dailyStepsSelector = (state: State) => state.dailySteps;
export const getDailySteps = createSelector(reducer, dailyStepsSelector);

const lastUpdatedBeforeTodaySelector = (state: State) => state.lastUpdatedBeforeToday;
export const getLastUpdatedBeforeToday = createSelector(reducer, lastUpdatedBeforeTodaySelector);

const exchangeRateSelector = (state: State) => state.exchangeRate;
export const getExchangeRate = createSelector(reducer, exchangeRateSelector);

const dailyStepsIsFetchingSelector = (state: State) => state.isFetching;
export const getDailyStepsIsFetching = createSelector(reducer, dailyStepsIsFetchingSelector);

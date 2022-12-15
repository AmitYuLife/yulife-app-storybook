import { createSelector } from "reselect";
import {
  GetCurrentUser_getCurrentUser_passiveSteps_exchange,
  GetCurrentUser_getCurrentUser_passiveSteps_levelSlot_milestones,
} from "@graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type ExchangeRate = GetCurrentUser_getCurrentUser_passiveSteps_exchange;
export type PassiveStepsMilestones = GetCurrentUser_getCurrentUser_passiveSteps_levelSlot_milestones[];

type State = IReduxState["dailySteps"];
const reducer = (state: IReduxState) => state.dailySteps;

const dailyStepsSelector = (state: State) => state.dailySteps;
export const getDailySteps = createSelector(reducer, dailyStepsSelector);

const exchangeRateSelector = (state: State) => state.exchangeRate;
export const getExchangeRate = createSelector(reducer, exchangeRateSelector);

const dailyStepsIsFetchingSelector = (state: State) => state.isFetching;
export const getDailyStepsIsFetching = createSelector(reducer, dailyStepsIsFetchingSelector);

const dailyStepsSyncSelector = ({ isServerFetchedThisSession, serverSteps, isSyncing, exchangeRate }: State) => ({
  serverSteps,
  isServerFetchedThisSession,
  isSyncing,
  exchangeRate,
});
export const getDailyStepsSyncState = createSelector(reducer, dailyStepsSyncSelector);

const stepsAwardedMilestonesLengthSelector = (state: State) =>
  (state.stepsPassiveMilestones || []).filter((milestone) => milestone.coins > 0).length;
export const getStepsAwardedMilestonesLength = createSelector(reducer, stepsAwardedMilestonesLengthSelector);

const maxStepsAnomalyWindowMs = (state: State) => state.maxStepsAnomalyWindowMs;
export const getMaxStepsAnomalyWindowMs = createSelector(reducer, maxStepsAnomalyWindowMs);

const blackListApps = (state: State) => state.blackListApps;
export const getStepsBlackListApps = createSelector(reducer, blackListApps);

const dailyPanelSelector = (state: State) => state.showPanel;
export const getDailyPanelSelector = createSelector(reducer, dailyPanelSelector);

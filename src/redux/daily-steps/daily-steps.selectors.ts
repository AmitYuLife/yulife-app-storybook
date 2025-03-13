import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["dailySteps"];
const reducer = (state: IReduxState) => state.dailySteps;

const dailyStepsSelector = (state: State) => state.dailySteps;
export const getDailySteps = createSelector(reducer, dailyStepsSelector);

const localStepsSelector = (state: State) => state.localSteps || 0;
export const getLocalSteps = createSelector(reducer, localStepsSelector);

const dailyStepsIsFetchingSelector = (state: State) => state.isFetching;
export const getDailyStepsIsFetching = createSelector(reducer, dailyStepsIsFetchingSelector);

const dailyStepsSyncSelector = ({ isServerFetchedThisSession, serverSteps, isSyncing, exchangeRate }: State) => ({
  serverSteps,
  isServerFetchedThisSession,
  isSyncing,
  exchangeRate,
});
export const getDailyStepsSyncState = createSelector(reducer, dailyStepsSyncSelector);

const maxStepsAnomalyWindowMs = (state: State) => state.maxStepsAnomalyWindowMs;
export const getMaxStepsAnomalyWindowMs = createSelector(reducer, maxStepsAnomalyWindowMs);

const blackListApps = (state: State) => state.blackListApps;
export const getStepsBlackListApps = createSelector(reducer, blackListApps);

const dailyPanelSelector = (state: State) => state.showPanel;
export const getDailyPanelSelector = createSelector(reducer, dailyPanelSelector);

import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["debugReducer"];
const reducer = (state: IReduxState) => state.debugReducer;

const pedometerHistorySteps = (state: State) => state.historySteps;
export const getDebugPedometerHistorySteps = createSelector(reducer, pedometerHistorySteps);

const debugToolsEnabled = (state: State) => state.debugToolsEnabled;
export const getDebugToolsEnabled = createSelector(reducer, debugToolsEnabled);

const debugQueriesToolEnabled = (state: State) => state.debugQueriesToolEnabled;
export const getDebugQueriesToolEnabled = createSelector(reducer, debugQueriesToolEnabled);

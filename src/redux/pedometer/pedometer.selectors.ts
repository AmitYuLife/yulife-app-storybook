import { IReduxState } from "../_core/reducers";

export const getLastUpdated = (state: IReduxState) => state.pedometer.lastUpdated;
export const getStartTime = (state: IReduxState) => state.pedometer.startTime;
export const getSteps = (state: IReduxState) => state.pedometer.steps;

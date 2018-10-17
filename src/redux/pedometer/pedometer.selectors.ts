import { IReduxState } from "../_core/reducers";

export const lastUpdatedSelector = (state: IReduxState) => state.pedometer.lastUpdated;
export const startTimeSelector = (state: IReduxState) => state.pedometer.startTime;
export const stepsSelector = (state: IReduxState) => state.pedometer.steps;

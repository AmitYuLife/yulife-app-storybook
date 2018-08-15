import { IReduxState } from "../_core/reducers";

export const getDailySteps = (state: IReduxState) => state.dailySteps.dailySteps;
export const getLastUpdated = (state: IReduxState) => state.dailySteps.lastUpdated;

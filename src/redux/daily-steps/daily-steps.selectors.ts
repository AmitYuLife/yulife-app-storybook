import { IReduxState } from "../_core/reducers";

export const getDailySteps = (state: IReduxState) => state.dailySteps.dailySteps;
export const getLastUpdated = (state: IReduxState) => state.dailySteps.lastUpdated;
export const dailyStepsNotificationSelector = (state: IReduxState) => state.dailySteps.notifiedAt;

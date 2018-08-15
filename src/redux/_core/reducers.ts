import { combineReducers } from "redux";

import appReducer, { IAppStore, initialState as initialAppState } from "../app/app.reducer";
import dailyStepsReducer, {
    IDailyStepsStore,
    initialState as initialDailyStepsState
} from "../daily-steps/daily-steps.reducer";

export interface IReduxState {
    app: IAppStore;
    dailySteps: IDailyStepsStore;
}

export const initialState: IReduxState = {
    app: initialAppState,
    dailySteps: initialDailyStepsState
};

const combinedReducers = combineReducers({
    app: appReducer,
    dailySteps: dailyStepsReducer
});

export default combinedReducers;

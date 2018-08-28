import { combineReducers } from "redux";

import appReducer, { IAppStore, initialState as initialAppState } from "../app/app.reducer";
import coinsReducer, {
    ICoinsStore,
    initialState as initialCoinsState
} from "../coins/coins.reducer";
import dailyStepsReducer, {
    IDailyStepsStore,
    initialState as initialDailyStepsState
} from "../daily-steps/daily-steps.reducer";

export interface IReduxState {
    app: IAppStore;
    coins: ICoinsStore;
    dailySteps: IDailyStepsStore;
}

export const initialState: IReduxState = {
    app: initialAppState,
    coins: initialCoinsState,
    dailySteps: initialDailyStepsState
};

const combinedReducers = combineReducers({
    app: appReducer,
    coins: coinsReducer,
    dailySteps: dailyStepsReducer
});

export default combinedReducers;

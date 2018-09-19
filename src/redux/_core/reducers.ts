import { combineReducers } from "redux";

import appReducer, { IAppStore, initialState as initialAppState } from "../app/app.reducer";
import coinsReducer, { ICoinsStore, initialState as initialCoinsState } from "../coins/coins.reducer";
import dailyStepsReducer, {
    IDailyStepsStore,
    initialState as initialDailyStepsState
} from "../daily-steps/daily-steps.reducer";
import levelsReducer, { ILevelsStore, initialState as initialLevelsState } from "../levels/levels.reducer";
import userReducer, { initialState as initialUserState, IUserStore } from "../user/user.reducer";

export interface IReduxState {
    app: IAppStore;
    coins: ICoinsStore;
    dailySteps: IDailyStepsStore;
    levels: ILevelsStore;
    user: IUserStore;
}

export const initialState: IReduxState = {
    app: initialAppState,
    coins: initialCoinsState,
    dailySteps: initialDailyStepsState,
    levels: initialLevelsState,
    user: initialUserState
};

const combinedReducers = combineReducers({
    app: appReducer,
    coins: coinsReducer,
    dailySteps: dailyStepsReducer,
    levels: levelsReducer,
    user: userReducer
});

export default combinedReducers;

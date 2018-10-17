import { combineReducers } from "redux";

import appReducer, { IAppStore, initialState as initialAppState } from "../app/app.reducer";
import coinsReducer, { ICoinsStore, initialState as initialCoinsState } from "../coins/coins.reducer";
import dailyStepsReducer, {
    IDailyStepsStore,
    initialState as initialDailyStepsState
} from "../daily-steps/daily-steps.reducer";
import deviceReducer, { IDeviceStore, initialState as initialDeviceState } from "../device/device.reducer";
import levelsReducer, { ILevelsStore, initialState as initialLevelsState } from "../levels/levels.reducer";
import pedometerReducer, {
    initialState as initialPedometerState,
    IPedometerStore
} from "../pedometer/pedometer.reducer";
import streaksReducer, { initialState as initialStreaksState, IStreaksStore } from "../streaks/streaks.reducer";
import userReducer, { initialState as initialUserState, IUserStore } from "../user/user.reducer";

export interface IReduxState {
    app: IAppStore;
    coins: ICoinsStore;
    dailySteps: IDailyStepsStore;
    device: IDeviceStore;
    levels: ILevelsStore;
    pedometer: IPedometerStore;
    streaks: IStreaksStore;
    user: IUserStore;
}

export const initialState: IReduxState = {
    app: initialAppState,
    coins: initialCoinsState,
    dailySteps: initialDailyStepsState,
    device: initialDeviceState,
    levels: initialLevelsState,
    pedometer: initialPedometerState,
    streaks: initialStreaksState,
    user: initialUserState
};

const combinedReducers = combineReducers({
    app: appReducer,
    coins: coinsReducer,
    dailySteps: dailyStepsReducer,
    device: deviceReducer,
    levels: levelsReducer,
    pedometer: pedometerReducer,
    streaks: streaksReducer,
    user: userReducer
});

export default combinedReducers;

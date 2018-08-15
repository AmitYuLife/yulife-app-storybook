import { combineReducers } from "redux";

import appReducer, { IAppStore, initialState as initialAppStore } from "../app/app.reducer";

export interface IReduxState {
    app: IAppStore;
}

export const initialState: IReduxState = {
    app: initialAppStore,
};

const combinedReducers = combineReducers({
    app: appReducer,
});

export default combinedReducers;

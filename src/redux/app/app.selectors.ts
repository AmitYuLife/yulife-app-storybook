import { createSelector } from "reselect";
import { IAppStore } from "./app.reducer";
import { IReduxState } from "../_core/reducers";

const reducer = (state: IReduxState): IAppStore => state.app;

const appStateSelector = (appReducer: IAppStore): string => appReducer.appState;
export const getAppState = createSelector(reducer, appStateSelector);

import { createSelector } from "reselect";
import { IAppStore } from "./app.reducer";
import { IReduxState } from "../_core/reducers";

const reducer = (state: IReduxState): IAppStore => state.app;

const appStateSelect = (appReducer: IAppStore): string => appReducer.appState;
export const appStateSelector = createSelector(reducer, appStateSelect);

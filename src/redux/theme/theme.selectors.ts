import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";
import { IThemeStore } from "./theme.reducer";

const reducer = (state: IReduxState): IThemeStore => state.theme;

const dailyStepsThemeSelector = (state: IThemeStore): IThemeStore["dailyStepsScreen"] => state.dailyStepsScreen;
export const getDailyStepsTheme = createSelector(reducer, dailyStepsThemeSelector);

const questsOfflineThemeSelector = (state: IThemeStore): any => state.questsOfflineScreen;
export const getQuestsOfflineTheme = createSelector(reducer, questsOfflineThemeSelector);

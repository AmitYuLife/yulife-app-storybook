import { createSelector } from "reselect";
import { IReduxState } from "../_core/reducers";
import { IThemeStore } from "./theme.reducer";

const reducer = (state: IReduxState): IThemeStore => state.theme;

const challengeFailedThemeSelector = (state: IThemeStore): any => state.challengeFailedScreen;
export const getChallengeFailedTheme = createSelector(
    reducer,
    challengeFailedThemeSelector
);

const challengeListThemeSelector = (state: IThemeStore): any => state.challengeListScreen;
export const getChallengeListTheme = createSelector(
    reducer,
    challengeListThemeSelector
);

const challengeProgressThemeSelector = (state: IThemeStore): any => state.challengeProgressScreen;
export const getChallengeProgressTheme = createSelector(
    reducer,
    challengeProgressThemeSelector
);

const dailyStepsThemeSelector = (state: IThemeStore): any => state.dailyStepsScreen;
export const getDailyStepsTheme = createSelector(
    reducer,
    dailyStepsThemeSelector
);

const questsOfflineThemeSelector = (state: IThemeStore): any => state.questsOfflineScreen;
export const getQuestsOfflineTheme = createSelector(
    reducer,
    questsOfflineThemeSelector
);

import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";

type State = IReduxState["dailyMeditation"];
const reducer = (state: IReduxState) => state.dailyMeditation;

const dailyMeditationSelector = (state: State) => state.dailyMeditation;
export const getDailyMeditation = createSelector(reducer, dailyMeditationSelector);

const inAppDailyMeditationSelector = (state: State) => state.inAppMeditation;
export const getInAppDailyMeditation = createSelector(reducer, inAppDailyMeditationSelector);

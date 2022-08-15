import { createSelector } from "reselect";
import {
  GetCurrentUser_getCurrentUser_passiveMeditation_exchange,
  GetCurrentUser_getCurrentUser_passiveMeditation_levelSlot_milestones,
} from "@graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type ExchangeRateMeditation = GetCurrentUser_getCurrentUser_passiveMeditation_exchange;
export type PassiveMeditationMilestones = GetCurrentUser_getCurrentUser_passiveMeditation_levelSlot_milestones[];

type State = IReduxState["dailyMeditation"];
const reducer = (state: IReduxState) => state.dailyMeditation;

const dailyMeditationSelector = (state: State) => state.dailyMeditation;
export const getDailyMeditation = createSelector(reducer, dailyMeditationSelector);

const inAppDailyMeditationSelector = (state: State) => state.inAppDailyMeditation;
export const getInAppDailyMeditation = createSelector(reducer, inAppDailyMeditationSelector);

const meditationExchangeRateSelector = (state: State) => state.exchangeRate;
export const getMeditationExchangeRate = createSelector(reducer, meditationExchangeRateSelector);

const meditationAwardedMilestonesLengthSelector = (state: State) =>
  (state.meditationPassiveMilestones || []).filter((milestone) => milestone.coins > 0).length;
export const getMeditationAwardedMilestonesLength = createSelector(reducer, meditationAwardedMilestonesLengthSelector);

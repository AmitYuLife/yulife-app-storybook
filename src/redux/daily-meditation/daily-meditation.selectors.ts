import {
  GetCurrentUser_getCurrentUser_passiveMeditation_exchange,
  GetCurrentUser_getCurrentUser_passiveMeditation_levelSlot_milestones,
} from "@graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export type ExchangeRateMeditation = GetCurrentUser_getCurrentUser_passiveMeditation_exchange;
export type PassiveMeditationMilestones = GetCurrentUser_getCurrentUser_passiveMeditation_levelSlot_milestones[];

export const getDailyMeditation = (state: IReduxState) => state.dailyMeditation.dailyMeditation;
export const getLastUpdated = (state: IReduxState) => state.dailyMeditation.lastUpdated;
export const getLastUpdatedBeforeToday = (state: IReduxState) => state.dailyMeditation.lastUpdatedBeforeToday;
export const getMeditationExchangeRate = (state: IReduxState) => state.dailyMeditation.exchangeRate;
export const getMeditationAwardedMilestonesLength = (state: IReduxState) =>
  state.dailyMeditation.meditationPassiveMilestones.filter((milestone) => milestone.coins > 0).length;

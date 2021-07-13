import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { createSelector } from "reselect";
import { CreateActiveChallenge_createActiveChallenge_levelSlot_milestones } from "../../graphql/_core/schema";
import { IReduxState } from "../_core/reducers";
import { getChallengesAmountAvailable, isChallengeAvailable } from "./levels.helpers";

export interface IActiveLevel {
  chest: {
    type: string;
    value: number;
  };
  coins: number;
  endDateTime: string;
  initialPedometerResult: number;
  isCompleted: boolean;
  isLoading: boolean;
  level: number;
  levelSlotId: string;
  fitKitTypes: FitKitType[];
  shouldEndOnLastGoalAchieved: boolean;
  milestones: CreateActiveChallenge_createActiveChallenge_levelSlot_milestones[];
  milestonesLog: any;
  rating: number;
  score: number;
  startDateTime: string;
  status: "failed" | "success";
  subtype: string;
  challengeIsActive: boolean;
  unit: string;
}

export interface ITodayChallengesStatus {
  available: number;
  done: number;
  hasDone: boolean;
  isAvailable: boolean;
}

type State = IReduxState["levels"];
const reducer = (state: IReduxState) => state.levels;

const getChallengesDoneSelector = (state: State) => state.challengesDoneToday;
export const getChallengesDone = createSelector(reducer, getChallengesDoneSelector);

const getCurrentLevelSelector = (state: State) => state.level;
export const getCurrentLevel = createSelector(reducer, getCurrentLevelSelector);

const getNextLevelAvailableAtSelector = (state: State) => state.nextLevelAvailableAt;
export const getNextLevelAvailableAt = createSelector(reducer, getNextLevelAvailableAtSelector);

const getActiveLevelSelector = (state: State) => state.active;
export const getActiveLevel = createSelector(reducer, getActiveLevelSelector);

const getActiveLevelSubtypeSelector = (state: State) => state.active?.subtype;
export const getActiveLevelSubtype = createSelector(reducer, getActiveLevelSubtypeSelector);

const getHasNotificationSelector = (state: State) => !!state.active.levelSlotId || !!state.active.status;
export const getHasNotification = createSelector(reducer, getHasNotificationSelector);

const getChallengeIsActiveSelector = (state: State) => state.active.challengeIsActive;
export const getChallengeIsActive = createSelector(reducer, getChallengeIsActiveSelector);

const challengesStatusSelector = (state: State) => {
  const available = getChallengesAmountAvailable(state.level);
  const done = state.challengesDoneToday;

  return {
    available,
    done,
    hasDone: done > 0,
    isAvailable: isChallengeAvailable(state.level, done, available, state.nextLevelAvailableAt),
  } as ITodayChallengesStatus;
};

export const getChallengesStatus = createSelector(reducer, challengesStatusSelector);

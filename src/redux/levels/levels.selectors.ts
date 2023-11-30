import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { createSelector } from "reselect";
import {
  CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_levelSlot_milestones,
  CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest,
} from "@graphql/_core/schema";
import { IReduxState } from "../_core/reducers";
import { getChallengesAmountAvailable, getAvailableChallengesForToday } from "./levels.helpers";
import { ChallengeType } from "@components/molecules/challenge-tile/challenge-tile.types";

export enum ActiveLevelStatus {
  success = "success",
  failed = "failed",
}

export enum ActiveLevelState {
  STARTING_CHALLENGE = "starting_challenge",
  START_CHALLENGE_SUCCEED = "start_challenge_succeed",
  START_CHALLENGE_FAILED = "start_challenge_failed",
  CHALLENGE_ACTIVE = "challenge_active",
}

export interface IActiveLevel {
  chest: {
    type: string;
    value: number;
  };
  yuniversalChest: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_yuniversalChest | null;
  coins: number;
  endDateTime: string;
  initialPedometerResult: number;
  isCompleted: boolean;
  isLoading: boolean;
  level: number;
  levelSlotId: string;
  fitKitTypes: FitKitType[];
  shouldEndOnLastGoalAchieved: boolean;
  milestones: CreateQuestMapLevelChallenge_createQuestMapLevelChallenge_levelSlot_milestones[];
  milestonesLog: any;
  rating: number;
  score: number;
  startDateTime: string;
  status: ActiveLevelStatus;
  challengeIsActive: boolean;
  subtype: ChallengeType | string; // this should not have `string` as a type but it's needed to supress type errors for now
  unit: "steps" | "minutes" | "meters" | string; // this should not have `string` as a type but it's needed to supress type errors for now
  videoPlayerIsActive: boolean;
  hideExternalLinks: boolean;
  endDeferCount?: number;
  appButton: {
    title: string;
    color?: string;
    tutorialUrl?: string;
    logo?: {
      uri?: string;
      id?: string;
    };
    width?: number;
    height?: number;
    options?: {
      iosUrl?: string;
      androidUrl?: string;
      appName?: string;
      appStoreId?: string;
      appStoreLocale?: string;
      playStoreId?: string;
      faqUrl?: string;
    };
  };
  levelState: ActiveLevelState;
}

export interface ITodayChallengesStatus {
  available: number;
  done: number;
  hasDone: boolean;
  isAvailable: boolean;
  availableForToday: number;
}

type State = IReduxState["levels"];
const reducer = (state: IReduxState) => state.levels;

const getCurrentLevelSelector = (state: State) => state.level;
export const getCurrentLevel = createSelector(reducer, getCurrentLevelSelector);

const getYuniversalProgressSelector = (state: State) => ({
  yuniversalMap: state.yuniversalMap || 0,
  yuniversalLevel: state.yuniversalLevel || 0,
});
export const getYuniversalProgress = createSelector(reducer, getYuniversalProgressSelector);

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

const getVideoPlayerIsActiveSelector = (state: State) => state.active.videoPlayerIsActive;
export const getVideoPlayerIsActive = createSelector(reducer, getVideoPlayerIsActiveSelector);

const getHideExternalLinksSelector = (state: State) => state.active.hideExternalLinks;
export const getHideExternalLinks = createSelector(reducer, getHideExternalLinksSelector);

const getActiveChallengeAppButtonSelector = (state: State) => state.active.appButton;
export const getActiveChallengeAppButton = createSelector(reducer, getActiveChallengeAppButtonSelector);

const getActiveChallengeStateSelector = (state: State) => state.active.levelState;
export const getActiveChallengeState = createSelector(reducer, getActiveChallengeStateSelector);

const challengesStatusSelector = (state: State) => {
  const done = state.challengesDoneToday;
  const available =
    typeof state.dailyChallengeAmountAvailable === "number"
      ? state.dailyChallengeAmountAvailable
      : getChallengesAmountAvailable(state.level);
  const availableForToday = getAvailableChallengesForToday(state.level, done, available, state.nextLevelAvailableAt);

  return {
    available,
    done,
    isAvailable: !!availableForToday,
    hasDone: done > 0,
    availableForToday,
  } as ITodayChallengesStatus;
};

export const getChallengesStatus = createSelector(reducer, challengesStatusSelector);

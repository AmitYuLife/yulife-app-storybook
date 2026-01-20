import { createSelector } from "@reduxjs/toolkit";
import { IReduxState } from "../_core/reducers";
import { getChallengesAmountAvailable, getAvailableChallengesForToday } from "./levels.helpers";

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

const getHasNotificationSelector = (state: State) => !!state.active.id || !!state.active.status;
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

const getCreateChallengeErrorSelector = (state: State) => state.active.createChallengeError;
export const getCreateChallengeError = createSelector(reducer, getCreateChallengeErrorSelector);

const getChallengeFinishedResultSelector = (state: State) => state.challengeFinishedResult;
export const getChallengeFinishedResult = createSelector(reducer, getChallengeFinishedResultSelector);

const getCurrentChallengeScoreSelector = (state: State) => state.active.score;
export const getCurrentChallengeScore = createSelector(reducer, getCurrentChallengeScoreSelector);

const challengesStatusSelector = (state: State) => {
  const done = state.challengesDoneToday;
  const available =
    typeof state.dailyChallengeAmountAvailable === "number"
      ? state.dailyChallengeAmountAvailable
      : getChallengesAmountAvailable(state.level);

  const availableForToday = getAvailableChallengesForToday(state.level, done, available, state.nextLevelAvailableAt);

  return {
    available: available,
    done,
    isAvailable: state.dailyChallengeAmountAvailableWithUnactivatedPowerUps - done > 0,
    hasDone: done > 0,
    availableForToday: availableForToday,
  } as ITodayChallengesStatus;
};

export const getChallengesStatus = createSelector(reducer, challengesStatusSelector);

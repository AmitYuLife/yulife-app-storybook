import getChallengeDetails from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import Logger from "@services/logging/logger";
import { call, select, fork, put } from "redux-saga/effects";
import { getActiveLevel, getVideoPlayerIsActive } from "../levels.selectors";
import setInitialSteps from "./setInitialSteps.helper";
import startChallenge from "./startChallenge.helper";
import { getUserFeatures } from "@redux/user/user.selectors";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import cancelActiveChallengeWithClient from "@graphql/challenges/cancelActiveChallenge.gql";
import { challengeCancelAction } from "@redux/levels/levels.actions";

export default function* startChallengeIfActiveSaga() {
  try {
    const {
      endDateTime,
      levelSlotId,
      startDateTime,
      status,
      shouldEndOnLastGoalAchieved,
      fitKitTypes,
      initialPedometerResult,
    }: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    const videoPlayerIsActive: ReturnType<typeof getVideoPlayerIsActive> = yield select(getVideoPlayerIsActive);
    if (levelSlotId && fitKitTypes.includes(FitKitType.MindfulSession) && videoPlayerIsActive) {
      yield call(cancelActiveChallengeWithClient, levelSlotId);
      yield put(challengeCancelAction());
    }

    if (levelSlotId && !status) {
      try {
        yield call(getChallengeDetails, levelSlotId);
      } catch (error) {
        Logger.error(error, { file: "startChallengeIfActiveSaga.saga" });
      }

      if (initialPedometerResult === null) {
        const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
        yield fork(setInitialSteps, startDateTime, features);
      }

      yield call(startChallenge, {
        endDateTime,
        shouldEndOnLastGoalAchieved,
        levelSlotId,
        startDateTime,
        fitKitTypes,
      });
    }
  } catch (error) {
    Logger.error(error, { file: "startChallengeIfActive" });
  }
}

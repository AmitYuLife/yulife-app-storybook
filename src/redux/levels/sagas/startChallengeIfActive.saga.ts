import getChallengeDetails from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import Logger from "@services/logging/logger";
import { call, select, fork, put } from "redux-saga/effects";
import { getActiveLevel, getVideoPlayerIsActive } from "../levels.selectors";
import setInitialSteps from "./setInitialSteps.helper";
import startChallenge from "./startChallenge.helper";
import { getUserFeatures } from "@redux/user/user.selectors";
import cancelQuestMapLevelChallenge from "@graphql/challenges/cancelQuestMapLevelChallenge.gql";
import { challengeResetSuccessAction } from "@redux/levels/levels.actions";

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

    if (videoPlayerIsActive && levelSlotId) {
      try {
        yield call(cancelQuestMapLevelChallenge, levelSlotId);
        yield put(challengeResetSuccessAction());
        return;
      } catch (error) {
        Logger.error(error, { file: "cancelMeditopiaChallenge.saga" });
      }
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

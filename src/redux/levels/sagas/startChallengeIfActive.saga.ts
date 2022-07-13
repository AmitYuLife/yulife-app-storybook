import getChallengeDetails from "@graphql/challenges/getQuestMapChallengeDetails.gql";
import Logger from "@services/logging/logger";
import { call, select, fork } from "redux-saga/effects";
import { getActiveLevel } from "../levels.selectors";
import setInitialSteps from "./setInitialSteps.helper";
import startChallenge from "./startChallenge.helper";
import { getUserFeatures } from "@redux/user/user.selectors";

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

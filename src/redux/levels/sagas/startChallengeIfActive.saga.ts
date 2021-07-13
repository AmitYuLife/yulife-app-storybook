import Logger from "@services/logging/logger";
import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "../levels.selectors";
import startChallenge from "./startChallenge.helper";

export default function* startChallengeIfActiveSaga() {
  try {
    const { endDateTime, levelSlotId, startDateTime, status, shouldEndOnLastGoalAchieved, fitKitTypes } = yield select(
      getActiveLevel
    );

    if (levelSlotId && !status) {
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

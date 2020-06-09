import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "../levels.selectors";
import startChallenge from "./startChallenge.helper";

export default function* startChallengeIfActiveSaga() {
  const { endDateTime, levelSlotId, startDateTime, status, subtype, timeUp } = yield select(getActiveLevel);

  if (levelSlotId && !timeUp && !status) {
    yield call(startChallenge, {
      endDateTime,
      subtype,
      levelSlotId,
      startDateTime,
    });
  }
}

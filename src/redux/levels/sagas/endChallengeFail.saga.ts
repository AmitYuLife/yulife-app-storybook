import { put, select, delay } from "redux-saga/effects";
import { challengeEndAction } from "../levels.actions";
import { getActiveLevel } from "../levels.selectors";

export default function* endChallengeFail() {
  yield delay(1000);
  const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  const activeChallenge = active.id || active.levelSlotId;

  if (!active.isCompleted && activeChallenge) {
    yield put(challengeEndAction({ location: "endChallengeFail" }));
  }
}

import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import getUserDataSaga from "./getUserData.saga";

export default function* getUserOnUpdatedDateSaga() {
  const activeLevel: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  const challengeId = activeLevel.levelSlotId || activeLevel.id;
  const hasNoActiveChallenge = !challengeId;
  if (hasNoActiveChallenge) {
    yield call(getUserDataSaga);
  }
}

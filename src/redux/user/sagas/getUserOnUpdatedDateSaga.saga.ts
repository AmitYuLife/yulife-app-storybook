import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import getUserDataSaga from "./getUserData.saga";

export default function* getUserOnUpdatedDateSaga() {
  const activeLevel: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  const hasNoActiveChallenge = !activeLevel?.levelSlotId;
  if (hasNoActiveChallenge) {
    yield call(getUserDataSaga);
  }
}

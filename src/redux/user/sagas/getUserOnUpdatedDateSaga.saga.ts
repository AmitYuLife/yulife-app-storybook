import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import getUserDataSaga from "./getUserData.saga";
import getAllUserDataSaga from "./getAllUserData.saga";
import { AppDataType } from "../user.types";

// TODO: Purge when getAllUserData is removed
export default function* getUserOnUpdatedDateSaga() {
  const activeLevel: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  const hasNoActiveChallenge = !activeLevel.id;
  if (hasNoActiveChallenge) {
    yield call(getUserDataSaga);
    yield call(getAllUserDataSaga, {
      payload: [AppDataType.activeStreak, AppDataType.todayActivity, AppDataType.dailyChallengeAmountAvailable],
      type: undefined,
    });
  }
}

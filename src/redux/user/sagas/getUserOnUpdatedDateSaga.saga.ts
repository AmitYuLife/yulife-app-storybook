import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import getAllUserDataSaga from "./getAllUserData.saga";
import { AppDataType } from "../user.types";

export default function* getUserOnUpdatedDateSaga() {
  const activeLevel: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

  const hasNoActiveChallenge = !activeLevel.id;
  if (hasNoActiveChallenge) {
    yield call(getAllUserDataSaga, {
      payload: {
        refreshLoggerIdentity: true,
        types: [
          AppDataType.currentUser,
          AppDataType.dailyPension,
          AppDataType.activeStreak,
          AppDataType.todayActivity,
          AppDataType.dailyChallengeAmountAvailable,
        ],
      },
      type: undefined,
    });
  }
}

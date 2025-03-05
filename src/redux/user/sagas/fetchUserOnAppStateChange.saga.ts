import { AppStateStatus } from "react-native";
import { call, put, select, take } from "redux-saga/effects";
import { appStateChannel } from "../../app/app.channels";
import { getActiveLevel } from "../../levels/levels.selectors";
import getUserDataSaga from "./getUserData.saga";
import { getUserDataStart } from "../user.actions";
import { AppDataType } from "../user.types";

export default function* fetchUserOnAppStateChangeSaga() {
  yield call(getUserDataSaga);

  const appState: ReturnType<typeof appStateChannel> = yield call(appStateChannel);

  while (true) {
    const state: AppStateStatus = yield take(appState);
    const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    const challengeId = active.levelSlotId || active.id;

    if (state === "active" && !challengeId) {
      yield call(getUserDataSaga);
      yield put(
        getUserDataStart({
          types: [
            AppDataType.todayActivity,
            AppDataType.socialGroups,
            AppDataType.coinLedger,
            AppDataType.activeStreak,
            AppDataType.inventoryInfo,
            AppDataType.activeChallenge,
            AppDataType.connections,
            AppDataType.dailyChallengeAmountAvailable,
            AppDataType.challengesDoneToday,
          ],
        })
      );
    }
  }
}

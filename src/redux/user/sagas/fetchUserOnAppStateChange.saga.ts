import { AppStateStatus } from "react-native";
import { call, put, select, take } from "redux-saga/effects";
import { appStateChannel } from "../../app/app.channels";
import { getActiveLevel } from "../../levels/levels.selectors";
import getAllUserDataSaga from "./getAllUserData.saga";
import { getUserDataStart } from "../user.actions";
import { AppDataType } from "../user.types";

export default function* fetchUserOnAppStateChangeSaga() {
  const activeSessionTypes = [
    AppDataType.currentUser,
    AppDataType.dailyPension,
    AppDataType.todayActivity,
    AppDataType.socialGroups,
    AppDataType.coinLedger,
    AppDataType.activeStreak,
    AppDataType.inventoryInfo,
    AppDataType.activeChallenge,
    AppDataType.connections,
    AppDataType.dailyChallengeAmountAvailable,
    AppDataType.challengesDoneToday,
  ];

  yield call(getAllUserDataSaga, {
    payload: {
      types: [...activeSessionTypes, AppDataType.hints, AppDataType.todayScreen],
      refreshLoggerIdentity: true,
    },
    type: undefined,
  });

  const appState: ReturnType<typeof appStateChannel> = yield call(appStateChannel);

  while (true) {
    const state: AppStateStatus = yield take(appState);
    const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    if (state === "active" && !active.id) {
      yield put(
        getUserDataStart({
          types: [...activeSessionTypes],
        })
      );
    }
  }
}

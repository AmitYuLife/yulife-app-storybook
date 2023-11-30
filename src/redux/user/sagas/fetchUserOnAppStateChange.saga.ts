import { AppStateStatus } from "react-native";
import { call, put, select, take } from "redux-saga/effects";
import { appStateChannel } from "../../app/app.channels";
import { getActiveLevel } from "../../levels/levels.selectors";
import getUserDataSaga from "./getUserData.saga";
import { setAuthenticated } from "../../app/app.actions";
import { AppDataType, getUserDataStart } from "../user.actions";

export default function* fetchUserOnAppStateChangeSaga({ payload }: ReturnType<typeof setAuthenticated>) {
  if (!payload) {
    yield call(getUserDataSaga);
    yield put(getUserDataStart([AppDataType.coinLedger]));
  }

  const appState: ReturnType<typeof appStateChannel> = yield call(appStateChannel);

  while (true) {
    const state: AppStateStatus = yield take(appState);
    const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    if (state === "active" && !active.levelSlotId) {
      yield call(getUserDataSaga);
      yield put(getUserDataStart([AppDataType.coinLedger, AppDataType.activeStreak]));
    }
  }
}

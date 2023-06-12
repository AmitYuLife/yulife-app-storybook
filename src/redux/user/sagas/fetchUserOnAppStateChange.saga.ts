import { AppStateStatus } from "react-native";
import { call, select, take } from "redux-saga/effects";
import { appStateChannel } from "../../app/app.channels";
import { getActiveLevel } from "../../levels/levels.selectors";
import getUserDataSaga from "./getUserData.saga";
import getUserActiveStreakSaga from "./getUserActiveStreak.saga";
import { setAuthenticated } from "../../app/app.actions";

export default function* fetchUserOnAppStateChangeSaga({ payload }: ReturnType<typeof setAuthenticated>) {
  if (!payload) {
    yield call(getUserDataSaga);
  }

  const appState: ReturnType<typeof appStateChannel> = yield call(appStateChannel);

  while (true) {
    const state: AppStateStatus = yield take(appState);
    const active: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    if (state === "active" && !active.levelSlotId) {
      yield call(getUserDataSaga);
      yield call(getUserActiveStreakSaga);
    }
  }
}

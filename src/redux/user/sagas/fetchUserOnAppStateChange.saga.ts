import { call, select, take } from "redux-saga/effects";
import { appStateChannel } from "../../app/app.channels";
import { getActiveLevel } from "../../levels/levels.selectors";
import getUserData from "./getUserData.saga";

export default function* fetchUserOnAppStateChangeSaga() {
  yield call(getUserData);

  const appState = yield call(appStateChannel);

  while (true) {
    const state = yield take(appState);
    const active = yield select(getActiveLevel);

    if (state === "active" && !active.levelSlotId) {
      yield call(getUserData);
    }
  }
}

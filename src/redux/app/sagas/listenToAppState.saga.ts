import { call, put, take } from "redux-saga/effects";
import { updateAppState } from "../app.actions";
import { appStateChannel } from "../app.channels";

export default function* listenToAppStateSaga() {
  yield put(updateAppState("active"));
  const stateChannel: ReturnType<typeof appStateChannel> = yield call(appStateChannel);

  while (true) {
    const state: string = yield take(stateChannel);
    yield put(updateAppState(state));
  }
}

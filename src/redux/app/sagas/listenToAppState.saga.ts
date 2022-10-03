import { call, put, take } from "redux-saga/effects";
import { updateAppStateActive, updateAppState } from "../app.actions";
import { appStateChannel } from "../app.channels";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import { AppStateStatus } from "react-native";

export default function* listenToAppStateSaga() {
  yield put(updateAppState("active"));
  const stateChannel: ReturnType<typeof appStateChannel> = yield call(appStateChannel);

  while (true) {
    const state: AppStateStatus = yield take(stateChannel);
    yield put(updateAppState(state));

    if (state === "active") {
      const token: Unpacked<typeof getToken> = yield call(getToken);
      if (token) {
        yield put(updateAppStateActive());
      }
    }
  }
}

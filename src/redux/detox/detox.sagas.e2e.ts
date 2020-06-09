import { call, put, take, takeLatest } from "redux-saga/effects";
import { AsyncAction, SyncAction } from "../_core/types";
import { detoxReduxChannel } from "./detox.channels";

function* listenToReduxActions() {
  const reduxChannel = yield call(detoxReduxChannel);
  while (true) {
    const action: SyncAction | AsyncAction = yield take(reduxChannel);
    console.log("Action from detox...", action);
    yield put(action);
  }
}

export default [takeLatest("INIT", listenToReduxActions)];

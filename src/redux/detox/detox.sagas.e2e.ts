import { call, put, take, takeLatest } from "redux-saga/effects";
import { AsyncAction, SyncAction } from "../_core/types";
import { detoxReduxChannel } from "./detox.channels";

function* listenToReduxActions() {
    const reduxChannel = yield call(detoxReduxChannel);
    while (true) {
        const action: SyncAction | AsyncAction = yield take(reduxChannel);
        yield put(action);
    }
}

export default [
    takeLatest("INIT", listenToReduxActions)
];

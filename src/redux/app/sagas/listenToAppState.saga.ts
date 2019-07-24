import { call, put, take } from "redux-saga/effects";
import { updateAppState } from "../app.actions";
import { appStateChannel } from "../app.channels";
import checkConnectionSaga from "./checkConnection.saga";

export default function* listenToAppStateSaga() {
    const stateChannel = yield call(appStateChannel);

    while (true) {
        const state = yield take(stateChannel);
        yield put(updateAppState(state));
        yield call(checkConnectionSaga);
    }
}

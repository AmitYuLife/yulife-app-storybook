import { call, select, take } from "redux-saga/effects";
import { appStateChannel } from "../../app/app.channels";
import { getActiveLevel } from "../../levels/levels.selectors";

import getUserData from "./getUserData.saga";

export default function* fetchUserOnAppStateChangeSaga() {
    const appState = yield call(appStateChannel);
    let isActive = false;

    while (true) {
        const state = isActive ? yield take(appState) : "active"; // should call it on INIT
        const active = yield select(getActiveLevel);

        if (state === "active" && !active.levelSlotId) {
            yield call(getUserData);
        }

        if (!isActive) {
            isActive = true;
        }
    }
}

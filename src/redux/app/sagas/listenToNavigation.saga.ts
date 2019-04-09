import { ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { call, put, take } from "redux-saga/effects";
import { updateNavigationState } from "../app.actions";
import { appNavigationChannel } from "../app.channels";

export default function* listenToNavigationSaga() {
    const navigationChannel = yield call(appNavigationChannel);

    while (true) {
        const { componentId } = yield take(navigationChannel);

        yield call(Logger.logEvent, "screen_view", {
            name: componentId
        });

        if (componentId !== ROUTES.menu) {
            yield put(updateNavigationState(componentId));
        }
    }
}

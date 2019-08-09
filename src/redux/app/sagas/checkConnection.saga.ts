import getSession from "@graphql/user/getSession.gql";
import { ROUTES } from "@navigation/constants";
import { setAuthenticatedRoot, setOfflineRoot } from "@navigation/root";
import { getToken } from "@services/storage";
import { delay } from "redux-saga";
import { call, race, select } from "redux-saga/effects";
import { getRouteState } from "../app.selectors";

export default function* checkConnectionSaga() {
    const token = yield call(getToken);

    if (token) {
        try {
            const response = yield race({
                timeout: call(delay, 2500),
                token: call(getSession)
            });

            const currentRoute = yield select(getRouteState);
            const isCurrentlyOffline = currentRoute === ROUTES.offline;

            if (response.timeout) {
                // there is no need to call `setRoot` if it is already offline
                if (!isCurrentlyOffline) {
                    yield call(setOfflineRoot);
                }
            } else {
                // there is no need to call `setRoot` if it is already online
                if (isCurrentlyOffline) {
                    yield call(setAuthenticatedRoot);
                }
            }
        } catch {
            yield call(setOfflineRoot);
        }
    }
}

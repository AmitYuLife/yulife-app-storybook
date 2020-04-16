import getSession from "@graphql/user/getSession.gql";
import { ROUTES } from "@navigation/constants";
import { setAuthenticatedRoot, setOfflineRoot } from "@navigation/root";
import { getToken } from "@services/storage";
import { call, race, select, delay } from "redux-saga/effects";
import { getRouteState } from "../app.selectors";

export default function* checkConnectionSaga() {
    try {
        const token = yield call(getToken);

        if (token) {
            const response = yield race({
                timeout: delay(2500),
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
        }
    } catch (e) {
        yield call(setOfflineRoot);
    }
}

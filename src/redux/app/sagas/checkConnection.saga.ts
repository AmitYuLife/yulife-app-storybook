import getSession from "@graphql/user/getSession.gql";
import { setAuthenticatedRoot, setOfflineRoot } from "@navigation/root";
import { getToken } from "@services/storage";
import { delay } from "redux-saga";
import { call, race } from "redux-saga/effects";

export default function* checkConnectionSaga() {
    const token = yield call(getToken);

    if (token) {
        try {
            const response = yield race({
                timeout: call(delay, 2500),
                token: call(getSession)
            });

            if (response.timeout) {
                yield call(setOfflineRoot);
            } else {
                yield call(setAuthenticatedRoot);
            }
        } catch {
            yield call(setOfflineRoot);
        }
    }
}

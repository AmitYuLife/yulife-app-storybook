import getSession from "@graphql/user/getSession.gql";
import { delay } from "redux-saga";
import { call, race } from "redux-saga/effects";
import { setAuthenticatedRoot, setOfflineRoot } from "../../../navigation/root";

export default function* checkConnectionSaga() {
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

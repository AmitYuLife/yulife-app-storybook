import client from "@graphql/_core/client";
import { setUnauthenticatedRoot } from "@navigation/root";
import Logger from "@services/logging/logger";
import { clearToken } from "@services/storage/token";
import { call } from "redux-saga/effects";
import { persistor } from "../../_core/store";

export default function* logOutSaga() {
    yield call(Logger.logEvent, "log_out");
    yield call(setUnauthenticatedRoot);
    yield call(clearToken);
    yield call(() => client.resetStore());
    yield call(() => persistor.purge());
}

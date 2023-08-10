import gqlClient from "@graphql/_core/client";
import { gqlCachePersistor } from "@graphql/_core/persistor";
import { setUnauthenticatedRoot } from "@navigation/root";
import Logger from "@services/logging/logger";
import { clearToken } from "@services/storage/token";
import { call, put } from "redux-saga/effects";
import { persistor as reduxPersistor } from "../../_core/store";
import { logOutSuccess } from "../user.actions";

export default function* logOutSaga() {
  yield call(Logger.logEvent, "log_out");
  yield call(setUnauthenticatedRoot);
  yield call(() => {
    // can't be awaited because their libs rely on a weird promise lib and it gets stuck
    gqlClient().stop();
    gqlClient()
      .clearStore()
      .catch((e) => {
        Logger.error(e, { location: "logout-reset-apollo-store" });
      });
  });
  yield call(clearToken);
  yield call(() => gqlCachePersistor().purge());
  yield call(() => {
    // can't be awaited because their libs rely on a weird promise lib and it gets stuck
    reduxPersistor.purge().catch((e) => {
      Logger.error(e, { location: "logout-purge-persistor" });
    });
  });
  yield call(Logger.logOut);
  yield put(logOutSuccess());
}

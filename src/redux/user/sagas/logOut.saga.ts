import client from "@graphql/_core/client";
import { setUnauthenticatedRoot } from "@navigation/root";
import Logger from "@services/logging/logger";
import { clearToken } from "@services/storage/token";
import { call, put } from "redux-saga/effects";
import { persistor } from "../../_core/store";
import { logOutSuccess } from "../user.actions";

export default function* logOutSaga() {
  yield call(Logger.logEvent, "log_out");
  yield call(setUnauthenticatedRoot);
  yield call(clearToken);
  yield call(() => {
    // we can't await the following two because their libs rely on a weird promise lib and it gets stuck
    client()
      .resetStore()
      .catch((e) => {
        Logger.error(e, { location: "logout-reset-apollo-store" });
      });

    persistor.purge().catch((e) => {
      Logger.error(e, { location: "logout-purge-persistor" });
    });
  });
  yield put(logOutSuccess());
}

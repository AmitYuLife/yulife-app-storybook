import client from "@graphql/_core/client";
import { setUnauthenticatedRoot } from "@navigation/root";
import Logger from "@services/logging/logger";
import { clearToken } from "@services/storage/token";
import { call, delay, put } from "redux-saga/effects";
import { persistor } from "../../_core/store";
import { logOutSuccess } from "../user.actions";

export default function* logOutSaga() {
  yield call(Logger.logEvent, "log_out");
  yield call(Logger.logOut);
  yield call(setUnauthenticatedRoot);
  yield call(clearToken);
  // When a new root stack gets set, it is pushed on top of the old root stack and then in less than 1000ms it gets removed.
  // The struggle was real. And we've dealt with it. :point_down:
  yield delay(1000);
  yield call(() => {
    // we can't await the following two because their libs rely on a weird promise lib and it gets stuck
    client()
      .clearStore()
      .catch((e) => {
        Logger.error(e, { location: "logout-reset-apollo-store" });
      });

    persistor.purge().catch((e) => {
      Logger.error(e, { location: "logout-purge-persistor" });
    });
  });
  yield put(logOutSuccess());
}

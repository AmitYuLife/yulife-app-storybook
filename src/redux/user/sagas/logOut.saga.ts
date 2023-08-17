import { clearApolloCache } from "@graphql/_core/clearCache";
import { setUnauthenticatedRoot } from "@navigation/root";
import Logger from "@services/logging/logger";
import { clearToken } from "@services/storage/token";
import { call, put } from "redux-saga/effects";
import { persistor as reduxPersistor } from "../../_core/store";
import { logOutSuccess } from "../user.actions";

export default function* logOutSaga() {
  yield call(Logger.logEvent, "log_out");
  yield call(setUnauthenticatedRoot);
  yield call(clearApolloCache, { shouldStop: true });
  yield call(clearToken);
  yield call(() => {
    // can't be awaited because their libs rely on a weird promise lib and it gets stuck
    reduxPersistor.purge().catch((e) => {
      Logger.error(e, { location: "logout-purge-persistor" });
    });
  });
  yield call(Logger.logOut);
  yield put(logOutSuccess());
}

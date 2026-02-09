import { setUnauthenticatedRoot } from "@navigation/root";
import Logger from "@services/logging/logger";
import { call, put } from "redux-saga/effects";
import { persistor as reduxPersistor } from "../../_core/store";
import { logOutSuccess } from "../user.actions";
import dd from "@services/datadog";
import customerio from "@services/customerio";

export default function* logOutSaga() {
  yield call(Logger.logEvent, "log_out");
  yield call(setUnauthenticatedRoot);

  yield call(() => {
    // can't be awaited because their libs rely on a weird promise lib and it gets stuck
    reduxPersistor.purge().catch((e) => {
      Logger.error(e, { location: "logout-purge-persistor" });
    });
  });
  yield call(Logger.logOut);
  yield call(dd.unsetUserId);
  yield call(customerio.clearIdentity);
  yield put(logOutSuccess());
}

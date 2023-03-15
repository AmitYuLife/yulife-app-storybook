import Logger from "@services/logging/logger";
import { call } from "redux-saga/effects";

export default function* setLoggerIdentity(userId: string, intercomHash: string) {
  yield call(Logger.init);
  yield call(Logger.setUserId, userId, intercomHash);
  yield call(Logger.setUserProperties, {}, true);
}

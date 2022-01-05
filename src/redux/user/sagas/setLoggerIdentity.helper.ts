import Logger from "@services/logging/logger";
import { call } from "redux-saga/effects";

export default function* setLoggerIdentity(userId: string, membershipType: string, hash?: string) {
  if (hash) {
    yield call(Logger.setIntercomHash, hash);
  }

  yield call(Logger.setUserId, userId);
  yield call(Logger.setUserProperties, { membershipType }, true);
}

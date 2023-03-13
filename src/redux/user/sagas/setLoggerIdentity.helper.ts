import Logger from "@services/logging/logger";
import { call } from "redux-saga/effects";

export default function* setLoggerIdentity(userId: string, membershipType: string) {
  yield call(Logger.init);
  yield call(Logger.setUserId, userId);
  yield call(Logger.setUserProperties, { membershipType }, true);
}

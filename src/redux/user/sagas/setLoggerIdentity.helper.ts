import { getCurrentLocaleOptions } from "@locale";
import Logger from "@services/logging/logger";
import dd from "@services/datadog";
import { UserSupportLevel } from "@services/logging/types";
import { call, delay, spawn } from "redux-saga/effects";
import leanplum from "@services/logging/leanplum";

function* bootstrapLeanplum(userId: string) {
  let hasStarted: boolean = yield call(leanplum.hasStarted);

  if (!hasStarted) {
    yield call(leanplum.bootstrap);
  }

  while (!hasStarted) {
    hasStarted = yield call(leanplum.hasStarted);
    yield delay(1000);
  }

  yield call(leanplum.setUserId, userId);

  yield delay(2000);
  yield call(leanplum.setUserLastUpdated);
}

export default function* setLoggerIdentity(userId: string, intercomHash: string, supportLevel: UserSupportLevel) {
  yield call(Logger.init);
  yield call(Logger.setUserId, userId, intercomHash, supportLevel);

  // handle leanplum bootstrap on a separate saga to avoid blocking the main saga
  yield spawn(bootstrapLeanplum, userId);

  const mixpanelDeviceId: string = yield call(Logger.getMixpanelDeviceId);
  yield call(dd.setUserInfo, { userId, mixpanelDeviceId });

  const localeOptions = getCurrentLocaleOptions();

  if (localeOptions?.intercomLanguage) {
    yield call(Logger.setUserLanguagePreferenceOnIntercom, localeOptions.intercomLanguage);
  }
}

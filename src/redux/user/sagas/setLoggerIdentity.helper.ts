import { getCurrentLocaleOptions } from "@locale";
import Logger from "@services/logging/logger";
import dd from "@services/datadog";
import { UserSupportLevel } from "@services/logging/types";
import { call, spawn } from "redux-saga/effects";
import customerio from "@services/customerio";

function* bootstrapCustomerIO(userId: string) {
  yield call(customerio.init);
  yield call(customerio.identify, userId);
}

export default function* setLoggerIdentity(userId: string, intercomHash: string, supportLevel: UserSupportLevel) {
  yield call(Logger.init);
  yield call(Logger.setUserId, userId, intercomHash, supportLevel);

  // handle customerio bootstrap on a separate saga to avoid blocking the main saga
  yield spawn(bootstrapCustomerIO, userId);

  const mixpanelDeviceId: string = yield call(Logger.getMixpanelDeviceId);
  yield call(dd.setUserInfo, { userId, mixpanelDeviceId });

  const localeOptions = getCurrentLocaleOptions();

  if (localeOptions?.intercomLanguage) {
    yield call(Logger.setUserLanguagePreferenceOnIntercom, localeOptions.intercomLanguage);
  }
}

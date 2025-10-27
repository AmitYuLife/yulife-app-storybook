import { getCurrentLocaleOptions } from "@locale";
import Logger from "@services/logging/logger";
import dd from "@services/datadog";
import { UserSupportLevel } from "@services/logging/types";
import { call, delay } from "redux-saga/effects";

export default function* setLoggerIdentity(userId: string, intercomHash: string, supportLevel: UserSupportLevel) {
  yield call(Logger.init);
  yield call(Logger.setUserId, userId, intercomHash, supportLevel);

  const mixpanelDeviceId: string = yield call(Logger.getMixpanelDeviceId);
  yield call(dd.setUserInfo, { userId, mixpanelDeviceId });

  const localeOptions = getCurrentLocaleOptions();

  if (localeOptions?.intercomLanguage) {
    yield call(Logger.setUserLanguagePreferenceOnIntercom, localeOptions.intercomLanguage);
  }

  // Delay 2s to display leanplum notification banners
  yield delay(2000);
  yield call(Logger.leanplum.setUserLastUpdated);
}

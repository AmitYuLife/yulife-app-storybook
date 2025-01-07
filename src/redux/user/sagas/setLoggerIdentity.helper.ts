import { getCurrentLocaleOptions } from "@locale";
import { getDeviceToken } from "@redux/device/device.selectors";
import Logger from "@services/logging/logger";
import { UserSupportLevel } from "@services/logging/types";
import { call, delay, select } from "redux-saga/effects";

export default function* setLoggerIdentity(userId: string, intercomHash: string, supportLevel: UserSupportLevel) {
  const deviceToken: ReturnType<typeof getDeviceToken> = yield select(getDeviceToken);

  yield call(Logger.init);
  yield call(Logger.setUserId, userId, intercomHash, supportLevel, deviceToken);

  const localeOptions = getCurrentLocaleOptions();

  if (localeOptions?.intercomLanguage) {
    yield call(Logger.setUserLanguagePreferenceOnIntercom, localeOptions.intercomLanguage);
  }

  // Delay 2s to display leanplum notification banners
  yield delay(2000);
  yield call(Logger.leanplum.setUserLastUpdated);
}

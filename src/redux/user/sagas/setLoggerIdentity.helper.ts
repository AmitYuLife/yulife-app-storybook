import { getCurrentLocaleOptions } from "@locale";
import { getUserFeatures } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import { call, delay, select } from "redux-saga/effects";

export default function* setLoggerIdentity(userId: string, intercomHash: string) {
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  yield call(Logger.init);
  yield call(Logger.setUserId, userId, intercomHash, features?.tempGameIntercomLoginOnce);

  const localeOptions = getCurrentLocaleOptions();

  if (localeOptions?.intercomLanguage) {
    yield call(Logger.setUserLanguagePreferenceOnIntercom, localeOptions.intercomLanguage);
  }

  // Delay 2s to display leanplum notification banners
  yield delay(2000);
  yield call(Logger.leanplum.setUserLastUpdated);
}

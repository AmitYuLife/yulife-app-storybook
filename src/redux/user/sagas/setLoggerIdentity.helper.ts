import { getCurrentLocaleOptions } from "@locale";
import { getUserFeatures } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import { call, select } from "redux-saga/effects";

export default function* setLoggerIdentity(userId: string, intercomHash: string) {
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  yield call(Logger.init);
  yield call(Logger.setUserId, userId, intercomHash, features?.loginIntercomUserOnce);

  const localeOptions = getCurrentLocaleOptions();

  if (localeOptions?.intercomLanguage) {
    yield call(Logger.setUserLanguagePreferenceOnIntercom, localeOptions.intercomLanguage);
  }
}

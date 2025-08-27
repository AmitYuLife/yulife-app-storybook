import { setLocale, Language, getIntercomLanguage, getCurrentLocaleOptions } from "@locale";
import { Navigation } from "@navigation/main";
import { SyncAction } from "@redux/_core/types";
import Logger from "@services/logging/logger";
import { call } from "redux-saga/effects";

export default function* updateLanguage({ payload }: SyncAction<{ locale: Language }>) {
  yield call(setLocale, payload.locale);

  yield call(Navigation.setDefaultOptions, {
    layout: {
      direction: getCurrentLocaleOptions().direction,
    },
  });

  const intercomLanguage = getIntercomLanguage(payload.locale);

  if (intercomLanguage) {
    yield call(Logger.setUserLanguagePreferenceOnIntercom, payload.locale);
  }
}

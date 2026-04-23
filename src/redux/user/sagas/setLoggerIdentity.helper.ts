import { getCurrentLocaleOptions } from "@locale";
import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import { UserSupportLevel } from "@services/logging/types";
import { call, spawn } from "redux-saga/effects";
import customerio from "@services/customerio";

function* bootstrapCustomerIO(userId: string) {
  yield call(customerio.init);
  yield call(customerio.identify, userId);
}

export default function* setLoggerIdentity(userId: string, intercomHash: string, supportLevel: UserSupportLevel) {
  yield call(EngagementTracking.init);
  yield call(EngagementTracking.setUserId, userId, intercomHash, supportLevel);

  // handle customerio bootstrap on a separate saga to avoid blocking the main saga
  yield spawn(bootstrapCustomerIO, userId);

  const mixpanelDeviceId: string = yield call(EngagementTracking.getMixpanelDeviceId);
  yield call(Logger.setUser, { userId, mixpanelDeviceId });

  const localeOptions = getCurrentLocaleOptions();

  if (localeOptions?.intercomLanguage) {
    yield call(EngagementTracking.setUserLanguagePreferenceOnIntercom, localeOptions.intercomLanguage);
  }
}

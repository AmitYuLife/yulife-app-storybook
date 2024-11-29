import { call, put, select } from "redux-saga/effects";
import { getActiveProvider } from "../yu-health.selectors";

import {
  HealthProvider,
  HealthProviderAvailability,
  HealthProviderCapability,
  getAvailabilityStatus,
  hasPermission,
  hasPermissions,
} from "@yu-life/react-native-yu-health";
import { setActiveYuHealthProvider } from "../yu-health.actions";
import { isiOS, shouldContinueWithPermissionStatus } from "@utils";
import Logger from "@services/logging/logger";

// Set YuHealth's provider based on existing provider from fitkit
export default function* setDefaultProviderSaga(): unknown {
  const activeProvider: HealthProvider | null = yield select(getActiveProvider);
  if (activeProvider) {
    yield put(setActiveYuHealthProvider(activeProvider));
    return;
  }

  if (isiOS()) {
    const hasHealthKitPermissions = yield hasPermission(HealthProviderCapability.STEP_COUNT, HealthProvider.healthKit);
    if (hasHealthKitPermissions) {
      yield put(setActiveYuHealthProvider(HealthProvider.healthKit));
    }

    return;
  }

  const availableProviders: Awaited<ReturnType<typeof getAvailabilityStatus>> = yield getAvailabilityStatus([
    HealthProvider.samsungHealth,
    HealthProvider.googleFit,
  ]);

  // Log here active providers
  yield call(Logger.logMixpanelEvent, "yuhealth_available_providers_fetched", availableProviders);

  if (availableProviders[HealthProvider.samsungHealth] === HealthProviderAvailability.available) {
    const authorisedSamsungHealth = yield hasPermissions(
      [HealthProviderCapability.STEP_COUNT],
      HealthProvider.samsungHealth
    );

    yield call(Logger.logMixpanelEvent, "yuhealth_permissions_fetched", {
      provider: "samsungHealth",
      authorised: authorisedSamsungHealth,
    });

    // If Google Fit is not authorised, and Samsung Health is then the existing provider is Samsung Health
    if (shouldContinueWithPermissionStatus(authorisedSamsungHealth)) {
      yield put(setActiveYuHealthProvider(HealthProvider.samsungHealth));
      return;
    }
  }

  if (availableProviders[HealthProvider.googleFit] === HealthProviderAvailability.available) {
    const authorisedGoogleFit = yield hasPermission(HealthProviderCapability.STEP_COUNT, HealthProvider.googleFit);

    yield call(Logger.logMixpanelEvent, "yuhealth_permissions_fetched", {
      provider: "googleFit",
      authorised: authorisedGoogleFit,
    });

    if (shouldContinueWithPermissionStatus(authorisedGoogleFit)) {
      yield put(setActiveYuHealthProvider(HealthProvider.googleFit));
      return;
    }
  }
}

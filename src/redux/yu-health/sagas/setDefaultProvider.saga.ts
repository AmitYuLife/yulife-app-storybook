import { put, select } from "redux-saga/effects";
import { getActiveProviderSelector } from "../yu-health.selectors";
import {
  HealthProvider,
  HealthProviderAvailability,
  HealthProviderCapability,
  getAvailabilityStatus,
  hasPermissions,
} from "@yu-life/react-native-yu-health";
import { setActiveYuHealthProvider } from "../yu-health.actions";
import { isiOS } from "@utils";

// Set YuHealth's provider based on existing provider from fitkit
export default function* setDefaultProviderSaga(): unknown {
  const activeProvider: HealthProvider | null = yield select(getActiveProviderSelector);
  if (activeProvider) {
    yield put(setActiveYuHealthProvider(activeProvider));
    return;
  }

  if (isiOS()) {
    yield put(setActiveYuHealthProvider(HealthProvider.healthKit));
    return;
  }

  const availableProviders: Awaited<ReturnType<typeof getAvailabilityStatus>> = yield getAvailabilityStatus([
    HealthProvider.samsungHealth,
    HealthProvider.googleFit,
  ]);

  if (availableProviders[HealthProvider.googleFit] === HealthProviderAvailability.available) {
    const authorisedGoogleFit = yield hasPermissions([HealthProviderCapability.STEP_COUNT], HealthProvider.googleFit);
    if (authorisedGoogleFit[HealthProviderCapability.STEP_COUNT]) {
      yield put(setActiveYuHealthProvider(HealthProvider.googleFit));
      return;
    }
  }

  if (availableProviders[HealthProvider.samsungHealth] === HealthProviderAvailability.available) {
    const authorisedSamsungHealth = yield hasPermissions(
      [HealthProviderCapability.STEP_COUNT],
      HealthProvider.samsungHealth
    );

    // If Google Fit is not authorised, and Samsung Health is then the existing provider is Samsung Health
    if (authorisedSamsungHealth[HealthProviderCapability.STEP_COUNT]) {
      yield put(setActiveYuHealthProvider(HealthProvider.samsungHealth));
      return;
    }
  }
}

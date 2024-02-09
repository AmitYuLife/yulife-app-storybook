import { HealthProvider, HealthProviderAvailability, getAvailabilityStatus } from "@yu-life/react-native-yu-health";
import { put } from "redux-saga/effects";
import { refreshProviderAvailability } from "../yu-health.actions";

export default function* refreshProviderAvailabilitySaga() {
  const statuses: Record<HealthProvider, HealthProviderAvailability> = yield getAvailabilityStatus(
    Object.values(HealthProvider)
  );

  yield put(refreshProviderAvailability(statuses));
}

import { HealthProvider, HealthProviderAvailability, getAvailabilityStatus } from "@yu-life/react-native-yu-health";
import { put } from "redux-saga/effects";
import { refreshProviderAvailability } from "../yu-health.actions";
import { SUPPORTED_PROVIDERS } from "@utils";

export default function* refreshProviderAvailabilitySaga() {
  const statuses: Record<HealthProvider, HealthProviderAvailability> = yield getAvailabilityStatus(SUPPORTED_PROVIDERS);
  yield put(refreshProviderAvailability(statuses));
}

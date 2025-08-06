import { HealthProvider, HealthProviderAvailability, getAvailabilityStatus } from "@yu-life/react-native-yu-health";
import { call, put } from "redux-saga/effects";
import { refreshProviderAvailability } from "../yu-health.actions";
import refreshCapabilityPermissionsSaga from "./refreshCapabilityPermissions.saga";
import { CLIENT_SUPPORTED_PROVIDERS } from "@utils";

export default function* refreshProviderAvailabilitySaga() {
  const statuses: Record<HealthProvider, HealthProviderAvailability> = yield getAvailabilityStatus(
    CLIENT_SUPPORTED_PROVIDERS
  );
  yield put(refreshProviderAvailability(statuses));
  yield call(refreshCapabilityPermissionsSaga);
}

import { HealthProvider, HealthProviderCapability, hasPermissions } from "@yu-life/react-native-yu-health";
import { put, select } from "redux-saga/effects";
import { updateCapabilityStatuses } from "../yu-health.actions";
import { getActiveProviderSelector } from "../yu-health.selectors";

export default function* refreshCapabilityPermissionsSaga() {
  const activeProvider: HealthProvider = yield select(getActiveProviderSelector);
  if (!activeProvider) {
    return;
  }

  const status: Awaited<ReturnType<typeof hasPermissions>> = yield hasPermissions(
    Object.values(HealthProviderCapability),
    activeProvider
  );

  yield put(updateCapabilityStatuses(status));
}

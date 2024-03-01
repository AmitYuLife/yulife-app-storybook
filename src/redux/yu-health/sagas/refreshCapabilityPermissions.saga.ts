import { HealthProvider, HealthProviderCapability, hasPermissions } from "@yu-life/react-native-yu-health";
import { put, select, take } from "redux-saga/effects";
import { YU_HEALTH_SET_ACTIVE_PROVIDER, updateCapabilityStatuses } from "../yu-health.actions";
import { getActiveProviderSelector } from "../yu-health.selectors";
import { PayloadAction } from "@reduxjs/toolkit";

export default function* refreshCapabilityPermissionsSaga() {
  let activeProvider: HealthProvider = yield select(getActiveProviderSelector);
  if (!activeProvider) {
    // Wait until an active provider has been set
    const setAction: PayloadAction<HealthProvider> = yield take(YU_HEALTH_SET_ACTIVE_PROVIDER);
    activeProvider = setAction.payload;
  }

  const status: Awaited<ReturnType<typeof hasPermissions>> = yield hasPermissions(
    Object.values(HealthProviderCapability),
    activeProvider
  );

  yield put(updateCapabilityStatuses(status));
}

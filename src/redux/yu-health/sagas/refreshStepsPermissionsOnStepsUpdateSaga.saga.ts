import { put, select } from "redux-saga/effects";
import { updatePedometerSuccessAction } from "@redux/pedometer/pedometer.actions";
import { HealthPermissionStatus, HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { getActiveProvider, getCapabilityStatuses, getYuHealthStatus } from "../yu-health.selectors";
import { YuHealthStatus } from "../yu-health.types";
import { updateCapabilityStatuses } from "../yu-health.actions";

export default function* refreshStepsPermissionsOnStepsUpdateSaga({
  payload,
}: ReturnType<typeof updatePedometerSuccessAction>) {
  const yuHealthStatus: ReturnType<typeof getYuHealthStatus> = yield select(getYuHealthStatus);
  const yuHealthProvider: ReturnType<typeof getActiveProvider> = yield select(getActiveProvider);

  if (yuHealthStatus !== YuHealthStatus.ready || !yuHealthProvider) {
    return;
  }

  const capabilityStatuses: ReturnType<typeof getCapabilityStatuses> = yield select(getCapabilityStatuses);

  if (
    capabilityStatuses &&
    (payload?.steps ?? 0) > 0 &&
    capabilityStatuses[HealthProviderCapability.STEP_COUNT] === HealthPermissionStatus.notDetermined
  ) {
    yield put(
      updateCapabilityStatuses({
        ...capabilityStatuses,
        [HealthProviderCapability.STEP_COUNT]: HealthPermissionStatus.granted,
      })
    );
  }
}

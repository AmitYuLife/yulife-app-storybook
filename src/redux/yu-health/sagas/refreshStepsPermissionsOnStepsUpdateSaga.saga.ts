import { put, select } from "redux-saga/effects";
import { updatePedometerSuccessAction } from "@redux/pedometer/pedometer.actions";
import { HealthPermissionStatus, HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { getCapabilityStatuses, getYuHealthStatus } from "../yu-health.selectors";
import { YuHealthStatus } from "../yu-health.types";
import { updateCapabilityStatuses } from "../yu-health.actions";

export default function* refreshStepsPermissionsOnStepsUpdateSaga({
  payload,
}: ReturnType<typeof updatePedometerSuccessAction>) {
  const yuHealthStatus: ReturnType<typeof getYuHealthStatus> = yield select(getYuHealthStatus);
  if (yuHealthStatus !== YuHealthStatus.ready) {
    return;
  }

  const capabilityStatuses: ReturnType<typeof getCapabilityStatuses> = yield select(getCapabilityStatuses);

  if (
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

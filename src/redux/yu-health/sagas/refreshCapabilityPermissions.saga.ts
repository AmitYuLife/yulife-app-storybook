import { HealthProvider, HealthProviderCapability, hasPermissions } from "@yu-life/react-native-yu-health";
import { delay, put, select, take } from "redux-saga/effects";
import { YU_HEALTH_SET_ACTIVE_PROVIDER, setYuHealthStatus, updateCapabilityStatuses } from "../yu-health.actions";
import { getActiveProvider, getProviderAvailabilities } from "../yu-health.selectors";
import { PayloadAction } from "@reduxjs/toolkit";
import Logger from "@services/logger/logger";
import { YuHealthStatus } from "../yu-health.types";

export default function* refreshCapabilityPermissionsSaga() {
  yield put(setYuHealthStatus(YuHealthStatus.loading));

  let retries = 0;
  let didComplete = false;

  do {
    retries++;
    try {
      const providerAvailabilities: Awaited<ReturnType<typeof getProviderAvailabilities>> = yield select(
        getProviderAvailabilities
      );

      if (!providerAvailabilities) {
        yield put(setYuHealthStatus(YuHealthStatus.loading));
        break;
      }

      let activeProvider: HealthProvider = yield select(getActiveProvider);
      if (!activeProvider) {
        // Wait until an active provider has been set
        yield put(setYuHealthStatus(YuHealthStatus.providerless));

        const setAction: PayloadAction<HealthProvider> = yield take(YU_HEALTH_SET_ACTIVE_PROVIDER);
        activeProvider = setAction.payload;
      }

      const status: Awaited<ReturnType<typeof hasPermissions>> = yield hasPermissions(
        Object.values(HealthProviderCapability),
        activeProvider
      );

      didComplete = true;
      yield put(setYuHealthStatus(YuHealthStatus.ready));
      yield put(updateCapabilityStatuses(status));
    } catch (e) {
      // Sometimes, when the app is first opened, the health data service (specifically for Samsung Health)
      // is not yet available. So we can retry this a few times
      if (retries >= 3) {
        Logger.notify(e, { file: "refreshCapabilityPermissions.saga" });
        yield put(setYuHealthStatus(YuHealthStatus.error));
      }

      yield delay(4000);
    }
  } while (!didComplete && retries < 3);
}

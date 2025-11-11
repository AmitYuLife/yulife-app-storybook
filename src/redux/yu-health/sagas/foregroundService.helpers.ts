import { call, select, take } from "redux-saga/effects";
import { isAndroid } from "@utils";
import { getActiveProvider, getYuHealthStatus } from "../yu-health.selectors";
import { YuHealthStatus } from "../yu-health.types";
import { YU_HEALTH_SET_STATUS } from "../yu-health.actions";
import { getCurrentChallengeScore } from "@redux/levels/levels.selectors";
import {
  startForegroundService as startForegroundServiceNative,
  isForegroundServiceRunning,
  stopForegroundService as stopForegroundServiceNative,
} from "@yu-life/react-native-yu-health";
import { t } from "@locale";

/**
 * Starts the YuHealth foreground service for challenge tracking.
 * Only runs on Android when YuHealth is ready and foreground service feature is enabled.
 */
export function* startForegroundService({ endTime }: { endTime?: Date }) {
  if (!isAndroid()) {
    return;
  }

  // Wait for YuHealth to become ready if it's not already
  let yuHealthStatus: ReturnType<typeof getYuHealthStatus> = yield select(getYuHealthStatus);
  let activeProvider: ReturnType<typeof getActiveProvider> = yield select(getActiveProvider);

  while (yuHealthStatus !== YuHealthStatus.ready || !activeProvider) {
    yield take(YU_HEALTH_SET_STATUS);
    yuHealthStatus = yield select(getYuHealthStatus);
    activeProvider = yield select(getActiveProvider);
  }

  const currentChallengeScore: number = yield select(getCurrentChallengeScore);

  try {
    const isRunning: boolean = yield call(isForegroundServiceRunning);

    if (isRunning) {
      yield call(stopForegroundService);
    }

    yield call(startForegroundServiceNative, {
      baseSteps: currentChallengeScore,
      endTime,
      copyConfig: {
        // The foreground service replaces '%{steps}' with the actual steps count
        activeTitle: t("yu_health.foreground_service.active_title", { steps: "%{steps}" }),
        activeBody: t("yu_health.foreground_service.active_body"),
      },
    });
  } catch (error) {
    console.error("[YuHealth Foreground Service] Error starting service", error);
  }
}

export function* stopForegroundService(): Generator<unknown, void, boolean> {
  if (!isAndroid()) {
    return;
  }

  const isRunning: boolean = yield call(isForegroundServiceRunning);

  if (isRunning) {
    yield call(stopForegroundServiceNative);
  }
}

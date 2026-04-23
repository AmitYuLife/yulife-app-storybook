import { isAndroid } from "@utils";
import { call, select } from "redux-saga/effects";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getActiveProvider } from "@redux/yu-health/yu-health.selectors";
import { isForegroundServiceRunning, stopForegroundService } from "@yu-life/react-native-yu-health";
import { getActiveLevel } from "../levels.selectors";
import { isForegroundServiceEnabled } from "@utils/yuHealth";
import Logger from "@services/logger/logger";

// Stop foreground pedometer if it happens to be running and we don't have a challenge
// This can happen if challenge was cancelled externally (another device)
export default function* stopForegroundPedometerSaga() {
  try {
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    const activeProvider: ReturnType<typeof getActiveProvider> = yield select(getActiveProvider);

    if (!isAndroid() || !isForegroundServiceEnabled({ features, activeProvider })) {
      return;
    }

    const { id }: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);

    if (id) {
      return;
    }

    const isRunning: ReturnType<typeof isForegroundServiceRunning> = yield call(isForegroundServiceRunning);
    if (!isRunning) {
      return;
    }

    yield call(stopForegroundService);
  } catch (e) {
    Logger.notify(e, { event: "stopForegroundPedometerSaga" });
  }
}

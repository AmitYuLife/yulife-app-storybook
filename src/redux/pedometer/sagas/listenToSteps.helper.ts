import moment from "moment";
import { Platform } from "react-native";
import { call, cancelled, put, select, spawn, take } from "redux-saga/effects";
import { PedometerResponse } from "@services/fitkit/fitkit.service";
import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import { getUserFeatures } from "../../user/user.selectors";
import {
  restartPedometerOnNewDay,
  updatePedometerNoNewDataAction,
  updatePedometerStartAction,
  updatePedometerSuccessAction,
} from "../pedometer.actions";
import { stepsChannel, NEXT_DAY_STARTED } from "../pedometer.channels";
import { stepsChannel as yuHealthStepsChannel } from "../yu-health.pedometer.channels";
import { getSteps } from "../pedometer.selectors";
import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import { updatePedometerForDebugSuccessAction } from "@redux/debug/debug.actions";
import { getDebugToolsEnabled } from "@redux/debug/debug.selectors";
import { HealthDataType } from "@yu-life/react-native-yu-health";

const ERROR_NOT_AUTHORISED = "Pedometer not authorised";

type StepChannel = ReturnType<typeof stepsChannel> | ReturnType<typeof yuHealthStepsChannel>;

export default function* listenToSteps() {
  let isRunning = true;
  yield put(updatePedometerStartAction());

  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  const stepsBlackListApps: string[] = yield select(getStepsBlackListApps);
  const momentStartDay = moment().startOf("day");
  const startOfDay = momentStartDay.format();
  const channel: StepChannel = features.tempGameEnableReleaseYuHealthV4
    ? yield call(yuHealthStepsChannel, startOfDay, stepsBlackListApps, features.disableUserEntries)
    : yield call(stepsChannel, startOfDay, stepsBlackListApps, features.canFallbackToStepDetectorSensor);

  while (isRunning) {
    try {
      /**
       * For iOS, add initialisation phase to stop infinite fetching state if unauthorised
       */
      if (Platform.OS === "ios") {
        yield put(updatePedometerNoNewDataAction());
      }

      const results: typeof ERROR_NOT_AUTHORISED | typeof NEXT_DAY_STARTED | PedometerResponse = yield take(channel);
      const currentSteps: ReturnType<typeof getSteps> = yield select(getSteps);

      if (results === ERROR_NOT_AUTHORISED) {
        yield spawn(() => EngagementTracking.logEvent("pedometer_unauthorised", { event: "listenToSteps" }));
        yield put(updatePedometerNoNewDataAction());
        continue;
      }

      if (results === NEXT_DAY_STARTED) {
        yield put(restartPedometerOnNewDay());
        continue;
      }

      if (features.loggingEnabled) {
        yield spawn(() => Logger.info("Raw steps results passive", { ...results, location: "fitkit" }));
      }

      const activeLevel: ReturnType<typeof getActiveLevel> = yield select(getActiveLevel);
      const debugToolsEnabled: ReturnType<typeof getDebugToolsEnabled> = yield select(getDebugToolsEnabled);

      if (
        debugToolsEnabled &&
        activeLevel.challengeIsActive &&
        activeLevel.yuHealth?.dataType?.includes(HealthDataType.steps)
      ) {
        yield put(updatePedometerForDebugSuccessAction(results));
      }

      if (results.steps !== currentSteps) {
        yield put(updatePedometerSuccessAction(results));
      } else {
        yield put(updatePedometerNoNewDataAction());
      }
    } catch (e) {
      yield spawn(() => {
        Logger.notify(e, { event: "listenToSteps" });
      });
    } finally {
      const isCancelled: boolean = yield cancelled();

      if (isCancelled) {
        channel.close();
        isRunning = false;
      }
    }
  }
}

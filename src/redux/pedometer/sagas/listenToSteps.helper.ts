import moment from "moment";
import { Platform } from "react-native";
import { call, cancelled, put, select, spawn, take } from "redux-saga/effects";
import { PedometerResponse } from "@services/fitkit/fitkit.service";
import Logger from "@services/logging/logger";
import { getUserFeatures } from "../../user/user.selectors";
import {
  restartPedometerOnNewDay,
  updatePedometerNoNewDataAction,
  updatePedometerStartAction,
  updatePedometerSuccessAction,
} from "../pedometer.actions";
import { stepsChannel, NEXT_DAY_STARTED } from "../pedometer.channels";
import { stepsChannel as yuHealthStepsChannel } from "../yu-health.pedometer.channels";
import { getLastUpdated, getSteps } from "../pedometer.selectors";
import { getMaxStepsAnomalyWindowMs, getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";

const ERROR_NOT_AUTHORISED = "Pedometer not authorised";
const STEPS_PER_MILLISECONDS_LIMIT = 2;

type StepChannel = ReturnType<typeof stepsChannel> | ReturnType<typeof yuHealthStepsChannel>;

export default function* listenToSteps() {
  let isRunning = true;
  yield put(updatePedometerStartAction());

  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  const stepsBlackListApps: string[] = yield select(getStepsBlackListApps);
  const momentStartDay = moment().startOf("day");
  const startOfDay = momentStartDay.format();
  const channel: StepChannel = features.tempGameEnableReleaseYuHealthV3
    ? yield call(yuHealthStepsChannel, startOfDay, stepsBlackListApps, features.disableUserEntries)
    : yield call(stepsChannel, startOfDay, stepsBlackListApps, features.canFallbackToStepDetectorSensor);
  const maxStepsAnomalyWindowMs: ReturnType<typeof getMaxStepsAnomalyWindowMs> = yield select(
    getMaxStepsAnomalyWindowMs
  );

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
        yield spawn(() => Logger.logEvent("pedometer_unauthorised", { event: "listenToSteps" }));
        yield put(updatePedometerNoNewDataAction());
        continue;
      }

      if (results === NEXT_DAY_STARTED) {
        yield put(restartPedometerOnNewDay());
        continue;
      }

      if (features.loggingEnabled) {
        yield spawn(() =>
          Logger.logMixpanelEvent("app_debug", { ...results, type: "raw_steps_results_passive", location: "fitkit" })
        );
      }

      // Check pedometer limit if toggle is enabled
      let areValidSteps = true;
      if (features.limitPedometerSteps) {
        const lastUpdated: ReturnType<typeof getLastUpdated> = yield select(getLastUpdated);
        const timeSinceLastUpdate = moment(results.endTime).diff(moment(lastUpdated), "milliseconds");
        /**
         * If the pedometer repeats a genuine value assume it's legit
         */
        if (timeSinceLastUpdate < maxStepsAnomalyWindowMs) {
          const stepsPerMilliseconds = (results.steps - currentSteps) / Math.max(1, timeSinceLastUpdate);
          areValidSteps = stepsPerMilliseconds < STEPS_PER_MILLISECONDS_LIMIT;
        }
      }

      if (results.steps !== currentSteps && areValidSteps) {
        yield put(updatePedometerSuccessAction(results));
      } else {
        yield put(updatePedometerNoNewDataAction());
      }
    } catch (e) {
      yield spawn(() => {
        Logger.error(e, { event: "listenToSteps" });
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

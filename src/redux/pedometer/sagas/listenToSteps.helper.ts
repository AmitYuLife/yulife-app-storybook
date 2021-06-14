import moment from "moment";
import { Platform } from "react-native";
import RNFitKit from "@yu-life/react-native-fitkit";
import { call, cancelled, put, select, spawn, take } from "redux-saga/effects";
import { PedometerResponse } from "@services/fitkit/fitkit.service";
import Logger from "@services/logging/logger";
import { getUserFeatures } from "../../user/user.selectors";
import {
  updatePedometerNoNewDataAction,
  updatePedometerStartAction,
  updatePedometerSuccessAction,
} from "../pedometer.actions";
import { stepsChannel } from "../pedometer.channels";
import { getLastUpdated, getSteps } from "../pedometer.selectors";

const ERROR_NOT_AUTHORISED = "Pedometer not authorised";
const STEPS_PER_MILLISECONDS_LIMIT = 2;
const MAX_ANOMALY_DETECTION_WINDOW_MS = 10000; // in ms

export default function* listenToSteps() {
  yield put(updatePedometerStartAction());

  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  const momentStartDay = moment().startOf("day");
  const startOfDay = momentStartDay.format();
  const channel: ReturnType<typeof stepsChannel> = yield call(stepsChannel, startOfDay);

  while (true) {
    try {
      /**
       * For iOS, add initialisation phase to stop infinite fetching state if unauthorised
       */
      if (Platform.OS === "ios") {
        const isAuthorised: boolean = yield call(RNFitKit.isAuthorised);

        if (!isAuthorised) {
          yield put(updatePedometerNoNewDataAction());
        }
      }

      const results: typeof ERROR_NOT_AUTHORISED | PedometerResponse = yield take(channel);
      const currentSteps: ReturnType<typeof getSteps> = yield select(getSteps);

      if (results === ERROR_NOT_AUTHORISED) {
        yield spawn(() => Logger.logEvent("pedometer_unauthorised", { event: "listenToSteps" }));
        yield put(updatePedometerNoNewDataAction());
        continue;
      }

      if (features.loggingEnabled) {
        yield spawn(() => Logger.logMixpanelEvent("raw_steps_results_passive", results));
      }

      // Check pedometer limit if toggle is enabled
      let areValidSteps = true;
      if (features.limitPedometerSteps) {
        const lastUpdated: ReturnType<typeof getLastUpdated> = yield select(getLastUpdated);
        const timeSinceLastUpdate = moment(results.endTime).diff(moment(lastUpdated), "milliseconds");
        /**
         * If the pedometer repeats a genuine value assume it's legit
         */
        if (timeSinceLastUpdate < MAX_ANOMALY_DETECTION_WINDOW_MS) {
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
      }
    }
  }
}

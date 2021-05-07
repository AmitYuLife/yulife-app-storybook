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
import { getSteps } from "../pedometer.selectors";

const ERROR_NOT_AUTHORISED = "Pedometer not authorised";

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

      if (results.steps !== currentSteps) {
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

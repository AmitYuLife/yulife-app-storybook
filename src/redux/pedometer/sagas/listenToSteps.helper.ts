import Logger from "@services/logging/logger";
import moment from "moment";
import { call, cancelled, put, select, spawn, take } from "redux-saga/effects";
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

  const features = yield select(getUserFeatures);
  const momentStartDay = moment().startOf("day");
  const startOfDay = momentStartDay.format();
  const channel = yield call(stepsChannel, startOfDay);

  while (true) {
    try {
      const results = yield take(channel);
      const currentSteps = yield select(getSteps);

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
      if (yield cancelled()) {
        channel.close();
      }
    }
  }
}

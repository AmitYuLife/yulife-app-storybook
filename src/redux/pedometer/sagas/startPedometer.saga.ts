import { Task } from "@redux-saga/types";
import { LOGOUT_SUCCESS } from "@redux/user/user.actions";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import { call, cancel, fork, put, race, select, take } from "redux-saga/effects";
import { UPDATE_APP_STATE } from "../../app/app.actions";
import { START_DAILY_STEPS } from "../../daily-steps/daily-steps.actions";
import { getIsUserArchived } from "../../user/user.selectors";
import { PEDOMETER_STOP, startPedometerUpdates } from "../pedometer.actions";
import listenToSteps from "./listenToSteps.helper";

// TODO: restart the pedometer when a new day ticks over
export default function* startPedometerSaga() {
  let shouldStartPedometerUpdates = true; // when the app starts we don't need to wait for other actions; fire pedometer straight away

  while (true) {
    if (!shouldStartPedometerUpdates) {
      const { appUpdated, dailySteps } = yield race({
        appUpdated: take(UPDATE_APP_STATE),
        dailySteps: take(START_DAILY_STEPS),
      });

      shouldStartPedometerUpdates = dailySteps || (appUpdated && appUpdated.payload === "active");
    }

    const token: Unpacked<typeof getToken> = yield call(getToken);
    const isArchived: ReturnType<typeof getIsUserArchived> = yield select(getIsUserArchived);

    if (token && !isArchived && shouldStartPedometerUpdates) {
      yield put(startPedometerUpdates());
      const stepsTask: Task = yield fork(listenToSteps);
      yield race({
        appUpdated: take(UPDATE_APP_STATE),
        dailySteps: take(PEDOMETER_STOP),
        unauthenticated: take(LOGOUT_SUCCESS),
      });
      yield cancel(stepsTask);
      shouldStartPedometerUpdates = false; // we need to make sure that if the app was put in the background we're waiting for the actions
    }
  }
}

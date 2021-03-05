import { Task } from "@redux-saga/types";
import { LOGOUT_SUCCESS } from "@redux/user/user.actions";
import { getToken } from "@services/storage";
import { Unpacked } from "@services/utils";
import { call, cancel, fork, put, race, select, take } from "redux-saga/effects";
import { UPDATE_APP_STATE } from "../../app/app.actions";
import { START_DAILY_STEPS } from "../../daily-steps/daily-steps.actions";
import { getIsUserArchived } from "../../user/user.selectors";
import { PEDOMETER_STOP, startPedometerUpdates } from "../pedometer.actions";
import listenToSteps from "./listenToSteps.helper";

// TODO: restart the pedometer when a new day ticks over
export default function* startPedometerSaga() {
  while (true) {
    const { appStart, appUpdated, dailySteps } = yield race({
      appStart: take("persist/REHYDRATE"),
      appUpdated: take(UPDATE_APP_STATE),
      dailySteps: take(START_DAILY_STEPS),
    });
    const token: Unpacked<typeof getToken> = yield call(getToken);
    const isArchived: ReturnType<typeof getIsUserArchived> = yield select(getIsUserArchived);

    if (token && !isArchived && (dailySteps || appStart || (appUpdated && appUpdated.payload === "active"))) {
      yield put(startPedometerUpdates());
      const stepsTask: Task = yield fork(listenToSteps);
      yield race({
        appUpdated: take(UPDATE_APP_STATE),
        dailySteps: take(PEDOMETER_STOP),
        unauthenticated: take(LOGOUT_SUCCESS),
      });
      yield cancel(stepsTask);
    }
  }
}

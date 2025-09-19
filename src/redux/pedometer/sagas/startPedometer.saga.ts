import { Task } from "@redux-saga/types";
import { LOGOUT_SUCCESS } from "@redux/user/user.actions";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import { call, cancel, fork, put, race, select, take } from "redux-saga/effects";
import { UPDATE_APP_STATE } from "../../app/app.actions";
import { START_DAILY_STEPS } from "../../daily-steps/daily-steps.actions";
import { getIsUserArchived, getUserFeatures } from "../../user/user.selectors";
import { PEDOMETER_RESTART_ON_NEW_DAY, PEDOMETER_STOP, startPedometerUpdates } from "../pedometer.actions";
import listenToSteps from "./listenToSteps.helper";
import { getActiveProvider } from "@redux/yu-health/yu-health.selectors";
import { HealthProvider } from "@redux/user/user.types";
import { YU_HEALTH_SET_ACTIVE_PROVIDER } from "@redux/yu-health/yu-health.actions";

export default function* startPedometerSaga() {
  const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  let shouldStartPedometerUpdates = !features?.tempGameEnableReleaseYuHealthV4;

  while (true) {
    const newFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

    if (!shouldStartPedometerUpdates) {
      const { appUpdated, dailySteps } = yield race({
        appUpdated: take(UPDATE_APP_STATE),
        dailySteps: take(START_DAILY_STEPS),
        activeProvider: take(YU_HEALTH_SET_ACTIVE_PROVIDER),
      });

      let shouldContinue = true;
      if (newFeatures?.tempGameEnableReleaseYuHealthV4) {
        const activeProvider: HealthProvider = yield select(getActiveProvider);
        shouldContinue = !!activeProvider;
      }

      shouldStartPedometerUpdates =
        shouldContinue && (dailySteps || (appUpdated && appUpdated.payload.appState === "active"));
    }

    const token: Unpacked<typeof getToken> = yield call(getToken);
    const isArchived: ReturnType<typeof getIsUserArchived> = yield select(getIsUserArchived);

    if (isArchived) {
      break;
    }

    if (token && shouldStartPedometerUpdates) {
      yield put(startPedometerUpdates());
      const stepsTask: Task = yield fork(listenToSteps);
      const { restarted } = yield race({
        appUpdated: take(UPDATE_APP_STATE),
        dailySteps: take(PEDOMETER_STOP),
        unauthenticated: take(LOGOUT_SUCCESS),
        restarted: take(PEDOMETER_RESTART_ON_NEW_DAY),
      });

      yield cancel(stepsTask);

      shouldStartPedometerUpdates = !!restarted; // we need to make sure that if the app was put in the background we're waiting for the actions
    }
  }
}

import { call, cancelled, put, take } from "redux-saga/effects";
import { foregroundPedometerUpdateAction } from "../pedometer.actions";
import { foregroundPedometerChannel } from "../yu-health-foreground-pedometer.channels";

/**
 * Listens to foreground pedometer updates from the YuHealth foreground service.
 * Emits foregroundPedometerUpdate actions with the step count.
 */
export default function* listenToForegroundSteps() {
  const channel: ReturnType<typeof foregroundPedometerChannel> = yield call(foregroundPedometerChannel);

  try {
    while (true) {
      const steps: number = yield take(channel);
      const stepsNumber = Number(steps);
      yield put(foregroundPedometerUpdateAction(stepsNumber));
    }
  } finally {
    const isCancelled: boolean = yield cancelled();

    if (isCancelled) {
      channel.close();
    }
  }
}

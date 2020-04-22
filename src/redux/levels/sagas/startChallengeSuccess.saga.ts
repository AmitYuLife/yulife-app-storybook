import { call, put, select } from "redux-saga/effects";
import { getSteps } from "../../pedometer/pedometer.selectors";
import { challengeStartSuccessAction, pedometerStepsChallengeStarted } from "../levels.actions";
import startChallenge from "./startChallenge.helper";

export default function* startChallengeSuccessSaga({ payload }: ReturnType<typeof challengeStartSuccessAction>) {
  const {
    createActiveChallenge: {
      challenge: { startDateTime, endDateTime },
      levelSlot: { subtype },
    },
    levelSlotId,
  } = payload;

  const initialPedometerSteps = yield select(getSteps);
  yield put(pedometerStepsChallengeStarted(initialPedometerSteps));

  if (startDateTime && endDateTime && subtype) {
    yield call(startChallenge, {
      endDateTime,
      isMeditation: subtype === "meditation",
      levelSlotId,
      startDateTime,
    });
  }
}

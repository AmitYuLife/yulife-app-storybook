import { addSecondsToChallengeEndDateTime } from "@services/utils";
import { call, put, select } from "redux-saga/effects";
import { getSteps } from "../../pedometer/pedometer.selectors";
import { challengeStartSuccessAction, pedometerStepsChallengeStarted } from "../levels.actions";
import startChallenge from "./startChallenge.helper";

export default function* startChallengeSuccessSaga({ payload }: ReturnType<typeof challengeStartSuccessAction>) {
  const {
    createActiveChallenge: {
      challenge: { startDateTime, endDateTime: remoteEndDateTime },
      levelSlot: { subtype },
    },
    levelSlotId,
  } = payload;

  const initialPedometerSteps: ReturnType<typeof getSteps> = yield select(getSteps);
  yield put(pedometerStepsChallengeStarted(initialPedometerSteps));

  if (startDateTime && remoteEndDateTime && subtype) {
    const endDateTime = addSecondsToChallengeEndDateTime(remoteEndDateTime);

    yield call(startChallenge, {
      endDateTime,
      subtype,
      levelSlotId,
      startDateTime,
    });
  }
}

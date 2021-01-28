import upsertStepsChallenge from "@graphql/challenges/upsertPassiveChallenge.gql";
import { call, put, spawn, select } from "redux-saga/effects";

import { mapPedometerResults } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";

import { getDailyStepsStateForPedometerUpdate } from "../../daily-steps/daily-steps.selectors";
import { updatePedometerSuccessAction } from "../../pedometer/pedometer.actions";
import {
  updateDailyStepsFailed,
  updateDailyStepsSuccess,
  stepsWithNoUpdate,
  startStepsSyncing,
} from "../daily-steps.actions";

export default function* updateDailyStepsSaga({ payload }: ReturnType<typeof updatePedometerSuccessAction>) {
  try {
    // get the last synced steps from the server
    const state = yield select(getDailyStepsStateForPedometerUpdate);
    const { isSyncing, isServerFetchedThisSession, dailySteps: oldServerSteps } = state;

    if (!isSyncing && (!isServerFetchedThisSession || checkIfAPIRequestNeeded(payload.steps, oldServerSteps))) {
      yield put(startStepsSyncing());
      const { data } = yield call(upsertStepsChallenge, [mapPedometerResults(payload)]);

      if (data?.upsertPassiveChallenge) {
        yield put(updateDailyStepsSuccess(data));
      }
    } else {
      yield put(stepsWithNoUpdate());
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "updateDailySteps" });
    });
    yield put(updateDailyStepsFailed(e.message));
  }
}

const STEPS_REQUEST_BASE = 20;
const STEPS_MILESTONE = 2000;

/**
 * We don't want to send a request to the API on every 2 steps.
 * This allows us to throttle requests on every STEPS_TO_SYNC steps
 * @param newSteps Incoming steps from the pedometer
 * @param oldSteps Stored steps that were sent to the API
 */
function checkIfAPIRequestNeeded(newSteps: number, oldSteps: number) {
  const newIsMuchHigherThanOld = newSteps - oldSteps >= STEPS_REQUEST_BASE;
  const newIsMilestone = Math.floor(newSteps / STEPS_MILESTONE) > Math.floor(oldSteps / STEPS_MILESTONE);

  return newIsMuchHigherThanOld || newIsMilestone;
}

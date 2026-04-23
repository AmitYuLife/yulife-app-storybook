import upsertDailyPassives from "@graphql/challenges/upsertDailyPassives.gql";
import { call, put, spawn, select } from "redux-saga/effects";
import { mapPedometerResults } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logger/logger";
import { getDailyStepsSyncState } from "@redux/daily-steps/daily-steps.selectors";
import { PassiveExchangeRate } from "@redux/_core/types";
import { updatePedometerSuccessAction } from "@redux/pedometer/pedometer.actions";
import {
  updateDailyStepsFailed,
  updateDailyStepsSuccessFromRemote,
  updateDailyStepsSuccessFromLocal,
  startStepsSyncing,
} from "../daily-steps.actions";
import { toReduxChallenge } from "@redux/daily-passive-activity/sagas/utils";

export default function* updateDailyStepsSaga({ payload }: ReturnType<typeof updatePedometerSuccessAction>) {
  try {
    // get the last synced steps from the server
    const state: ReturnType<typeof getDailyStepsSyncState> = yield select(getDailyStepsSyncState);
    const { isSyncing, isServerFetchedThisSession, serverSteps, exchangeRate } = state;

    const shouldSyncToRemote =
      !isSyncing && (!isServerFetchedThisSession || checkIfAPIRequestNeeded(payload.steps, serverSteps, exchangeRate));

    // we wanna avoid making API requests for every single 1-2 steps
    if (shouldSyncToRemote) {
      yield put(startStepsSyncing());
      const { data }: Awaited<ReturnType<typeof upsertDailyPassives>> = yield call(upsertDailyPassives, [
        mapPedometerResults(payload),
      ]);

      if (data?.upsertDailyPassives?.challenges?.length) {
        yield put(
          updateDailyStepsSuccessFromRemote({
            sentSteps: payload.steps,
            challenge: toReduxChallenge(data?.upsertDailyPassives.challenges[0]),
            currentBalance: data?.upsertDailyPassives.currentBalance,
          })
        );
      }
    }

    // always update local steps for the best UX
    yield put(updateDailyStepsSuccessFromLocal(payload.steps));
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "updateDailySteps" });
    });
    yield put(updateDailyStepsFailed(e.message));
  }
}

/**
 * We don't want the user to see a pattern of updated steps at a base level; randomise it
 * @param x From
 * @param y To
 */

const getRandomRequestBase = (x = 50, y = 150) => Math.floor(Math.random() * (y - x + 1) + x);

/**
 * We don't want to send a request to the API on every 2 steps.
 * This allows us to throttle requests on every STEPS_TO_SYNC steps
 * @param newSteps Incoming steps from the pedometer
 * @param oldSteps Stored steps that were sent to the API
 */
function checkIfAPIRequestNeeded(newSteps: number, oldSteps: number, exchangeRate: PassiveExchangeRate) {
  const stepsMilestone = exchangeRate?.steps || 2000;
  const newIsMuchHigherThanOld = newSteps - oldSteps >= getRandomRequestBase();
  const newIsMilestone = Math.floor(newSteps / stepsMilestone) > Math.floor(oldSteps / stepsMilestone);

  return newIsMuchHigherThanOld || newIsMilestone;
}

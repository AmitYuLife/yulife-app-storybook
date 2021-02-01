import upsertStepsChallenge from "@graphql/challenges/upsertPassiveChallenge.gql";
import { call, put, spawn } from "redux-saga/effects";

import { mapPedometerResults } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";

import { updatePedometerSuccessAction } from "../../pedometer/pedometer.actions";
import { updateDailyStepsFailed, updateDailyStepsSuccess } from "../daily-steps.actions";

export default function* updateDailyStepsSaga({ payload }: ReturnType<typeof updatePedometerSuccessAction>) {
  try {
    const { data } = yield call(upsertStepsChallenge, [mapPedometerResults(payload)]);

    if (data?.upsertPassiveChallenge) {
      yield put(updateDailyStepsSuccess(data));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "updateDailySteps" });
    });
    yield put(updateDailyStepsFailed(e.message));
  }
}

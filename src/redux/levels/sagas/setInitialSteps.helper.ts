import { spawn, delay, select, put } from "redux-saga/effects";
import moment from "moment";
import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import { queryFitKitAggregatedData } from "@services/fitkit/fitkit.helpers";
import { pedometerStepsChallengeStarted } from "../levels.actions";
import { getLastResults } from "@redux/pedometer/pedometer.selectors";
import { IUserStore } from "@redux/user/user.types";
import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { QueryFitKitByTypesResponse } from "@services/fitkit/fitkit.types";
import { getAggregationStepCountConfiguration } from "@services/fitkit/fitkit.config";

export default function* setInitialSteps(startDateTime: string, features: IUserStore["features"]) {
  const lastPedometerResults: ReturnType<typeof getLastResults> = yield select(getLastResults);
  const stepsBlackListApps: string[] = yield select(getStepsBlackListApps);
  const { lastUpdated, steps: pedometerSteps, isSynced } = lastPedometerResults;
  const isValidInitialSteps = isSynced && moment(lastUpdated).isSame(moment(), "day");

  const { limitStepsLastUpdateEnabled } = features;

  const lastUpdateIsValid =
    !limitStepsLastUpdateEnabled || moment(startDateTime).diff(moment(lastUpdated), "seconds") <= 10;

  if (isValidInitialSteps && lastUpdateIsValid) {
    yield put(pedometerStepsChallengeStarted(pedometerSteps));
    yield spawn(() =>
      EngagementTracking.logMixpanelEvent("initial_pedometer_steps_set", {
        steps: pedometerSteps,
        lastUpdated,
        source: "pedometer",
      })
    );
    return;
  }

  const eventProperties = {
    startDateTime,
    lastUpdated,
    steps: pedometerSteps,
    isSynced,
    limitStepsLastUpdateEnabled,
    lastUpdateIsValid,
  };
  yield spawn(() => EngagementTracking.logMixpanelEvent("invalid_pedometer_steps", eventProperties));

  const startOfChallengeMoment = moment(startDateTime);
  const startOfDayMoment = startOfChallengeMoment.clone().startOf("day");

  let retryDelayMs = 2000;
  while (retryDelayMs < 16000) {
    try {
      const stepsConfiguration = getAggregationStepCountConfiguration(stepsBlackListApps);
      const data: QueryFitKitByTypesResponse = yield queryFitKitAggregatedData({
        start: startOfDayMoment,
        end: startOfChallengeMoment,
        features,
        metaData: { file: "setInitialSteps.helper" },
        ...stepsConfiguration,
      });

      if (!data.error) {
        const steps = data.results.reduce((acc, payload) => acc + payload.value, 0);
        yield put(pedometerStepsChallengeStarted(steps));
        yield spawn(() =>
          EngagementTracking.logMixpanelEvent("initial_pedometer_steps_set", { steps, source: "querySteps" })
        );
        return;
      }
    } catch (e) {
      yield spawn(() => {
        Logger.notify(e, { event: "setInitialSteps" });
      });
    }

    yield delay(retryDelayMs);
    retryDelayMs = retryDelayMs * 2;
  }
}

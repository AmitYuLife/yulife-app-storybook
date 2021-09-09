import addHistoricalSteps from "@graphql/challenges/addHistoricalSteps.gql";
import { queryHistoricalData } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { Moment } from "moment";
import { call, put, select, spawn } from "redux-saga/effects";
import { PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import addHistoricalData from "@graphql/challenges/addHistoricalData.gql";
import { queryHistoricalMeditationData } from "@services/fitkit/fitkit.helpers";
import { getUserFeatures } from "../../user/user.selectors";
import { setHistoricalDataCollected, setHistoricalMeditationDataCollected } from "../onboarding.actions";
import { Unpacked } from "@utils";

export default function* sendHistoricalData(onboardingDate: Moment) {
  try {
    const { results } = yield call(queryHistoricalData, onboardingDate);

    if (results.length) {
      yield call(addHistoricalSteps, results, false);
      yield put(setHistoricalDataCollected());
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "historical_steps_sync_failed" });
      Logger.logEvent("historical_steps_sync_failed", { message: e.message });
    });
  }
}

export function* sendHistoricalMeditationData(onboardingDate: Moment) {
  try {
    const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

    const results: Unpacked<typeof queryHistoricalMeditationData> = yield call(
      queryHistoricalMeditationData,
      onboardingDate,
      userFeatures
    );

    if (results.length) {
      yield call(addHistoricalData, results, PassiveChallengeType.MEDITATION);
      yield put(setHistoricalMeditationDataCollected());
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "historical_meditation_sync_failed" });
      Logger.logEvent("historical_meditation_sync_failed", { message: e.message });
    });
  }
}

import moment, { Moment } from "moment";
import { call, select, spawn, delay, put } from "redux-saga/effects";
import { ChallengesPayload, FitKitType } from "@graphql/_core/schema/globalTypes";
import {
  fitkitTypeToGqlType,
  queryFitKitByTypes,
  QueryFitKitByTypesResponse,
  sampleDataToAggregatedData,
} from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { UPDATE_APP_STATE } from "../../app/app.actions";
import { getUserFeatures } from "../../user/user.selectors";
import upsertPassiveChallenges from "@graphql/challenges/upsertPassiveChallenges.gql";
import { updateDailyMeditation } from "@redux/daily-meditation/daily-meditation.actions";
import { updateDailyCycling } from "@redux/daily-cycling/daily-cycling.actions";
import { PermissionsAndroid, Platform } from "react-native";
import { totalCoinsUpdated } from "@redux/coins/coins.actions";

export default function* getDailyPassiveActivity({ payload: appState, type }: { payload: string; type: string }) {
  if (type === UPDATE_APP_STATE && appState !== "active") {
    return;
  }

  try {
    const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    if (!Object.keys(userFeatures).length) {
      return;
    }

    const startTime = moment().startOf("day");
    const endTime = moment().endOf("day");

    const meditation: QueryFitKitByTypesResponse = yield call(
      queryFitKitByTypes,
      startTime.format(),
      endTime.format(),
      [FitKitType.MindfulSession],
      userFeatures
    );

    let passiveCyclingEnabled = userFeatures.passiveCyclingEnabled;
    if (passiveCyclingEnabled && Platform.OS === "android") {
      passiveCyclingEnabled = yield call(PermissionsAndroid.check, "android.permission.ACCESS_FINE_LOCATION");
    }

    const cycling: QueryFitKitByTypesResponse = !passiveCyclingEnabled
      ? null
      : yield call(queryFitKitByTypes, startTime.format(), endTime.format(), [FitKitType.Cycling], userFeatures);

    if (!meditation?.results && !cycling?.results) {
      return;
    }

    const cyclingResults: ChallengesPayload[] = !passiveCyclingEnabled
      ? []
      : processResult(cycling, startTime, endTime, "Biking");

    const meditationResults: ChallengesPayload[] = processResult(meditation, startTime, endTime, "MindfulSession");

    if (!cyclingResults.length && !meditationResults.length) {
      return;
    }

    let isUpdated = false;
    let retryDelayMs = 2000;
    while (!isUpdated && retryDelayMs <= 16000) {
      try {
        const { data } = yield call(upsertPassiveChallenges, meditationResults.concat(cyclingResults));

        for (const challenge of data?.upsertPassiveChallenges?.challenges) {
          if (challenge?.incomingData.meditation > 0) {
            yield put(updateDailyMeditation(challenge));
          }

          if (challenge?.incomingData.distance > 0) {
            yield put(updateDailyCycling(challenge));
          }
        }

        if (data?.upsertPassiveChallenges.totalCoins > 0) {
          yield put(totalCoinsUpdated(data.upsertPassiveChallenges.currentBalance));
        }

        isUpdated = true;
      } catch (e) {
        yield spawn(() => {
          Logger.error(e, { event: "upsertPassiveChallenges" });
        });
        yield delay(retryDelayMs);
        retryDelayMs = retryDelayMs * 2;
      }
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "getDailyPassiveActivity" });
    });
  }
}

const processResult = (response: QueryFitKitByTypesResponse, startTime: Moment, endTime: Moment, type: string) => {
  if (response.error) {
    return [];
  }

  if (response.results.length === 0) {
    return getEmptyResults(startTime, endTime, type);
  }

  return sampleDataToAggregatedData(startTime.clone().format(), endTime.clone().format(), response.results);
};

const getEmptyResults = (startTime: Moment, endTime: Moment, type: string): ChallengesPayload[] => {
  return [
    {
      startDateTime: startTime.clone().format(),
      endDateTime: endTime.clone().format(),
      value: 0,
      type: fitkitTypeToGqlType(type),
    },
  ];
};

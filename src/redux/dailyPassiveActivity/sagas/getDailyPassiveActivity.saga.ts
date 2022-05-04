import moment, { Moment } from "moment";
import { all, call, select, spawn, delay, put } from "redux-saga/effects";
import { ChallengesPayload, FitKitType } from "@graphql/_core/schema/globalTypes";
import {
  fitkitTypeToGqlType,
  getAdditionalCyclingFitnessActivities,
  queryFitKitByTypes,
  queryAggregatedBikingIos,
  QueryFitKitByTypesResponse,
  sampleDataToAggregatedData,
} from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { UPDATE_APP_STATE } from "../../app/app.actions";
import { getUserFeatures } from "../../user/user.selectors";
import upsertPassiveChallenges from "@graphql/challenges/upsertPassiveChallenges.gql";
import upsertDailyPassives from "@graphql/challenges/upsertDailyPassives.gql";
import { updateDailyMeditation } from "@redux/daily-meditation/daily-meditation.actions";
import { updateDailyCycling } from "@redux/daily-cycling/daily-cycling.actions";
import { PermissionsAndroid, Platform } from "react-native";
import { totalCoinsUpdated } from "@redux/coins/coins.actions";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import RNFitKit, { FitKitTypes } from "@yu-life/react-native-fitkit";

export default function* getDailyPassiveActivity(dataPayload: { payload: string; type: string }) {
  const { payload: appState, type } = dataPayload || {};
  if (type === UPDATE_APP_STATE && appState !== "active") {
    return;
  }

  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    if (!Object.keys(userFeatures).length) {
      return;
    }

    const setDefaultPermissionCheck = userFeatures.disableCheckPermission || Platform.OS === "ios";
    const [meditationPermissionGranted, cyclingPermissionGranted] = yield all([
      setDefaultPermissionCheck
        ? true
        : call(RNFitKit.isAuthorised, { read: [FitKitTypes.Types.MindfulSession], platform: "GoogleFit" }),
      setDefaultPermissionCheck
        ? true
        : call(RNFitKit.isAuthorised, { read: [FitKitTypes.Types.Biking], platform: "GoogleFit" }),
    ]);

    if (!meditationPermissionGranted || !cyclingPermissionGranted) {
      Logger.logMixpanelEvent("app_debug", {
        type: "google_fit_permission_not_granted",
        permissions: {
          cycling: cyclingPermissionGranted,
          mindful: meditationPermissionGranted,
        },
        location: "getDailyPassiveActivity",
      });
    }

    if (!meditationPermissionGranted && !cyclingPermissionGranted) {
      return;
    }

    const startTime = moment().startOf("day");
    const endTime = moment().endOf("day");

    const meditation: QueryFitKitByTypesResponse = !meditationPermissionGranted
      ? null
      : yield call(queryFitKitByTypes, startTime.format(), endTime.format(), [FitKitType.MindfulSession], userFeatures);

    let passiveCyclingEnabled = userFeatures.passiveCyclingEnabled;
    if (passiveCyclingEnabled && Platform.OS === "android") {
      passiveCyclingEnabled = yield call(PermissionsAndroid.check, "android.permission.ACCESS_FINE_LOCATION") &&
        cyclingPermissionGranted;
    }

    const additionalCyclingFitnessActivities = new Map<FitKitType, string[]>([
      [FitKitType.Cycling, getAdditionalCyclingFitnessActivities(userFeatures)],
    ]);

    const cycling: QueryFitKitByTypesResponse = !passiveCyclingEnabled
      ? null
      : Platform.OS === "android"
      ? yield call(
          queryFitKitByTypes,
          startTime.format(),
          endTime.format(),
          [FitKitType.Cycling],
          userFeatures,
          additionalCyclingFitnessActivities
        )
      : yield call(queryAggregatedBikingIos, startTime, endTime, userFeatures);

    if (!meditation?.results && !cycling?.results) {
      return;
    }

    const cyclingResults: ChallengesPayload[] = !passiveCyclingEnabled
      ? []
      : processResult(cycling, startTime, endTime, "Biking");

    const meditationResults: ChallengesPayload[] = !meditationPermissionGranted
      ? []
      : processResult(meditation, startTime, endTime, "MindfulSession");

    if (!cyclingResults.length && !meditationResults.length) {
      return;
    }

    let isUpdated = false;
    let retryDelayMs = 2000;
    while (!isUpdated && retryDelayMs <= 16000) {
      try {
        const mutation = userFeatures.useCoreChallengesService ? upsertDailyPassives : upsertPassiveChallenges;
        const { data } = yield call(mutation, meditationResults.concat(cyclingResults));
        const mutationResult = data?.upsertPassiveChallenges || data?.upsertDailyPassives;

        if (!mutationResult?.challenges?.length) {
          return;
        }

        for (const challenge of mutationResult?.challenges) {
          if (challenge?.incomingData.meditation > 0) {
            yield put(updateDailyMeditation(challenge));
          }

          if (challenge?.incomingData.distance > 0) {
            yield put(updateDailyCycling(challenge));
          }
        }

        if (mutationResult?.totalCoins > 0) {
          yield put(totalCoinsUpdated(mutationResult.currentBalance));
        }

        isUpdated = true;
      } catch (e) {
        yield spawn(() => {
          Logger.error(e, {
            event: userFeatures.useCoreChallengesService ? "upsertDailyPassives" : "upsertPassiveChallenges",
          });
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

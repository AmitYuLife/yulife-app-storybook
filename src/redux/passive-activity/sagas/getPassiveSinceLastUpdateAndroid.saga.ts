/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChallengesPayload, FitKitType, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import moment from "moment";
import { call, CallEffect, all, AllEffect } from "redux-saga/effects";
import {
  getAdditionalCyclingFitnessActivities,
  processResult,
  queryAggregatedDataByDay,
  queryFitKitByTypes,
  QueryFitKitByTypesResponse,
} from "@services/fitkit/fitkit.helpers";
import { IUserStore } from "@redux/user/user.reducer";
import { PermissionsAndroid } from "react-native";
import RNFitKit, { FitKitTypes } from "@yu-life/react-native-fitkit";
import Logger from "@services/logging/logger";

export default function* getPassiveSinceLastUpdateAndroid(
  stepsLastUpdate: string,
  meditationLastUpdate: string,
  cyclingLastUpdate: string,
  shouldQueryCycling: boolean,
  userFeatures: IUserStore["features"]
) {
  const endOfYesterday = moment().subtract(1, "day").endOf("day");

  const stepsAndMeditationLastUpdateStartTime =
    meditationLastUpdate && moment(meditationLastUpdate)?.isBefore(stepsLastUpdate)
      ? moment(meditationLastUpdate).startOf("day")
      : moment(stepsLastUpdate).startOf("day");

  const setDefaultPermissionCheck = userFeatures.disableCheckPermission;
  const [meditationPermissionGranted, cyclingPermissionGranted]: boolean[] = yield all([
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
      location: "getPassiveSinceLastUpdateAndroid",
    });
  }

  const fineLocationGranted: boolean = yield call(PermissionsAndroid.check, "android.permission.ACCESS_FINE_LOCATION");
  const queryCycling = shouldQueryCycling && fineLocationGranted && cyclingPermissionGranted;

  const additionalCyclingFitnessActivities = new Map<FitKitType, string[]>([
    [FitKitType.Cycling, getAdditionalCyclingFitnessActivities(userFeatures)],
  ]);

  const [stepsAndMeditation, cycling]: QueryFitKitByTypesResponse[] = yield all([
    stepsLastUpdate || meditationLastUpdate
      ? call(queryAggregatedDataByDay, stepsAndMeditationLastUpdateStartTime, endOfYesterday, userFeatures)
      : returnEmptyResult(),
    queryCycling
      ? call(
          queryFitKitByTypes,
          moment(cyclingLastUpdate).startOf("day").format(),
          endOfYesterday.clone().format(),
          [FitKitType.Cycling],
          userFeatures,
          additionalCyclingFitnessActivities
        )
      : returnEmptyResult(),
  ]) as AllEffect<CallEffect<QueryFitKitByTypesResponse>>;

  const aggregatedCycling: ChallengesPayload[] = queryCycling
    ? processResult(cycling, "Biking", moment(cyclingLastUpdate).startOf("day"), endOfYesterday)
    : [];

  let aggregatedMeditation: ChallengesPayload[] = [];
  let aggregatedSteps: ChallengesPayload[] = [];
  if (!stepsAndMeditation?.error) {
    const meditation = stepsAndMeditation.results.filter((result) => result.type === PassiveChallengeType.MEDITATION);
    const steps = stepsAndMeditation.results.filter((result) => result.type === PassiveChallengeType.STEPS);

    aggregatedMeditation =
      meditationLastUpdate && meditationPermissionGranted
        ? processResult(
            { error: false, results: meditation },
            "MindfulSession",
            stepsAndMeditationLastUpdateStartTime,
            endOfYesterday
          )
        : [];
    aggregatedSteps = stepsLastUpdate
      ? processResult(
          { error: false, results: steps },
          "StepCount",
          stepsAndMeditationLastUpdateStartTime,
          endOfYesterday
        )
      : [];
  }

  const allResults: ChallengesPayload[] = [...aggregatedCycling, ...aggregatedMeditation, ...aggregatedSteps];

  return allResults;
}

const returnEmptyResult = (): QueryFitKitByTypesResponse => {
  return { results: [], error: false };
};

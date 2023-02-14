import { ChallengesPayload } from "@graphql/_core/schema/globalTypes";
import moment from "moment";
import { call, select, CallEffect, all, AllEffect } from "redux-saga/effects";
import { queryFitKitAggregatedData } from "@services/fitkit/fitkit.helpers";
import { IUserStore } from "@redux/user/user.reducer";
import { PermissionsAndroid } from "react-native";
import RNFitKit, { FitKitTypes } from "@yu-life/react-native-fitkit";
import Logger from "@services/logging/logger";
import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { getEndDates } from "./helper";
import { processResult } from "@services/fitkit/helpers/sampleToAggregatedData";
import { QueryFitKitByTypesResponse } from "@services/fitkit/fitkit.types";
import {
  getAggregationCyclingConfiguration,
  getAggregationStepCountConfiguration,
  getAndroidAggregationMindfulSessionConfiguration,
} from "@services/fitkit/fitkit.config";

export default function* getPassiveSinceLastUpdateAndroid(
  stepsLastUpdate: string,
  meditationLastUpdate: string,
  cyclingLastUpdate: string,
  userFeatures: IUserStore["features"]
) {
  const stepsBlackListApps: string[] = yield select(getStepsBlackListApps);
  const { endDateSteps, endDateMeditation, endDateCycling } = getEndDates(
    stepsLastUpdate,
    meditationLastUpdate,
    cyclingLastUpdate
  );
  const { meditationPermissionGranted, cyclingPermissionGranted, fineLocationGranted } = yield call(
    checkPermissions,
    userFeatures
  );
  const queryCycling = cyclingLastUpdate && fineLocationGranted && cyclingPermissionGranted;
  const queryMeditation = meditationLastUpdate && meditationPermissionGranted;

  if (userFeatures.runLastUpdateQueryInSequence) {
    const steps: ChallengesPayload[] = yield call(
      getSteps,
      stepsLastUpdate,
      endDateSteps,
      stepsBlackListApps,
      userFeatures
    );
    const meditation: ChallengesPayload[] = yield call(
      getMeditation,
      queryMeditation,
      meditationLastUpdate,
      endDateMeditation,
      userFeatures
    );
    const cycling: ChallengesPayload[] = yield call(
      getCycling,
      queryCycling,
      cyclingLastUpdate,
      endDateCycling,
      userFeatures
    );

    return [...cycling, ...meditation, ...steps];
  }

  const [steps, meditation, cycling]: ChallengesPayload[][] = yield all([
    call(getSteps, stepsLastUpdate, endDateSteps, stepsBlackListApps, userFeatures),
    call(getMeditation, queryMeditation, meditationLastUpdate, endDateMeditation, userFeatures),
    call(getCycling, queryCycling, cyclingLastUpdate, endDateCycling, userFeatures),
  ]) as AllEffect<CallEffect<ChallengesPayload[]>>;

  return [...cycling, ...meditation, ...steps];
}

const getCycling = async (
  queryCycling: boolean,
  cyclingLastUpdate: string,
  endDateCycling: moment.Moment,
  userFeatures: IUserStore["features"]
): Promise<ChallengesPayload[]> => {
  if (!queryCycling) {
    return [];
  }

  const cyclingConfig = getAggregationCyclingConfiguration(userFeatures);
  const cycling = await queryFitKitAggregatedData({
    start: moment(cyclingLastUpdate).startOf("day"),
    end: endDateCycling,
    features: userFeatures,
    ...cyclingConfig,
  });

  if (cycling.error) {
    return [];
  }

  return cycling.results;
};

const getMeditation = async (
  queryMeditation: boolean,
  meditationLastUpdate: string,
  endDateMeditation: moment.Moment,
  userFeatures: IUserStore["features"]
): Promise<ChallengesPayload[]> => {
  if (!queryMeditation) {
    return [];
  }

  const meditationConfiguration = getAndroidAggregationMindfulSessionConfiguration();
  const meditation = await queryFitKitAggregatedData({
    start: moment(meditationLastUpdate).startOf("day"),
    end: endDateMeditation,
    features: userFeatures,
    ...meditationConfiguration,
  });

  return processResult(meditation, "MindfulSession", moment(meditationLastUpdate), endDateMeditation);
};

const getSteps = async (
  stepsLastUpdate: string,
  endDateSteps: moment.Moment,
  stepsBlackListApps: string[],
  userFeatures: IUserStore["features"]
): Promise<ChallengesPayload[]> => {
  if (!stepsLastUpdate) {
    return [];
  }

  const stepsConfiguration = getAggregationStepCountConfiguration(stepsBlackListApps);
  const steps: QueryFitKitByTypesResponse = await queryFitKitAggregatedData({
    start: moment(stepsLastUpdate).startOf("day"),
    end: endDateSteps,
    features: userFeatures,
    ...stepsConfiguration,
  });

  return processResult(steps, "StepCount", moment(stepsLastUpdate), endDateSteps);
};

const checkPermissions = async (userFeatures: IUserStore["features"]) => {
  const setDefaultPermissionCheck = userFeatures.disableCheckPermission;

  const [meditationPermissionGranted, cyclingPermissionGranted, fineLocationGranted] = await Promise.all([
    setDefaultPermissionCheck
      ? true
      : RNFitKit.isAuthorised({ read: [FitKitTypes.Types.MindfulSession], platform: "GoogleFit" }),
    setDefaultPermissionCheck
      ? true
      : RNFitKit.isAuthorised({ read: [FitKitTypes.Types.Biking], platform: "GoogleFit" }),
    PermissionsAndroid.check("android.permission.ACCESS_FINE_LOCATION"),
  ]);

  if ((!meditationPermissionGranted || !cyclingPermissionGranted) && userFeatures?.loggingEnabled) {
    Logger.logMixpanelEvent("app_debug", {
      type: "google_fit_permission_not_granted",
      permissions: {
        cycling: cyclingPermissionGranted,
        mindful: meditationPermissionGranted,
      },
      location: "getPassiveSinceLastUpdateAndroid",
    });
  }

  return { meditationPermissionGranted, cyclingPermissionGranted, fineLocationGranted };
};

import moment from "moment";
import { call, select, CallEffect, all, AllEffect } from "redux-saga/effects";
import { queryFitKitAggregatedData } from "@services/fitkit/fitkit.helpers";
import { IUserStore } from "@redux/user/user.types";
import { PermissionsAndroid } from "react-native";
import RNFitKit, { FitKitTypes } from "@yu-life/react-native-fitkit";
import Logger from "@services/logging/logger";
import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { getEndDates } from "./helper";
import { processResult, processYuHealthResult } from "@services/fitkit/helpers/sampleToAggregatedData";
import { QueryFitKitByTypesResponse } from "@services/fitkit/fitkit.types";
import {
  getAggregationCyclingConfiguration,
  getAggregationStepCountConfiguration,
  getAggregationMindfulSessionConfiguration,
} from "@services/fitkit/fitkit.config";
import { yuHealthAggregateQuery } from "@services/fitkit/yu-health.helpers";
import { BucketSize, HealthDataType } from "@yu-life/react-native-yu-health";
import { ChallengesPayload, PassiveChallengeType } from "@graphql/__generated";

export default function* getPassiveSinceLastUpdateAndroid(
  stepsLastUpdate: string,
  meditationLastUpdate: string,
  cyclingLastUpdate: string,
  userFeatures: IUserStore["features"]
) {
  const metaData = { file: "getPassiveSinceLastUpdateAndroid.saga" };
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
      userFeatures,
      metaData
    );
    const meditation: ChallengesPayload[] = yield call(
      getMeditation,
      queryMeditation,
      meditationLastUpdate,
      endDateMeditation,
      userFeatures,
      metaData
    );
    const cycling: ChallengesPayload[] = yield call(
      getCycling,
      queryCycling,
      cyclingLastUpdate,
      endDateCycling,
      userFeatures,
      metaData
    );

    return [...cycling, ...meditation, ...steps];
  }

  const [steps, meditation, cycling]: ChallengesPayload[][] = yield all([
    call(getSteps, stepsLastUpdate, endDateSteps, stepsBlackListApps, userFeatures, metaData),
    call(getMeditation, queryMeditation, meditationLastUpdate, endDateMeditation, userFeatures, metaData),
    call(getCycling, queryCycling, cyclingLastUpdate, endDateCycling, userFeatures, metaData),
  ]) as AllEffect<CallEffect<ChallengesPayload[]>>;

  return [...cycling, ...meditation, ...steps];
}

const getCycling = async (
  queryCycling: boolean,
  cyclingLastUpdate: string,
  endDateCycling: moment.Moment,
  features: IUserStore["features"],
  metaData: Record<string, any>
): Promise<ChallengesPayload[]> => {
  if (!queryCycling) {
    return [];
  }

  const start = moment(cyclingLastUpdate).startOf("day");
  if (!features.tempGameEnableReleaseYuHealthV4) {
    const cyclingConfig = getAggregationCyclingConfiguration(features);
    const cycling = await queryFitKitAggregatedData({
      start,
      end: endDateCycling,
      features,
      metaData,
      ...cyclingConfig,
    });

    if (cycling.error) {
      return [];
    }

    return cycling.results;
  }

  const yuHealthMeditation = await yuHealthAggregateQuery({
    features,
    metadata: { file: "getPassiveSinceLastUpdateAndroid.saga.getCycling" },
    params: {
      startTime: start.toDate(),
      dataType: HealthDataType.cyclingDistance,
      endTime: endDateCycling.toDate(),
      bucketConfig: { value: 1, unit: BucketSize.day },
    },
  });

  return processYuHealthResult(yuHealthMeditation, start.clone(), endDateCycling, PassiveChallengeType.Cycling);
};

const getMeditation = async (
  queryMeditation: boolean,
  meditationLastUpdate: string,
  endDateMeditation: moment.Moment,
  features: IUserStore["features"],
  metaData: Record<string, any>
): Promise<ChallengesPayload[]> => {
  if (!queryMeditation) {
    return [];
  }

  const start = moment(meditationLastUpdate).startOf("day");

  if (!features.tempGameEnableReleaseYuHealthV4) {
    const meditationConfiguration = getAggregationMindfulSessionConfiguration();
    const meditation = await queryFitKitAggregatedData({
      start: start.clone(),
      end: endDateMeditation,
      features: features,
      metaData,
      ...meditationConfiguration,
    });

    return processResult(meditation, "MindfulSession", start.clone(), endDateMeditation);
  }

  const yuHealthMeditation = await yuHealthAggregateQuery({
    features,
    metadata: { file: "getPassiveSinceLastUpdateAndroid.saga.getMeditation" },
    params: {
      startTime: start.toDate(),
      dataType: HealthDataType.mindfulMinutes,
      endTime: endDateMeditation.toDate(),
      bucketConfig: { value: 1, unit: BucketSize.day },
    },
  });

  return processYuHealthResult(yuHealthMeditation, start.clone(), endDateMeditation, PassiveChallengeType.Meditation);
};

const getSteps = async (
  stepsLastUpdate: string,
  endDateSteps: moment.Moment,
  stepsBlackListApps: string[],
  features: IUserStore["features"],
  metaData: Record<string, any>
): Promise<ChallengesPayload[]> => {
  if (!stepsLastUpdate) {
    return [];
  }

  const start = moment(stepsLastUpdate).startOf("day");

  if (!features.tempGameEnableReleaseYuHealthV4) {
    const stepsConfiguration = getAggregationStepCountConfiguration(stepsBlackListApps);
    const steps: QueryFitKitByTypesResponse = await queryFitKitAggregatedData({
      start: start.clone(),
      end: endDateSteps,
      features: features,
      metaData,
      ...stepsConfiguration,
    });

    return processResult(steps, "StepCount", start.clone(), endDateSteps);
  }

  const yuHealthMeditation = await yuHealthAggregateQuery({
    features,
    metadata: { file: "getPassiveSinceLastUpdateAndroid.saga.getSteps" },
    params: {
      startTime: start.toDate(),
      dataType: HealthDataType.steps,
      endTime: endDateSteps.toDate(),
      bucketConfig: { value: 1, unit: BucketSize.day },
    },
  });

  return processYuHealthResult(yuHealthMeditation, start.clone(), endDateSteps, PassiveChallengeType.Steps);
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

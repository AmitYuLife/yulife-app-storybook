/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChallengesPayload, FitKitType } from "@graphql/_core/schema/globalTypes";
import moment from "moment";
import { call, select, CallEffect, all, AllEffect } from "redux-saga/effects";
import {
  processResult,
  queryAggregatedDataByDay,
  queryAggregatedBiking,
  QueryFitKitByTypesResponse,
} from "@services/fitkit/fitkit.helpers";
import { IUserStore } from "@redux/user/user.reducer";
import { PermissionsAndroid } from "react-native";
import RNFitKit, { FitKitTypes } from "@yu-life/react-native-fitkit";
import Logger from "@services/logging/logger";
import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { getEndDates } from "./helper";

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

  const cycling = await queryAggregatedBiking(moment(cyclingLastUpdate).startOf("day"), endDateCycling, userFeatures);

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

  const meditation = await queryAggregatedDataByDay(
    moment(meditationLastUpdate).startOf("day"),
    endDateMeditation,
    [],
    [FitKitType.MindfulSession],
    userFeatures
  );

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

  const steps: QueryFitKitByTypesResponse = await queryAggregatedDataByDay(
    moment(stepsLastUpdate).startOf("day"),
    endDateSteps,
    stepsBlackListApps,
    [FitKitType.StepCount],
    userFeatures
  );

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

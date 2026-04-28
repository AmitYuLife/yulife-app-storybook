import moment from "moment";
import { call } from "redux-saga/effects";
import { queryFitKitSampleData, queryFitKitAggregatedData } from "@services/fitkit/fitkit.helpers";
import { IUserStore } from "@redux/user/user.types";
import { getEndDates } from "./helper";
import { processResult, processYuHealthResult } from "@services/fitkit/helpers/sampleToAggregatedData";
import {
  getAggregationCyclingConfiguration,
  getAggregationStepCountConfiguration,
  getMindfulSessionFitKitTypes,
} from "@services/fitkit/fitkit.config";
import { yuHealthAggregateQuery } from "@services/fitkit/yu-health.helpers";
import { HealthDataType, BucketSize } from "@yu-life/react-native-yu-health";
import { ChallengesPayload, PassiveChallengeType } from "@graphql/__generated";
import { roundSecondsToNearestMinute } from "@utils";

// TODO: Merge with getPassiveSinceLastUpdateAndroid
export default function* getPassiveSinceLastUpdateIos(
  stepsLastUpdate: string,
  meditationLastUpdate: string,
  cyclingLastUpdate: string,
  userFeatures: IUserStore["features"]
) {
  const { endDateSteps, endDateMeditation, endDateCycling } = getEndDates(
    stepsLastUpdate,
    meditationLastUpdate,
    cyclingLastUpdate
  );

  const metaData = { file: "getPassiveSinceLastUpdateIos.saga" };
  const steps: ChallengesPayload[] = yield call(getSteps, stepsLastUpdate, endDateSteps, userFeatures, metaData);
  const meditation: ChallengesPayload[] = yield call(
    getMeditation,
    meditationLastUpdate,
    endDateMeditation,
    userFeatures,
    metaData
  );
  const cycling: ChallengesPayload[] = yield call(
    getCycling,
    cyclingLastUpdate,
    endDateCycling,
    userFeatures,
    metaData
  );

  const allResults: ChallengesPayload[] = [...cycling, ...meditation, ...steps];

  return allResults;
}

const getSteps = async (
  stepsLastUpdate: string,
  endDateSteps: moment.Moment,
  features: IUserStore["features"],
  metaData: Record<string, unknown>
): Promise<ChallengesPayload[]> => {
  if (!stepsLastUpdate) {
    return [];
  }

  const startTime = moment(stepsLastUpdate).startOf("day");

  if (!features.tempGameEnableReleaseYuHealthV4) {
    const stepsConfiguration = getAggregationStepCountConfiguration([]);
    const steps = await queryFitKitAggregatedData({
      start: startTime,
      end: endDateSteps,
      features,
      metaData,
      ...stepsConfiguration,
    });

    return processResult(steps, "StepCount", moment(stepsLastUpdate).startOf("day"), endDateSteps);
  }

  const yuHealthSteps = await yuHealthAggregateQuery({
    features,
    metadata: { file: "getPassiveSinceLastUpdateIos.saga.getSteps" },
    params: {
      startTime: startTime.toDate(),
      dataType: HealthDataType.steps,
      endTime: endDateSteps.toDate(),
      bucketConfig: { value: 1, unit: BucketSize.day },
    },
  });

  return processYuHealthResult(yuHealthSteps, startTime.clone(), endDateSteps, PassiveChallengeType.Steps);
};

const getMeditation = async (
  meditationLastUpdate: string,
  endDateMeditation: moment.Moment,
  features: IUserStore["features"],
  metaData: Record<string, unknown>
): Promise<ChallengesPayload[]> => {
  if (!meditationLastUpdate) {
    return [];
  }

  const startTime = moment(meditationLastUpdate).startOf("day");

  if (!features.tempGameEnableReleaseYuHealthV4) {
    const meditation = await queryFitKitSampleData({
      startTime: startTime.format(),
      endTime: endDateMeditation.format(),
      fitKitTypes: getMindfulSessionFitKitTypes(),
      features: features,
      metaData,
    });

    const roundedMeditation = meditation.error
      ? meditation
      : {
          ...meditation,
          results: meditation.results.map((item) => ({
            ...item,
            value: roundSecondsToNearestMinute(item.value),
          })),
        };

    return processResult(
      roundedMeditation,
      "MindfulSession",
      moment(meditationLastUpdate).startOf("day"),
      endDateMeditation
    );
  }

  const yuHealthMeditation = await yuHealthAggregateQuery({
    features,
    metadata: { file: "getPassiveSinceLastUpdateIos.saga.getMeditation" },
    params: {
      startTime: startTime.toDate(),
      dataType: HealthDataType.mindfulMinutes,
      endTime: endDateMeditation.toDate(),
      bucketConfig: { value: 1, unit: BucketSize.day },
    },
  });

  const roundedYuHealth = yuHealthMeditation.map((item) => ({
    ...item,
    value: roundSecondsToNearestMinute(item.value),
  }));

  return processYuHealthResult(roundedYuHealth, startTime.clone(), endDateMeditation, PassiveChallengeType.Meditation);
};

const getCycling = async (
  cyclingLastUpdate: string,
  endDateCycling: moment.Moment,
  features: IUserStore["features"],
  metaData: Record<string, unknown>
): Promise<ChallengesPayload[]> => {
  if (!cyclingLastUpdate) {
    return [];
  }

  const startTime = moment(cyclingLastUpdate).startOf("day");

  if (!features.tempGameEnableReleaseYuHealthV4) {
    const cyclingConfig = getAggregationCyclingConfiguration(features);
    const cycling = await queryFitKitAggregatedData({
      start: startTime,
      end: endDateCycling,
      features,
      metaData,
      ...cyclingConfig,
    });

    return processResult(cycling, "Biking", moment(cyclingLastUpdate).startOf("day"), endDateCycling);
  }

  const yuHealthCycling = await yuHealthAggregateQuery({
    features,
    metadata: { file: "getPassiveSinceLastUpdateIos.saga.getCycling" },
    params: {
      startTime: startTime.toDate(),
      dataType: HealthDataType.cyclingDistance,
      endTime: endDateCycling.toDate(),
      bucketConfig: { value: 1, unit: BucketSize.day },
    },
  });

  return processYuHealthResult(yuHealthCycling, startTime.clone(), endDateCycling, PassiveChallengeType.Cycling);
};

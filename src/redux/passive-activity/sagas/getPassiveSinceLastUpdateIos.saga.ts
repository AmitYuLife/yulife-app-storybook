import { ChallengesPayload } from "@graphql/_core/schema/globalTypes";
import moment from "moment";
import { call } from "redux-saga/effects";
import { queryFitKitSampleData, queryFitKitAggregatedData } from "@services/fitkit/fitkit.helpers";
import { IUserStore } from "@redux/user/user.reducer";
import { getEndDates } from "./helper";
import { processResult } from "@services/fitkit/helpers/sampleToAggregatedData";
import {
  getAggregationCyclingConfiguration,
  getAggregationStepCountConfiguration,
  getMindfulSessionFitKitTypes,
} from "@services/fitkit/fitkit.config";

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
  userFeatures: IUserStore["features"],
  metaData: Record<string, any>
): Promise<ChallengesPayload[]> => {
  if (!stepsLastUpdate) {
    return [];
  }

  const stepsConfiguration = getAggregationStepCountConfiguration([]);
  const steps = await queryFitKitAggregatedData({
    start: moment(stepsLastUpdate).startOf("day"),
    end: endDateSteps,
    features: userFeatures,
    metaData,
    ...stepsConfiguration,
  });

  return processResult(steps, "StepCount", moment(stepsLastUpdate).startOf("day"), endDateSteps);
};

const getMeditation = async (
  meditationLastUpdate: string,
  endDateMeditation: moment.Moment,
  userFeatures: IUserStore["features"],
  metaData: Record<string, any>
): Promise<ChallengesPayload[]> => {
  if (!meditationLastUpdate) {
    return [];
  }

  const meditation = await queryFitKitSampleData({
    startTime: moment(meditationLastUpdate).startOf("day").format(),
    endTime: endDateMeditation.format(),
    fitKitTypes: getMindfulSessionFitKitTypes(),
    features: userFeatures,
    metaData,
  });

  return processResult(meditation, "MindfulSession", moment(meditationLastUpdate).startOf("day"), endDateMeditation);
};

const getCycling = async (
  cyclingLastUpdate: string,
  endDateCycling: moment.Moment,
  userFeatures: IUserStore["features"],
  metaData: Record<string, any>
): Promise<ChallengesPayload[]> => {
  if (!cyclingLastUpdate) {
    return [];
  }

  const cyclingConfig = getAggregationCyclingConfiguration(userFeatures);
  const cycling = await queryFitKitAggregatedData({
    start: moment(cyclingLastUpdate).startOf("day"),
    end: endDateCycling,
    features: userFeatures,
    metaData,
    ...cyclingConfig,
  });

  return processResult(cycling, "Biking", moment(cyclingLastUpdate).startOf("day"), endDateCycling);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChallengesPayload, FitKitType, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import moment from "moment";
import { call, CallEffect, all, AllEffect } from "redux-saga/effects";
import {
  processResult,
  queryAggregatedDataByDay,
  queryFitKitByTypes,
  QueryFitKitByTypesResponse,
} from "@services/fitkit/fitkit.helpers";
import { IUserStore } from "@redux/user/user.reducer";

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

  const [stepsAndMeditation, cycling]: QueryFitKitByTypesResponse[] = yield all([
    stepsLastUpdate || meditationLastUpdate
      ? call(queryAggregatedDataByDay, stepsAndMeditationLastUpdateStartTime, endOfYesterday, userFeatures)
      : returnEmptyResult(),
    shouldQueryCycling
      ? call(
          queryFitKitByTypes,
          moment(cyclingLastUpdate).startOf("day").format(),
          endOfYesterday.clone().format(),
          [FitKitType.Cycling],
          userFeatures
        )
      : returnEmptyResult(),
  ]) as AllEffect<CallEffect<QueryFitKitByTypesResponse>>;

  const aggregatedCycling: ChallengesPayload[] = shouldQueryCycling
    ? processResult(cycling, "Biking", moment(cyclingLastUpdate).startOf("day"), endOfYesterday)
    : [];

  let aggregatedMeditation: ChallengesPayload[] = [];
  let aggregatedSteps: ChallengesPayload[] = [];
  if (!stepsAndMeditation?.error) {
    const meditation = stepsAndMeditation.results.filter((result) => result.type === PassiveChallengeType.MEDITATION);
    const steps = stepsAndMeditation.results.filter((result) => result.type === PassiveChallengeType.STEPS);

    aggregatedMeditation = meditationLastUpdate
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

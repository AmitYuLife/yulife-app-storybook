/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChallengesPayload, FitKitType } from "@graphql/_core/schema/globalTypes";
import moment from "moment";
import { call } from "redux-saga/effects";
import {
  processResult,
  queryFitKitByTypes,
  QueryFitKitByTypesResponse,
  querySteps,
  queryAggregatedBiking,
} from "@services/fitkit/fitkit.helpers";
import { IUserStore } from "@redux/user/user.reducer";

export default function* getPassiveSinceLastUpdateIos(
  stepsLastUpdate: string,
  meditationLastUpdate: string,
  cyclingLastUpdate: string,
  userFeatures: IUserStore["features"]
) {
  const endOfYesterday = moment().subtract(1, "day").endOf("day");

  const steps: QueryFitKitByTypesResponse = stepsLastUpdate
    ? yield call(querySteps, moment(stepsLastUpdate).startOf("day"), endOfYesterday, [], userFeatures)
    : returnEmptyResult();

  const meditation: QueryFitKitByTypesResponse = meditationLastUpdate
    ? yield call(
        queryFitKitByTypes,
        moment(meditationLastUpdate).startOf("day").format(),
        endOfYesterday.clone().format(),
        [FitKitType.MindfulSession],
        userFeatures
      )
    : returnEmptyResult();

  const cycling: QueryFitKitByTypesResponse = cyclingLastUpdate
    ? yield call(queryAggregatedBiking, moment(cyclingLastUpdate).startOf("day"), endOfYesterday.clone(), userFeatures)
    : returnEmptyResult();

  const aggregatedCycling: ChallengesPayload[] = cyclingLastUpdate
    ? processResult(cycling, "Biking", moment(cyclingLastUpdate).startOf("day"), endOfYesterday)
    : [];
  const aggregatedMeditation: ChallengesPayload[] = meditationLastUpdate
    ? processResult(meditation, "MindfulSession", moment(meditationLastUpdate).startOf("day"), endOfYesterday)
    : [];
  const aggregatedSteps: ChallengesPayload[] = stepsLastUpdate
    ? processResult(steps, "StepCount", moment(stepsLastUpdate).startOf("day"), endOfYesterday)
    : [];

  const allResults: ChallengesPayload[] = [...aggregatedCycling, ...aggregatedMeditation, ...aggregatedSteps];

  return allResults;
}

const returnEmptyResult = (): QueryFitKitByTypesResponse => {
  return { results: [], error: false };
};

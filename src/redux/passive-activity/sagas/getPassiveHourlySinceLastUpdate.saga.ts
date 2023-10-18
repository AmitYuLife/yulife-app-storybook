import { ChallengesPayload } from "@graphql/_core/schema/globalTypes";
import moment from "moment";
import { call, select } from "redux-saga/effects";
import { queryFitKitAggregatedData } from "@services/fitkit/fitkit.helpers";
import { IUserStore } from "@redux/user/user.reducer";
import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { getAggregationStepCountHourlyConfiguration } from "@services/fitkit/fitkit.config";
import { processResult } from "@services/fitkit/helpers/sampleToAggregatedData";
import { QueryFitKitByTypesResponse } from "@services/fitkit/fitkit.types";
import { PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT } from "@services/constants";

export default function* getPassiveHourlySinceLastUpdate(
  stepsLastUpdate: string,
  userFeatures: IUserStore["features"]
) {
  const stepsBlackListApps: string[] = yield select(getStepsBlackListApps);

  const endOfPreviousHour = moment().subtract(1, "hour").endOf("hour");

  const endDateSteps = moment.min(
    moment(stepsLastUpdate).add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "hours").endOf("hour"),
    endOfPreviousHour
  );

  const steps: ChallengesPayload[] = yield call(
    getSteps,
    stepsLastUpdate,
    endDateSteps,
    stepsBlackListApps,
    userFeatures
  );

  return steps;
}

const getSteps = async (
  stepsLastUpdate: string,
  endDateSteps: moment.Moment,
  stepsBlackListApps: string[],
  userFeatures: IUserStore["features"]
): Promise<ChallengesPayload[]> => {
  if (!stepsLastUpdate) {
    return [];
  }

  const start = moment(stepsLastUpdate).add(1, "hour").startOf("hour");

  const stepsConfiguration = getAggregationStepCountHourlyConfiguration(stepsBlackListApps);
  const steps: QueryFitKitByTypesResponse = await queryFitKitAggregatedData({
    start: start.clone(),
    end: endDateSteps,
    features: userFeatures,
    metaData: { file: "getPassiveHourlySinceLastUpdate.saga" },
    ...stepsConfiguration,
  });

  return processResult(steps, "StepCount", start.clone(), endDateSteps, "hour");
};

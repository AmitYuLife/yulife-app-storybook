import moment from "moment";
import { call, select } from "redux-saga/effects";
import { queryFitKitAggregatedData } from "@services/fitkit/fitkit.helpers";
import { IUserStore } from "@redux/user/user.types";
import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { getAggregationStepCountHourlyConfiguration } from "@services/fitkit/fitkit.config";
import { processResult, processYuHealthResult } from "@services/fitkit/helpers/sampleToAggregatedData";
import { QueryFitKitByTypesResponse } from "@services/fitkit/fitkit.types";
import { PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT } from "@services/constants";
import { BucketSize, HealthDataType } from "@yu-life/react-native-yu-health";
import { yuHealthAggregateQuery } from "@services/fitkit/yu-health.helpers";
import { ChallengesPayload, PassiveChallengeType } from "@graphql/__generated";

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
  features: IUserStore["features"]
): Promise<ChallengesPayload[]> => {
  if (!stepsLastUpdate) {
    return [];
  }

  const start = moment(stepsLastUpdate).add(1, "hour").startOf("hour");

  if (!features.tempGameEnableReleaseYuHealthV3) {
    const stepsConfiguration = getAggregationStepCountHourlyConfiguration(stepsBlackListApps);

    const steps: QueryFitKitByTypesResponse = await queryFitKitAggregatedData({
      start: start.clone(),
      end: endDateSteps,
      features,
      metaData: { file: "getPassiveHourlySinceLastUpdate.saga" },
      ...stepsConfiguration,
    });

    return processResult(steps, "StepCount", start.clone(), endDateSteps, "hour");
  }

  const response = await yuHealthAggregateQuery({
    features,
    metadata: { file: "getPassiveHourlySinceLastUpdate.saga.getSteps" },
    params: {
      startTime: start.toDate(),
      endTime: endDateSteps.toDate(),
      dataType: HealthDataType.steps,
      bucketConfig: {
        unit: BucketSize.hour,
        value: 1,
      },
      queryOptions: {
        blacklistApps: stepsBlackListApps,
      },
    },
  });

  return processYuHealthResult(response, start, endDateSteps, PassiveChallengeType.Steps, "hour");
};

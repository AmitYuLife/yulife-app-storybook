import { IFeature } from "@redux/user/user.types";
import getClient from "@services/bugsnag";
import dd from "@services/datadog";
import { processYuHealthResult } from "./helpers/sampleToAggregatedData";
import {
  BucketSize,
  HealthDataType,
  HealthProvider,
  HealthProviderCapability,
  IAggregateQueryRequest,
  IAggregateQueryResponse,
  getPermissionStatusOfCapabilities,
  ICapabilityPermissions,
  IPedometerParams,
  ISampleQueryParams,
  ISampleQueryResponse,
  aggregateQuery,
  queryPedometerFromDate,
  sampleQuery,
} from "@yu-life/react-native-yu-health";
import { IFetchActivityResponse } from "@services/fitkit/fitkit.helpers";
import { IFetchActivityRequest } from "./fitkit.types";
import { ChallengesPayload, HealthProvider as GqlHealthProvider, PassiveChallengeType } from "@graphql/__generated";

interface IYuHealthAggregateQuery {
  params: IAggregateQueryRequest;
  features: IFeature;
  metadata: Record<string, string>;
}

export const yuHealthAggregateQuery = async ({
  features,
  metadata,
  params,
}: IYuHealthAggregateQuery): Promise<IAggregateQueryResponse[]> => {
  const { loggingEnabled, disableUserEntries } = {
    loggingEnabled: false,
    disableUserEntries: true,
    ...features,
  };

  try {
    getClient().leaveBreadcrumb("YuHealth Aggregation Queried", { params }, "log");

    if (loggingEnabled) {
      dd.info("YuHealth aggregate query args", {
        metadata,
        params,
        location: "yu-health",
      });
    }

    const results = await aggregateQuery({ ...params, queryOptions: { ...params?.queryOptions, disableUserEntries } });

    const resultItems = results?.result ?? [];
    const total = resultItems.length;
    const nonZero = resultItems.filter((r) => r.value > 0).length;

    if (loggingEnabled && results) {
      dd.info("YuHealth aggregate query results", {
        metadata,
        params,
        total,
        nonZero,
        location: "yu-health",
      });
    }

    if (total > 0 && nonZero < total) {
      dd.warn("YuHealth aggregate zero-value buckets", {
        dataType: params.dataType,
        total,
        nonZero,
        zeroDays: total - nonZero,
        startTime: params.startTime,
        endTime: params.endTime,
        location: "yu-health",
      });
    }

    return resultItems;
  } catch (e) {
    dd.error("YuHealth aggregate query response error", {
      error: e,
      params,
      metadata,
      location: "yu-health",
    });

    return [];
  }
};

interface IYuHealthSampleQuery {
  params: ISampleQueryParams;
  features: IFeature;
  metadata: Record<string, string>;
}

export async function yuHealthSampleQuery({
  features,
  metadata,
  params,
}: IYuHealthSampleQuery): Promise<ISampleQueryResponse[]> {
  const { disableUserEntries = true, loggingEnabled = false } = features || {
    disableUserEntries: true,
    loggingEnabled: false,
  };

  getClient().leaveBreadcrumb("YuHealth Sample Queried", { params }, "log");

  try {
    const args: ISampleQueryParams = {
      ...params,
      queryOptions: { ...params?.queryOptions, disableUserEntries },
    };

    if (loggingEnabled) {
      dd.info("YuHealth sample query args", {
        ...metadata,
        ...args,
        location: "yu-health",
      });
    }

    const results = await sampleQuery(args);

    if (loggingEnabled && results) {
      dd.info("YuHealth sample query results", {
        ...metadata,
        results,
        location: "yu-health",
      });
    }

    return results.result;
  } catch (e) {
    // Add it back when we'll have the logic to log only one error per session
    // Logger.error(e, { event: "yuHealthSampleQuery" });

    dd.error("YuHealth sample query error", {
      ...metadata,
      error: e.message,
      params,
      location: "yu-health",
    });

    return [];
  }
}

export const yuHealthPedometerQuery = async (data: IPedometerParams) => {
  const response = await queryPedometerFromDate(data);
  return response.result;
};

export const fetchYuHealthActivityData = async ({
  start,
  features,
  end,
  stepsBlackListApps,
}: IFetchActivityRequest): Promise<IFetchActivityResponse> => {
  const sharedOptions = {
    startTime: start.toDate(),
    endTime: end.toDate(),
    bucketConfig: {
      value: 1,
      unit: BucketSize.day,
    },
    queryOptions: { blacklistApps: stepsBlackListApps, disableUserEntries: features.disableUserEntries },
  };

  const [yuHealthSteps, yuHealthMeditation, yuHealthCycling] = await Promise.all([
    yuHealthAggregateQuery({
      features,
      metadata: { file: "yu-health.helpers" },
      params: { ...sharedOptions, dataType: HealthDataType.steps },
    }),
    yuHealthAggregateQuery({
      features,
      metadata: { file: "yu-health.helpers" },
      params: { ...sharedOptions, dataType: HealthDataType.mindfulMinutes },
    }),
    yuHealthAggregateQuery({
      features,
      metadata: { file: "yu-health.helpers" },
      params: { ...sharedOptions, dataType: HealthDataType.cyclingDistance },
    }),
  ]);

  const stepsResults = processYuHealthResult(yuHealthSteps, start, end, PassiveChallengeType.Steps);
  const meditationResults = processYuHealthResult(yuHealthMeditation, start, end, PassiveChallengeType.Meditation);
  const cyclingResults = processYuHealthResult(yuHealthCycling, start, end, PassiveChallengeType.Cycling);

  return { stepsResults, meditationResults, cyclingResults };
};

export const fetchYuHealthStepsData = async ({
  start,
  features,
  end,
  stepsBlackListApps,
}: IFetchActivityRequest): Promise<{ stepsResults: ChallengesPayload[] }> => {
  const sharedOptions = {
    startTime: start.toDate(),
    endTime: end.toDate(),
    bucketConfig: {
      value: 1,
      unit: BucketSize.day,
    },
    queryOptions: { blacklistApps: stepsBlackListApps },
  };

  const yuHealthSteps = await yuHealthAggregateQuery({
    features,
    metadata: { file: "yu-health.helpers" },
    params: { ...sharedOptions, dataType: HealthDataType.steps },
  });
  const stepsResults = processYuHealthResult(yuHealthSteps, start, end, PassiveChallengeType.Steps);

  return { stepsResults };
};

export const getHealthPermissionStatuses = async (
  capabilities: HealthProviderCapability[],
  _activeProvider: HealthProvider
): Promise<ICapabilityPermissions> => {
  return getPermissionStatusOfCapabilities(capabilities);
};

export const GQL_HEALTH_PROVIDER_TO_API_MAP = Object.freeze({
  [GqlHealthProvider.GoogleFit]: HealthProvider.googleFit,
  [GqlHealthProvider.HealthConnect]: HealthProvider.healthConnect,
  [GqlHealthProvider.HealthKit]: HealthProvider.healthKit,
  [GqlHealthProvider.SamsungHealth]: HealthProvider.samsungHealth,
});

export const API_HEALTH_PROVIDER_TO_GQL_MAP = Object.freeze(
  Object.fromEntries(Object.entries(GQL_HEALTH_PROVIDER_TO_API_MAP).map(([key, value]) => [value, key]))
);

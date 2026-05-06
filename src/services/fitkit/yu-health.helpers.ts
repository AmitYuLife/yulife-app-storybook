import { IFeature } from "@redux/user/user.types";
import Logger from "@services/logger/logger";
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
    Logger.breadcrumb("YuHealth Aggregation Queried", { params }, "log");

    if (loggingEnabled) {
      Logger.info("YuHealth aggregate query args", {
        ...metadata,
        dataType: params.dataType,
        startTime: params.startTime?.toISOString(),
        endTime: params.endTime?.toISOString(),
        location: "yu-health",
      });
    }

    const results = await aggregateQuery({ ...params, queryOptions: { ...params?.queryOptions, disableUserEntries } });

    const resultItems = results?.result ?? [];
    const total = resultItems.length;
    const nonZero = resultItems.filter((r) => r.value > 0).length;

    if (loggingEnabled && results) {
      Logger.info("YuHealth aggregate query results", {
        ...metadata,
        dataType: params.dataType,
        total,
        nonZero,
        location: "yu-health",
      });
    }

    if (total > 0 && nonZero < total) {
      Logger.warn("YuHealth aggregate zero-value buckets", {
        dataType: params.dataType,
        total,
        nonZero,
        zeroDays: total - nonZero,
        startTime: params.startTime?.toISOString(),
        endTime: params.endTime?.toISOString(),
        location: "yu-health",
      });
    }

    return resultItems;
  } catch (e) {
    Logger.error("YuHealth aggregate query response error", {
      ...metadata,
      errorMessage: e instanceof Error ? e.message : String(e),
      dataType: params.dataType,
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

  Logger.breadcrumb("YuHealth Sample Queried", { params }, "log");

  try {
    const args: ISampleQueryParams = {
      ...params,
      queryOptions: { ...params?.queryOptions, disableUserEntries },
    };

    if (loggingEnabled) {
      Logger.info("YuHealth sample query args", {
        ...metadata,
        dataType: args.dataType,
        startTime: args.startTime?.toISOString(),
        endTime: args.endTime?.toISOString(),
        disableUserEntries,
        location: "yu-health",
      });
    }

    const results = await sampleQuery(args);

    if (loggingEnabled && results) {
      Logger.info("YuHealth sample query results", {
        ...metadata,
        dataType: args.dataType,
        resultCount: results.result?.length,
        location: "yu-health",
      });
    }

    return results.result;
  } catch (e) {
    // Add it back when we'll have the logic to log only one error per session
    // Logger.notify(e, { event: "yuHealthSampleQuery" });

    Logger.error("YuHealth sample query error", {
      ...metadata,
      error: e.message,
      dataType: params.dataType,
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

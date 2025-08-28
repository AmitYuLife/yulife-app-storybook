import { IFeature } from "@redux/user/user.types";
import getClient from "@services/bugsnag";
import { processYuHealthResult } from "./helpers/sampleToAggregatedData";
import {
  BucketSize,
  HealthDataType,
  HealthPermissionStatus,
  HealthProvider,
  HealthProviderCapability,
  IAggregateQueryRequest,
  IAggregateQueryResponse,
  ICapabilityPermissions,
  IPedometerParams,
  ISampleQueryParams,
  ISampleQueryResponse,
} from "@yu-life/react-native-yu-health";
import { IFetchActivityResponse } from "@services/fitkit/fitkit.helpers";
import { IFetchActivityRequest } from "./fitkit.types";
import { ChallengesPayload, HealthProvider as GqlHealthProvider, PassiveChallengeType } from "@graphql/__generated";
import socket from "@services/socket";
import moment from "moment";
import { PedometerResponse, WithDataType } from "e2e/_utils/socket/events";
import { YU_HEALTH_ALL_CAPABILITIES } from "@utils";
import { getPermissionsConfig } from "@services/yuHealth/permissions.helpers";

const steps: PedometerResponse[] = [];
let yuHealthSampleQueries: WithDataType<ISampleQueryResponse>[] = [];
let yuHealthAggregatedQueries: WithDataType<IAggregateQueryResponse>[] = [];
let yuHealthPermissions: HealthProviderCapability[] = [];

socket.onPedometerEvent((step) => steps.push(step));

socket.onSampleQueriesAdded?.((newQueries) => {
  yuHealthSampleQueries = [...yuHealthSampleQueries, ...newQueries.map((query) => ({ ...query }))];
});

socket.onAggregatedQueriesAdded?.((newQueries) => {
  yuHealthAggregatedQueries = [...yuHealthAggregatedQueries, ...newQueries.map((query) => ({ ...query }))];
});

socket.onFitkitAuthorised(() => {
  yuHealthPermissions = YU_HEALTH_ALL_CAPABILITIES;
});

const aggregateQuery = async (params: IAggregateQueryRequest): Promise<{ result: IAggregateQueryResponse[] }> => {
  const filtered = yuHealthAggregatedQueries.filter((result) => {
    const resultStart = moment(result.startTime);
    const resultEnd = moment(result.endTime);
    const queryStart = moment(params.startTime);
    const queryEnd = moment(params.endTime);

    return (
      resultStart.isSameOrAfter(queryStart) && resultEnd.isSameOrBefore(queryEnd) && result.dataType === params.dataType
    );
  });

  return { result: filtered };
};

const sampleQuery = async (params: ISampleQueryParams): Promise<{ result: ISampleQueryResponse[] }> => {
  const filtered = yuHealthSampleQueries.filter((result) => {
    const resultStart = moment(result.startTime);
    const resultEnd = moment(result.endTime);
    const queryStart = moment(params.startTime);
    const queryEnd = moment(params.endTime);

    return (
      resultStart.isSameOrAfter(queryStart) && resultEnd.isSameOrBefore(queryEnd) && result.dataType === params.dataType
    );
  });

  return { result: filtered };
};

interface IYuHealthAggregateQuery {
  params: IAggregateQueryRequest;
  features: IFeature;
  metadata: Record<string, string>;
}

export const yuHealthAggregateQuery = async ({
  features,
  params,
}: IYuHealthAggregateQuery): Promise<IAggregateQueryResponse[]> => {
  const { disableUserEntries } = {
    disableUserEntries: true,
    ...features,
  };

  const results = await aggregateQuery({ ...params, queryOptions: { ...params?.queryOptions, disableUserEntries } });
  return results?.result;
};

interface IYuHealthSampleQuery {
  params: ISampleQueryParams;
  features: IFeature;
  metadata: Record<string, string>;
}

export async function yuHealthSampleQuery({ features, params }: IYuHealthSampleQuery): Promise<ISampleQueryResponse[]> {
  const { disableUserEntries = true } = features || {
    disableUserEntries: true,
  };

  getClient().leaveBreadcrumb("YuHealth Sample Queried", { params }, "log");

  const args: ISampleQueryParams = {
    ...params,
    queryOptions: { ...params?.queryOptions, disableUserEntries },
  };

  const results = await sampleQuery(args);
  return results.result;
}

export const yuHealthPedometerQuery = async (data: IPedometerParams) => {
  const result = steps.reduce(
    (step, total) => ({
      ...total,
      value: step.steps + total.steps,
      steps: step.steps + total.steps,
    }),
    { startTime: data.startTime.toString(), endTime: data.endTime.toString(), value: 0, steps: 0 } as PedometerResponse
  );

  return result;
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
  activeProvider: HealthProvider
): Promise<ICapabilityPermissions> => {
  const allPermissions = getPermissionsConfig(activeProvider);

  const providerPermissions = capabilities.map((capability) => {
    const isGranted = yuHealthPermissions.includes(capability);

    return {
      identifier: allPermissions.providerPermissions.find((permission) => permission.capability === capability)
        ?.identifier,
      status: isGranted ? HealthPermissionStatus.granted : HealthPermissionStatus.notDetermined,
      systemPermissionsRequired: [],
      capability,
    };
  });

  return {
    systemPermissions: [],
    providerPermissions,
  };
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

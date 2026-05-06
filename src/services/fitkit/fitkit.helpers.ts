import RNFitKit, { PedometerResponse, SampleQueryResult } from "@services/fitkit/fitkit.service";
import moment from "moment";
import Logger from "@services/logger/logger";
import { DATE_FORMAT_WITH_TZ } from "@utils";
import { fitkitTypeToGqlType, mapGqlFitKitTypeToFitKitType } from "./cast/fitkitTypes";
import {
  AggregatedQueryArgs,
  FitKitSampleType,
  GenericFitKitResponseType,
  IFetchActivityRequest,
  QueryFitKitByTypesResponse,
} from "./fitkit.types";
import { AggregationTypesMap } from "./cast/aggregationTypes";
import { TimeRangeCast } from "./cast/timeRange";
import { ChallengesPayload, FitKitType, PassiveChallengeType } from "@graphql/__generated";
import {
  getAggregationCyclingConfiguration,
  getAggregationStepCountConfiguration,
  getMindfulSessionFitKitTypes,
} from "./fitkit.config";
import { processResult } from "@services/fitkit/helpers/sampleToAggregatedData";

export const mapPedometerResults = (results: PedometerResponse): ChallengesPayload => ({
  endDateTime: moment(results.endTime).format(),
  startDateTime: moment(results.startTime).format(),
  value: Math.floor(results.steps),
  type: PassiveChallengeType.Steps,
  bundleIdentifiers: results.bundleIdentifiers,
});

export const transformSampleResultToPayloadWithType = (item: SampleQueryResult): ChallengesPayload => ({
  endDateTime: moment(item.endTime).format(),
  startDateTime: moment(item.startTime).format(),
  value: Math.floor(item.value),
  type: fitkitTypeToGqlType(item.type),
  bundleIdentifiers: item.bundleIdentifiers,
});

export async function queryFitKitSampleData<T extends boolean = false>({
  startTime,
  endTime,
  fitKitTypes,
  features,
  rawData,
  metaData = {},
}: FitKitSampleType<T>): Promise<GenericFitKitResponseType<T>> {
  const allResults: SampleQueryResult[] = [];
  let error = false;
  let errorUserInfo: Record<string, unknown> | undefined;
  const { disableUserEntries = true, loggingEnabled = false } = features || {
    disableUserEntries: true,
    loggingEnabled: false,
  };

  const typesToQuery: (FitKitType | undefined)[] = fitKitTypes?.length ? fitKitTypes : [undefined];

  Logger.breadcrumb("FitKit Sample Queried", { startTime, endTime, fitKitTypes: typesToQuery }, "log");

  for (const fitKitType of typesToQuery) {
    try {
      const args = {
        disableUserEntries,
        endTime,
        startTime,
        type: fitKitType && mapGqlFitKitTypeToFitKitType(fitKitType),
      } as Parameters<typeof RNFitKit.sampleQuery>[0];

      if (loggingEnabled) {
        Logger.info(`Raw ${fitKitType} query args`, {
          ...metaData,
          disableUserEntries,
          startTime,
          endTime,
          fitKitType,
          location: "fitkit",
        });
      }

      const results = await RNFitKit.sampleQuery(args);

      if (loggingEnabled && results) {
        Logger.info(`Raw ${fitKitType} query results`, {
          ...metaData,
          fitKitType,
          resultCount: results.length,
          location: "fitkit",
        });
      }

      allResults.push(...results);
    } catch (e) {
      error = true;
      errorUserInfo = e.userInfo;

      const errorMessage: string = e.message || "";
      if (!errorMessage.startsWith("An error occurred retrieving samples of type")) {
        Logger.notify(e, {
          event: "RNFitKit.sampleQuery",
        });
      }

      Logger.error(`Raw ${fitKitType} query error`, {
        ...metaData,
        error: errorMessage,
        date_start: startTime,
        date_end: endTime,
        location: "fitkit",
      });
    }
  }

  try {
    if (rawData) {
      return { results: allResults, error, errorUserInfo } as GenericFitKitResponseType<T>;
    }

    return {
      results: allResults.map(transformSampleResultToPayloadWithType),
      error,
      errorUserInfo,
    } as GenericFitKitResponseType<T>;
  } catch {
    return { results: [], error, errorUserInfo } as GenericFitKitResponseType<T>;
  }
}

export const queryFitKitAggregatedData = async ({
  start,
  end,
  fitKitTypes,
  blackListApps,
  features,
  timeRange,
  aggregationType,
  metaData = {},
}: AggregatedQueryArgs): Promise<QueryFitKitByTypesResponse> => {
  const { disableUserEntries = true, loggingEnabled = false } = features || {
    disableUserEntries: true,
    loggingEnabled: false,
    cyclingAggregationMin: false,
  };

  try {
    const startTime = start.format(DATE_FORMAT_WITH_TZ);
    const endTime = end.format(DATE_FORMAT_WITH_TZ);

    Logger.breadcrumb("FitKit Aggregation Queried", { startTime, endTime, fitKitTypes }, "log");

    const args = {
      aggregateBy: {
        bucketSize: { value: 1, type: TimeRangeCast.get(timeRange) },
        type: AggregationTypesMap.get(aggregationType),
      },
      disableUserEntries,
      endTime,
      startTime,
      blackListApps,
      types: fitKitTypes.map(mapGqlFitKitTypeToFitKitType),
      runOnNewThread: true,
    } as Parameters<typeof RNFitKit.aggregateQuery>[0];

    if (loggingEnabled) {
      Logger.info("Raw aggregated query args", {
        ...metaData,
        disableUserEntries,
        startTime,
        endTime,
        timeRange,
        aggregationType,
        fitKitTypes: fitKitTypes.join(","),
        location: "fitkit",
      });
    }

    const results = await RNFitKit.aggregateQuery(args);

    if (loggingEnabled && results) {
      Logger.info("Raw aggregated query results", {
        ...metaData,
        fitKitTypes: fitKitTypes.join(","),
        resultCount: results.length,
        location: "fitkit",
      });
    }

    return {
      results: results.map((r) => transformSampleResultToPayloadWithType(r as SampleQueryResult)),
      error: false,
    };
  } catch (e) {
    Logger.error("Raw aggregated query error", {
      ...metaData,
      error: e.message,
      date_start: start.format(),
      date_end: end.format(),
      fitKitTypes: fitKitTypes.join(","),
      location: "fitkit",
    });
    return { results: [], error: e.message };
  }
};

export const fetchFitkitActivityData = async ({ start, end, features, stepsBlackListApps }: IFetchActivityRequest) => {
  const metaData = { file: "fitkit.helpers" };
  const cyclingConfig = getAggregationCyclingConfiguration(features);
  const stepsConfig = getAggregationStepCountConfiguration(stepsBlackListApps);

  const [steps, meditation, cycling] = await Promise.all([
    queryFitKitAggregatedData({ start, end, features, metaData, ...stepsConfig }),
    queryFitKitSampleData({
      startTime: start.format(DATE_FORMAT_WITH_TZ),
      endTime: end.format(DATE_FORMAT_WITH_TZ),
      fitKitTypes: getMindfulSessionFitKitTypes(),
      features,
      metaData,
    }),
    queryFitKitAggregatedData({ start, end, features, metaData, ...cyclingConfig }),
  ]);

  const stepsResults = processResult(steps, "StepCount", start, end);
  const meditationResults = processResult(meditation, "MindfulSession", start, end);
  const cyclingResults = processResult(cycling, "Biking", start, end);

  return { stepsResults, meditationResults, cyclingResults };
};

export const fetchFitkitStepsData = async ({ start, end, features, stepsBlackListApps }: IFetchActivityRequest) => {
  const metaData = { file: "fitkit.helpers" };
  const stepsConfig = getAggregationStepCountConfiguration(stepsBlackListApps);

  const steps = await queryFitKitAggregatedData({ start, end, features, metaData, ...stepsConfig });
  const stepsResults = processResult(steps, "StepCount", start, end);

  return { stepsResults };
};

export interface IFetchActivityResponse {
  stepsResults: ChallengesPayload[];
  meditationResults: ChallengesPayload[];
  cyclingResults: ChallengesPayload[];
}

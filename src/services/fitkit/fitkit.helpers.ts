import RNFitKit, { PedometerResponse, SampleQueryResult } from "@services/fitkit/fitkit.service";
import getClient from "@services/bugsnag";
import moment from "moment";
import { ChallengesPayload, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import Logger from "../logging/logger";
import { DATE_FORMAT_WITH_TZ } from "@utils";
import { fitkitTypeToGqlType, mapGqlFitKitTypeToFitKitType } from "./cast/fitkitTypes";
import {
  AggregatedQueryArgs,
  FitKitSampleType,
  GenericFitKitResponseType,
  QueryFitKitByTypesResponse,
} from "./fitkit.types";
import { AggregationTypesMap } from "./cast/aggregationTypes";
import { TimeRangeCast } from "./cast/timeRange";

export const mapPedometerResults = (results: PedometerResponse): ChallengesPayload => ({
  endDateTime: moment(results.endTime).format(),
  startDateTime: moment(results.startTime).format(),
  value: Math.floor(results.steps),
  type: PassiveChallengeType.STEPS,
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
  const { disableUserEntries = true, loggingEnabled = false } = features || {
    disableUserEntries: true,
    loggingEnabled: false,
  };

  if (!fitKitTypes?.length) {
    fitKitTypes.push(undefined);
  }

  getClient().leaveBreadcrumb("FitKit Sample Queried", { startTime, endTime, fitKitTypes }, "log");

  for (const fitKitType of fitKitTypes) {
    try {
      const args = {
        disableUserEntries,
        endTime,
        startTime,
        type: fitKitType && mapGqlFitKitTypeToFitKitType(fitKitType),
      };

      if (loggingEnabled) {
        Logger.logMixpanelEvent("app_debug", {
          ...metaData,
          ...args,
          type: `raw_${fitKitType}_query_args`,
          location: "fitkit",
        });
      }

      const results = await RNFitKit.sampleQuery(args);

      if (loggingEnabled && results && results.length > 0) {
        Logger.logMixpanelEvent("app_debug", {
          ...metaData,
          results,
          type: `raw_${fitKitType}_query_results`,
          location: "fitkit",
        });
      }

      allResults.push(...results);
    } catch (e) {
      error = true;

      const errorMessage: string = e.message || "";
      if (!errorMessage.startsWith("An error occurred retrieving samples of type")) {
        Logger.error(e, {
          event: "RNFitKit.sampleQuery",
          userInfo: e.userInfo,
        });
      }

      Logger.logMixpanelEvent("app_debug", {
        ...metaData,
        error: errorMessage,
        date_start: startTime,
        date_end: endTime,
        userInfo: e.userInfo,
        type: `raw_${fitKitType}_query_error`,
        location: "fitkit",
      });
    }
  }

  try {
    if (rawData) {
      return { results: allResults, error } as GenericFitKitResponseType<T>;
    }

    return { results: allResults.map(transformSampleResultToPayloadWithType), error } as GenericFitKitResponseType<T>;
  } catch (e) {
    return { results: [], error } as GenericFitKitResponseType<T>;
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
  const {
    disableUserEntries = true,
    loggingEnabled = false,
    runOnNewThread = false,
  } = features || {
    disableUserEntries: true,
    loggingEnabled: false,
    cyclingAggregationMin: false,
    runOnNewThread: false,
  };

  try {
    const startTime = start.format(DATE_FORMAT_WITH_TZ);
    const endTime = end.format(DATE_FORMAT_WITH_TZ);

    getClient().leaveBreadcrumb("FitKit Aggregation Queried", { startTime, endTime, fitKitTypes }, "log");

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
      runOnNewThread,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("app_debug", {
        ...metaData,
        ...args,
        type: `raw_aggregated_query_args`,
        fitKitTypes,
        location: "fitkit",
      });
    }

    const results = await RNFitKit.aggregateQuery(args);

    if (loggingEnabled && results && results.length > 0) {
      Logger.logMixpanelEvent("app_debug", {
        ...metaData,
        results,
        type: `raw_aggregated_query_results`,
        fitKitTypes,
        location: "fitkit",
      });
    }

    return { results: results.map(transformSampleResultToPayloadWithType as any), error: null };
  } catch (e) {
    Logger.logMixpanelEvent("app_debug", {
      ...metaData,
      error: e.message,
      date_start: start.format(),
      date_end: end.format(),
      type: `raw_aggregated_query_error`,
      fitKitTypes,
      location: "fitkit",
    });
    return { results: [], error: e.message };
  }
};

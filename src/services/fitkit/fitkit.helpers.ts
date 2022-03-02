import { Platform } from "react-native";
import { IUserStore } from "@redux/user/user.reducer";
import RNFitKit, { FitKitTypes, PedometerResponse, SampleQueryResult } from "@services/fitkit/fitkit.service";
import { useFitKit } from "./fitkit.hooks";
import moment, { Moment } from "moment";
import { ChallengesPayload, FitKitType, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import Logger from "../logging/logger";
import { createContext } from "react";
import { DATE_FORMAT_WITH_TZ } from "@utils";

export const mapGqlFitKitTypeToFitKitType = (gqlType: FitKitType) => {
  switch (gqlType) {
    case FitKitType.StepCount:
      return FitKitTypes.Types.StepCount;
    case FitKitType.MindfulSession:
      return FitKitTypes.Types.MindfulSession;
    case FitKitType.Cycling:
      return FitKitTypes.Types.Biking;
    case FitKitType.Flexibility:
      return Platform.select({
        android: FitKitTypes.Types.MixedMartialArts,
        ios: FitKitTypes.Types.Flexibility,
      });
    case FitKitType.HIIT:
      return Platform.select({
        android: FitKitTypes.Types.HighIntensityIntervalTraining,
        ios: FitKitTypes.Types.MixedCardio,
      });
    case FitKitType.Pilates:
      return FitKitTypes.Types.Pilates;
    case FitKitType.Sleep:
      return FitKitTypes.Types.SleepAnalysis;
    case FitKitType.Strength:
      return FitKitTypes.Types.StrengthTraining;
    case FitKitType.Swimming:
      return FitKitTypes.Types.Swimming;
    case FitKitType.Yoga:
      return FitKitTypes.Types.Yoga;
    default:
      throw new Error("Invalid type!");
  }
};

export const fitkitTypeToGqlType = (type: string): PassiveChallengeType => {
  switch (type) {
    case "StepCount":
      return PassiveChallengeType.STEPS;
    case "MindfulSession":
      return PassiveChallengeType.MEDITATION;
    case "Biking":
      return PassiveChallengeType.CYCLING;
  }
};

export const mapPedometerResults = (results: PedometerResponse): ChallengesPayload => ({
  endDateTime: moment(results.endTime).format(),
  startDateTime: moment(results.startTime).format(),
  value: Math.floor(results.steps),
  type: PassiveChallengeType.STEPS,
});

export const transformSampleResultToPayloadWithType = (item: SampleQueryResult): ChallengesPayload => ({
  endDateTime: moment(item.endTime).format(),
  startDateTime: moment(item.startTime).format(),
  value: Math.floor(item.value),
  type: fitkitTypeToGqlType(item.type),
});

export interface QueryFitKitByTypesResponse {
  results: ChallengesPayload[];
  error: boolean;
}

export const queryFitKitByTypes = async (
  startTime: string,
  endTime: string,
  fitKitTypes: FitKitType[],
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {}
): Promise<QueryFitKitByTypesResponse> => {
  const allResults: SampleQueryResult[] = [];
  let error = false;

  for (const fitKitType of fitKitTypes) {
    try {
      const args = {
        disableUserEntries,
        endTime,
        startTime,
        type: mapGqlFitKitTypeToFitKitType(fitKitType),
      };

      if (loggingEnabled) {
        Logger.logMixpanelEvent(`raw_${fitKitType}_query_args`, args);
      }

      const results = await RNFitKit.sampleQuery(args);

      if (loggingEnabled && results && results.length > 0) {
        Logger.logMixpanelEvent(`raw_${fitKitType}_query_results`, { results });
      }

      allResults.push(...results);
    } catch (e) {
      error = true;
      Logger.error(e, {
        event: "RNFitKit.sampleQuery",
        QueryResult: e.QueryResult,
        QueryOptions: e.QueryOptions,
        ExceptionName: e.ExceptionName,
        ExceptionReason: e.ExceptionReason,
      });
      Logger.logMixpanelEvent(`raw_${fitKitType}_query_error`, {
        error: e.message,
        date_start: startTime,
        date_end: endTime,
      });
    }
  }

  try {
    return { results: allResults.map(transformSampleResultToPayloadWithType), error };
  } catch (e) {
    return { results: [], error };
  }
};

// Only for android
export const queryAggregatedDataByDay = async (
  start: Moment,
  end: Moment,
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {},
  fitKitTypes: FitKitType[] = [FitKitType.StepCount, FitKitType.MindfulSession]
): Promise<QueryFitKitByTypesResponse> => {
  try {
    const startTime = start.format(DATE_FORMAT_WITH_TZ);
    const endTime = end.format(DATE_FORMAT_WITH_TZ);
    const types = fitKitTypes.map((fitKitType) => mapGqlFitKitTypeToFitKitType(fitKitType));
    const args = {
      aggregateBy: {
        bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
        type: FitKitTypes.AggregateType.Time,
      },
      disableUserEntries,
      endTime,
      startTime,
      type: FitKitTypes.Types.MindfulSession, // should be removed when requesting aggregated for multiple types
      types,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("raw_aggregate_data_query_args", args);
    }

    const results = await RNFitKit.aggregateQuery(args);

    if (loggingEnabled && results && results.length > 0) {
      Logger.logMixpanelEvent("raw_aggregate_data_query_results", { results });
    }

    return { results: results.map(transformSampleResultToPayloadWithType as any), error: false };
  } catch (e) {
    Logger.logMixpanelEvent("raw_aggregated_data_query_error", { error: e.message });
    return { results: [], error: true };
  }
};

export const querySteps = async (
  start: Moment,
  end: Moment,
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {}
): Promise<{ results: ChallengesPayload[]; error: string | null }> => {
  try {
    const startTime = start.format(DATE_FORMAT_WITH_TZ);
    const endTime = end.format(DATE_FORMAT_WITH_TZ);
    const args = {
      aggregateBy: {
        bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
        type: FitKitTypes.AggregateType.Time,
      },
      disableUserEntries,
      endTime,
      startTime,
      type: FitKitTypes.Types.StepCount,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("raw_steps_query_args", args);
    }

    const results = await RNFitKit.aggregateQuery(args);

    if (loggingEnabled && results && results.length > 0) {
      Logger.logMixpanelEvent("raw_steps_query_results", { results });
    }

    return { results: results.map(transformSampleResultToPayloadWithType as any), error: null };
  } catch (e) {
    Logger.logMixpanelEvent("raw_steps_query_error", {
      error: e.message,
      date_start: start.format(),
      date_end: end.format(),
    });
    return { results: [], error: e.message };
  }
};

export function sampleDataToAggregatedData(
  startTime: string,
  endTime: string,
  results: ChallengesPayload[]
): ChallengesPayload[] {
  const buckets = getDateBuckets(startTime, endTime);

  return buckets.map(({ end, start }) => {
    let value = 0;
    results.forEach((element: ChallengesPayload) => {
      if (moment(element.startDateTime).isSameOrAfter(start) && moment(element.startDateTime).isSameOrBefore(end)) {
        value = value + element.value;
      }
    });

    const type = results[0].type;
    return {
      startDateTime: start.format(),
      endDateTime: end.format(),
      value,
      type,
    };
  });
}

export const processResult = (
  response: QueryFitKitByTypesResponse,
  type: string,
  start: Moment,
  end: Moment
): ChallengesPayload[] => {
  if (response.error) {
    return [];
  }

  if (response?.results?.length === 0) {
    return emptyAggregatedData(start.clone().format(), end.clone().format(), type);
  }

  return sampleDataToAggregatedData(start.clone().format(), end.clone().format(), response.results);
};

export function emptyAggregatedData(startTime: string, endTime: string, type: string): ChallengesPayload[] {
  const buckets = getDateBuckets(startTime, endTime);
  return buckets.map(({ end, start }) => ({
    startDateTime: start.format(),
    endDateTime: end.format(),
    value: 0,
    type: fitkitTypeToGqlType(type),
  }));
}

export const returnEmptyResult = (): QueryFitKitByTypesResponse => {
  return { results: [], error: false };
};

const getDateBuckets = (startTime: string, endTime: string) => {
  const buckets: { end: Moment; start: Moment }[] = [];
  const rangeEnd = moment(endTime);
  for (let start = moment(startTime); start.isBefore(rangeEnd); start.add(1, "day")) {
    buckets.push({
      start: start.clone(),
      end: start.clone().endOf("day"),
    });
  }

  return buckets;
};

const fitkitInitialState: ReturnType<typeof useFitKit> = {
  authorise: () => null,
  authoriseFitKitTypes: () => null,
  authorised: false,
  available: false,
  loading: true,
};

export const FitkitContext = createContext(fitkitInitialState);

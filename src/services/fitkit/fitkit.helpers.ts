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
    case FitKitType.BikingWorkout:
      return Platform.select({
        android: FitKitTypes.Types.Biking,
        ios: FitKitTypes.Types.BikingWorkout,
      });
    case FitKitType.BikingHandWorkout:
      return Platform.select({
        android: FitKitTypes.Types.Biking,
        ios: FitKitTypes.Types.BikingHandWorkout,
      });
    case FitKitType.Distance:
      if (Platform.OS === "ios") {
        throw new Error("Invalid type for iOS!");
      }

      return FitKitTypes.Types.Distance;
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

export const getAdditionalCyclingFitnessActivities = (features: IUserStore["features"] = {}) => {
  const additionalFitnessActivitiesToggles = new Map<string, string>([
    ["enableBikingHand", "biking.hand"],
    ["enableBikingMountain", "biking.mountain"],
    ["enableBikingRoad", "biking.road"],
    ["enableBikingSpinning", "biking.spinning"],
    ["enableBikingStationary", "biking.stationary"],
    ["enableBikingUtility", "biking.utility"],
  ]);

  const additionalCyclingActivities: string[] = [];

  additionalFitnessActivitiesToggles.forEach((value, key) => {
    if (features[`${key}`]) {
      additionalCyclingActivities.push(value);
    }
  });

  return additionalCyclingActivities;
};

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

export interface QueryFitKitByTypesResponse {
  results: ChallengesPayload[];
  error: boolean | string;
}

export const queryFitKitByTypesDebug = async (
  startTime: string,
  endTime: string,
  fitKitTypes: FitKitType[],
  disableTypeFilter = false,
  additionalFitnessActivities: Map<FitKitType, string[]> = new Map<FitKitType, string[]>()
): Promise<{ error: boolean }> => {
  const allResults: SampleQueryResult[] = [];
  let error = false;

  Logger.logMixpanelEvent(`debug_tool_query_args`, {
    disableUserEntries: false,
    endTime,
    startTime,
    types: fitKitTypes.map((fitKitType) => mapGqlFitKitTypeToFitKitType(fitKitType)),
    disableTypeFilter,
    additionalFitnessActivities,
  });

  for (const fitKitType of fitKitTypes) {
    try {
      const additionalFitnessActivitiesCovered = additionalFitnessActivities.has(fitKitType)
        ? additionalFitnessActivities.get(fitKitType)
        : [];

      const args = {
        disableUserEntries: false,
        endTime,
        startTime,
        type: mapGqlFitKitTypeToFitKitType(fitKitType),
        disableTypeFilter,
        additionalFitnessActivities,
        fitnessActivities: additionalFitnessActivitiesCovered,
      };

      const results = await RNFitKit.sampleQuery(args);

      allResults.push(...results);
    } catch (e) {
      error = true;
      Logger.logMixpanelEvent(`app_debug`, {
        error: e.message,
        date_start: startTime,
        date_end: endTime,
        userInfo: e.userInfo,
        location: "fitkit",
        type: `debug_tool_${fitKitType}_query_error`,
      });
    }
  }

  Logger.logMixpanelEvent(`debug_tool_query_results`, { results: allResults, fitKitTypes });
  return { error };
};

export const queryFitKitByTypes = async (
  startTime: string,
  endTime: string,
  fitKitTypes: FitKitType[],
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {},
  additionalFitnessActivities: Map<FitKitType, string[]> = new Map<FitKitType, string[]>()
): Promise<QueryFitKitByTypesResponse> => {
  const allResults: SampleQueryResult[] = [];
  let error = false;

  for (const fitKitType of fitKitTypes) {
    try {
      const additionalFitnessActivitiesCovered = additionalFitnessActivities.has(fitKitType)
        ? additionalFitnessActivities.get(fitKitType)
        : [];

      const args = {
        disableUserEntries,
        endTime,
        startTime,
        type: mapGqlFitKitTypeToFitKitType(fitKitType),
        fitnessActivities: additionalFitnessActivitiesCovered,
      };

      if (loggingEnabled) {
        Logger.logMixpanelEvent("app_debug", { ...args, type: `raw_${fitKitType}_query_args`, location: "fitkit" });
      }

      const results = await RNFitKit.sampleQuery(args);

      if (loggingEnabled && results && results.length > 0) {
        Logger.logMixpanelEvent("app_debug", { results, type: `raw_${fitKitType}_query_results`, location: "fitkit" });
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
    return { results: allResults.map(transformSampleResultToPayloadWithType), error };
  } catch (e) {
    return { results: [], error };
  }
};

// Only for android
export const queryAggregatedDataByDay = async (
  start: Moment,
  end: Moment,
  stepsBlackListApps: string[],
  fitKitTypes: FitKitType[],
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {}
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
      blackListApps: stepsBlackListApps,
      types,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("app_debug", { ...args, type: "raw_aggregate_data_query_args", location: "fitkit" });
    }

    const results = await RNFitKit.aggregateQuery(args);

    if (loggingEnabled && results && results.length > 0) {
      Logger.logMixpanelEvent("app_debug", { results, type: "raw_aggregate_data_query_results", location: "fitkit" });
    }

    return { results: results.map(transformSampleResultToPayloadWithType as any), error: false };
  } catch (e) {
    Logger.logMixpanelEvent("app_debug", {
      error: e.message,
      type: "raw_aggregated_data_query_error",
      location: "fitkit",
    });
    return { results: [], error: true };
  }
};

export const queryAggregatedBiking = async (
  start: Moment,
  end: Moment,
  features?: IUserStore["features"]
): Promise<QueryFitKitByTypesResponse> => {
  try {
    const {
      disableUserEntries = true,
      loggingEnabled = false,
      cyclingAggregationMin = false,
      runOnNewThread = false,
    } = features || {
      disableUserEntries: true,
      loggingEnabled: false,
      runOnNewThread: false,
    };
    const additionalFitnessActivities = getAdditionalCyclingFitnessActivities(features);

    const type = cyclingAggregationMin ? FitKitTypes.TimeRange.MINUTES : FitKitTypes.TimeRange.SECONDS;
    const startTime = start.format(DATE_FORMAT_WITH_TZ);
    const endTime = end.format(DATE_FORMAT_WITH_TZ);
    const args = {
      aggregateBy: {
        bucketSize: { value: 1, type },
        type: FitKitTypes.AggregateType.ActivitySegment,
      },
      disableUserEntries,
      endTime,
      startTime,
      type: FitKitTypes.Types.Biking,
      fitnessActivities: additionalFitnessActivities,
      runOnNewThread,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("app_debug", { ...args, type: "raw_biking_query_args", location: "fitkit" });
    }

    const results = await RNFitKit.aggregateQuery(args);

    if (loggingEnabled && results && results.length > 0) {
      Logger.logMixpanelEvent("app_debug", { results, type: "raw_biking_query_results", location: "fitkit" });
    }

    return { results: results.map(transformSampleResultToPayloadWithType as any), error: null };
  } catch (e) {
    Logger.logMixpanelEvent("app_debug", {
      error: e.message,
      date_start: start.format(),
      date_end: end.format(),
      type: "raw_biking_query_error",
      location: "fitkit",
    });
    return { results: [], error: true };
  }
};

export const querySteps = async (
  start: Moment,
  end: Moment,
  blackListApps: string[],
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
      blackListApps,
      type: FitKitTypes.Types.StepCount,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("app_debug", { ...args, type: "raw_steps_query_args", location: "fitkit" });
    }

    const results = await RNFitKit.aggregateQuery(args);

    if (loggingEnabled && results && results.length > 0) {
      Logger.logMixpanelEvent("app_debug", { results, type: "raw_steps_query_results", location: "fitkit" });
    }

    return { results: results.map(transformSampleResultToPayloadWithType as any), error: null };
  } catch (e) {
    Logger.logMixpanelEvent("app_debug", {
      error: e.message,
      date_start: start.format(),
      date_end: end.format(),
      type: "raw_steps_query_error",
      location: "fitkit",
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
    const bundleIdentifiers: Set<string> = new Set();
    results.forEach((element: ChallengesPayload) => {
      if (moment(element.startDateTime).isSameOrAfter(start) && moment(element.startDateTime).isSameOrBefore(end)) {
        value = value + element.value;
        element.bundleIdentifiers?.map((bundle) => bundleIdentifiers.add(bundle));
      }
    });

    const type = results[0].type;
    return {
      startDateTime: start.format(),
      endDateTime: end.format(),
      value,
      type,
      bundleIdentifiers: Array.from(bundleIdentifiers),
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

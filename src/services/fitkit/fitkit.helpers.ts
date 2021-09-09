import { Platform } from "react-native";
import { IUserStore } from "@redux/user/user.reducer";
import RNFitKit, { FitKitTypes, PedometerResponse, SampleQueryResult } from "@services/fitkit/fitkit.service";
import { useFitKit } from "./fitkit.hooks";
import moment, { Moment } from "moment";
import { ChallengePayload, FitKitType } from "@graphql/_core/schema/globalTypes";
import Logger from "../logging/logger";
import { createContext } from "react";
import { DATE_FORMAT_WITH_TZ } from "@utils";

const mapGqlFitKitTypeToFitKitType = (gqlType: FitKitType) => {
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

export const mapPedometerResults = (results: PedometerResponse): ChallengePayload => ({
  endDateTime: moment(results.endTime).format(),
  startDateTime: moment(results.startTime).format(),
  value: Math.floor(results.steps),
});

export const transformSampleResultToPayload = (item: SampleQueryResult): ChallengePayload => ({
  endDateTime: moment(item.endTime).format(),
  startDateTime: moment(item.startTime).format(),
  value: Math.floor(item.value),
});

export const queryFitKitByTypes = async (
  startTime: string,
  endTime: string,
  fitKitTypes: FitKitType[],
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {}
): Promise<ChallengePayload[]> => {
  const allResults: SampleQueryResult[] = [];

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
      Logger.logMixpanelEvent(`raw_${fitKitType}_query_error`, { error: e.message });
    }
  }

  try {
    return allResults.map(transformSampleResultToPayload);
  } catch (e) {
    return [];
  }
};

export const querySteps = async (
  start: Moment,
  end: Moment,
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {}
): Promise<{ results: ChallengePayload[]; error: string | null }> => {
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

    return { results: results.map(transformSampleResultToPayload as any), error: null };
  } catch (e) {
    Logger.logMixpanelEvent("raw_steps_query_error", { error: e.message });
    return { results: [], error: e.message };
  }
};

export const queryCycling = async (
  startTime: string,
  endTime: string,
  { disableUserEntries = true, loggingEnabled = false }: IUserStore["features"] = {}
): Promise<ChallengePayload[]> => {
  try {
    const args = {
      disableUserEntries,
      endTime,
      startTime,
      type: FitKitTypes.Types.Biking,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("raw_cycling_query_args", args);
    }

    const results = await RNFitKit.sampleQuery(args);

    if (loggingEnabled && results && results.length > 0) {
      Logger.logMixpanelEvent("raw_cycling_query_results", { results });
    }

    return results.map(transformSampleResultToPayload);
  } catch (e) {
    Logger.logMixpanelEvent("raw_cycling_query_error", { error: e.message });
    return [];
  }
};

export const queryHistoricalData = async (onboardingDate: Moment) => {
  const start = onboardingDate.clone().subtract(60, "days").startOf("day");
  const end = onboardingDate.clone().subtract(1, "days").endOf("day");

  return querySteps(start, end, { disableUserEntries: false });
};

export const queryHistoricalMeditationData = async (onboardingDate: Moment, userFeature: IUserStore["features"]) => {
  const start = onboardingDate.clone().subtract(60, "days");
  const end = onboardingDate.clone().subtract(1, "days");

  return queryFitKitByTypes(start.format(), end.format(), [FitKitType.MindfulSession], userFeature);
};

export const authoriseFitKitTypes = async (fitKitTypes: FitKitType[]) => {
  try {
    await RNFitKit.authorise({ read: fitKitTypes.map(mapGqlFitKitTypeToFitKitType) });
  } catch (e) {
    Logger.error(e, { event: "authoriseCycling" });
  }
};

const fitkitInitialState: ReturnType<typeof useFitKit> = {
  authorise: () => null,
  authorised: false,
  available: false,
  loading: true,
};

export const FitkitContext = createContext(fitkitInitialState);

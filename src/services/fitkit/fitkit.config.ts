import { IUserStore } from "@redux/user/user.types";
import { Platform } from "react-native";
import { AggregationType, TimeRange } from "./fitkit.types";
import { getAdditionalCyclingFitnessActivities } from "./helpers/additionalCyclingActivities";
import { FitKitType } from "@graphql/__generated";

export const getAggregationCyclingConfiguration = (features: IUserStore["features"]) => {
  const additionalFitnessActivities = getAdditionalCyclingFitnessActivities(features);

  return {
    timeRange:
      Platform.select({
        // Android is actually 'minimum time', so one second is appropriate
        android: TimeRange.SECONDS,
        // iOS is bucket size
        ios: TimeRange.DAYS,
      }) ?? TimeRange.DAYS,
    fitKitTypes: [FitKitType.Cycling, ...additionalFitnessActivities],
    aggregationType: AggregationType.ActivitySegment,
  };
};

export const getAggregationStepCountConfiguration = (blackListApps: string[]) => ({
  fitKitTypes: [FitKitType.StepCount],
  timeRange: TimeRange.DAYS,
  aggregationType: AggregationType.Time,
  blackListApps,
});

export const getAggregationStepCountHourlyConfiguration = (blackListApps: string[], stepsQueryTimeRange?: string) => ({
  fitKitTypes: [FitKitType.StepCount],
  timeRange: buildActivityTimeRange(stepsQueryTimeRange),
  aggregationType: AggregationType.Time,
  blackListApps,
});

const buildActivityTimeRange = (range?: string) => {
  switch (range) {
    case "minutes":
      return TimeRange.MINUTES;
    case "seconds":
      return TimeRange.SECONDS;
    case "milliseconds":
      return TimeRange.MILLISECONDS;
    case "hours":
    default:
      return TimeRange.HOURS;
  }
};

export const getMindfulSessionFitKitTypes = (): FitKitType[] =>
  Platform.select({
    android: [FitKitType.MindfulSession, FitKitType.GuidedBreathing],
    ios: [FitKitType.MindfulSession],
  }) ?? [FitKitType.MindfulSession];

export const getAggregationMindfulSessionConfiguration = () => ({
  fitKitTypes: getMindfulSessionFitKitTypes(),
  timeRange: TimeRange.DAYS,
  aggregationType: AggregationType.Time,
});

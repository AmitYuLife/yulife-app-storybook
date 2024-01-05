import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { IUserStore } from "@redux/user/user.reducer";
import { Platform } from "react-native";
import { AggregationType, TimeRange } from "./fitkit.types";
import { getAdditionalCyclingFitnessActivities } from "./helpers/additionalCyclingActivities";

export const getAggregationCyclingConfiguration = (features: IUserStore["features"]) => {
  const additionalFitnessActivities = getAdditionalCyclingFitnessActivities(features);

  return {
    timeRange: Platform.select({
      // Android is actually 'minimum time', so one second is appropriate
      android: TimeRange.SECONDS,
      // iOS is bucket size
      ios: TimeRange.DAYS,
    }),
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

export const getAggregationStepCountHourlyConfiguration = (blackListApps: string[]) => ({
  fitKitTypes: [FitKitType.StepCount],
  timeRange: TimeRange.HOURS,
  aggregationType: AggregationType.Time,
  blackListApps,
});

export const getMindfulSessionFitKitTypes = () =>
  Platform.select({
    android: [FitKitType.MindfulSession, FitKitType.GuidedBreathing],
    ios: [FitKitType.MindfulSession],
  });

export const getAggregationMindfulSessionConfiguration = () => ({
  fitKitTypes: getMindfulSessionFitKitTypes(),
  timeRange: TimeRange.DAYS,
  aggregationType: AggregationType.Time,
});

import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { IUserStore } from "@redux/user/user.reducer";
import { AggregationType, TimeRange } from "./fitkit.types";
import { getAdditionalCyclingFitnessActivities } from "./helpers/additionalCyclingActivities";

export const getAggregationCyclingConfiguration = (features: IUserStore["features"]) => {
  const additionalFitnessActivities = getAdditionalCyclingFitnessActivities(features);

  return {
    timeRange: TimeRange.SECONDS,
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

export const getAndroidAggregationMindfulSessionConfiguration = () => ({
  fitKitTypes: [FitKitType.MindfulSession],
  timeRange: TimeRange.DAYS,
  aggregationType: AggregationType.Time,
});

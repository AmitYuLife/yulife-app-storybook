import { FitKitTypes } from "@yu-life/react-native-fitkit";
import { AggregationType } from "../fitkit.types";

export const AggregationTypesMap = new Map<AggregationType, string>([
  [AggregationType.ActivitySegment, FitKitTypes.AggregateType.ActivitySegment],
  [AggregationType.ActivityType, FitKitTypes.AggregateType.ActivityType],
  [AggregationType.Session, FitKitTypes.AggregateType.Session],
  [AggregationType.Time, FitKitTypes.AggregateType.Time],
]);

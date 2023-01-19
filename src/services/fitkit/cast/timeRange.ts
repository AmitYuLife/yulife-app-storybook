import { FitKitTypes } from "@yu-life/react-native-fitkit";
import { TimeRange } from "../fitkit.types";

export const TimeRangeCast = new Map<TimeRange, string>([
  [TimeRange.DAYS, FitKitTypes.TimeRange.DAYS],
  [TimeRange.HOURS, FitKitTypes.TimeRange.HOURS],
  [TimeRange.MILLISECONDS, FitKitTypes.TimeRange.MILLISECONDS],
  [TimeRange.MINUTES, FitKitTypes.TimeRange.MINUTES],
  [TimeRange.SECONDS, FitKitTypes.TimeRange.SECONDS],
]);

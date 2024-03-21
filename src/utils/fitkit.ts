import { FitKitType as NewGqlType } from "@graphql/__generated";
import { FitKitType as OldGqlType } from "@graphql/_core/schema/globalTypes";

export function toFitKitGqlType(type: OldGqlType[]): NewGqlType[];
export function toFitKitGqlType(type: OldGqlType): NewGqlType;
export function toFitKitGqlType(type: OldGqlType | OldGqlType[]): NewGqlType | NewGqlType[] {
  if (!type) {
    return undefined;
  }

  if (Array.isArray(type)) {
    return type.map(toFitKitGqlType);
  }

  switch (type) {
    case OldGqlType.ActiveEnergyBurned:
      return NewGqlType.ActiveEnergyBurned;
    case OldGqlType.BikingHand:
      return NewGqlType.BikingHand;
    case OldGqlType.BikingHandWorkout:
      return NewGqlType.BikingHandWorkout;
    case OldGqlType.BikingMountain:
      return NewGqlType.BikingMountain;
    case OldGqlType.BikingRoad:
      return NewGqlType.BikingRoad;
    case OldGqlType.BikingSpinning:
      return NewGqlType.BikingSpinning;
    case OldGqlType.BikingStationary:
      return NewGqlType.BikingStationary;
    case OldGqlType.BikingUtility:
      return NewGqlType.BikingUtility;
    case OldGqlType.BikingWorkout:
      return NewGqlType.BikingWorkout;
    case OldGqlType.Cycling:
      return NewGqlType.Cycling;
    case OldGqlType.Distance:
      return NewGqlType.Distance;
    case OldGqlType.Flexibility:
      return NewGqlType.Flexibility;
    case OldGqlType.GuidedBreathing:
      return NewGqlType.GuidedBreathing;
    case OldGqlType.HIIT:
      return NewGqlType.Hiit;
    case OldGqlType.HeartRate:
      return NewGqlType.HeartRate;
    case OldGqlType.MindfulSession:
      return NewGqlType.MindfulSession;
    case OldGqlType.Pilates:
      return NewGqlType.Pilates;
    case OldGqlType.Sleep:
      return NewGqlType.Sleep;
    case OldGqlType.StepCount:
      return NewGqlType.StepCount;
    case OldGqlType.Strength:
      return NewGqlType.Strength;
    case OldGqlType.Swimming:
      return NewGqlType.Swimming;
    case OldGqlType.Workout:
      return NewGqlType.Workout;
    case OldGqlType.Yoga:
      return NewGqlType.Yoga;
  }
}

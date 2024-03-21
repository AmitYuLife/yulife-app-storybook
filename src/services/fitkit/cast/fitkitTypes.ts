import { Platform } from "react-native";
import { FitKitTypes } from "@services/fitkit/fitkit.service";
import { PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import { FitKitType } from "@graphql/__generated";

export const mapGqlFitKitTypeToFitKitType = (gqlType: FitKitType) => {
  switch (gqlType) {
    case FitKitType.StepCount:
      return FitKitTypes.Types.StepCount;
    case FitKitType.MindfulSession:
      return FitKitTypes.Types.MindfulSession;
    case FitKitType.GuidedBreathing:
      if (Platform.OS === "ios") {
        throw new Error("Invalid type for iOS!");
      }

      return FitKitTypes.Types.GuidedBreathing;
    case FitKitType.Cycling:
      return FitKitTypes.Types.Biking;
    case FitKitType.BikingHand:
      return Platform.select({
        android: FitKitTypes.Types.BikingHand,
        ios: FitKitTypes.Types.Biking,
      });
    case FitKitType.BikingMountain:
      return Platform.select({
        android: FitKitTypes.Types.BikingMountain,
        ios: FitKitTypes.Types.Biking,
      });
    case FitKitType.BikingRoad:
      return Platform.select({
        android: FitKitTypes.Types.BikingRoad,
        ios: FitKitTypes.Types.Biking,
      });
    case FitKitType.BikingSpinning:
      return Platform.select({
        android: FitKitTypes.Types.BikingSpinning,
        ios: FitKitTypes.Types.Biking,
      });
    case FitKitType.BikingStationary:
      return Platform.select({
        android: FitKitTypes.Types.BikingStationary,
        ios: FitKitTypes.Types.Biking,
      });
    case FitKitType.BikingUtility:
      return Platform.select({
        android: FitKitTypes.Types.BikingUtility,
        ios: FitKitTypes.Types.Biking,
      });
    case FitKitType.Flexibility:
      return Platform.select({
        android: FitKitTypes.Types.MixedMartialArts,
        ios: FitKitTypes.Types.Flexibility,
      });
    case FitKitType.Hiit:
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

    case FitKitType.Workout: {
      return FitKitTypes.Types.Workout;
    }

    case FitKitType.Distance:
      if (Platform.OS === "ios") {
        throw new Error("Invalid type for iOS!");
      }

      return FitKitTypes.Types.Distance;
    case FitKitType.ActiveEnergyBurned:
      return FitKitTypes.Types.ActiveEnergyBurned;
    default:
      throw new Error("Invalid type!");
  }
};

export const fitkitTypeToGqlType = (type: string): PassiveChallengeType => {
  switch (type) {
    case "StepCount":
      return PassiveChallengeType.STEPS;
    case "MindfulSession":
    case "GuidedBreathing":
      return PassiveChallengeType.MEDITATION;
    case "BikingHand":
    case "BikingMountain":
    case "BikingRoad":
    case "BikingSpinning":
    case "BikingStationary":
    case "BikingUtility":
    case "Biking":
      return PassiveChallengeType.CYCLING;
  }
};

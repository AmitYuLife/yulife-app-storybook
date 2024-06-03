import { FitKitType } from "@graphql/__generated";
import { IFeature } from "@redux/user/user.types";
import { Platform } from "react-native";

export const getAdditionalCyclingFitnessActivities = (features: IFeature = {}) => {
  if (Platform.OS === "ios") {
    return [];
  }

  const additionalFitnessActivitiesToggles = new Map<string, FitKitType>([
    ["enableBikingHand", FitKitType.BikingHand],
    ["enableBikingMountain", FitKitType.BikingMountain],
    ["enableBikingRoad", FitKitType.BikingRoad],
    ["enableBikingSpinning", FitKitType.BikingSpinning],
    ["enableBikingStationary", FitKitType.BikingStationary],
    ["enableBikingUtility", FitKitType.BikingUtility],
  ]);

  const additionalCyclingActivities: FitKitType[] = [];

  additionalFitnessActivitiesToggles.forEach((value, key: keyof IFeature) => {
    if (features[`${key}`]) {
      additionalCyclingActivities.push(value);
    }
  });

  return additionalCyclingActivities;
};

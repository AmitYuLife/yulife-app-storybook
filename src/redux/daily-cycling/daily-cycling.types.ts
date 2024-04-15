import { DistanceMeasurementType } from "@redux/_core/types";

export type DailyCyclingUpdateUserProfilePayload = {
  cyclingGameSettings: {
    cyclingMeasurement: DistanceMeasurementType;
  };
};

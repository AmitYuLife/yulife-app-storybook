import { HealthDataType } from "./health-data-type.enum";
import { HealthProviderCapability } from "./health-provider-capability.enum";

export const DATA_TYPE_CAPABILITY = {
  [HealthDataType.steps]: HealthProviderCapability.STEP_COUNT,
  [HealthDataType.calories]: HealthProviderCapability.CALORIES,
  [HealthDataType.cyclingDistance]: HealthProviderCapability.CYCLING_DISTANCE,
  [HealthDataType.mindfulMinutes]: HealthProviderCapability.MINDFUL_MINUTES,
  [HealthDataType.workoutMinutes]: HealthProviderCapability.WORKOUT_MINUTES,
  [HealthDataType.heartRate]: HealthProviderCapability.HEART_RATE,
  [HealthDataType.wheelchairPushes]: HealthProviderCapability.WHEELCHAIR_PUSHES,
};

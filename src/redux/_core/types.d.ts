export interface SyncAction<Payload = any> {
  // tslint:disable-line
  type: string;
  payload?: Payload;
  meta?: Record<string, any>;
}

export interface AsyncAction extends SyncAction {
  // tslint:disable-next-line
  promise?: Promise<any>;
}

export interface Milestones {
  target: MilestoneTarget | null;
}

export interface MilestoneTarget {
  steps?: number;
  meditation?: number;
  distance?: number;
  duration?: number;
  calories?: number;
}

export interface YuHealthOptions {
  dataType: YuHealthDataType;
}

export enum YuHealthDataType {
  Calories = "CALORIES",
  CyclingDistance = "CYCLING_DISTANCE",
  HeartRate = "HEART_RATE",
  MindfulMinutes = "MINDFUL_MINUTES",
  StepCount = "STEP_COUNT",
  WorkoutMinutes = "WORKOUT_MINUTES",
}

export enum FitKitType {
  ActiveEnergyBurned = "ActiveEnergyBurned",
  BikingHand = "BikingHand",
  BikingHandWorkout = "BikingHandWorkout",
  BikingMountain = "BikingMountain",
  BikingRoad = "BikingRoad",
  BikingSpinning = "BikingSpinning",
  BikingStationary = "BikingStationary",
  BikingUtility = "BikingUtility",
  BikingWorkout = "BikingWorkout",
  Cycling = "Cycling",
  Distance = "Distance",
  Flexibility = "Flexibility",
  GuidedBreathing = "GuidedBreathing",
  HIIT = "HIIT",
  HeartRate = "HeartRate",
  MindfulSession = "MindfulSession",
  Pilates = "Pilates",
  Sleep = "Sleep",
  StepCount = "StepCount",
  Strength = "Strength",
  Swimming = "Swimming",
  Workout = "Workout",
  Yoga = "Yoga",
}

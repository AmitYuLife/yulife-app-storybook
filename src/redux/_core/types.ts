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

export interface Milestone {
  coins: number | null;
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

export enum SduiActionType {
  GET_ALL_USER_DATA_START = "GET_ALL_USER_DATA_START",
  OPEN_MY_ACCOUNT = "OPEN_MY_ACCOUNT",
  REFRESH_TOTAL_COINS = "REFRESH_TOTAL_COINS",
  SDUI_ACTION_GENERIC_NAVIGATE_BACK = "SDUI_ACTION_GENERIC_NAVIGATE_BACK",
  SDUI_ACTION_GENERIC_NAVIGATE_BACK_TO_ROOT = "SDUI_ACTION_GENERIC_NAVIGATE_BACK_TO_ROOT",
  SDUI_ACTION_LOG_EVENT = "SDUI_ACTION_LOG_EVENT",
  SDUI_ACTION_NAVIGATE = "SDUI_ACTION_NAVIGATE",
  SDUI_ACTION_NAVIGATE_BACK = "SDUI_ACTION_NAVIGATE_BACK",
  SDUI_ACTION_OPEN_ALERT_DIALOG = "SDUI_ACTION_OPEN_ALERT_DIALOG",
  SDUI_ACTION_OPEN_MAGIC_LINK = "SDUI_ACTION_OPEN_MAGIC_LINK",
  SDUI_ACTION_OPEN_MODAL = "SDUI_ACTION_OPEN_MODAL",
  SDUI_ACTION_OPEN_SUPPORT_CHAT = "SDUI_ACTION_OPEN_SUPPORT_CHAT",
  SDUI_ACTION_OPEN_URL = "SDUI_ACTION_OPEN_URL",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH",
  SDUI_ACTION_SEND_MUTATION = "SDUI_ACTION_SEND_MUTATION",
  SDUI_ACTION_SET_BOTTOM_TAB = "SDUI_ACTION_SET_BOTTOM_TAB",
  SDUI_ACTION_SHOW_FLOATING_MODAL = "SDUI_ACTION_SHOW_FLOATING_MODAL",
  SDUI_ACTION_SHOW_OVERLAY_LIST_PICKER = "SDUI_ACTION_SHOW_OVERLAY_LIST_PICKER",
  SDUI_ACTION_UPDATE_DYNAMIC_STYLES = "SDUI_ACTION_UPDATE_DYNAMIC_STYLES",
}

export enum MobileTabs {
  dailySteps = "dailySteps",
  leaderboard = "leaderboard",
  quests = "quests",
  rewards = "rewards",
  yuScreen = "yuScreen",
}

export enum DistanceMeasurementType {
  km = "km",
  mi = "mi",
}

export interface ChallengeIncomingData {
  steps?: number;
  meditation?: number;
  distance?: number;
  duration?: number;
  calories?: number;
}

export interface Challenge {
  updatedAt: number | null;
  yuCoinAwarded: number | null;
  incomingData: ChallengeIncomingData | null;
}

export interface PassiveExchangeRate {
  yucoin: number | null;
  steps: number | null;
  meditation: number | null;
  surge: number | null;
}

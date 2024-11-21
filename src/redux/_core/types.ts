import { HealthDataType, HealthProviderCapability } from "@yu-life/react-native-yu-health";

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
  coins?: number | null;
  target?: MilestoneTarget | null;
}

export interface MilestoneTarget {
  steps?: number;
  meditation?: number;
  distance?: number;
  duration?: number;
  calories?: number;
}

export interface YuHealthOptions {
  dataType: HealthDataType;
  capabilities: HealthProviderCapability[];
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
  Hiit = "HIIT",
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
  GetAllUserDataStart = "GET_ALL_USER_DATA_START",
  OpenMyAccount = "OPEN_MY_ACCOUNT",
  RefreshTotalCoins = "REFRESH_TOTAL_COINS",
  SduiActionDismissOverlay = "SDUI_ACTION_DISMISS_OVERLAY",
  SduiActionGenericNavigateBack = "SDUI_ACTION_GENERIC_NAVIGATE_BACK",
  SduiActionGenericNavigateBackToRoot = "SDUI_ACTION_GENERIC_NAVIGATE_BACK_TO_ROOT",
  SduiActionLogEvent = "SDUI_ACTION_LOG_EVENT",
  SduiActionNavigate = "SDUI_ACTION_NAVIGATE",
  SduiActionNavigateBack = "SDUI_ACTION_NAVIGATE_BACK",
  SduiActionOpenAlertDialog = "SDUI_ACTION_OPEN_ALERT_DIALOG",
  SduiActionOpenMagicLink = "SDUI_ACTION_OPEN_MAGIC_LINK",
  SduiActionOpenModal = "SDUI_ACTION_OPEN_MODAL",
  SduiActionOpenSupportChat = "SDUI_ACTION_OPEN_SUPPORT_CHAT",
  SduiActionOpenUrl = "SDUI_ACTION_OPEN_URL",
  SduiActionProductUnderwritingStepFinish = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH",
  SduiActionProductUnderwritingStepPop = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP",
  SduiActionProductUnderwritingStepPush = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH",
  SduiActionSendMutation = "SDUI_ACTION_SEND_MUTATION",
  SduiActionSetBottomTab = "SDUI_ACTION_SET_BOTTOM_TAB",
  SduiActionShowFloatingModal = "SDUI_ACTION_SHOW_FLOATING_MODAL",
  SduiActionShowOverlayListPicker = "SDUI_ACTION_SHOW_OVERLAY_LIST_PICKER",
  SduiActionUpdateDynamicStyles = "SDUI_ACTION_UPDATE_DYNAMIC_STYLES",
  SduiActionSetLoadingState = "SDUI_ACTION_SET_LOADING_STATE",
  UpdateDynamicData = "UPDATE_DYNAMIC_DATA",
  QueryYuScreenSections = "QUERY_YU_SCREEN_SECTIONS",
}

export enum CoverType {
  Common = "common",
  Epic = "epic",
  Rare = "rare",
}

export enum MobileTabs {
  DailySteps = "dailySteps",
  Leaderboard = "leaderboard",
  Quests = "quests",
  Rewards = "rewards",
  YuScreen = "yuScreen",
}

export enum DistanceMeasurementType {
  Km = "km",
  Mi = "mi",
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

export interface Image {
  id: string;
  uri?: string | null;
}

export interface UserFeatures {
  name: string | null;
  value: boolean | null;
}

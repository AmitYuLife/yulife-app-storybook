import { SduiActionType, UserFeatures } from "@redux/_core/types";
import { features as userFeatures } from "./features.data";
import {
  IDailyStepsGetUserSuccessPayload,
  IDailyStepsUpdateUserProfilePayload,
} from "@redux/daily-steps/daily-steps.types";

import { IOnboardingGetUserSuccessPayload } from "@redux/onboarding/onboarding.types";
import { DailyCyclingUpdateUserProfilePayload } from "@redux/daily-cycling/daily-cycling.types";
import { HeroCard } from "@utils/heroCards";
import { IRewardsTabStore } from "@redux/rewards-tab/rewards-tab.types";
import { UserSupportLevel } from "@services/logging/types";

export interface IUserStore {
  sessionCount: number;
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  archived: boolean;
  connections: UserConnection[];
  features: IFeature;
  earnRate: number;
  blackListedNavBarTabs: string[];
  enabledHealthProviders: HealthProvider[];
  surge: UserSurge;
  avatar: {
    isAvatarCreated?: boolean;
    avatarRemoteFiles?: {
      svgFull?: string;
      pngFull?: string;
      pngMini?: string;
    };
  };
  passiveChallengesLastUpdate: {
    sessionId?: string;
    cycling?: string;
    meditation?: string;
    steps?: string;
  };
  passiveHourlyActivityLastUpdate: {
    steps?: string;
    stepsQueryTimeRange?: string;
  };
  endPointsVersion: {
    getMobileCopy?: string;
    getMobileAssets: string;
  };
  notification: {
    hasMobileWhatsNewModal: boolean;
    hasDuels: boolean;
    hasPendingForm: boolean;
    hasAppReview: boolean;
  };
  heroCards: HeroCard[];
  sessionTimestamp: number;
  supportConfig: {
    supportLevel: UserSupportLevel | null;
  };
  dataSaverModeEnabled: boolean;
}

// Renaming can break older clients, AppDataType is used on server side SDUI actions SduiActionType.GetAllUserDataStart
export enum AppDataType {
  coinLedger = "coinLedger",
  todayActivity = "todayActivity",
  passiveChallengesEarnRate = "passiveChallengesEarnRate",
  activeStreak = "activeStreak",
  activeChallenge = "activeChallenge",
  dailyPension = "dailyPension",
  hints = "hints",
  socialGroups = "socialGroups",
  features = "features",
  connections = "connections",
  dailyChallengeAmountAvailable = "dailyChallengeAmountAvailable",
  inventoryInfo = "inventoryInfo",
  challengesDoneToday = "challengesDoneToday",
  todayScreen = "todayScreen",
  currentUser = "currentUser",
}

export type UserConnection = Connections & { isLoading?: boolean };

type FeatureKey = (typeof userFeatures)[number];

export type IFeature = Partial<Record<FeatureKey, boolean>>;

export interface IAppDataTypePayload {
  types: AppDataType[];
  overrideQueryName?: string;
  refreshLoggerIdentity?: boolean;
}

export interface Connections {
  name?: string;
  isConnected?: boolean;
  lastUpdated?: number;
}

export interface UserSurge {
  endDateTime: string;
  multiplier: string;
  title: string;
  description: string;
  lottie: ContentItemLottie | null;
}

export type ContentItemLottie = {
  animationEndCallbackDelay?: number;
  aspectRatio?: number;
  autoPlay: boolean;
  id: string;
  keyShouldPlay?: string;
  loop: boolean;
  onAnimationEnd?: SduiAction;
  onAnimationEndLocal?: SduiAction;
  styles?: SduiStyle[];
  uri: string;
};

export interface SduiStyle {
  property: string;
  value: string;
}

export interface SduiAction {
  type: SduiActionType;
  payload?: string;
}

export interface Icon {
  uri?: string;
}

export type IUserGetUserSuccessPayload = {
  user: Pick<IUserStore, "id" | "firstName" | "lastName" | "fullName"> & {
    userFeatures: UserFeatures[];
    supportConfig: {
      supportLevel: UserSupportLevel;
    };
  };
};

export type IGetUserSuccessPayload = IUserGetUserSuccessPayload &
  IDailyStepsGetUserSuccessPayload &
  IOnboardingGetUserSuccessPayload;

export type IPassiveChallengesEarnRateSuccessPayload = IDailyStepsGetUserSuccessPayload;

export enum HealthProvider {
  GoogleFit = "googleFit",
  HealthConnect = "healthConnect",
  HealthKit = "healthKit",
  SamsungHealth = "samsungHealth",
}

export type IUpdateUserProfilePayload = Partial<IUserStore> &
  IDailyStepsUpdateUserProfilePayload &
  DailyCyclingUpdateUserProfilePayload & {
    rewards: IRewardsTabStore["settings"];
  } & { debugToolsEnabled: boolean; debugQueriesToolEnabled: boolean; enabledHealthProviders: HealthProvider[] };

export type ILoginUserPayload = { intercomHash: string } & IGetUserSuccessPayload;

export type UpdateUserAvatarRemoteFilesPayload = IUserStore["avatar"]["avatarRemoteFiles"];

export type UpdateUserConsentPayload = {
  companyLeaderboard?: boolean;
  marketing?: boolean;
  mobileHealth?: boolean;
  pushNotifications?: boolean;
  workspaceLeaderboard?: boolean;
};

export type GetUserFeaturesPayload = { features: UserFeatures[] };

export type GetUserConnectionsPayload = { connections: UserConnection[] };

export type IOpenMyAccount = { serverPayload?: string; redirectUrl?: string };

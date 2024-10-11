import { MobileTabs, SduiActionType, UserFeatures } from "@redux/_core/types";
import { features as userFeatures } from "./features.data";
import {
  IDailyStepsGetUserSuccessPayload,
  IDailyStepsUpdateUserProfilePayload,
} from "@redux/daily-steps/daily-steps.types";
import { IDailyMeditationGetCurrentUserPayload } from "@redux/daily-meditation/daily-meditation.types";
import { ILevelGetUserSuccessDataPayload } from "@redux/levels/levels.types";
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
  surgeIntro: {
    visibility: boolean;
    activity: SurgeActivity;
    rate: number;
  };
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
    cycling?: string;
    meditation?: string;
    steps?: string;
  };
  passiveHourlyActivityLastUpdate: {
    steps?: string;
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
    hasAdBanners: boolean;
  };
  events: Partial<Events>[];
  heroCards: Partial<HeroCard>[];
  tabNotifications: MobileTabs[];
  sessionTimestamp: number;
  supportConfig: {
    supportLevel: UserSupportLevel;
  };
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
}

export type UserConnection = Connections & { isLoading?: boolean };

type FeatureKey = typeof userFeatures[number];

export type IFeature = Partial<Record<FeatureKey, boolean>>;

export type SurgeActivity = "steps" | "meditation" | "all" | null;

export interface IAppDataTypePayload {
  types: AppDataType[];
  overrideQueryName?: string;
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
  lottie: ContentItemLottie;
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

export interface Events {
  id: string;
  /**
   * @deprecated
   */
  stageId: string;
  participationId: string;
  title: string;
  description: string;
  image: Icon;
  startDate: string;
  endDate: string;
  status: UserProfileEventStatus;
  challenges: EventsChallenges[];
  tags: EventsTags;
  joined: boolean;
  badge: EventsBadge;
  progressBar: EventsProgressBar;
  milestones: EventsMilestones[];
  onPress: SduiAction;
  type: EventType;
}

export enum EventType {
  Goal = "goal",
  Journey = "journey",
}

export enum UserProfileEventStatus {
  Active = "active",
  Completed = "completed",
}

export interface Icon {
  uri?: string;
}

export interface EventsChallenges {
  description: string;
  icon: Icon;
}

export interface EventsTags {
  tag: string;
  joined?: string;
  icon: Icon;
}

export interface EventsBadge {
  id?: string;
  text: string;
  icon: Icon;
  backgroundColor?: string;
}

export interface EventsProgressBar {
  max: number;
  current: number;
}

export interface EventsMilestones {
  targetValue: number;
  image?: Icon;
  animated?: boolean;
  rewardId?: string;
  rewardClaimed?: boolean;
  isClaimable?: boolean;
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
  IDailyMeditationGetCurrentUserPayload &
  ILevelGetUserSuccessDataPayload &
  IOnboardingGetUserSuccessPayload;

export type IPassiveChallengesEarnRateSuccessPayload = IDailyStepsGetUserSuccessPayload &
  IDailyMeditationGetCurrentUserPayload;

export type IUpdateUserProfilePayload = Partial<IUserStore> &
  IDailyStepsUpdateUserProfilePayload &
  DailyCyclingUpdateUserProfilePayload & {
    rewards: IRewardsTabStore["settings"];
  };

export type ILoginUserPayload = { intercomHash: string } & IGetUserSuccessPayload;

export type MarkNotificationsAsViewedByTypePayload = { type: MobileTabs };

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

import { MobileTabs, SduiActionType, UserFeatures } from "@redux/_core/types";
import { features as userFeatures } from "./features.data";
import {
  IDailyStepsGetUserSuccessPayload,
  IDailyStepsUpdateUserProfilePayload,
} from "@redux/daily-steps/daily-steps.types";
import { IDailyMeditationGetCurrentUserPayload } from "@redux/daily-meditation/daily-meditation.types";
import { ICoinsTodayEarned } from "@redux/coins/coins.types";
import { ILevelGetUserSuccessDataPayload } from "@redux/levels/levels.types";
import { IOnboardingGetUserSuccessPayload } from "@redux/onboarding/onboarding.types";
import { IStreaksGetUserSuccessPayload } from "@redux/streaks/streaks.types";
import { IUserStore } from "./user.reducer";
import { DailyCyclingUpdateUserProfilePayload } from "@redux/daily-cycling/daily-cycling.types";

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
}

export type UserConnection = Connections & { isLoading?: boolean };

type FeatureKey = typeof userFeatures[number];

export type IFeature = Record<FeatureKey, boolean>;

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
  user: Pick<IUserStore, "id" | "firstName" | "lastName" | "fullName" | "dateOfBirth" | "connections"> & {
    userFeatures: UserFeatures[];
  };
};

export type IGetUserSuccessPayload = IUserGetUserSuccessPayload &
  IDailyStepsGetUserSuccessPayload &
  IDailyMeditationGetCurrentUserPayload &
  ICoinsTodayEarned &
  ILevelGetUserSuccessDataPayload &
  IOnboardingGetUserSuccessPayload &
  IStreaksGetUserSuccessPayload;

export type IPassiveChallengesEarnRateSuccessPayload = IDailyStepsGetUserSuccessPayload &
  IDailyMeditationGetCurrentUserPayload;

export type IUpdateUserProfilePayload = Partial<IUserStore> &
  IDailyStepsUpdateUserProfilePayload &
  DailyCyclingUpdateUserProfilePayload;

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

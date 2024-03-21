import { FitKitType, Milestone, YuHealthOptions } from "@redux/_core/types";

export interface ILevelsStore {
  active: IActiveLevel;
  challengesDoneToday: number;
  dailyChallengeAmountAvailable: number;
  level: number;
  yuniversalMap: number;
  yuniversalLevel: number;
  nextLevelAvailableAt: string;
  currentPlanet: string;
}

export enum ChallengeSourceType {
  phone = "phone",
  watch = "watch",
}

export interface IActiveLevel {
  chest: Chest;
  yuniversalChest: YuniversalChest | null;
  coins: number;
  endDateTime: string;
  initialPedometerResult: number;
  isCompleted: boolean;
  isLoading: boolean;
  level: number;
  levelSlotId: string;
  fitKitTypes: FitKitType[];
  createdBySource: ChallengeSourceType;
  shouldEndOnLastGoalAchieved: boolean;
  milestones: Milestone[];
  yuHealth?: YuHealthOptions;
  milestonesLog: any;
  rating: number;
  score: number;
  startDateTime: string;
  status: ActiveLevelStatus;
  challengeIsActive: boolean;
  subtype: ChallengeType | string; // this should not have `string` as a type but it's needed to supress type errors for now
  unit: "steps" | "minutes" | "meters" | string; // this should not have `string` as a type but it's needed to supress type errors for now
  videoPlayerIsActive: boolean;
  hideExternalLinks: boolean;
  endDeferCount?: number;
  appButton: {
    title: string;
    color?: string;
    tutorialUrl?: string;
    logo?: {
      uri?: string;
      id?: string;
    };
    width?: number;
    height?: number;
    options?: {
      iosUrl?: string;
      androidUrl?: string;
      appName?: string;
      appStoreId?: string;
      appStoreLocale?: string;
      playStoreId?: string;
      faqUrl?: string;
    };
  };
  levelState: ActiveLevelState;
}

export interface Chest {
  type?: string;
  value?: number;
}

export interface YuniversalChest {
  chestType: RewardsChestType;
  title: string;
}

export interface ITodayChallengesStatus {
  available: number;
  done: number;
  hasDone: boolean;
  isAvailable: boolean;
  availableForToday: number;
}

export type ChallengeType =
  | "meditation"
  | "long walk"
  | "brisk walk"
  | "cycling"
  | "short stroll"
  | "day walk"
  | "fiit"
  | "sudoku";

export enum ActiveLevelStatus {
  success = "success",
  failed = "failed",
}

export enum ActiveLevelState {
  STARTING_CHALLENGE = "starting_challenge",
  START_CHALLENGE_SUCCEED = "start_challenge_succeed",
  START_CHALLENGE_FAILED = "start_challenge_failed",
  CHALLENGE_ACTIVE = "challenge_active",
}

export enum RewardsChestType {
  Celestial = "CELESTIAL",
  Desert = "DESERT",
  Forest = "FOREST",
  Mountain = "MOUNTAIN",
  Ocean = "OCEAN",
}

// Actions payload
export type GetActiveChallengeSuccessDataPayload = Pick<
  IActiveLevel,
  | "shouldEndOnLastGoalAchieved"
  | "fitKitTypes"
  | "yuHealth"
  | "endDateTime"
  | "levelSlotId"
  | "createdBySource"
  | "milestones"
  | "rating"
  | "startDateTime"
  | "subtype"
  | "unit"
  | "challengeIsActive"
>;

export type ILevelGetUserSuccessDataPayload = {
  levels: {
    activeChallenge: GetActiveChallengeSuccessDataPayload;
    challengesDoneToday: number;
    dailyChallengeAmountAvailable: number;
  };
};

export type ChallengeUpdateSuccessPayload = { incomingData: ChallengeIncomingData } & Pick<
  IActiveLevel,
  "coins" | "isCompleted" | "milestonesLog" | "rating"
>;

export type ChallengeEndSuccessPayload = { incomingData: ChallengeIncomingData } & Pick<
  IActiveLevel,
  "coins" | "level" | "milestonesLog" | "rating"
>;

export type UpdateChallengeAppButtonPayload = Pick<IActiveLevel, "appButton">;

export type ChallengeStartActionPayload = {
  levelSlotId: string;
  challengeStartSuccessPayload?: Record<string, string | boolean | number>;
  createQuestMapLevelChallengeVariables: {
    levelSlotId: string;
    contentId?: string | null;
  };
};

export type ChallengeStartPayload = {
  createQuestMapLevelChallenge: {
    hideExternalLinks?: boolean | null;
    challenge?: {
      startDateTime?: string;
      endDateTime?: string;
      level?: number | null;
      levelSlotId?: string | null;
    };
    levelSlot?: {
      subtype?: string;
      fitKitTypes?: FitKitType[];
      yuHealth?: YuHealthOptions;
      shouldEndOnLastGoalAchieved?: boolean;
      unit?: string;
      milestones?: Milestone[];
    };
    chest?: Chest | null;
    yuniversalChest?: YuniversalChest | null;
  };
  levelSlotId: string;
  videoPlayerIsActive?: boolean;
  videoDuration?: number;
};

export type FinishInAppMediaChallengeActionPayload = {
  video: {
    id: string;
    duration?: number;
  };
  eventType: string;
};

export interface ChallengeIncomingData {
  steps?: number;
  meditation?: number;
  distance?: number;
  duration?: number;
  calories?: number;
}

export type ILevelsStoreGetCoinLedger = Pick<
  ILevelsStore,
  "level" | "yuniversalMap" | "yuniversalLevel" | "nextLevelAvailableAt"
>;

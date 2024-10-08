import { FitKitType, Milestone, YuHealthOptions } from "@redux/_core/types";

export interface ILevelsStore {
  active: IActiveLevel;
  challengeFinishedResult: ChallengeFinishedResult;
  challengesDoneToday: number;
  dailyChallengeAmountAvailable: number;
  level: number;
  yuniversalMap: number;
  yuniversalLevel: number;
  nextLevelAvailableAt: string;
  currentPlanet: string;
}

interface ChallengeFinishedResult {
  unit: IActiveLevel["unit"];
  level: IActiveLevel["level"];
  score: IActiveLevel["score"];
  coins: IActiveLevel["coins"];
  rating: IActiveLevel["rating"];
  status: IActiveLevel["status"];
}

type ChallengeUnit = "steps" | "minutes" | "meters" | string; // this should not have `string` as a type but it's needed to supress type errors for now

export enum ChallengeSourceType {
  Phone = "phone",
  Watch = "watch",
}

export enum ChallengeSubmissionStatus {
  Success = "success",
  Loading = "loading",
  Error = "error",
}

export interface IActiveLevel {
  id: string | null;
  chest: Chest;
  levelSlotTemplateId: string;
  yuniversalChest: YuniversalChest | null;
  coins: number;
  endDateTime: string;
  initialPedometerResult: number;
  isCompleted: boolean;
  isLoading: boolean;
  level: number;
  yuniversalMap?: number | null;
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
  unit: ChallengeUnit;
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
  createChallengeError?: string;
  challengeSubmissionStatus: ChallengeSubmissionStatus;
  submissionErrorCount?: number;
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
  | "levelSlotTemplateId"
  | "id"
  | "level"
  | "yuniversalMap"
>;

export type ILevelGetUserSuccessDataPayload = {
  levels: {
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
  createMobileQuestLevelChallengeVariables: {
    levelSlotTemplateId: string;
    level: number;
    yuniversalMap?: number | null;
    contentId?: string | null;
  };
};

export type ChallengeStartPayload = {
  createQuestMapLevelChallenge: {
    hideExternalLinks?: boolean | null;
    challenge?: {
      id?: string | null;
      startDateTime?: string;
      endDateTime?: string;
      level?: number | null;
      yuniversalMap?: number | null;
      levelSlotId?: string | null;
      levelSlotTemplateId?: string | null;
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

export type GetDailyChallengeAmountAvailablePayload = { dailyChallengeAmountAvailable: number };

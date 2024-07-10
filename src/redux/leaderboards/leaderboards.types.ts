import { Image } from "@redux/_core/types";

export interface ILeaderboardsStore {
  socialGroups: ISocialGroup[];
  activeSocialGroupId: string;
  activeLeaderboardId: string;
  recentSearch: SearchLeaderboardUser[];
}

export enum SocialGroupLeaderboardConfigId {
  Dailysudoku = "dailysudoku",
  Steps30days = "steps30days",
  CalendarMonthlyTreesGoalImpact = "calendarMonthlyTreesGoalImpact",
  CalendarMonthlyWaterGoalImpact = "calendarMonthlyWaterGoalImpact",
  CalendarMonthlyPlasticRemovedGoalImpact = "calendarMonthlyPlasticRemovedGoalImpact",
  CalendarMonthlyMealsGoalImpact = "calendarMonthlyMealsGoalImpact",
}

export interface SearchLeaderboardUser {
  id: string;
  name: string;
  avatar: Image;
}

export interface ISocialGroupLeaderboard {
  leaderboardId: string;
  name: string;
  description: string;
  shortDescription: string;
  consent: boolean;
  isLocked: boolean;
  leaderboardConfigId: SocialGroupLeaderboardConfigId;
  icon: Image;
  selectedIcon: Image;
}

export interface ISocialGroup {
  socialGroupId: string;
  name: string;
  leaderboards: ISocialGroupLeaderboard[];
}

export interface IAvatarFrame {
  lottieUri?: string | null;
  image?: { uri?: string | null } | null;
}

export type IGetSocialGroupsSuccessPayload = { socialGroups: ISocialGroup[] };
export type IAddLeaderboardRecentSearch = { item: SearchLeaderboardUser };

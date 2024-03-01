import { Image } from "@redux/_core/types";

export enum SocialGroupLeaderboardConfigId {
  dailysudoku = "dailysudoku",
  steps30days = "steps30days",
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

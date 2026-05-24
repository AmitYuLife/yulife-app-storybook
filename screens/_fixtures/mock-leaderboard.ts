import { ISocialGroupLeaderboardListItem } from "@screens/member/leaderboard/leaderboard-list-item";
import { ISocialGroup, ISocialGroupLeaderboard } from "@redux/leaderboards/leaderboards.types";
import { SocialGroupLeaderboardConfigId } from "@graphql/__generated";
import { STORY_LEADERBOARD_STEPS_ICON, STORY_LEADERBOARD_SUDOKU_ICON, STORY_YUMOJI_PNG_MINI } from "./story-assets";

const NAMES = [
  "Alex Jones",
  "Sam Patel",
  "Jordan Smith",
  "Taylor Brown",
  "Morgan Lee",
  "Casey Kim",
  "Riley Davis",
  "Quinn Wilson",
  "Avery Martinez",
  "Drew Thompson",
  "Blake Anderson",
  "Cameron White",
  "Dakota Harris",
  "Elliott Clark",
  "Finley Lewis",
];

export const buildLeaderboardItems = (count = 15, currentUserId = "user-8"): ISocialGroupLeaderboardListItem[] =>
  NAMES.slice(0, count).map((name, index) => ({
    id: `lb-item-${index + 1}`,
    userId: index === 7 ? currentUserId : `user-${index + 1}`,
    score: String(10_000 - index * 580),
    name,
    position: index + 1,
    isTarget: index === 7,
    avatar: {
      id: `avatar-${index + 1}`,
      uri: STORY_YUMOJI_PNG_MINI,
    },
  }));

export const MOCK_CURRENT_USER: ISocialGroupLeaderboardListItem = {
  id: "lb-item-8",
  userId: "user-8",
  score: "5,640",
  name: "Alex Jones",
  position: 8,
  isTarget: true,
  avatar: { id: "avatar-8", uri: STORY_YUMOJI_PNG_MINI },
};

export const STEPS_LEADERBOARD: ISocialGroupLeaderboard = {
  leaderboardId: "lb-steps-001",
  name: "Monthly Steps",
  description: "Top steppers in your organisation this month.",
  shortDescription: "Monthly Steps",
  consent: true,
  isLocked: false,
  leaderboardConfigId: SocialGroupLeaderboardConfigId.Steps30days,
  icon: { id: "icon-steps", uri: STORY_LEADERBOARD_STEPS_ICON },
  selectedIcon: { id: "icon-steps-selected", uri: STORY_LEADERBOARD_STEPS_ICON },
};

export const SUDOKU_LEADERBOARD: ISocialGroupLeaderboard = {
  leaderboardId: "lb-sudoku-001",
  name: "Sudoku",
  description: "Daily sudoku leaderboard — fastest solves this week.",
  shortDescription: "Sudoku",
  consent: true,
  isLocked: false,
  leaderboardConfigId: SocialGroupLeaderboardConfigId.Dailysudoku,
  icon: { id: "icon-sudoku", uri: STORY_LEADERBOARD_SUDOKU_ICON },
  selectedIcon: { id: "icon-sudoku-selected", uri: STORY_LEADERBOARD_SUDOKU_ICON },
};

export const MOCK_SOCIAL_GROUP: ISocialGroup = {
  socialGroupId: "group-acme-001",
  name: "Acme Corp",
  leaderboards: [STEPS_LEADERBOARD, SUDOKU_LEADERBOARD],
};

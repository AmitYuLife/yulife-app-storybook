import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as social_group from "./social_groups";

export const SOCIAL_GROUP_LEADERBOARD_1 = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_1.data._id,
    archived: false,
    leaderboardConfigId: "SUDOKU_DAILY",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_C1_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_C1.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_TREES_IMPACT = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_C1.data._id,
    archived: false,
    leaderboardConfigId: "CALENDAR_MONTHLY_TREES_GOAL_IMPACT",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_WATER_IMPACT = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_C1.data._id,
    archived: false,
    leaderboardConfigId: "CALENDAR_MONTHLY_WATER_GOAL_IMPACT",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_MEALS_IMPACT = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_C1.data._id,
    archived: false,
    leaderboardConfigId: "CALENDAR_MONTHLY_MEALS_GOAL_IMPACT",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_OCEAN_IMPACT = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_C1.data._id,
    archived: false,
    leaderboardConfigId: "CALENDAR_MONTHLY_OCEAN_GOAL_IMPACT",
  },
} as IDatabaseItem;

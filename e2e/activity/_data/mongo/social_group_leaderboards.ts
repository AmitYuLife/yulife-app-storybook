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

export const SOCIAL_GROUP_LEADERBOARD_2_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_2.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
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

export const SOCIAL_GROUP_LEADERBOARD_C2_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_C2.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_U1_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_U1.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_C1_SUDOKU = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_C1.data._id,
    archived: false,
    leaderboardConfigId: "SUDOKU_DAILY",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_C3_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_3.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_C3_SUDOKU = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_3.data._id,
    archived: false,
    leaderboardConfigId: "SUDOKU_DAILY",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_C4_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_4.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_BA3_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_BA3.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_5_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_BA5.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_5_SUDOKU = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_BA5.data._id,
    archived: false,
    leaderboardConfigId: "SUDOKU_DAILY",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_5_RULE_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_BA5_RULE.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_5_RULE_SUDOKU = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_BA5_RULE.data._id,
    archived: false,
    leaderboardConfigId: "SUDOKU_DAILY",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_5_TAG_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_BA5_TAG.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_5_TAG_SUDOKU = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_BA5_TAG.data._id,
    archived: false,
    leaderboardConfigId: "SUDOKU_DAILY",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_ACTIVE_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_ACTIVE.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_LOCKED_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_LOCKED.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_CONSENT_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_CONSENT.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_ARCHIVED_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_ARCHIVED.data._id,
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

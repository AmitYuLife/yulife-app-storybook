import {
  generateRandomMongoId,
  generateRandomPostgresId,
  IDatabaseItem,
} from "@yu-life/yulife-bdd-framework";
import {
  SOCIAL_GROUP_LEADERBOARD_5_STEPS,
  SOCIAL_GROUP_LEADERBOARD_C1_STEPS,
  SOCIAL_GROUP_LEADERBOARD_U1_STEPS,
} from "./social_group_leaderboards";

export const SOCIAL_GROUP_LEADERBOARD_SCORES_1 = {
  type: "mongo",
  modelName: "social_group_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    date: null,
    socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    participants: 8,
    value: 23852.995839820942,
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_SCORES_2 = {
  type: "mongo",
  modelName: "social_group_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    date: null,
    socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_5_STEPS.data._id,
    participants: 2,
    value: 107001.04324313582,
  },
} as IDatabaseItem;

export const SOCIAL_GROUP_LEADERBOARD_SCORES_3 = {
  type: "mongo",
  modelName: "social_group_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    date: null,
    socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_U1_STEPS.data._id,
    participants: 4,
    value: 5002,
  },
} as IDatabaseItem;

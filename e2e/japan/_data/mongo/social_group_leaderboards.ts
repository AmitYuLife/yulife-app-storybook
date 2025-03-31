import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as social_group from "./social_groups";

export const SOCIAL_GROUP_LEADERBOARD_1_STEPS = {
  type: "mongo",
  modelName: "social_group_leaderboards",
  data: {
    _id: generateRandomMongoId(),
    socialGroup: social_group.SOCIAL_GROUP_1.data._id,
    archived: false,
    leaderboardConfigId: "STEPS_30_DAYS",
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

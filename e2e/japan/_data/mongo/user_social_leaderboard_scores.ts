import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import {
  SOCIAL_GROUP_LEADERBOARD_1_STEPS,
  SOCIAL_GROUP_LEADERBOARD_2_STEPS,
} from "./social_group_leaderboards";
import { USER_1, USER_2 } from "./users";

export const USER_18_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_1.data.userId,
    value: 800,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_1_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id,
    ],
  },
};

export const USER_16_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_2.data.userId,
    value: 60,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_1_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id,
    ],
  },
};

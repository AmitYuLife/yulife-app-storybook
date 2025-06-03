import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { SOCIAL_GROUP_LEADERBOARD_1_STEPS } from "./social_group_leaderboards";

export const USER_BARRY_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: customer.CUSTOMER_USA_4.customer.data.customerId,
    value: 1000,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_1_STEPS.data._id],
  },
};

export const USER_BARRY_AXEL_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: customer.CUSTOMER_USA_3.customer.data.customerId,
    value: 4200,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_1_STEPS.data._id],
  },
};

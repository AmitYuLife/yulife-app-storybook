import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { SOCIAL_GROUP_LEADERBOARD_1_STEPS } from "./social_group_leaderboards";

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_1_STEPS = {
  type: "mongo",
  modelName: "user_social_leaderboard_enrolments",
  data: {
    _id: generateRandomMongoId(),
    consent: true,
    archived: false,
    isLocked: false,
    userId: customer.CUSTOMER_1.data.customerId,
    socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1_STEPS.data._id,
  },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_2_STEPS = {
  type: "mongo",
  modelName: "user_social_leaderboard_enrolments",
  data: {
    _id: generateRandomMongoId(),
    consent: true,
    archived: false,
    isLocked: false,
    userId: customer.CUSTOMER_2_SMOKING.data.customerId,
    socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1_STEPS.data._id,
  },
} as IDatabaseItem;

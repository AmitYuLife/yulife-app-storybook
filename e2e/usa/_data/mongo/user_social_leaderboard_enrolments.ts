import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { SOCIAL_GROUP_LEADERBOARD_1_STEPS } from "./social_group_leaderboards";

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_BARRY_STEPS = {
  type: "mongo",
  modelName: "user_social_leaderboard_enrolments",
  data: {
    _id: generateRandomMongoId(),
    consent: true,
    archived: false,
    isLocked: false,
    userId: customer.CUSTOMER_USA_4.customer.data.customerId,
    socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1_STEPS.data._id,
  },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_AXEL_STEPS = {
  type: "mongo",
  modelName: "user_social_leaderboard_enrolments",
  data: {
    _id: generateRandomMongoId(),
    consent: true,
    archived: false,
    isLocked: false,
    userId: customer.CUSTOMER_USA_3.customer.data.customerId,
    socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1_STEPS.data._id,
  },
} as IDatabaseItem;

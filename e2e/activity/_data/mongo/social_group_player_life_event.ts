import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as business from "../postgres/business";
import * as customer from "../postgres/customers";
import { SOCIAL_GROUP_LEADERBOARD_C1_STEPS } from "./social_group_leaderboards";
import moment from "moment";

export const SGPLE_17 = {
  type: "mongo",
  modelName: "social_group_player_life_event",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_17.data.customerId,
    consentedLeaderboardIds: [SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id],
    dateOfBirthDay: parseInt(moment().format("D")),
    dateOfBirthMonth: parseInt(moment().subtract(4, "months").format("M")),
    isDiscoverableInLeaderboards: false,
  },
} as IDatabaseItem;

export const SGPLE_18 = {
  type: "mongo",
  modelName: "social_group_player_life_event",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_18.data.customerId,
    consentedLeaderboardIds: [SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id],
    dateOfBirthDay: parseInt(moment().format("D")),
    dateOfBirthMonth: parseInt(moment().format("M")),
    isDiscoverableInLeaderboards: true,
  },
} as IDatabaseItem;

export const SGPLE_47 = {
  type: "mongo",
  modelName: "social_group_player_life_event",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_47.data.customerId,
    consentedLeaderboardIds: [SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id],
    dateOfBirthDay: parseInt(moment().format("D")),
    dateOfBirthMonth: parseInt(moment().subtract(2, "months").format("M")),
    isDiscoverableInLeaderboards: true,
  },
} as IDatabaseItem;


import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_7 } from "../postgres/business";
import { LEADERBOARD_1, LEADERBOARD_2 } from "./leaderboard";

export const SOCIAL_GROUP_1 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: BUSINESS_ACCOUNT_1.data.business_account_id,
        archived: false,
        socialGroupType: "business_tag",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_2 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: BUSINESS_ACCOUNT_2.data.business_account_id,
        archived: false,
        socialGroupType: "business_tag",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_7 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: BUSINESS_ACCOUNT_7.data.business_account_id,
        archived: false,
        socialGroupType: "business_tag",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_C1 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: LEADERBOARD_1.data.leaderboardId,
        archived: false,
        socialGroupType: "custom",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_C2 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: LEADERBOARD_2.data.leaderboardId,
        archived: false,
        socialGroupType: "custom",
    }
} as IDatabaseItem

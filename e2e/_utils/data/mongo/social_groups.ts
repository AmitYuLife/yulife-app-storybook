
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_7 } from "../postgres/business";

export const SOCIAL_GROUP_1 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: BUSINESS_ACCOUNT_1.data.business_account_id,
        archived: false,
        socialGroupType: "business_tag",
        name: "SG1"
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
        name: "SG2"
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
        name: "SG7"
    }
} as IDatabaseItem

export const SOCIAL_GROUP_7_A = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: BUSINESS_ACCOUNT_7.data.leaderboardId,
        archived: false,
        socialGroupType: "custom",
        name: "LB4"
    }
} as IDatabaseItem

export const SOCIAL_GROUP_C1 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "LB1"
    }
} as IDatabaseItem

export const SOCIAL_GROUP_C2 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "LB2"
    }
} as IDatabaseItem

export const SOCIAL_GROUP_3 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "LB3"
    }
} as IDatabaseItem

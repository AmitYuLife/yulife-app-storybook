import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as business from "../postgres/business";

export const SOCIAL_GROUP_1 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: business.BUSINESS_ACCOUNT_1.data.business_account_id,
        archived: false,
        socialGroupType: "business_tag",
        name: "SG1",
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_2 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: business.BUSINESS_ACCOUNT_2.data.business_account_id,
        archived: false,
        socialGroupType: "business_tag",
        name: "SG2",
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_C1 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "LB1",
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_C2 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "LB2",
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_3 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "LB3",
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_4 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "LB4",
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_BA3 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "business",
        name: "SG3CONCURRENT",
        businessAccountId: business.BUSINESS_ACCOUNT_3.data.business_account_id,
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_BA5 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "business",
        name: "SG5",
        businessAccountId: business.BUSINESS_ACCOUNT_5.data.business_account_id,
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_BA5_RULE = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "rule",
        name: "SG5RULE",
        businessAccountId: business.BUSINESS_ACCOUNT_5.data.business_account_id,
        query: {
            department: {
                contains: ["Finance"],
            },
        },
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_BA5_TAG = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "business_tag",
        name: "SG5TAG",
        businessAccountId: business.BUSINESS_ACCOUNT_5.data.business_account_id,
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_ACTIVE = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "active",
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_LOCKED = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "locked",
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_CONSENT = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "consent",
    },
} as IDatabaseItem;

export const SOCIAL_GROUP_ARCHIVED = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "custom",
        name: "archived",
    },
} as IDatabaseItem;
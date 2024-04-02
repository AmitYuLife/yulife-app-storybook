
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_5 } from "../postgres/business";

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

export const SOCIAL_GROUP_BA5 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "business",
        name: "SG5",
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    }
} as IDatabaseItem


export const SOCIAL_GROUP_BA5_RULE = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "rule",
        name: "SG5RULE",
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
        query: {
            department: {
                contains: [
                    "Finance"
                ]
            }
        }
    }
} as IDatabaseItem

export const SOCIAL_GROUP_BA5_TAG = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "business_tag",
        name: "SG5TAG",
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    }
} as IDatabaseItem

import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as business from "../postgres/business";

export const SOCIAL_GROUP_1 = {
    type: "mongo",
    modelName: "social_groups",
    data: {
        _id: generateRandomMongoId(),
        socialGroupId: generateRandomMongoId(),
        archived: false,
        socialGroupType: "business",
        name: "SG1",
        businessAccountId: business.BUSINESS_THE_BEAR.data.business_account_id,
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

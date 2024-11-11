import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_6 } from "../postgres/business";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "core_settings",
};

export const BUSINESS_6_INTERCOM_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "analytics.intercom",
        entityId: BUSINESS_ACCOUNT_6.data.business_account_id,
        entityType: "business",
        settings: {
            userSupportLevel: "basic",
        },
    },
} as IDatabaseItem;

export const BUSINESS_4_REFERRALS_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "account.referrals",
        entityType: "business",
        entityId: BUSINESS_ACCOUNT_4.data.business_account_id,
        settings: {
            rewardForSenderOnAccountSignup: 2000,
        },
    },
} as IDatabaseItem;

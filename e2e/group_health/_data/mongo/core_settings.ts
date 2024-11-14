import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_14_GIP_REWARDS } from "../postgres/business";

export const CORE_SETTINGS_BUSINESS_14 = {
    type: "mongo",
    modelName: "core_settings",
    data: {
        _id: generateRandomMongoId(),
        entityType: "business",
        domain: "partnerships.rewards",
        entityId: BUSINESS_ACCOUNT_14_GIP_REWARDS.data.business_account_id,
        settings: {
            storeEnabled: false,
        },
    },
} as IDatabaseItem;

export const CORE_SETTINGS_BUSINESS_14_2 = {
    type: "mongo",
    modelName: "core_settings",
    data: {
        _id: generateRandomMongoId(),
        entityType: "business",
        domain: "game.battlePass.donations",
        entityId: BUSINESS_ACCOUNT_14_GIP_REWARDS.data.business_account_id,
        settings: {
            isEnabled: true,
        },
    },
} as IDatabaseItem;
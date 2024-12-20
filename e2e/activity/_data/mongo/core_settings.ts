import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_13_GHI_REWARDS, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_5 } from "../postgres/business";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "core_settings",
}

export const BUSINESS_1_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "game.healthQuestionnaire",
        entityId: BUSINESS_ACCOUNT_1.data.business_account_id,
        entityType: "business",
        settings: {
            isMoodMonitorEnabled: true,
            moodMonitorFlatReward: true,
            moodMonitorRewardCooldownDays: 8,
        },
    },
} as IDatabaseItem;

export const BUSINESS_2_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "analytics.intercom",
        entityId: BUSINESS_ACCOUNT_2.data.business_account_id,
        entityType: "business",
        settings: {
            userSupportLevel: "enhanced",
        },
    },
} as IDatabaseItem;

export const BUSINESS_2_P2P_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "game.gifting",
        entityId: BUSINESS_ACCOUNT_2.data.business_account_id,
        entityType: "business",
        settings: {
            enabled: true,
        },
    },
} as IDatabaseItem;

export const BUSINESS_3_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "game.healthQuestionnaire",
        entityId: BUSINESS_ACCOUNT_3.data.business_account_id,
        entityType: "business",
        settings: {
            isQuestionnaireEnabled: true,
            isMoodMonitorEnabled: false,
        },
    },
} as IDatabaseItem;

export const BUSINESS_5_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "game.healthQuestionnaire",
        entityId: BUSINESS_ACCOUNT_5.data.business_account_id,
        entityType: "business",
        settings: {
            isQuestionnaireEnabled: true,
        },
    },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_13_GHI_REWARDS_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "game.healthQuestionnaire",
        entityId: BUSINESS_ACCOUNT_13_GHI_REWARDS.data.business_account_id,
        entityType: "business",
        settings: {
            isQuestionnaireEnabled: false,
        },
    },
} as IDatabaseItem;

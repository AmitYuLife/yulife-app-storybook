import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_5 } from "../postgres/business";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "core_settings",
};

export const BUSINESS_5_GAME_ONBOARDING_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "game.onboarding",
        entityType: "business",
        entityId: BUSINESS_ACCOUNT_5.data.business_account_id,
        settings: {
            rewardForReceiverAppOnboarding: 420
        },
    },
} as IDatabaseItem;
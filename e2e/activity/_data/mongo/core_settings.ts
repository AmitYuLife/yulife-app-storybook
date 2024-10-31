import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_2 } from "../postgres/business";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "core_settings",
}

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

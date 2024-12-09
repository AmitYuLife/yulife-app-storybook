import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_3 } from "../postgres/business";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "core_settings",
}

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
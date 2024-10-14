import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_6 } from "../postgres/business";
import moment from "moment";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "core_settings",
}

export const BUSINESS_3_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "partnerships.rewards",
        entityId: BUSINESS_ACCOUNT_3.data.business_account_id,
        entityType: "user",
        settings: {
            storeEnabled: true,
        },
    },
} as IDatabaseItem;

export const BUSINESS_6_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        domain: "partnerships.rewards",
        entityId: BUSINESS_ACCOUNT_6.data.business_account_id,
        entityType: "user",
        settings: {
            storeEnabled: false,
            storeAccessExpiresAt: moment().subtract(1, "days").toDate(),
        },
    },
} as IDatabaseItem;
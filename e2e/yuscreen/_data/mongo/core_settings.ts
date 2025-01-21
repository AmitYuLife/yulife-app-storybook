import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_6 } from "../postgres/business";
import { CUSTOMER_138 } from "../postgres/customers";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "core_settings",
}

export const BUSINESS_4_REFERRAL_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        entityId: BUSINESS_ACCOUNT_4.data.business_account_id,
        entityType: "business",
        domain: "account.referrals",
        settings: {
            isEnabled: true
        }
    },
} as IDatabaseItem;

export const BUSINESS_6_REFERRAL_SETTINGS = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        entityId: BUSINESS_ACCOUNT_6.data.business_account_id,
        entityType: "business",
        domain: "account.referrals",
        settings: {
            isEnabled: true
        }
    },
} as IDatabaseItem;

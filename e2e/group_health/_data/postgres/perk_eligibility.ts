import { generateRandomTransformedUuid, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PRODUCT_13_GHI_REWARDS, BUSINESS_PRODUCT_18_METLIFE_GIP } from "./business_product";
import { BUSINESS_ACCOUNT_10_GHI_REWARDS, BUSINESS_ACCOUNT_14_GIP_REWARDS } from "./business";

const type = "postgres";
const modelName = "perk_eligibility";

export const YUG0000003_BLUA_HEALTH = {
    type,
    modelName,
    data: {
        perk_eligibility_id: "YUG0000003_BLUA_HEALTH",
        perk_id: "BUPA_HEALTH_INSURANCE_BLUA_HEALTH",
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        max_seats: 10,
        archived: false,
        modified_by_id: null,
        created_at: null,
        modified_at: null,
    },
} as IDatabaseItem;

export const PERK_ELIGIBILITY_1 = {
    type,
    modelName,
    data: {
        perk_eligibility_id: generateRandomTransformedUuid(),
        perk_id: "METLIFE_GP24",
        business_product_id: BUSINESS_PRODUCT_18_METLIFE_GIP.product.data.product_id,
        businessAccountId: BUSINESS_ACCOUNT_14_GIP_REWARDS.data.business_account_id,
        max_seats: 10,
        archived: false,
        modified_by_id: null,
        created_at: null,
        modified_at: null,
    },
} as IDatabaseItem;

export const PERK_ELIGIBILITY_2 = {
    type,
    modelName,
    data: {
        perk_eligibility_id: generateRandomTransformedUuid(),
        perk_id: "HEALTH_ASSURED_METLIFE_GIP",
        business_product_id: BUSINESS_PRODUCT_18_METLIFE_GIP.product.data.product_id,
        businessAccountId: BUSINESS_ACCOUNT_14_GIP_REWARDS.data.business_account_id,
        max_seats: 10,
        archived: false,
        modified_by_id: null,
        created_at: null,
        modified_at: null,
    },
} as IDatabaseItem;

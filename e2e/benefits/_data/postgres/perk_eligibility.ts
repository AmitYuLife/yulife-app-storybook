import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PRODUCT_13_GHI_REWARDS, BUSINESS_PRODUCT_3, BUSINESS_PRODUCT_4_GIP } from "./business_product";
import { BUSINESS_ACCOUNT_10_GHI_REWARDS, BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_4 } from "./business";
import { WELLBEING_HUB_ITEM_5 } from "activity/_data";

const type = "postgres";
const modelName = "perk_eligibility";

export const YUG0000003_FIIT_12_MONTH = {
    type,
    modelName,
    data: {
        perk_eligibility_id: "YUG0000003_FIIT_12_MONTH",
        perk_id: "FIIT_12_MONTH",
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
        max_seats: 2,
        archived: false,
        modified_by_id: null,
        created_at: null,
        modified_at: null,
    },
} as IDatabaseItem;

export const YUG0000001_FIIT_12_MONTH = {
    type,
    modelName,
    data: {
        perk_eligibility_id: "YUG0000001_FIIT_12_MONTH",
        perk_id: "FIIT_12_MONTH",
        business_product_id: BUSINESS_PRODUCT_3.product.data.product_id,
        businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
        max_seats: 0,
        archived: false,
        modified_by_id: null,
        created_at: null,
        modified_at: null,
    },
} as IDatabaseItem;

export const YUG0000003_BLUA_HEALTH = {
    type,
    modelName,
    data: {
        perk_eligibility_id: WELLBEING_HUB_ITEM_5.data._id,
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

export const BUPA_HEALTH_INSURANCE_ANYTIME_HELPLINE = {
    type,
    modelName,
    data: {
        perk_eligibility_id: "YUG0000003_BUPA_HEALTH_INSURANCE_ANYTIME_HELPLINE",
        perk_id: "BUPA_HEALTH_INSURANCE_ANYTIME_HELPLINE",
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        max_seats: 10,
        archived: false,
        modified_by_id: null,
        created_at: null,
        modified_at: null,
    },
} as IDatabaseItem;

export const BUPA_HEALTH_INSURANCE_FAMILY_MENTAL_HEALTHLINE = {
    type,
    modelName,
    data: {
        perk_eligibility_id: "YUG0000003_BUPA_HEALTH_INSURANCE_FAMILY_MENTAL_HEALTHLINE",
        perk_id: "BUPA_HEALTH_INSURANCE_FAMILY_MENTAL_HEALTHLINE",
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        max_seats: 10,
        archived: false,
        modified_by_id: null,
        created_at: null,
        modified_at: null,
    },
} as IDatabaseItem;


export const BUPA_HEALTH_INSURANCE_MENOPAUSE_HEALTHLINE = {
    type,
    modelName,
    data: {
        perk_eligibility_id: "YUG0000003_BUPA_HEALTH_INSURANCE_MENOPAUSE_HEALTHLINE",
        perk_id: "BUPA_HEALTH_INSURANCE_MENOPAUSE_HEALTHLINE",
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        max_seats: 10,
        archived: false,
        modified_by_id: null,
        created_at: null,
        modified_at: null,
    },
} as IDatabaseItem;

export const BUPA_HEALTH_INSURANCE_DIRECT_ACCESS = {
    type,
    modelName,
    data: {
        perk_eligibility_id: "YUG0000003_BUPA_HEALTH_INSURANCE_DIRECT_ACCESS",
        perk_id: "BUPA_HEALTH_INSURANCE_DIRECT_ACCESS",
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        max_seats: 10,
        archived: false,
        modified_by_id: null,
        created_at: null,
        modified_at: null,
    },
} as IDatabaseItem;


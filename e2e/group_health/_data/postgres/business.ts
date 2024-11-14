import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
    BUSINESS_BACKGROUND_10,
    BUSINESS_BACKGROUND_11,
    BUSINESS_BACKGROUND_12,
    BUSINESS_BACKGROUND_8,
    BUSINESS_BACKGROUND_13,
    BUSINESS_BACKGROUND_14,
} from "./business_background";

const type = "postgres";
const modelName = "business";

export const BUSINESS_ACCOUNT_GHI_8 = {
    type,
    modelName,
    data: {
        business_account_id: generateRandomMongoId(),
        business_background_id: BUSINESS_BACKGROUND_8.data.business_background_id,
        business_account_name: "Biz 8",
        coupon: null,
        status: null,
        hubspot_id: "3395752702",
        earn_rate: 10,
        created_at: "2020-04-20T16:51:26Z",
        created_by_id: "0.49.0",
        modified_at: "2020-04-20T16:52:19Z",
        modified_by_id: "0.49.0",
        stripe_account_id: null,
        email_template: null,
        archived: false,
    },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_10_GHI_REWARDS = {
    type,
    modelName,
    data: {
        business_account_id: generateRandomMongoId(),
        business_background_id: BUSINESS_BACKGROUND_10.data.business_background_id,
        business_account_name: "Biz 10",
        coupon: null,
        status: null,
        hubspot_id: "3395752702",
        earn_rate: 0,
        created_at: "2020-04-20T16:51:26Z",
        created_by_id: "0.49.0",
        modified_at: "2020-04-20T16:52:19Z",
        modified_by_id: "0.49.0",
        stripe_account_id: null,
        email_template: null,
        archived: false,
    },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_11_MPP = {
    type,
    modelName,
    data: {
        business_account_id: generateRandomMongoId(),
        business_background_id: BUSINESS_BACKGROUND_11.data.business_background_id,
        business_account_name: "Biz 11",
        coupon: null,
        status: null,
        hubspot_id: "3395752702",
        earn_rate: 0,
        created_at: "2020-04-20T16:51:26Z",
        created_by_id: "0.49.0",
        modified_at: "2020-04-20T16:52:19Z",
        modified_by_id: "0.49.0",
        stripe_account_id: null,
        email_template: null,
        archived: false,
    },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY = {
    type,
    modelName,
    data: {
        business_account_id: generateRandomMongoId(),
        business_background_id: BUSINESS_BACKGROUND_12.data.business_background_id,
        business_account_name: "Biz 12",
        coupon: null,
        status: null,
        hubspot_id: "3395752702",
        earn_rate: 0,
        created_at: "2020-04-20T16:51:26Z",
        created_by_id: "0.49.0",
        modified_at: "2020-04-20T16:52:19Z",
        modified_by_id: "0.49.0",
        stripe_account_id: null,
        email_template: null,
        archived: false,
    },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_13_GHI_REWARDS = {
    type,
    modelName,
    data: {
        business_account_id: generateRandomMongoId(),
        business_background_id: BUSINESS_BACKGROUND_13.data.business_background_id,
        business_account_name: "Biz 13",
        coupon: null,
        status: null,
        hubspot_id: "3395752702",
        earn_rate: 0,
        created_at: "2020-04-20T16:51:26Z",
        created_by_id: "0.49.0",
        modified_at: "2020-04-20T16:52:19Z",
        modified_by_id: "0.49.0",
        stripe_account_id: null,
        email_template: null,
        archived: false,
    },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_14_GIP_REWARDS = {
    type,
    modelName,
    data: {
        business_account_id: generateRandomMongoId(),
        business_background_id: BUSINESS_BACKGROUND_14.data.business_background_id,
        business_account_name: "Biz 14",
        coupon: null,
        status: null,
        hubspot_id: "3395752702",
        earn_rate: 0,
        created_at: "2020-04-20T16:51:26Z",
        created_by_id: "0.49.0",
        modified_at: "2020-04-20T16:52:19Z",
        modified_by_id: "0.49.0",
        stripe_account_id: null,
        email_template: null,
        archived: false,
    },
} as IDatabaseItem;

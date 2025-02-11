import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_BACKGROUND_10,
  BUSINESS_BACKGROUND_11,
  BUSINESS_BACKGROUND_12,
  BUSINESS_BACKGROUND_8,
  BUSINESS_BACKGROUND_13,
} from "./business_background";

const type = "postgres";
const modelName = "business";

export const BUSINESS_ACCOUNT_1 = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "YU LIFE LTD",
    coupon: null,
    status: null,
    hubspot_id: "3395752702",
    created_at: "2020-04-20T16:51:26Z",
    created_by_id: "0.49.0",
    modified_at: "2020-04-20T16:52:19Z",
    modified_by_id: "0.49.0",
    stripe_account_id: null,
    email_template: null,
    archived: false,
  },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_2 = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "Dunder Mifflin",
    coupon: null,
    status: null,
    hubspot_id: "01234567",
    created_at: "2020-04-20T16:51:26Z",
    created_by_id: "0.49.0",
    modified_at: "2020-04-20T16:52:19Z",
    modified_by_id: "0.49.0",
    stripe_account_id: null,
    email_template: null,
    archived: false,
    rate_table_version: "2020-01-24T00:00:00Z",
  },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_3 = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "Pawnee Council",
    coupon: null,
    status: null,
    hubspot_id: "98765432",
    created_at: "2021-01-05T16:51:26Z",
    created_by_id: "0.49.0",
    modified_at: "2021-01-05T17:51:26Z",
    email_template: null,
    archived: false,
  },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_4 = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "Justice League",
    coupon: null,
    status: null,
    hubspot_id: "98765432",
    created_at: "2020-02-02T16:51:26Z",
    created_by_id: "0.49.0",
    modified_at: "2020-03-02T17:51:26Z",
    email_template: null,
    archived: false,
  },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_6 = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "Miele Onboarding Ltd.",
    coupon: null,
    status: null,
    hubspot_id: "98765432",
    created_at: "2020-02-02T16:51:26Z",
    created_by_id: "0.49.0",
    modified_at: "2020-03-02T17:51:26Z",
    email_template: null,
    archived: false,
  },
} as IDatabaseItem;

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

export const BUSINESS_ACCOUNT_14_STORE_DISABLED = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "Cheapos Ltd.",
    archived: false,
  },
} as IDatabaseItem;

import {
  createBusinessRecords,
  generateRandomMongoId,
  IDatabaseItem,
} from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_BACKGROUND_10,
  BUSINESS_BACKGROUND_13,
  BUSINESS_BACKGROUND_8,
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
  type: "postgres",
  modelName: "business",
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
  type: "postgres",
  modelName: "business",
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

export const BUSINESS_ACCOUNT_5 = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "Bonus Onboarding Ltd.",
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
  type: "postgres",
  modelName: "business",
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
  type: "postgres",
  modelName: "business",
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

export const BUSINESS_ACCOUNT_13_GHI_REWARDS = {
  type: "postgres",
  modelName: "business",
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

export const BUSINESS_ACCOUNT_14_NPC_ALTRA = createBusinessRecords({
  active: true,
  businessAccountName: "Altra Capital Limited",
});

import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres";
const modelName = "business";

export const BUSINESS_ACCOUNT_1 = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "YU LIFE LTD",
    invite_code: "T2ST",
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

export const BUSINESS_ACCOUNT_4 = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "Justice League",
    invite_code: "T3ST",
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

export const BUSINESS_ACCOUNT_6 = {
  type,
  modelName,
  data: {
    business_account_id: generateRandomMongoId(),
    business_account_name: "Low Support Ltd.",
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

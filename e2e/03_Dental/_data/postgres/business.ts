import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_BACKGROUND_9 } from "./business_background";

const type = "postgres";
const modelName = "business";

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

export const BUSINESS_ACCOUNT_GDent_9 = {
    type: "postgres",
    modelName: "business",
    data: {
        business_account_id: generateRandomMongoId(),
        business_background_id: BUSINESS_BACKGROUND_9.data.business_background_id,
        business_account_name: "Biz 9",
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

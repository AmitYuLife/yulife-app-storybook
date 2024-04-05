import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres";
const modelName = "business";

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

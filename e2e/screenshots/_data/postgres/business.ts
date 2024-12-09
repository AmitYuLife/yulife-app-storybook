import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres";
const modelName = "business";

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

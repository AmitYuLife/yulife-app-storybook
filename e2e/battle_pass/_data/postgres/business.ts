import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres";
const modelName = "business";

export const BUSINESS_THE_BEAR = {
    type,
    modelName,
    data: {
        business_account_id: generateRandomMongoId(),
        business_account_name: "The Bear",
        coupon: null,
        status: null,
        hubspot_id: "3395752702",
        created_at: "2024-08-01T09:00:00Z",
        created_by_id: "0.49.0",
        modified_at: "2024-08-02T09:00:00Z",
        modified_by_id: "0.49.0",
        stripe_account_id: null,
        email_template: null,
        archived: false,
    },
} as IDatabaseItem;

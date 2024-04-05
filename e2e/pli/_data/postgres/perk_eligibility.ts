import { BUSINESS_ACCOUNT_4 } from "./business";
import { BUSINESS_PRODUCT_4_GIP } from "./business_product";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

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

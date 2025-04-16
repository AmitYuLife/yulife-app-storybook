import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PRODUCT_1_DBI, BUSINESS_PRODUCT_LUNALUNA } from "./business_product";
import { BUSINESS_ACCOUNT_1 } from "./business";
import { WELLBEING_HUB_ITEM_ASKEN } from "../index";

const type = "postgres";
const modelName = "perk_eligibility";

export const YUG0000001_ASKEN = {
  type,
  modelName,
  data: {
    perk_eligibility_id: "YUG0000001_ASKEN",
    perk_id: "ASKEN",
    business_product_id: BUSINESS_PRODUCT_LUNALUNA.product.data.product_id,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    max_seats: 2,
    archived: false,
    modified_by_id: null,
    created_at: null,
    modified_at: null,
  },
} as IDatabaseItem;

export const YUG0000001_LUNALUNA = {
  type,
  modelName,
  data: {
    perk_eligibility_id: generateRandomPostgresId(),
    perk_id: "LUNALUNA",
    business_product_id: BUSINESS_PRODUCT_LUNALUNA.product.data.product_id,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    max_seats: 2,
    archived: false,
    modified_by_id: null,
    created_at: null,
    modified_at: null,
  },
} as IDatabaseItem;

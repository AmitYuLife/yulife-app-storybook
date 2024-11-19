import { generateProductRecords, Carrier, ProductCode } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1 } from "./business";

export const BUSINESS_PRODUCT_1_WB = generateProductRecords({
    productCode: ProductCode.wellbeingAccess,
    carrier: Carrier.YuLife,
    productId: "JP_SEED_1",
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

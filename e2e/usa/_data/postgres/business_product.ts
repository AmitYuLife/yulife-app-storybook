import {
  generateProductRecords,
  Carrier,
  ProductCode,
  ProductType,
} from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_USA_1 } from "./business";
import moment from "moment";

const format = "YYYY-MM-DDTHH:mm:ssZ";

export const BUSINESS_PRODUCT_USA_1_WB = generateProductRecords({
  productCode: ProductCode.wellbeingAccess,
  carrier: Carrier.YuLife,
  productId: "SEED_USA_1",
  businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
  startDate: "2021-06-03T00:00:00.000Z",
});

export const BUSINESS_PRODUCT_USA_1_MOO = generateProductRecords({
  productCode: ProductCode.ULIF,
  carrier: Carrier.MutualOfOmaha,
  productId: "US_YUP000000452",
  businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
  startDate: moment().format("YYYY-MM-DD"),
  policyName: "Omaha Universal Life Insurance policy",
});

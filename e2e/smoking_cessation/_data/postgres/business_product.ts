import { Carrier, ProductCode, generateProductRecords } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PLANET_EXPRESS } from "./business";
import moment from "moment";

export const BUSINESS_PRODUCT_PLANET_EXPRESS_RGL = generateProductRecords({
  productCode: ProductCode.registeredGroupLife,
  carrier: Carrier.AIG,
  productId: "YUG0000001",
  policyName: "Planet Express RGL Policy",
  businessAccountId: BUSINESS_PLANET_EXPRESS.data.business_account_id,
  startDate: moment().subtract(1, "year").format("YYYY-MM-DD"),
});

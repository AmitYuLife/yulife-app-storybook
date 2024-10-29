import { Carrier, ProductCode, generateProductRecords } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_THE_BEAR } from "./business";
import moment from "moment";


export const BUSINESS_PRODUCT_THE_BEAR_RGL = generateProductRecords({
    productCode: ProductCode.registeredGroupLife,
    carrier: Carrier.AIG,
    productId: "YUG0000001",
    policyName: "The RGL Policy",
    businessAccountId: BUSINESS_THE_BEAR.data.business_account_id,
    startDate: moment().subtract(1, "year").format("YYYY-MM-DD"),
})
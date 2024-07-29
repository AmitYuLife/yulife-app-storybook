
import { Carrier, ProductCode, generateProductRecords } from "@yu-life/yulife-bdd-framework";
import {  BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_6 } from "./business";
import moment from "moment";

const format = "YYYY-MM-DDTHH:mm:ssZ";

export const BUSINESS_PRODUCT_1_WB = generateProductRecords({
    productCode: ProductCode.wellbeingAccess,
    carrier: Carrier.YuLife,
    productId: "YUG0000005",
    businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
});

export const BUSINESS_PRODUCT_ENDED = generateProductRecords({
    productCode: ProductCode.registeredGroupLife,
    carrier: Carrier.AIG,
    productId: "YUG1010101",
    policyName: "Pawnee Council Policy ENDED",
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    startDate: moment().subtract(9, "months").format(),
    productEndDate: moment().subtract(3, "days").format()
});

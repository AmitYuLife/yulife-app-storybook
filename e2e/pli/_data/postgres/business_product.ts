import { Carrier, ProductCode, generateProductRecords } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_4 } from "./business";

export const BUSINESS_PRODUCT_4_RGL = generateProductRecords({
    productCode: ProductCode.registeredGroupLife,
    carrier: Carrier.AIG,
    productId: "YUG0000002",
    policyName: "Justice League Policy RGL",
    businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    startDate: "2020-02-02T00:00:00Z",
});

export const BUSINESS_PRODUCT_4_GIP = generateProductRecords({
    productCode: ProductCode.groupIncomeProtection,
    carrier: Carrier.AIG,
    productId: "YUG0000003",
    policyName: "Justice League Policy GIP",
    businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    startDate: "2020-02-02T00:00:00Z",
});

export const BUSINESS_PRODUCT_4_GCI = generateProductRecords({
    productCode: ProductCode.groupIncomeProtection,
    carrier: Carrier.AIG,
    productId: "YUG0000004",
    policyName: "Justice League Policy GCI",
    businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    startDate: "2020-02-02T00:00:00Z",
});

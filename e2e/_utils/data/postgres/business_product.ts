
import { Carrier, ProductCode, generateProductRecords } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_6 } from "./business";
import moment from "moment";

export const BUSINESS_PRODUCT_3 = generateProductRecords({
    productCode: ProductCode.registeredGroupLife,
    carrier: Carrier.AIG,
    productId: "YUG0000001",
    policyName: "Pawnee Council Policy",
    businessAccountId:  BUSINESS_ACCOUNT_3.data.business_account_id,
    startDate: "2021-01-05T00:00:00Z",
});

export const BUSINESS_PRODUCT_4_RGL = generateProductRecords({
    productCode: ProductCode.registeredGroupLife,
    carrier: Carrier.AIG,
    productId: "YUG0000002",
    policyName: "Justice League Policy RGL",
    businessAccountId:  BUSINESS_ACCOUNT_4.data.business_account_id,
    startDate: "2020-02-02T00:00:00Z",
});

export const BUSINESS_PRODUCT_4_GIP = generateProductRecords({
    productCode: ProductCode.groupIncomeProtection,
    carrier: Carrier.AIG,
    productId: "YUG0000003",
    policyName: "Justice League Policy GIP",
    businessAccountId:  BUSINESS_ACCOUNT_4.data.business_account_id,
    startDate: "2020-02-02T00:00:00Z",
});

export const BUSINESS_PRODUCT_4_GCI = generateProductRecords({
    productCode: ProductCode.groupIncomeProtection,
    carrier: Carrier.AIG,
    productId: "YUG0000004",
    policyName: "Justice League Policy GCI",
    businessAccountId:  BUSINESS_ACCOUNT_4.data.business_account_id,
    startDate: "2020-02-02T00:00:00Z",
});

export const BUSINESS_PRODUCT_1_WB = generateProductRecords({
    productCode: ProductCode.wellbeingAccess,
    carrier: Carrier.YuLife,
    productId: "YUG0000005",
    businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
});

export const BUSINESS_PRODUCT_4_GDental = generateProductRecords({
    productCode: ProductCode.groupDental,
    carrier: Carrier.Bupa,
    productId: "YUG0000006",
    policyName: "Justice League Policy GDental",
    businessAccountId:  BUSINESS_ACCOUNT_6.data.business_account_id,
    startDate: "2020-02-02T00:00:00Z",
});

export const BUSINESS_PRODUCT_FUTURE = generateProductRecords({
    productCode: ProductCode.registeredGroupLife,
    carrier: Carrier.AIG,
    productId: "YUG2020202",
    policyName: "Pawnee Council Policy FUTURE",
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    startDate: moment().add(2, 'weeks').format()
})

export const BUSINESS_PRODUCT_ENDED = generateProductRecords({
    productCode: ProductCode.registeredGroupLife,
    carrier: Carrier.AIG,
    productId: "YUG1010101",
    policyName: "Pawnee Council Policy ENDED",
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    startDate: "2021-01-05T00:00:00Z",
    productEndDate: "2022-01-05T00:00:00Z" as any
});

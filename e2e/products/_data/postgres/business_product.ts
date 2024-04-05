import { Carrier, ProductCode, generateProductRecords } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_11_MPP, BUSINESS_ACCOUNT_3 } from "./business";
import moment from "moment";

export const BUSINESS_PRODUCT_FUTURE = generateProductRecords({
    productCode: ProductCode.registeredGroupLife,
    carrier: Carrier.AIG,
    productId: "YUG2020202",
    policyName: "Pawnee Council Policy FUTURE",
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    startDate: moment().add(2, "weeks").format(),
});

export const BUSINESS_PRODUCT_14_MPP_GDental = generateProductRecords({
    productCode: ProductCode.groupDentalPlan,
    carrier: Carrier.Bupa,
    productId: "YUG1010108",
    policyName: "Justice League Policy GDental",
    businessAccountId: BUSINESS_ACCOUNT_11_MPP.data.business_account_id,
    startDate: "2020-02-02T00:00:00Z",
});

export const BUSINESS_PRODUCT_14_GCI = generateProductRecords({
    productCode: ProductCode.groupIncomeProtection,
    carrier: Carrier.AIG,
    productId: "YUG1010109",
    policyName: "Justice League Policy GCI",
    businessAccountId: BUSINESS_ACCOUNT_11_MPP.data.business_account_id,
    startDate: moment().subtract(1, "year").format("YYYY-MM-DD"),
});

export const BUSINESS_PRODUCT_14_SAAS = generateProductRecords({
    productCode: ProductCode.SaaS,
    carrier: Carrier.YuLife,
    productId: "YL-SaaS-00001",
    policyName: "Plymouth SaaS",
    businessAccountId: BUSINESS_ACCOUNT_11_MPP.data.business_account_id,
    startDate: moment().subtract(1, "year").format("YYYY-MM-DD"),
});

export const BUSINESS_PRODUCT_14_GHI = generateProductRecords({
    productCode: ProductCode.groupHealth,
    carrier: Carrier.Bupa,
    productId: "YUG1010110",
    policyName: "Biz 11 Policy GHI",
    businessAccountId: BUSINESS_ACCOUNT_11_MPP.data.business_account_id,
    startDate: moment().subtract(1, "year").format("YYYY-MM-DD"),
});

export const BUSINESS_PRODUCT_14_RGL = generateProductRecords({
    productCode: ProductCode.registeredGroupLife,
    carrier: Carrier.AIG,
    productId: "YUG1010112",
    policyName: "Justice League Policy RGL",
    businessAccountId: BUSINESS_ACCOUNT_11_MPP.data.business_account_id,
    startDate: moment().add(1, "d").format("YYYY-MM-DD"),
});

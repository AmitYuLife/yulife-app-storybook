import {
  generateProductRecords,
  Carrier,
  ProductCode,
  ProductType,
} from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_SA_1 } from "./business";
import moment from "moment";

const format = "YYYY-MM-DDTHH:mm:ssZ";

export const BUSINESS_PRODUCT_SA_1_MeGL = generateProductRecords({
  productCode: ProductCode.mainMemberGroupLife,
  carrier: Carrier.YuLifeSA,
  productId: "SEED_SA_1",
  businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
  startDate: moment().subtract(1, "d").format(format),
  product: {
    policy_start_date: moment().subtract(1, "d").format(format),
    policy_end_date: "3000-12-31",
  },
});

export const BUSINESS_PRODUCT_SA_1_GrFun = generateProductRecords({
  productCode: ProductCode.groupFuneral,
  carrier: Carrier.YuLifeSA,
  productId: "SEED_SA_2",
  businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
  startDate: moment().subtract(1, "d").format(format),
  product: {
    policy_start_date: moment().subtract(1, "d").format(format),
    policy_end_date: "3000-12-31",
  },
});

export const BUSINESS_PRODUCT_SA_1_GIP = generateProductRecords({
  productCode: ProductCode.groupIncomeProtection,
  carrier: Carrier.YuLifeSA,
  productId: "SEED_SA_3",
  businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
  startDate: moment().subtract(1, "d").format(format),
  product: {
    policy_start_date: moment().subtract(1, "d").format(format),
    policy_end_date: "3000-12-31",
  },
});

export const BUSINESS_PRODUCT_SA_1_TmpGIP = generateProductRecords({
  productCode: ProductCode.temporaryGroupIncomeProtection,
  carrier: Carrier.YuLifeSA,
  productId: "SEED_SA_4",
  businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
  startDate: moment().subtract(1, "d").format(format),
  product: {
    policy_start_date: moment().subtract(1, "d").format(format),
    policy_end_date: "3000-12-31",
  },
});

export const BUSINESS_PRODUCT_SA_1_LSDC = generateProductRecords({
  productCode: ProductCode.lumpSumDisabilityCover,
  carrier: Carrier.YuLifeSA,
  productId: "SEED_SA_5",
  businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
  startDate: moment().subtract(1, "d").format(format),
  product: {
    policy_start_date: moment().subtract(1, "d").format(format),
    policy_end_date: "3000-12-31",
  },
});

export const BUSINESS_PRODUCT_SA_1_SpGL = generateProductRecords({
  productCode: ProductCode.spousalGroupLife,
  carrier: Carrier.YuLifeSA,
  productId: "SEED_SA_6",
  businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
  startDate: moment().subtract(1, "d").format(format),
  product: {
    policy_start_date: moment().subtract(1, "d").format(format),
    policy_end_date: "3000-12-31",
  },
});

export const BUSINESS_PRODUCT_SA_1_Wellbeing = generateProductRecords({
  productCode: ProductCode.wellbeingAccess,
  carrier: Carrier.YuLife,
  productId: "SEED_SA_7",
  businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
  startDate: moment().subtract(1, "d").format(format),
  product: {
    policy_start_date: moment().subtract(1, "d").format(format),
    policy_end_date: "3000-12-31",
  },
});

export const BUSINESS_PRODUCT_SA_1_GCI = generateProductRecords({
  productCode: ProductCode.groupCriticalIllness,
  carrier: Carrier.YuLifeSA,
  productId: "SEED_SA_8",
  businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
  startDate: moment().subtract(7, "d").format(format),
  product: {
    policy_start_date: moment().subtract(7, "d").format(format),
    policy_end_date: "3000-12-31",
  },
});

import { generateProductRecords, Carrier, ProductCode, ProductType } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_USA_1, BUSINESS_ACCOUNT_USA_2 } from "./business";
import moment from "moment";

const format = "YYYY-MM-DDTHH:mm:ssZ";

export const BUSINESS_PRODUCT_USA_1_WB = generateProductRecords({
    productCode: ProductCode.wellbeingAccess,
    carrier: Carrier.YuLife,
    productId: "SEED_USA_1",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_1_DENPPO = generateProductRecords({
    productCode: ProductCode.DENPPO,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_2",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_1_DENHMO = generateProductRecords({
    productCode: ProductCode.DENHMO,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_3",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_1_DENCHOI = generateProductRecords({
    productCode: ProductCode.DENCHOI,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_4",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_1_VIS = generateProductRecords({
    productCode: ProductCode.VIS,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_5",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_1_TLIF = generateProductRecords({
    productCode: ProductCode.TLIF,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_6",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_2_ADD = generateProductRecords({
    productCode: ProductCode.ADD,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_7",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_2_WLIF = generateProductRecords({
    productCode: ProductCode.WLIF,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_8",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_2_ULIF = generateProductRecords({
    productCode: ProductCode.ULIF,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_10",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

 export const BUSINESS_PRODUCT_USA_2_VADD = generateProductRecords({
    productCode: ProductCode.ADD,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_11",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_2_STD = generateProductRecords({
    productCode: ProductCode.STD,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_12",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_2_LTD = generateProductRecords({
    productCode: ProductCode.LTD,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_13",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_3_VSTD = generateProductRecords({
    productCode: ProductCode.VSTD,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_14",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_3_VLTD = generateProductRecords({
    productCode: ProductCode.VLTD,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_15",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_3_ACC = generateProductRecords({
    productCode: ProductCode.ACC,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_16",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_3_CRI = generateProductRecords({
    productCode: ProductCode.CRI,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_17",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_3_SPDIS = generateProductRecords({
    productCode: ProductCode.SPDIS,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_18",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_3_HI = generateProductRecords({
    productCode: ProductCode.HI,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_19",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_4_ACCSICK = generateProductRecords({
    productCode: ProductCode.ACCSICK,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_20",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_4_CAN = generateProductRecords({
    productCode: ProductCode.CAN,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_21",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

  export const BUSINESS_PRODUCT_USA_4_VLIF = generateProductRecords({
    productCode: ProductCode.VLIF,
    carrier: Carrier.Guardian,
    productId: "SEED_USA_9",
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    startDate: "2021-06-03T00:00:00.000Z",
  });

export const BUSINESS_PRODUCT_USA_5_GAP = generateProductRecords({
  productCode: ProductCode.GAP,
  carrier: Carrier.Transamerica,
  productId: "SEED_5_GAP",
  businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
  startDate: "2021-07-03T00:00:00.000Z",
});

export const BUSINESS_PRODUCT_USA_5_VIS = generateProductRecords({
  productCode: ProductCode.VIS,
  carrier: Carrier.Transamerica,
  productId: "SEED_5_VIS",
  businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
  startDate: "2023-07-03T00:00:00.000Z",
  product: {
    contribution_type: "none",
 }
});

export const BUSINESS_PRODUCT_USA_6_GAP = generateProductRecords({
  productCode: ProductCode.GAP,
  carrier: Carrier.Transamerica,
  productId: "SEED_6_GAP",
  businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
  startDate: "2021-07-03T00:00:00.000Z",
  product: {
    contribution_type: "full",
 }
});

export const BUSINESS_PRODUCT_USA_7_VIS = generateProductRecords({
  productCode: ProductCode.VIS,
  carrier: Carrier.Transamerica,
  productId: "SEED_7_VIS",
  businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
  startDate: "2023-07-03T00:00:00.000Z",
  product: {
    contribution_type: "partial",
 }
});

export const BUSINESS_PRODUCT_USA_8_GAP = generateProductRecords({
  productCode: ProductCode.VIS,
  carrier: Carrier.Transamerica,
  productId: "SEED_8_GAP",
  businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
  startDate: "2023-07-03T00:00:00.000Z",
  product: {
    contribution_type: "partial",
 }
});

export const BUSINESS_PRODUCT_USA_10_GAP = generateProductRecords({
  productCode: ProductCode.VIS,
  carrier: Carrier.Transamerica,
  productId: "SEED_10_GAP",
  businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
  startDate: "2024-07-03T00:00:00.000Z",
  product: {
    contribution_type: "partial",
 }
});

export const BUSINESS_PRODUCT_USA_10_VIS = generateProductRecords({
  productCode: ProductCode.VIS,
  carrier: Carrier.Transamerica,
  productId: "SEED_10_VIS",
  businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
  startDate: moment().add(1, "y").format(format),
});

export const BUSINESS_PRODUCT_USA_11_ACC = generateProductRecords({
  productCode: ProductCode.ACC,
  carrier: Carrier.Guardian,
  productId: "SEED_11_ACC",
  businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
  startDate: "2021-06-03T00:00:00.000Z",
  product: {
    contribution_type: "full",
 }
});

export const BUSINESS_PRODUCT_USA_11_CAN = generateProductRecords({
  productCode: ProductCode.CAN,
  carrier: Carrier.Guardian,
  productId: "SEED_11_CAN",
  businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
  startDate: "2021-06-03T00:00:00.000Z",
  product: {
    contribution_type: "partial",
 }
});
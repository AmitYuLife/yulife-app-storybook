import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from './customers';
import moment from "moment";

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_Wellbeing_USA_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID0000001100",
    customer_id: customer.CUSTOMER_USA_1.data.customerId,
    earn_rate: 10,
    product_variant_id: "YuLife_Wellbeing_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_DENPPO_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001101",
    customer_id: customer.CUSTOMER_USA_1.data.customerId,
    earn_rate: 0,
    startDate: moment().format(),
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_DENPPO_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_DENHMO_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001102",
    customer_id: customer.CUSTOMER_USA_1.data.customerId,
    earn_rate: 0,
    startDate: moment().format(),
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_DENHMO_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_DENCHOI_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001103",
    customer_id: customer.CUSTOMER_USA_1.data.customerId,
    earn_rate: 0,
    startDate: moment().format(),
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_DENCHOI_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_VIS_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001104",
    customer_id: customer.CUSTOMER_USA_1.data.customerId,
    earn_rate: 0,
    startDate: moment().format(),
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_VIS_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_TLIF_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001105",
    customer_id: customer.CUSTOMER_USA_1.data.customerId,
    earn_rate: 0,
    startDate: moment().format(),
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_TLIF_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_ADD_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001106",
    customer_id: customer.CUSTOMER_USA_2.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_ADD_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_VADD_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001109",
    customer_id: customer.CUSTOMER_USA_2.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_VADD_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_STD_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001110",
    customer_id: customer.CUSTOMER_USA_2.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_STD_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_LTD_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001111",
    customer_id: customer.CUSTOMER_USA_2.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_LTD_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_HI_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001117",
    customer_id: customer.CUSTOMER_USA_2.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_HI_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_VSTD_3 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001112",
    customer_id: customer.CUSTOMER_USA_3.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_VSTD_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_VLTD_3 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001113",
    customer_id: customer.CUSTOMER_USA_3.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_VLTD_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_ACC_3 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001114",
    customer_id: customer.CUSTOMER_USA_3.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_ACC_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_CRI_3 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001115",
    customer_id: customer.CUSTOMER_USA_3.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_CRI_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_SPDIS_3 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001116",
    customer_id: customer.CUSTOMER_USA_3.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_SPDIS_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_ACCSICK_4 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001118",
    customer_id: customer.CUSTOMER_USA_4.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_ACCSICK_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_CAN_4 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001119",
    customer_id: customer.CUSTOMER_USA_4.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_CAN_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_VLIF_4 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001120",
    customer_id: customer.CUSTOMER_USA_4.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_VLIF_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_GAP_5 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001121",
    customer_id: customer.CUSTOMER_USA_5.data.customerId,
    earn_rate: 0,
    start_date: "2023-07-14",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Transamerica_GAP_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_VIS_5 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001122",
    customer_id: customer.CUSTOMER_USA_5.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Transamerica_VIS_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_GAP_6 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001123",
    customer_id: customer.CUSTOMER_USA_6.data.customerId,
    earn_rate: 0,
    start_date: "2023-07-14",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Transamerica_GAP_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_VIS_7 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001124",
    customer_id: customer.CUSTOMER_USA_7.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Transamerica_VIS_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_GAP_8 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001125",
    customer_id: customer.CUSTOMER_USA_8.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Transamerica_GAP_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_GAP_10 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001126",
    customer_id: customer.CUSTOMER_USA_10.data.customerId,
    earn_rate: 0,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Transamerica_GAP_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_VIS_10 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001127",
    customer_id: customer.CUSTOMER_USA_10.data.customerId,
    earn_rate: 0,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Transamerica_VIS_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_ACC_11 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001128",
    customer_id: customer.CUSTOMER_USA_11.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_ACC_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_CAN_11 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001129",
    customer_id: customer.CUSTOMER_USA_11.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_CAN_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_CAN_12 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001130",
    customer_id: customer.CUSTOMER_USA_12.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_CAN_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_CRI_13 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001131",
    customer_id: customer.CUSTOMER_USA_13.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_CRI_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_VSTD_14 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID1000001132",
    customer_id: customer.CUSTOMER_USA_14.data.customerId,
    earn_rate: 0,
    start_date: "2022-12-09",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    product_variant_id: "Guardian_STD_01_01",
    archived: false,
    taken_up: false,
  },
} as IDatabaseItem;
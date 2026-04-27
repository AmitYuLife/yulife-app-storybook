import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_SA_1, CUSTOMER_SA_2, CUSTOMER_SA_3 } from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_MeGL_SA_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "SA_YUCPID0000001100",
    customer_id: CUSTOMER_SA_1.data.customerId,
    earn_rate: 10,
    product_variant_id: "YuLifeSA_MeGL_01_01",
    archived: false,
    taken_up: true,
    startDate: moment().subtract(1, "d").format(),
  },
} as IDatabaseItem;

export const CPE_GrFun_SA_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "SA_YUCPID0000001101",
    customer_id: CUSTOMER_SA_1.data.customerId,
    earn_rate: 5,
    startDate: moment().subtract(1, "d").format(),
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "YuLifeSA_GrFun_01_01",
  },
} as IDatabaseItem;

export const CPE_GIP_SA_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "SA_YUCPID0000001102",
    customer_id: CUSTOMER_SA_1.data.customerId,
    earn_rate: 4,
    startDate: moment().subtract(1, "d").format(),
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "YuLifeSA_GIP_01_01",
  },
} as IDatabaseItem;

export const CPE_LSDC_SA_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "SA_YUCPID0000001103",
    customer_id: CUSTOMER_SA_1.data.customerId,
    earn_rate: 3,
    startDate: moment().subtract(1, "d").format(),
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "YuLifeSA_LSDC_01_01",
  },
} as IDatabaseItem;

export const CPE_TmpGIP_SA_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "SA_YUCPID0000001104",
    customer_id: CUSTOMER_SA_1.data.customerId,
    earn_rate: 2,
    startDate: moment().subtract(1, "d").format(),
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "YuLifeSA_TmpGIP_01_01",
  },
} as IDatabaseItem;

export const CPE_MeGL_SA_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "SA_YUCPID0000001105",
    customer_id: CUSTOMER_SA_2.data.customerId,
    earn_rate: 10,
    product_variant_id: "YuLifeSA_MeGL_01_01",
    archived: false,
    taken_up: true,
    startDate: moment().subtract(1, "d").format(),
  },
} as IDatabaseItem;

export const CPE_SpGL_SA_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "SA_YUCPID0000001106",
    customer_id: CUSTOMER_SA_2.data.customerId,
    earn_rate: 6,
    startDate: moment().add(1, "d").format(),
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "YuLifeSA_SpGL_01_01",
  },
} as IDatabaseItem;

export const CPE_GrFun_SA_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "SA_YUCPID0000001107",
    customer_id: CUSTOMER_SA_2.data.customerId,
    earn_rate: 4,
    startDate: moment().subtract(1, "d").format(),
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "YuLifeSA_GrFun_01_01",
  },
} as IDatabaseItem;

export const CPE_GCI_SA_3 = {
  type,
  modelName,
  data: {
    customer_product_id: "SA_YUCPID0000001108",
    customer_id: CUSTOMER_SA_3.data.customerId,
    earn_rate: 4,
    startDate: moment().subtract(7, "d").format(),
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "YuLifeSA_GCI_01_01",
  },
} as IDatabaseItem;

import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_EMPLOYEE_1, BUSINESS_EMPLOYEE_2 } from "./business_employees";
import * as customer from "./customers";

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_Wellbeing_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000001100",
    customer_id: customer.CUSTOMER_1.data.customerId,
    earn_rate: 10,
    product_variant_id: "YuLife_Wellbeing_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_DBI_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000001101",
    customer_id: customer.CUSTOMER_1.data.customerId,
    earn_rate: 10,
    start_date: moment().subtract(6, "months").toDate(),
    underwriting_step: null,
    is_banned_from_product: false,
    taken_up: true,
    product_variant_id: "DaiIchi_ExGL_01_01",
    business_employee_id: BUSINESS_EMPLOYEE_1.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_GMI_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000001102",
    customer_id: customer.CUSTOMER_1.data.customerId,
    earn_rate: 10,
    start_date: moment().subtract(6, "months").toDate(),
    underwriting_step: null,
    is_banned_from_product: false,
    taken_up: true,
    product_variant_id: "DaiIchi_GHealth_01_01",
    business_employee_id: BUSINESS_EMPLOYEE_1.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_DBI_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000001103",
    customer_id: customer.CUSTOMER_2_SMOKING.data.customerId,
    earn_rate: 10,
    start_date: moment().subtract(6, "months").toDate(),
    underwriting_step: null,
    is_banned_from_product: false,
    taken_up: true,
    product_variant_id: "DaiIchi_ExGL_01_01",
    business_employee_id: BUSINESS_EMPLOYEE_2.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_GMI_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000001104",
    customer_id: customer.CUSTOMER_2_SMOKING.data.customerId,
    earn_rate: 10,
    start_date: moment().subtract(6, "months").toDate(),
    underwriting_step: null,
    is_banned_from_product: false,
    taken_up: true,
    product_variant_id: "DaiIchi_GHealth_01_01",
    business_employee_id: BUSINESS_EMPLOYEE_2.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_TDI_2 = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000001105",
    customer_id: customer.CUSTOMER_2_SMOKING.data.customerId,
    earn_rate: 10,
    start_date: moment().subtract(6, "months").toDate(),
    underwriting_step: null,
    is_banned_from_product: false,
    taken_up: true,
    product_variant_id: "DaiIchi_GCI_01_01",
    business_employee_id: BUSINESS_EMPLOYEE_2.data.business_employee_id,
  },
} as IDatabaseItem;

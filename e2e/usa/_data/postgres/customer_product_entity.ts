import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";
import { BUSINESS_EMPLOYEE_USA_1 } from "./business_employees";

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

export const CPE_MOO_USA_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "US_YUCPID0000001101",
    customer_id: customer.CUSTOMER_USA_1.data.customerId,
    earn_rate: 0,
    product_variant_id: "MutualOfOmaha_ULIF_01_01",
    archived: false,
    taken_up: true,
    business_employee_id: BUSINESS_EMPLOYEE_USA_1.data.business_employee_id,
  },
} as IDatabaseItem;

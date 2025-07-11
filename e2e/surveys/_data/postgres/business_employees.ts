import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_3,
  BUSINESS_ACCOUNT_4,
} from "./business";

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_1 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_employee_id: generateRandomPostgresId(),
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_1.data.customerId,
    employment_start_date: moment().subtract(12, "months").toDate(),
    employment_leave_date: moment().add(11, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_2 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_2.data.customerId,
    employment_start_date: moment().subtract(12, "months").toDate(),
    employment_leave_date: moment().add(11, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_3 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
    customer_id: customer.CUSTOMER_3.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_5 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
    customer_id: customer.CUSTOMER_5.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

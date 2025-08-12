import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_3,
  BUSINESS_ACCOUNT_5,
} from "./business";
import * as customer from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_3 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_3.data.customerId,
    employment_start_date: moment().subtract(6, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_7 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_7.data.customerId,
    employment_start_date: moment().subtract(26, "days").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_12 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_12.data.customerId,
    employment_start_date: moment().subtract(6, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_13 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_13.data.customerId,
    employment_start_date: moment().subtract(6, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_60 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_60.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_63 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_63.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_64 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_64.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_67 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_67.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_70 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
    customer_id: customer.CUSTOMER_70.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_78 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
    customer_id: customer.CUSTOMER_78.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_90 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_90.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_89 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
    customer_id: customer.CUSTOMER_89.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_92 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_92.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_93 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_93.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_94 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_94.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_95 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_95.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(8, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_96 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_96.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

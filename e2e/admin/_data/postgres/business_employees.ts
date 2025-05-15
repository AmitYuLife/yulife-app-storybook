import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_5,
  BUSINESS_ACCOUNT_6,
} from "./business";
import * as customers from "./customers";
import moment = require("moment");

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_1 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customers.CUSTOMER_1.data.customerId,
    employment_start_date: "2019-12-30T00:00:00Z",
    employment_leave_date: "2999-12-31T00:00:00Z",
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_2 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customers.CUSTOMER_2.data.customerId,
    employment_start_date: moment().subtract(4, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_3 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
    customer_id: customers.CUSTOMER_3.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_4 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customers.CUSTOMER_4.data.customerId,
    employment_start_date: moment().subtract(26, "days").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_5 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
    customer_id: customers.CUSTOMER_5.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_6 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
    customer_id: customers.CUSTOMER_6.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_7 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customers.CUSTOMER_7.data.customerId,
    employment_start_date: "2019-12-30T00:00:00Z",
    employment_leave_date: "2999-12-31T00:00:00Z",
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_8 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customers.CUSTOMER_8.data.customerId,
    employment_start_date: moment().subtract(10, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_9 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customers.CUSTOMER_9.data.customerId,
    employment_start_date: moment().subtract(10, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_10 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
    customer_id: customers.CUSTOMER_10.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_11 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customers.CUSTOMER_11.data.customerId,
    employment_start_date: moment().subtract(4, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_12 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customers.CUSTOMER_12.data.customerId,
    employment_start_date: moment().subtract(4, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_13 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
    customer_id: customers.CUSTOMER_13.data.customerId,
    employment_start_date: moment().subtract(4, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_14 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
    customer_id: customers.CUSTOMER_14.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

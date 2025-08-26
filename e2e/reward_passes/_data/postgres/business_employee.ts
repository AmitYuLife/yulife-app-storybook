import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import * as business from "./business";
import moment from "moment";

const type = "postgres" as const;
const modelName = "business_employee" as const;

const DEFAULT_DATA = {
  employmentStartDate: moment().subtract(3, "months").toDate(),
  employmentLeaveDate: moment().add(10, "years").toDate(),
};

export const BUSINESS_EMPLOYEE_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    businessAccountId: business.BUSINESS_PREVENTION_PASS.data.businessAccountId,
    customerId: customer.CUSTOMER_PREVENTION_PASS_01.data.customerId,
  },
};

export const BUSINESS_EMPLOYEE_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    businessAccountId: business.BUSINESS_PREVENTION_PASS.data.businessAccountId,
    customerId: customer.CUSTOMER_PREVENTION_PASS_02.data.customerId,
  },
};

export const BUSINESS_EMPLOYEE_WELLBEING_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    businessAccountId: business.BUSINESS_WELLBEING_PASS.data.businessAccountId,
    customerId: customer.CUSTOMER_WELLBEING_PASS_01.data.customerId,
  },
};

export const BUSINESS_EMPLOYEE_WELLBEING_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    businessAccountId: business.BUSINESS_WELLBEING_PASS.data.businessAccountId,
    customerId: customer.CUSTOMER_WELLBEING_PASS_02.data.customerId,
  },
};

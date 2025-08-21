import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import * as business from "./business";
import moment from "moment";

const type = "postgres" as const;
const modelName = "business_employee" as const;

export const BUSINESS_EMPLOYEE_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    business_account_id: business.BUSINESS_PREVENTION_PASS.data.business_account_id,
    customer_id: customer.CUSTOMER_PREVENTION_PASS_01.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
};

export const BUSINESS_EMPLOYEE_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    business_account_id: business.BUSINESS_PREVENTION_PASS.data.business_account_id,
    customer_id: customer.CUSTOMER_PREVENTION_PASS_02.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
};

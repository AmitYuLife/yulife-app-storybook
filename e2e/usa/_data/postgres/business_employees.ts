import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_USA_1 } from "./business";
import * as customer from "./customers";
import moment = require("moment");

export const BUSINESS_EMPLOYEE_USA_1 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    customer_id: customer.CUSTOMER_USA_1.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_2 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    customer_id: customer.CUSTOMER_USA_2.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_11_MPP, BUSINESS_ACCOUNT_3 } from "./business";
import * as customer from "./customers";
import moment = require("moment");

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_FUTURE_PRODUCT = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
        customer_id: customer.CUSTOMER_FUTURE_PRODUCT.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().subtract(10, "weeks").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_123 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_11_MPP.data.business_account_id,
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_124 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_11_MPP.data.business_account_id,
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_4 } from "./business";
import * as customer from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_37 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_37.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_PLI_2 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_PLI_2.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_PLI_3 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_PLI_3.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

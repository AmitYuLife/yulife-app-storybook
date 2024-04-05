import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_5, BUSINESS_ACCOUNT_6, BUSINESS_ACCOUNT_GDent_9 } from "./business";
import * as customer from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_46 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
        customer_id: customer.CUSTOMER_43.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_DENTAL = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_DENTAL_1.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_DENTAL_2 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_DENTAL_2.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_108 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        customer_id: customer.CUSTOMER_108.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_DENTAL_RENEW = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_DENTAL_RENEW.data.customerId,
        employment_start_date: moment().subtract(14, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_DENTAL_RENEW_2 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
        customer_id: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        employment_start_date: moment().subtract(14, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

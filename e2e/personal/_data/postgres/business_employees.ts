import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_6 } from './business';
import * as customer from './customers';
import moment from "moment";

const type = "postgres"
const modelName = "business_employee"

export const BUSINESS_EMPLOYEE_34 = {
    type,
    modelName,
    data:{
        business_employee_id: generateRandomPostgresId(),
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_34.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_LEAVER = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
        customer_id: customer.CUSTOMER_LEAVER.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().subtract(10, "weeks").toDate(),
        business_employee_id: generateRandomPostgresId()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_111 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_111.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_112 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_112.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_113 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_113.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_114 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_114.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_126_LEAVER_WELLBEING = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
        customer_id: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().subtract(10, "weeks").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_STORE_ACCESS_PERIOD = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_employee_id: generateRandomPostgresId(),
        business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
        customer_id: customer.CUSTOMER_STORE_ACCESS_PERIOD.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().format("YYYY-MM-DD")
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_STORE_ACCESS_DENIED = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
        customer_id: customer.CUSTOMER_STORE_ACCESS_DENIED.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().format("YYYY-MM-DD"),
    }
} as IDatabaseItem

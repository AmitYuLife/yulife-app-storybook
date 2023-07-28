import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_USA_1, BUSINESS_ACCOUNT_USA_2,} from './business';
import * as customer from './customers';
import moment = require('moment');


const type = "postgres"
const modelName = "business_employee"

export const BUSINESS_EMPLOYEE_USA_1 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_1.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_2 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_2.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_3 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_3.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_4 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_4.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_5 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_5.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_6 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_6.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_7 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_7.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_8 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_8.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_9 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_9.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_10 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_10.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_11 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_11.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_12 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_12.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_13 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_13.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_14 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_14.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_USA_15 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
        customer_id: customer.CUSTOMER_USA_15.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

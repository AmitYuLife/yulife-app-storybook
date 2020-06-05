import { IDatabaseItem } from '../../types';
import { BUSINESS_ACCOUNT_1 } from './business_accounts';
import { CUSTOMER_1, CUSTOMER_2, CUSTOMER_3, CUSTOMER_4, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8, CUSTOMER_9, CUSTOMER_10, CUSTOMER_11, CUSTOMER_12, CUSTOMER_13, CUSTOMER_14 } from './customers';
import moment = require('moment');

export const BUSINESS_EMPLOYEE_1 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        "business_account_id": BUSINESS_ACCOUNT_1.data.business_account_id,
        "customer_id": CUSTOMER_1.data.customerId,
        "invite_date": "2019-12-30T00:00:00Z",
        "leave_date": "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_2 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        "business_account_id": BUSINESS_ACCOUNT_1.data.business_account_id,
        "customer_id": CUSTOMER_2.data.customerId,
        "invite_date": "2019-12-30T00:00:00Z",
        "leave_date": "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_3 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_3.data.customerId,
        invite_date: moment().subtract(6, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_4 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_4.data.customerId,
        invite_date: moment().subtract(4, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_5 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_5.data.customerId,
        invite_date: moment().toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_6 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_6.data.customerId,
        invite_date: moment().subtract(7, "days").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_7 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_7.data.customerId,
        invite_date: moment().subtract(26, "days").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem


export const BUSINESS_EMPLOYEE_8 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_8.data.customerId,
        invite_date: moment().subtract(26, "days").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_9 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_9.data.customerId,
        invite_date: moment().subtract(40, "days").toDate(),
        leave_date: moment().add(5, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_10 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_10.data.customerId,
        invite_date: moment().subtract(55, "days").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_11 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_11.data.customerId,
        invite_date: moment().subtract(300, "days").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_12 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_12.data.customerId,
        invite_date: moment().subtract(6, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_13 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_13.data.customerId,
        invite_date: moment().subtract(6, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_14 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_14.data.customerId,
        invite_date: moment().subtract(6, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

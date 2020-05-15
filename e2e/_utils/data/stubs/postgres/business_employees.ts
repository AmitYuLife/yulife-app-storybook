import { IDatabaseItem } from '../../types';
import { BUSINESS_ACCOUNT_1 } from './business_accounts';
import { CUSTOMER_1, CUSTOMER_2, CUSTOMER_3, CUSTOMER_4 } from './customers';
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
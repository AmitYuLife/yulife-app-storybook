import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_2 } from './business';
import {
    CUSTOMER_1, CUSTOMER_2, CUSTOMER_3, CUSTOMER_4, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8,
    CUSTOMER_9, CUSTOMER_10, CUSTOMER_11, CUSTOMER_12, CUSTOMER_13, CUSTOMER_14, CUSTOMER_15, CUSTOMER_16,
    CUSTOMER_17, CUSTOMER_18, CUSTOMER_19, CUSTOMER_20, CUSTOMER_21, CUSTOMER_22, CUSTOMER_23, CUSTOMER_ALPHA, CUSTOMER_24, CUSTOMER_25, CUSTOMER_26, CUSTOMER_27, CUSTOMER_28, CUSTOMER_29, CUSTOMER_30
} from './customers';
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

export const BUSINESS_EMPLOYEE_15 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_15.data.customerId,
        invite_date: moment().subtract(6, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_16 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_16.data.customerId,
        invite_date: moment().subtract(6, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_17 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_17.data.customerId,
        invite_date: moment().subtract(3, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_18 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_18.data.customerId,
        invite_date: moment().subtract(13, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_19 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_19.data.customerId,
        invite_date: moment().subtract(13, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_20 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_20.data.customerId,
        invite_date: moment().subtract(13, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_21 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_21.data.customerId,
        invite_date: moment().subtract(8, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_22 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_22.data.customerId,
        invite_date: moment().subtract(8, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_23 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_23.data.customerId,
        invite_date: moment().subtract(8, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_ALPHA = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_ALPHA.data.customerId,
        invite_date: moment().subtract(8, "months").toDate(),
        leave_date: moment().add(10, "years").toDate(),
        // customer_membership: "Yulife Alpha",
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_24 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_24.data.customerId,
        invite_date: moment().subtract(8, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_25 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: CUSTOMER_25.data.customerId,
        invite_date: moment().subtract(10, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_26 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_26.data.customerId,
        invite_date: moment().subtract(10, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_27 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_27.data.customerId,
        invite_date: moment().subtract(10, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_28 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_28.data.customerId,
        invite_date: moment().subtract(10, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_29 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_29.data.customerId,
        invite_date: moment().subtract(10, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_30 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: CUSTOMER_30.data.customerId,
        invite_date: moment().subtract(10, "months").toDate(),
        leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_7 } from './business';
import * as customer from './customers';
import moment from "moment";

const type = "postgres"
const modelName = "business_employee"

export const BUSINESS_EMPLOYEE_1 = {
    type,
    modelName,
    data: {
        "business_account_id": BUSINESS_ACCOUNT_1.data.business_account_id,
        "customer_id": customer.CUSTOMER_1.data.customerId,
        "employment_start_date": "2019-12-30T00:00:00Z",
        "employment_leave_date": "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_2 = {
    type,
    modelName,
    data: {
        "business_account_id": BUSINESS_ACCOUNT_1.data.business_account_id,
        "customer_id": customer.CUSTOMER_2.data.customerId,
        "employment_start_date": "2019-12-30T00:00:00Z",
        "employment_leave_date": "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_7 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_7.data.customerId,
        employment_start_date: moment().subtract(26, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_8 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_8.data.customerId,
        employment_start_date: moment().subtract(61, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem


export const BUSINESS_EMPLOYEE_9 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_9.data.customerId,
        employment_start_date: moment().subtract(40, "days").toDate(),
        employment_leave_date: moment().add(5, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_10 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_10.data.customerId,
        employment_start_date: moment().subtract(20, "days").toDate(),
        employment_leave_date: moment().add(5, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_11 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_11.data.customerId,
        employment_start_date: moment().subtract(20, "days").toDate(),
        employment_leave_date: moment().add(5, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_13 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_13.data.customerId,
        employment_start_date: moment().subtract(6, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_35 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_35.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_MEDITOPIA_1 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_MEDITOPIA_1.data.customerId,
        employment_start_date: moment().subtract(26, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_MEDITOPIA_2 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
        employment_start_date: moment().subtract(26, "days").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_52 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_52.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_54 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_54.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_55 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_55.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_56 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_56.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_57 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_57.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const  BUSINESS_EMPLOYEE_58 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
        customer_id: customer.CUSTOMER_58.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_61 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_61.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem


export const BUSINESS_EMPLOYEE_67 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_67.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_68 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_68.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem


export const BUSINESS_EMPLOYEE_71 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_71.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_72 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_72.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_76 = {
    type,
    modelName,
    data: {
        "business_account_id": BUSINESS_ACCOUNT_1.data.business_account_id,
        "customer_id": customer.CUSTOMER_76.data.customerId,
        "employment_start_date": "2019-12-30T00:00:00Z",
        "employment_leave_date": "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;


export const BUSINESS_EMPLOYEE_84 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_84.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_86 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_86.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_132 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_132.data.customerId,
        employment_start_date: moment().subtract(6, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

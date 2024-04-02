import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";
import {
    BUSINESS_ACCOUNT_1,
    BUSINESS_ACCOUNT_10_GHI_REWARDS,
    BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY,
    BUSINESS_ACCOUNT_3,
    BUSINESS_ACCOUNT_4,
    BUSINESS_ACCOUNT_6,
    BUSINESS_ACCOUNT_13_GHI_REWARDS,
} from "./business";

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_1 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_1.data.customerId,
        employment_start_date: "2019-12-30T00:00:00Z",
        employment_leave_date: "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_2 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_2.data.customerId,
        employment_start_date: "2019-12-30T00:00:00Z",
        employment_leave_date: "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_3 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_3.data.customerId,
        employment_start_date: moment().subtract(6, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_4 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_4.data.customerId,
        employment_start_date: moment().subtract(4, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_31 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
        customer_id: customer.CUSTOMER_31.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_34 = {
    type,
    modelName,
    data: {
        business_employee_id: generateRandomPostgresId(),
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_34.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

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

export const BUSINESS_EMPLOYEE_94 = {
    type,
    modelName,
    data: {
        business_employee_id: generateRandomPostgresId(),
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_94.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_116 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_117 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(5, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_118 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_119 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_120 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_121 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_127 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_128 = {
    type,
    modelName,
    data: {
        business_employee_id: generateRandomPostgresId(),
        business_account_id: BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY.data.business_account_id,
        customer_id: customer.CUSTOMER_128_WELLBEING_ELIGIBILITY.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_129 = {
    type,
    modelName,
    data: {
        business_employee_id: generateRandomPostgresId(),
        business_account_id: BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY.data.business_account_id,
        customer_id: customer.CUSTOMER_129_WELLBEING_ELIGIBILITY.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_130 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().subtract(1, "weeks").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_131 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_133 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_133_GHI_FUTURE.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_134 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_134_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_135 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_135_GHI_FUTURE.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_136 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_136_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_137 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_13_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_137_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_138 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
        customer_id: customer.CUSTOMER_138.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_139 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_139_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_140 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_13_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_140_GHI_REWARDS.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";
import {
    BUSINESS_ACCOUNT_10_GHI_REWARDS,
    BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY,
    BUSINESS_ACCOUNT_13_GHI_REWARDS,
} from "./business";

const type = "postgres";
const modelName = "business_employee";

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

export const BUSINESS_EMPLOYEE_REMOVED = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_GH_REMOVED.data.customerId,
        employment_start_date: moment().subtract(3, "years").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

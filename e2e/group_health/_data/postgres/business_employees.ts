import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";
import {
    BUSINESS_ACCOUNT_10_GHI_REWARDS,
    BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY,
    BUSINESS_ACCOUNT_13_GHI_REWARDS,
    BUSINESS_ACCOUNT_14_GIP_REWARDS,
    BUSINESS_ACCOUNT_GHI_8,
} from "./business";

const type = "postgres";
const modelName = "business_employee";

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

export const BUSINESS_EMPLOYEE_141 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_141.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_142 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_14_GIP_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_142.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_143 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_14_GIP_REWARDS.data.business_account_id,
        customer_id: customer.CUSTOMER_143.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_13_GHI_REWARDS,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_3,
  BUSINESS_ACCOUNT_5,
} from "./business";

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_2 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_2.data.customerId,
    employment_start_date: "2019-12-30T00:00:00Z",
    employment_leave_date: "2999-12-31T00:00:00Z",
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_5 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_5.data.customerId,
    employment_start_date: moment().toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_6 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_6.data.customerId,
    employment_start_date: moment().subtract(7, "days").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_7 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_7.data.customerId,
    employment_start_date: moment().subtract(26, "days").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_8 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_8.data.customerId,
    employment_start_date: moment().subtract(26, "days").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_15 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_15.data.customerId,
    employment_start_date: moment().subtract(6, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_16 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_16.data.customerId,
    employment_start_date: moment().subtract(6, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_16_OLD = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_16.data.customerId,
    employment_start_date: moment().subtract(14, "months").toDate(),
    employment_leave_date: moment().subtract(6, "months").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_17 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_17.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_18 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_18.data.customerId,
    employment_start_date: moment().subtract(13, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_19 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_19.data.customerId,
    employment_start_date: moment().subtract(13, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_20 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_20.data.customerId,
    employment_start_date: moment().subtract(13, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_21 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_21.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_27 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_27.data.customerId,
    employment_start_date: moment().subtract(10, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_28 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_28.data.customerId,
    employment_start_date: moment().subtract(10, "months").toDate(),
    employment_leave_date: moment().subtract(2, "days").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_39 = {
  type,
  modelName,
  data: {
    business_employee_id: generateRandomPostgresId(),
    business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
    customer_id: customer.CUSTOMER_39.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_39_CONCURRENT_EMPLOYMENT = {
  type,
  modelName,
  data: {
    business_employee_id: generateRandomPostgresId(),
    business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
    customer_id: customer.CUSTOMER_39.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_40 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_40.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_42 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_42.data.customerId,
    employment_start_date: moment().subtract(26, "days").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_47 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_47.data.customerId,
    employment_start_date: moment().subtract(12, "months").toDate(),
    employment_leave_date: moment().add(11, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_44 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_employee_id: generateRandomPostgresId(),
    business_account_id: BUSINESS_ACCOUNT_5.data.business_account_id,
    customer_id: customer.CUSTOMER_44.data.customerId,
    employment_start_date: moment().subtract(12, "months").toDate(),
    employment_leave_date: moment().add(11, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_50 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_50.data.customerId,
    employment_start_date: moment().subtract(12, "months").toDate(),
    employment_leave_date: moment().add(11, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_65 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_65.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_66 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_66.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_71 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_71.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_73 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
    customer_id: customer.CUSTOMER_73.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_84 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_84.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_89 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
    customer_id: customer.CUSTOMER_89.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_138 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_138.data.customerId,
    employment_start_date: moment().subtract(6, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_139 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_139.data.customerId,
    employment_start_date: moment().subtract(6, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_142 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_142.data.customerId,
    employment_start_date: moment().subtract(2, "days").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
  },
} as IDatabaseItem;

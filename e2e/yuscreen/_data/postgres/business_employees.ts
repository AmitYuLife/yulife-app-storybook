import {
  generateRandomMongoId,
  generateRandomPostgresId,
  IDatabaseItem,
} from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_6,
  BUSINESS_ACCOUNT_7,
  BUSINESS_ACCOUNT_GDent_9,
} from "./business";
import moment from "moment";

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_1 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_1.data.customerId,
    employment_start_date: "2019-12-30T00:00:00Z",
    employment_leave_date: "2999-12-31T00:00:00Z",
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_46 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
    customer_id: customer.CUSTOMER_43.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_49 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
    customer_id: customer.CUSTOMER_49.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_51 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
    customer_id: customer.CUSTOMER_51.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_53 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
    customer_id: customer.CUSTOMER_53.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_93 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_93.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_95 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_95.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_96 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_96.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_97 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_97.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_98 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_98.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_99 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_99.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_100 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_100.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_101 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_101.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_102 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_102.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_103 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_103.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_104 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_104.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_105 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_105.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_106 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_106.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_107 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    customer_id: customer.CUSTOMER_107.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_109 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_109.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_110 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_110.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_115 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
    customer_id: customer.CUSTOMER_115.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_125 = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
    customer_id: customer.CUSTOMER_125.data.customerId,
    employment_start_date: moment().subtract(1, "year").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_138_a = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
    customer_id: customer.CUSTOMER_138.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_138_b = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
    customer_id: customer.CUSTOMER_138.data.customerId,
    employment_start_date: moment().subtract(6, "months").toDate(),
    employment_leave_date: moment().add(12, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_138_c = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_7.data.business_account_id,
    customer_id: customer.CUSTOMER_138.data.customerId,
    employment_start_date: moment().subtract(3, "months").toDate(),
    employment_leave_date: moment().add(13, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_139 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_6.data.business_account_id,
    customer_id: customer.CUSTOMER_139.data.customerId,
    employment_start_date: moment().subtract(8, "months").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_MAXIMISE_YU = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
    customer_id: customer.CUSTOMER_MAXIMISE_YU.data.customerId,
    employment_start_date: moment().subtract(3, "years").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_140 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
    customer_id: customer.CUSTOMER_140.data.customerId,
    employment_start_date: moment().subtract(3, "years").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_141 = {
  type: "postgres",
  modelName: "business_employee",
  data: {
    business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
    customer_id: customer.CUSTOMER_141.data.customerId,
    employment_start_date: moment().subtract(3, "years").toDate(),
    employment_leave_date: moment().add(10, "years").toDate(),
    business_employee_id: generateRandomMongoId(),
  },
} as IDatabaseItem;

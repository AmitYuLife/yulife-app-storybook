import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PLANET_EXPRESS } from "./business";
import * as customers from "./customers";
import moment = require("moment");

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_FRY = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    customer_id: customers.CUSTOMER_FRY.data.customerId,
    employment_start_date: moment().subtract(3, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_LEELA = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    customer_id: customers.CUSTOMER_LEELA.data.customerId,
    employment_start_date: moment().subtract(3, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_BENDER = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    customer_id: customers.CUSTOMER_BENDER.data.customerId,
    employment_start_date: moment().subtract(8, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_ZOIDBERG = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    customer_id: customers.CUSTOMER_ZOIDBERG.data.customerId,
    employment_start_date: moment().subtract(5, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_ZAPP = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    customer_id: customers.CUSTOMER_ZAPP.data.customerId,
    employment_start_date: moment().subtract(5, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_AMY = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    customer_id: customers.CUSTOMER_AMY.data.customerId,
    employment_start_date: moment().subtract(3, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_HERMES = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    customer_id: customers.CUSTOMER_HERMES.data.customerId,
    employment_start_date: moment().subtract(3, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_KIF = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    customer_id: customers.CUSTOMER_KIF.data.customerId,
    employment_start_date: moment().subtract(3, "years").toDate(),
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_CALCULON = {
  type,
  modelName,
  data: {
    business_account_id: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    customer_id: customers.CUSTOMER_CALCULON.data.customerId,
    employment_start_date: moment().subtract(5, "years").toDate(),
  },
} as IDatabaseItem;

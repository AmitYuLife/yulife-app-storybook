import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_EMPLOYEE_34, BUSINESS_EMPLOYEE_94 } from "./business_employees";

const GENERIC_EMPLOYEE_INFO = {
  business_employee_id: generateRandomPostgresId(),
  archived: false,
  source: "external",
  data_import_operation: "insert",
  business_unit: null,
  contract_type: null,
  department: null,
  employment_status: null,
  pay_grade: null,
  work_arrangement: null,
  created_at: moment().subtract(2, "days"),
  modified_at: moment().subtract(2, "days"),
  modified_by_id: null,
  created_by_id: null,
  work_location_country: null,
  work_location_postcode: null,
  base_salary: null,
  base_salary_currency: null,
  home_location_address1: null,
  home_location_address2: null,
  home_location_address3: null,
  home_location_city: null,
  home_location_country: null,
  job_title: null,
  title: null
}

export const BUSINESS_EMPLOYEE_INFO_34 = {
  type: "postgres",
  modelName: "business_employee_info",
  data: {
    ...GENERIC_EMPLOYEE_INFO,
    business_employee_id: BUSINESS_EMPLOYEE_34.data.business_employee_id,
    workLocationCountry: "UK"
  },
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_INFO_94 = {
  type: "postgres",
  modelName: "business_employee_info",
  data: {
    ...GENERIC_EMPLOYEE_INFO,
    business_employee_id: BUSINESS_EMPLOYEE_94.data.business_employee_id,
  },
} as IDatabaseItem
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_EMPLOYEE_139, BUSINESS_EMPLOYEE_141 } from "./business_employees";
import { CUSTOMER_139, CUSTOMER_141 } from "./customers";

export const GENERIC_EMPLOYEE_INFO = {
  archived: false,
  source: "external",
  data_import_operation: "insert",
  business_unit_preset_id: null,
  contract_type_preset_id: null,
  department_preset_id: null,
  employment_status_preset_id: null,
  pay_grade_preset_id: null,
  work_arrangement_preset_id: null,
  created_at: moment().subtract(2, "days"),
  modified_at: moment().subtract(2, "days"),
  modified_by_id: null,
  created_by_id: null,
  work_location_country: null,
  work_location_postcode: null,
  work_location_name_preset_id: null,
  base_salary: null,
  base_salary_currency: null,
  home_location_address1: null,
  home_location_address2: null,
  home_location_address3: null,
  home_location_city: null,
  home_location_country: null,
  job_title: null,
  title: null,
  date_of_birth: null,
  sex_at_birth: null,
  legal_first_name: null,
  legal_last_name: null,
  employment_email: null,
};

export const BUSINESS_EMPLOYEE_INFO_1 = {
  type: "postgres",
  modelName: "business_employee_info",
  data: {
    ...GENERIC_EMPLOYEE_INFO,
    baseSalary: 100000,
    business_employee_id: BUSINESS_EMPLOYEE_141.data.business_employee_id,
    date_of_birth: moment().subtract(25, "years").toDate(),
    legalIdentifier: "AA127108C",
    legal_first_name: CUSTOMER_141.data.firstName,
    legal_last_name: CUSTOMER_141.data.lastName,
    employment_email: CUSTOMER_141.data.email,
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_INFO_139 = {
  type: "postgres",
  modelName: "business_employee_info",
  data: {
    ...GENERIC_EMPLOYEE_INFO,
    baseSalary: 100000,
    business_employee_id: BUSINESS_EMPLOYEE_139.data.business_employee_id,
    date_of_birth: moment().subtract(25, "years").toDate(),
    legalIdentifier: "AA127108C",
    legal_first_name: CUSTOMER_139.data.firstName,
    legal_last_name: CUSTOMER_139.data.lastName,
    employment_email: CUSTOMER_139.data.email,
  },
} as IDatabaseItem;

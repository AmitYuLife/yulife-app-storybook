import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_EMPLOYEE_17, BUSINESS_EMPLOYEE_18 } from "./business_employees";
import moment from "moment";
import { BEI_17_DEPARTMENT, BEI_18_CONTRACT_TYPE } from "./business_employee_info_field_preset";
import * as c from "./customers";

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
};

export const BUSINESS_EMPLOYEE_INFO_17 = {
  type: "postgres",
  modelName: "business_employee_info",
  data: {
    ...GENERIC_EMPLOYEE_INFO,
    business_employee_id: BUSINESS_EMPLOYEE_17.data.business_employee_id,
    date_of_birth: moment().subtract(22, "years").toDate(),
    work_location_country: "GB",
    work_location_postcode: "TW1 3EN",
    department_preset_id: BEI_17_DEPARTMENT.data.business_employee_info_field_preset_id,
    job_title: "Stock Trader",
    legal_first_name: c.CUSTOMER_17.data.firstName,
    legal_last_name: c.CUSTOMER_17.data.lastName,
    employment_email: c.CUSTOMER_17.data.email,
  },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_INFO_18 = {
  type: "postgres",
  modelName: "business_employee_info",
  data: {
    ...GENERIC_EMPLOYEE_INFO,
    business_employee_id: BUSINESS_EMPLOYEE_18.data.business_employee_id,
    date_of_birth: moment().subtract(27, "years").toDate(),
    work_location_country: "GB",
    work_location_postcode: "TW1 3EN",
    contract_type_preset_id: BEI_18_CONTRACT_TYPE.data.business_employee_info_field_preset_id,
    job_title: "Lead Vocalist",
    legal_first_name: c.CUSTOMER_18.data.firstName,
    legal_last_name: c.CUSTOMER_18.data.lastName,
    employment_email: c.CUSTOMER_18.data.email,
  },
} as IDatabaseItem;

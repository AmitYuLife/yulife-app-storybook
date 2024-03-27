import { v4 as uuid } from "uuid";
import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_EMPLOYEE_128, BUSINESS_EMPLOYEE_129, BUSINESS_EMPLOYEE_39, BUSINESS_EMPLOYEE_44 } from "./business_employees";

export const BUSINESS_EMPLOYEE_INFO_FIELD_PRESET_1 = {
  type: "postgres",
  modelName: "business_employee_info_field_preset",
  data: {
    business_employee_info_field_preset_id: uuid(),
    business_account_id: BUSINESS_EMPLOYEE_39.data.business_account_id,
    value: "Finance",
    field: "department",
  },
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_INFO_FIELD_PRESET_2 = {
  type: "postgres",
  modelName: "business_employee_info_field_preset",
  data: {
    business_employee_info_field_preset_id: uuid(),
    business_account_id: BUSINESS_EMPLOYEE_44.data.business_account_id,
    value: "Sales",
    field: "department",
  },
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_INFO_FIELD_PRESET_3 = {
  type: "postgres",
  modelName: "business_employee_info_field_preset",
  data: {
    business_employee_info_field_preset_id: uuid(),
    business_account_id: BUSINESS_EMPLOYEE_128.data.business_account_id,
    value: "Senior Management",
    field: "department",
  },
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_INFO_FIELD_PRESET_4 = {
  type: "postgres",
  modelName: "business_employee_info_field_preset",
  data: {
    business_employee_info_field_preset_id: uuid(),
    business_account_id: BUSINESS_EMPLOYEE_128.data.business_account_id,
    value: "Grade 55",
    field: "payGrade",
  },
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_INFO_FIELD_PRESET_5 = {
  type: "postgres",
  modelName: "business_employee_info_field_preset",
  data: {
    business_employee_info_field_preset_id: uuid(),
    business_account_id: BUSINESS_EMPLOYEE_129.data.business_account_id,
    value: "Grade 45",
    field: "payGrade",
  },
} as IDatabaseItem

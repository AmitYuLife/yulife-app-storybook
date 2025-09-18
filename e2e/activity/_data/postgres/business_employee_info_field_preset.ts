import { IDatabaseItem, generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_EMPLOYEE_17, BUSINESS_EMPLOYEE_18 } from "./business_employees";

export const BEI_17_DEPARTMENT = {
  type: "postgres",
  modelName: "business_employee_info_field_preset",
  data: {
    business_employee_info_field_preset_id: generateRandomTransformedUuid(),
    business_account_id: BUSINESS_EMPLOYEE_17.data.business_account_id,
    field: "department",
    value: "Dance Central",
  },
} as IDatabaseItem;

export const BEI_18_CONTRACT_TYPE = {
  type: "postgres",
  modelName: "business_employee_info_field_preset",
  data: {
    business_employee_info_field_preset_id: generateRandomTransformedUuid(),
    business_account_id: BUSINESS_EMPLOYEE_18.data.business_account_id,
    field: "contractType",
    value: "Permanent",
  },
} as IDatabaseItem;

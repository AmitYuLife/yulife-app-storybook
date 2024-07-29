import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_EMPLOYEE_LEAVER } from "./business_employees";

const GENERIC_EMPLOYEE_INFO = {
    business_employee_id: generateRandomPostgresId(),
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
    base_salary: null,
    base_salary_currency: null,
    home_location_address1: null,
    home_location_address2: null,
    home_location_address3: null,
    home_location_city: null,
    home_location_country: null,
    job_title: null,
    title: null,
};

export const BUSINESS_EMPLOYEE_INFO_34 = {
    type: "postgres",
    modelName: "business_employee_info",
    data: {
        ...GENERIC_EMPLOYEE_INFO,
        business_employee_id: BUSINESS_EMPLOYEE_LEAVER.data.business_employee_id,
        workLocationCountry: "UK",
    },
} as IDatabaseItem;
  
import {
  generateRandomInbox,
  generateRandomPostgresId,
  IDatabaseItem,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_EMPLOYEE_17 } from "./business_employees";

export const BUSINESS_EMPLOYEE_INFO_17 = {
  type: "postgres",
  modelName: "business_employee_info",
  data: {
    business_employee_id: BUSINESS_EMPLOYEE_17.data.business_employee_id,
    employment_email: generateRandomInbox(),
    source: "external",
    data_import_operation: "insert",
  },
} as IDatabaseItem;

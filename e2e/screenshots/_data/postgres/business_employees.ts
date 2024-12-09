import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";
import { BUSINESS_ACCOUNT_3 } from "./business";

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_73 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
        customer_id: customer.CUSTOMER_73.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate(),
    },
} as IDatabaseItem;

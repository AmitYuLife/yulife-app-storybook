import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as business from "./business";
import * as customer from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_CARMY = {
    type,
    modelName,
    data: {
        business_employee_id: generateRandomPostgresId(),
        business_account_id: business.BUSINESS_THE_BEAR.data.business_account_id,
        customer_id: customer.CUSTOMER_CARMY.data.customerId,
        employment_start_date: moment().subtract(1, "month").toDate(),
        employment_leave_date: moment().add(2, "years").toDate(),
    },
} as IDatabaseItem;

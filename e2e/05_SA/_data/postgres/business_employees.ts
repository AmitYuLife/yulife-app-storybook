import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_SA_1,} from './business';
import { CUSTOMER_SA_1, CUSTOMER_SA_2 } from './customers';
import moment = require('moment');


const type = "postgres"
const modelName = "business_employee"

export const BUSINESS_EMPLOYEE_SA_1 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
        customer_id: CUSTOMER_SA_1.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_SA_2 = {
    type: "postgres",
    modelName: "business_employee",
    data: {
        business_account_id: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
        customer_id: CUSTOMER_SA_2.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;


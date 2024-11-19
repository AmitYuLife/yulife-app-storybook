import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1,} from './business';
import * as customer from './customers';
import moment = require('moment');

const type = "postgres"
const modelName = "business_employee"

export const BUSINESS_EMPLOYEE_1 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_1.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    },
} as IDatabaseItem;

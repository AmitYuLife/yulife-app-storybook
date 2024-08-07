import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PLANET_EXPRESS } from './business';
import * as customers from './customers';
import moment = require('moment');

const type = "postgres";
const modelName = "business_employee";

export const BUSINESS_EMPLOYEE_FRY = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_PLANET_EXPRESS.data.business_account_id,
        customer_id: customers.CUSTOMER_FRY.data.customerId,
        employment_start_date: moment().subtract(3, "years").toDate(),
    }
} as IDatabaseItem;
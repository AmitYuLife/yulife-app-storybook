import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_4, /*BUSINESS_ACCOUNT_7 */} from './business';
import * as customer from './customers';
import moment from "moment";

const type = "postgres"
const modelName = "business_employee"

export const BUSINESS_EMPLOYEE_1 = {
    type,
    modelName,
    data: {
        "business_account_id": BUSINESS_ACCOUNT_1.data.business_account_id,
        "customer_id": customer.CUSTOMER_1.data.customerId,
        "employment_start_date": "2019-12-30T00:00:00Z",
        "employment_leave_date": "2999-12-31T00:00:00Z",
    },
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_34 = {
    type,
    modelName,
    data:{
        business_employee_id: generateRandomPostgresId(),
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        customer_id: customer.CUSTOMER_34.data.customerId,
        employment_start_date: moment().subtract(1, "year").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem

export const BUSINESS_EMPLOYEE_FIIT = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_FIIT.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_BODY_COACH = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_2.data.business_account_id,
        customer_id: customer.CUSTOMER_BODY_COACH.data.customerId,
        employment_start_date: moment().subtract(3, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem;

export const BUSINESS_EMPLOYEE_122 = {
    type,
    modelName,
    data: {
        business_account_id: BUSINESS_ACCOUNT_1.data.business_account_id,
        customer_id: customer.CUSTOMER_122.data.customerId,
        employment_start_date: moment().subtract(8, "months").toDate(),
        employment_leave_date: moment().add(10, "years").toDate()
    }
} as IDatabaseItem


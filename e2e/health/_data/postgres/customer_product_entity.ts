import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment"
import { BUSINESS_EMPLOYEE_FRY } from "./business_employees";

const type = "postgres"
const modelName = "customer_product_entity"

export const CPE_FRY_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000000001",
        customer_id: customer.CUSTOMER_FRY.data.customerId,
        "earn_rate": 10,
        start_date:moment().subtract(6, "months").toDate(),
        underwriting_step: null,
        is_banned_from_product: false,
        taken_up: true,
        product_variant_id: "AIG_ReGL_01_01",
        business_employee_id: BUSINESS_EMPLOYEE_FRY.data.business_employee_id
    }
} as IDatabaseItem
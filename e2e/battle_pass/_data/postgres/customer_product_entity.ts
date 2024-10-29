import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment"
import { BUSINESS_EMPLOYEE_CARMY } from "./business_employees";

const type = "postgres"
const modelName = "customer_product_entity"

export const CPE_CARMY = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000031",
        customer_id: customer.CUSTOMER_CARMY.data.customerId,
        earn_rate: 20,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true,
    },
} as IDatabaseItem;
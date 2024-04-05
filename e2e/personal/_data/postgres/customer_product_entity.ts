import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment"

const type = "postgres"
const modelName = "customer_product_entity"

export const CPE_BUSINESS_LEAVER = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000001492",
        customer_id: customer.CUSTOMER_LEAVER.data.customerId,
        "earn_rate": 10,
        "start_date": "2022-01-01",
        "end_date": "2022-12-31",
        "underwriting_step": null,
        "is_banned_from_product": false,
        "taken_up": true,
        product_variant_id: "AIG_ReGL_01_01",
    }
} as IDatabaseItem

export const CPE_126_WELLBEING = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011412",
        customer_id: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
        earn_rate: 1,
        product_variant_id: "YuLife_Wellbeing_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "years").format("YYYY-MM-DD"),
        end_date: moment().subtract(10, "weeks").format("YYYY-MM-DD")
    }
} as IDatabaseItem

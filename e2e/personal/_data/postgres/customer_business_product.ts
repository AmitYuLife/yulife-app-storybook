import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { BUSINESS_PRODUCT_1_WB, BUSINESS_PRODUCT_ENDED } from "./business_product"
import * as cpe from "./customer_product_entity"
import { CUSTOMER_126_LEAVER_WELLBEING, CUSTOMER_LEAVER } from "./customers"
import moment from "moment"

const type = "postgres"
const modelName = "customer_business_product"

export const CGP_LEAVER = {
    type,
    modelName,
    business_product_id: BUSINESS_PRODUCT_ENDED.product.data.product_id,
    data: {
        business_product_id: BUSINESS_PRODUCT_ENDED.product.data.product_id,
        customer_product_id: cpe.CPE_BUSINESS_LEAVER.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(3, "months").toDate(),
        data: {
            salary: 60000,
            country: "UK",
            date_of_birth: CUSTOMER_LEAVER.data.date_of_birth,
        }
    }
} as IDatabaseItem

export const CGP_126_WELLBEING_LEAVER = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
        customer_product_id: cpe.CPE_126_WELLBEING.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "years").toDate(),
        data: {
            salary: 60000,
            country: "UK",
            date_of_birth: CUSTOMER_126_LEAVER_WELLBEING.data.date_of_birth,
        }
    }
} as IDatabaseItem

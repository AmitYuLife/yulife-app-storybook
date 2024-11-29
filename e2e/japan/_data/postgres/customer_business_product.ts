import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import * as cpe from "./customer_product_entity"
import * as bp from "./business_product";
import moment from "moment";

const type = "postgres"
const modelName = "customer_business_product"

export const CBP_1_WELLBEING = {
    type,
    modelName,
    data: {
        business_product_id: bp.BUSINESS_PRODUCT_1_WB.product.data.product_id,
        customer_product_id: cpe.CPE_Wellbeing_1.data.customer_product_id,
        category_id: 1,
        start_date: cpe.CPE_Wellbeing_1.data.start_date,
        data: {
            date_of_birth: cpe.CPE_Wellbeing_1.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem

export const CBP_2_DBI = {
    type,
    modelName,
    data: {
        business_product_id: bp.BUSINESS_PRODUCT_1_DBI.product.data.product_id,
        customer_product_id: cpe.CPE_DBI_1.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(6, "months").format("YYYY-MM-DD"),
        archived: false,
        data: {
            salary: 60000,
            country: "UK",
            product_salary: "60000"
        }
    }
} as IDatabaseItem

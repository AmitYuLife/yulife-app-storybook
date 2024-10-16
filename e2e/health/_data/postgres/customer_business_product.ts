import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as cpe from "./customer_product_entity";
import { BUSINESS_PRODUCT_PLANET_EXPRESS_RGL } from "./business_product";
import moment from "moment";

const type = "postgres";
const modelName = "customer_business_product";

export const CBP_FRY = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_PLANET_EXPRESS_RGL.product.data.product_id,
        customer_product_id: cpe.CPE_FRY_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(6, "m").format("YYYY-MM-DD"),
        archived: false,
        data: {
            salary: 60000,
            country: "UK",
            product_salary: "60000"
        }
    }
} as IDatabaseItem

export const CBP_LEELA = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_PLANET_EXPRESS_RGL.product.data.product_id,
        customer_product_id: cpe.CPE_LEELA_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(6, "m").format("YYYY-MM-DD"),
        archived: false,
        data: {
            salary: 60000,
            country: "UK",
            product_salary: "60000"
        }
    }
} as IDatabaseItem

export const CBP_ZOIDBERG = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_PLANET_EXPRESS_RGL.product.data.product_id,
        customer_product_id: cpe.CPE_ZOIDBERG_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(6, "m").format("YYYY-MM-DD"),
        archived: false,
        data: {
            salary: 45000,
            country: "UK",
            product_salary: "45000"
        }
    }
} as IDatabaseItem
import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { BUSINESS_PRODUCT_3, BUSINESS_PRODUCT_4_GCI, BUSINESS_PRODUCT_4_GIP, BUSINESS_PRODUCT_4_RGL } from "./business_product"
import { CUSTOMER_31, CUSTOMER_32 } from "./customers"
import { CPE_31, CPE_32_GCI, CPE_32_GIP, CPE_32_RGL } from "./customer_product_entity"

const type = "postgres"
const modelName = "customer_group_policy"

export const CGP_31 = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_3.data.product_id,
        customer_product_id: CPE_31.data.customer_product_id,
        business_product_code: "GLI",
        category_code:1,
        salary: 60000,
        country: "UK",
        start_date: CUSTOMER_31.data.start_date,
        date_of_birth: CUSTOMER_31.data.date_of_birth
    }
} as IDatabaseItem

export const CGP_32_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_RGL.data.product_id,
        customer_product_id: CPE_32_RGL.data.customer_product_id,
        business_product_code: "GLI",
        category_code: 1,
        salary: 100000,
        country: "UK",
        start_date: CUSTOMER_32.data.start_date,
        date_of_birth: CUSTOMER_32.data.date_of_birth
    }
} as IDatabaseItem

export const CGP_32_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.data.product_id,
        customer_product_id: CPE_32_GIP.data.customer_product_id,
        business_product_code: "GIP",
        category_code: 1,
        salary: 100000,
        country: "UK",
        start_date: CUSTOMER_32.data.start_date,
        date_of_birth: CUSTOMER_32.data.date_of_birth
    }
} as IDatabaseItem

export const CGP_32_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GCI.data.product_id,
        customer_product_id: CPE_32_GCI.data.customer_product_id,
        business_product_code: "GCI",
        category_code: 1,
        salary: 100000,
        country: "UK",
        start_date: CUSTOMER_32.data.start_date,
        date_of_birth: CUSTOMER_32.data.date_of_birth
    }
} as IDatabaseItem
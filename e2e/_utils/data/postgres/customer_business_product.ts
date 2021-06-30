import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { BUSINESS_PRODUCT_3, BUSINESS_PRODUCT_4_GCI, BUSINESS_PRODUCT_4_GIP, BUSINESS_PRODUCT_4_RGL } from "./business_product"
import { CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_34 } from "./customers"
import { CPE_31, CPE_32_GCI, CPE_32_GIP, CPE_32_RGL, CPE_33_GCI, CPE_33_GIP, CPE_33_RGL, CPE_34_GCI, CPE_34_GIP, CPE_34_RGL } from "./customer_product_entity"

const type = "postgres"
const modelName = "customer_business_product"

export const CGP_31 = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_3.data.product_id,
        customer_product_id: CPE_31.data.customer_product_id,
        category_id:1,
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
        category_id: 1,
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
        category_id: 1,
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
        category_id: 1,
        salary: 100000,
        country: "UK",
        start_date: CUSTOMER_32.data.start_date,
        date_of_birth: CUSTOMER_32.data.date_of_birth
    }
} as IDatabaseItem

export const CGP_33_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_RGL.data.product_id,
        customer_product_id: CPE_33_RGL.data.customer_product_id,
        category_id: 1,
        salary: 100000,
        country: "UK",
        start_date: CUSTOMER_33.data.start_date,
        date_of_birth: CUSTOMER_33.data.date_of_birth
    }
} as IDatabaseItem

export const CGP_33_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.data.product_id,
        customer_product_id: CPE_33_GIP.data.customer_product_id,
        category_id: 1,
        salary: 100000,
        country: "UK",
        start_date: CUSTOMER_33.data.start_date,
        date_of_birth: CUSTOMER_33.data.date_of_birth
    }
} as IDatabaseItem

export const CGP_33_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GCI.data.product_id,
        customer_product_id: CPE_33_GCI.data.customer_product_id,
        category_id: 1,
        salary: 100000,
        country: "UK",
        start_date: CUSTOMER_33.data.start_date,
        date_of_birth: CUSTOMER_33.data.date_of_birth
    }
} as IDatabaseItem

export const CGP_34_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_RGL.data.product_id,
        customer_product_id: CPE_34_RGL.data.customer_product_id,
        category_id: 1,
        salary: 100000,
        country: "UK",
        start_date: CUSTOMER_34.data.start_date,
        date_of_birth: CUSTOMER_34.data.date_of_birth
    }
} as IDatabaseItem

export const CGP_34_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.data.product_id,
        customer_product_id: CPE_34_GIP.data.customer_product_id,
        category_id: 1,
        salary: 100000,
        country: "UK",
        start_date: CUSTOMER_34.data.start_date,
        date_of_birth: CUSTOMER_34.data.date_of_birth
    }
} as IDatabaseItem

export const CGP_34_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GCI.data.product_id,
        customer_product_id: CPE_34_GCI.data.customer_product_id,
        category_id: 1,
        salary: 100000,
        country: "UK",
        start_date: CUSTOMER_34.data.start_date,
        date_of_birth: CUSTOMER_34.data.date_of_birth
    }
} as IDatabaseItem
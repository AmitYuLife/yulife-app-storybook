import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment"
import { BUSINESS_EMPLOYEE_BENDER, BUSINESS_EMPLOYEE_FRY, BUSINESS_EMPLOYEE_LEELA, BUSINESS_EMPLOYEE_ZAPP, BUSINESS_EMPLOYEE_ZOIDBERG, BUSINESS_EMPLOYEE_AMY, BUSINESS_EMPLOYEE_HERMES,BUSINESS_EMPLOYEE_KIF } from "./business_employees";

const type = "postgres"
const modelName = "customer_product_entity"

export const CPE_FRY_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000000001",
        customer_id: customer.CUSTOMER_FRY.data.customerId,
        earn_rate: 10,
        start_date:moment().subtract(6, "months").toDate(),
        underwriting_step: null,
        is_banned_from_product: false,
        taken_up: true,
        product_variant_id: "AIG_ReGL_01_01",
        business_employee_id: BUSINESS_EMPLOYEE_FRY.data.business_employee_id
    }
} as IDatabaseItem

export const CPE_LEELA_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000000002",
        customer_id: customer.CUSTOMER_LEELA.data.customerId,
        earn_rate: 10,
        start_date:moment().subtract(6, "months").toDate(),
        underwriting_step: null,
        is_banned_from_product: false,
        taken_up: true,
        product_variant_id: "AIG_ReGL_01_01",
        business_employee_id: BUSINESS_EMPLOYEE_LEELA.data.business_employee_id
    }
} as IDatabaseItem

export const CPE_BENDER_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000000003",
        customer_id: customer.CUSTOMER_BENDER.data.customerId,
        earn_rate: 10,
        start_date:moment().subtract(6, "months").toDate(),
        underwriting_step: null,
        is_banned_from_product: false,
        taken_up: true,
        product_variant_id: "AIG_ReGL_01_01",
        business_employee_id: BUSINESS_EMPLOYEE_BENDER.data.business_employee_id
    }
} as IDatabaseItem

export const CPE_ZOIDBERG_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000000004",
        customer_id: customer.CUSTOMER_ZOIDBERG.data.customerId,
        earn_rate: 10,
        start_date:moment().subtract(6, "months").toDate(),
        underwriting_step: null,
        is_banned_from_product: false,
        taken_up: true,
        product_variant_id: "AIG_ReGL_01_01",
        business_employee_id: BUSINESS_EMPLOYEE_ZOIDBERG.data.business_employee_id
    }
} as IDatabaseItem

export const CPE_ZAPP_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000000005",
        customer_id: customer.CUSTOMER_ZAPP.data.customerId,
        earn_rate: 10,
        start_date:moment().subtract(6, "months").toDate(),
        underwriting_step: null,
        is_banned_from_product: false,
        taken_up: true,
        product_variant_id: "AIG_ReGL_01_01",
        business_employee_id: BUSINESS_EMPLOYEE_ZAPP.data.business_employee_id
    }
} as IDatabaseItem

export const CPE_AMY_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000000006",
        customer_id: customer.CUSTOMER_AMY.data.customerId,
        earn_rate: 10,
        start_date:moment().subtract(6, "months").toDate(),
        underwriting_step: null,
        is_banned_from_product: false,
        taken_up: true,
        product_variant_id: "AIG_ReGL_01_01",
        business_employee_id: BUSINESS_EMPLOYEE_AMY.data.business_employee_id
    }
} as IDatabaseItem

export const CPE_HERMES_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000000007",
        customer_id: customer.CUSTOMER_HERMES.data.customerId,
        earn_rate: 10,
        start_date:moment().subtract(6, "months").toDate(),
        underwriting_step: null,
        is_banned_from_product: false,
        taken_up: true,
        product_variant_id: "AIG_ReGL_01_01",
        business_employee_id: BUSINESS_EMPLOYEE_HERMES.data.business_employee_id
    }
} as IDatabaseItem

export const CPE_KIF_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000000008",
        customer_id: customer.CUSTOMER_KIF.data.customerId,
        earn_rate: 10,
        start_date:moment().subtract(6, "months").toDate(),
        underwriting_step: null,
        is_banned_from_product: false,
        taken_up: true,
        product_variant_id: "AIG_ReGL_01_01",
        business_employee_id: BUSINESS_EMPLOYEE_KIF.data.business_employee_id
    }
} as IDatabaseItem
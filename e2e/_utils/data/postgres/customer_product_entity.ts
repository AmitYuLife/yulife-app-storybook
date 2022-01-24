import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_10, CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_34, CUSTOMER_9 } from "./customers";

const type = "postgres"
const modelName = "customer_product_entity"


export const CPE_1 = {
    type,
    modelName,
    data: {
        "customer_product_id": "YUCPID0000000032",
        "customer_id": CUSTOMER_9.data.customerId,
        "earn_rate": 20,
        "product_variant_id": "Covea_FIB_01_03",
        "start_date": null,
        "end_date": null,
        "underwriting_step": null,
        "is_banned_from_product": false,
        "archived": false,
        "archived_at": null,
        "taken_up": null,
        "accounted_for_join_date": null,
        "accounted_for_leave_date": null,
        "is_joiner": null,
    }
} as IDatabaseItem

export const CPE_31 = {
    type,
    modelName,
    data:{
        customer_product_id: "YUCPID0000000031",
        customer_id: CUSTOMER_31.data.customerId,
        earn_rate: 10,
        product_variant_id:"AIG_GLI_01_01",
        archived: false
    }
} as IDatabaseItem

export const CPE_32_RGL = {
    type,
    modelName,
    data:{
        customer_product_id: "YUCPID0000000132",
        customer_id: CUSTOMER_32.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_03",
        archived:false
    }
} as IDatabaseItem

export const CPE_32_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000232",
        customer_id: CUSTOMER_32.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_03",
        archived: false
    }
} as IDatabaseItem

export const CPE_32_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000332",
        customer_id: CUSTOMER_32.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_03",
        archived: false
    }
} as IDatabaseItem

export const CPE_33_RGL = {
    type,
    modelName,
    data:{
        customer_product_id: "YUCPID0000000133",
        customer_id: CUSTOMER_33.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_03",
        archived:false
    }
} as IDatabaseItem

export const CPE_33_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000233",
        customer_id: CUSTOMER_33.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_03",
        archived: false
    }
} as IDatabaseItem

export const CPE_33_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000333",
        customer_id: CUSTOMER_33.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_03",
        archived: false
    }
} as IDatabaseItem

export const CPE_34_RGL = {
    type,
    modelName,
    data:{
        customer_product_id: "YUCPID0000000134",
        customer_id: CUSTOMER_34.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_03",
        archived:false
    }
} as IDatabaseItem

export const CPE_34_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000234",
        customer_id: CUSTOMER_34.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_03",
        archived: false
    }
} as IDatabaseItem

export const CPE_34_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000343",
        customer_id: CUSTOMER_34.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_03",
        archived: false
    }
} as IDatabaseItem
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_10, CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_34, CUSTOMER_9, CUSTOMER_DENTAL_1, CUSTOMER_DENTAL_2, CUSTOMER_PLI_2, CUSTOMER_PLI_3, CUSTOMER_PLI_4, CUSTOMER_PLI_5 } from "./customers";
import moment from "moment"


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

export const CPE_DENTAL_1 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: CUSTOMER_DENTAL_1.data.customerId,
        customerProductId: "YUCPID0000000135",
        earn_rate: 10,
        productVariantId: "Bupa_Dent_01_03",
        startDate: moment().format(),
        endDate: moment("2199-12-31", "YYYY-MM-DD").format(),
        world_id: "forest",
        taken_up: true
    }
} as IDatabaseItem

export const CPE_DENTAL_2 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: CUSTOMER_DENTAL_2.data.customerId,
        customerProductId: "YUCPID0000000136",
        earn_rate: 2,
        productVariantId: "Bupa_Dent_01_01",
        startDate: moment().format(),
        endDate: moment("2199-12-31", "YYYY-MM-DD").format(),
        world_id: "forest",
        taken_up: true
    }
} as IDatabaseItem


export const CPE_PLI_2 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: CUSTOMER_PLI_2.data.customerId,
        customerProductId: "YUCPID0000000137",
        earn_rate: 0,
        start_date : "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        accounted_for_join_date: null,
        accounted_for_leave_date: null,
        is_joiner: null,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "forest",
    }
} as IDatabaseItem

export const CPE_PLI_3 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: CUSTOMER_PLI_3.data.customerId,
        customerProductId: "YUCPID0000000138",
        earn_rate: 6,
        start_date : "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        accounted_for_join_date: null,
        accounted_for_leave_date: null,
        is_joiner: null,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "forest",
    }
} as IDatabaseItem

export const CPE_PLI_4 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: CUSTOMER_PLI_4.data.customerId,
        customerProductId: "YUCPID0000000139",
        earn_rate: 10,
        start_date : "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        accounted_for_join_date: null,
        accounted_for_leave_date: null,
        is_joiner: null,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "forest",
    }
} as IDatabaseItem

export const CPE_PLI_5 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: CUSTOMER_PLI_5.data.customerId,
        customerProductId: "YUCPID0000000140",
        earn_rate: 10,
        start_date : "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        accounted_for_join_date: null,
        accounted_for_leave_date: null,
        is_joiner: null,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "ocean",
    }
} as IDatabaseItem
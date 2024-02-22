import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment"


const type = "postgres"
const modelName = "customer_product_entity"


export const CPE_1 = {
    type,
    modelName,
    data: {
        "customer_product_id": "YUCPID0000000032",
        customer_id: customer.CUSTOMER_9.data.customerId,
        "earn_rate": 20,
        product_variant_id: "Covea_FIB_01_01",
        "start_date": null,
        "end_date": null,
        "underwriting_step": null,
        "is_banned_from_product": false,
        "archived": false,
        "archived_at": null,
        "taken_up": null
    }
} as IDatabaseItem

export const CPE_31 = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000031",
        customer_id: customer.CUSTOMER_31.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_32_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000132",
        customer_id: customer.CUSTOMER_32.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_32_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000232",
        customer_id: customer.CUSTOMER_32.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_32_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000332",
        customer_id: customer.CUSTOMER_32.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_33_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000133",
        customer_id: customer.CUSTOMER_33.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_33_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000233",
        customer_id: customer.CUSTOMER_33.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_33_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000333",
        customer_id: customer.CUSTOMER_33.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_34_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000134",
        customer_id: customer.CUSTOMER_34.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true,
    }
} as IDatabaseItem

export const CPE_34_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000234",
        customer_id: customer.CUSTOMER_34.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_34_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000343",
        customer_id: customer.CUSTOMER_34.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_DENTAL_1 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_DENTAL_1.data.customerId,
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
        customer_id: customer.CUSTOMER_DENTAL_2.data.customerId,
        customerProductId: "YUCPID0000000136",
        earn_rate: 2,
        productVariantId: "Bupa_Dent_01_01",
        startDate: moment().format(),
        endDate: moment().add(7, "d").format(),
        world_id: "forest",
        taken_up: true
    }
} as IDatabaseItem

export const CPE_DENTAL_3 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_45.data.customerId,
        customerProductId: "YUCPID0000000141",
        earn_rate: 6,
        productVariantId: "Bupa_Dent_01_03",
        startDate: moment().format(),
        endDate: moment("2199-12-31", "YYYY-MM-DD").format(),
        world_id: "ocean",
        taken_up: true
    }
} as IDatabaseItem


export const CPE_PLI_2 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_PLI_2.data.customerId,
        customerProductId: "YUCPID0000000137",
        earn_rate: 0,
        start_date: "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "forest",
        taken_up: false
    }
} as IDatabaseItem

export const CPE_PLI_3 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_PLI_3.data.customerId,
        customerProductId: "YUCPID0000000138",
        earn_rate: 6,
        start_date: "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "forest",
        taken_up: false
    }
} as IDatabaseItem

export const CPE_PLI_4 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_PLI_4.data.customerId,
        customerProductId: "YUCPID0000000139",
        earn_rate: 10,
        start_date: "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "forest",
        taken_up: false
    }
} as IDatabaseItem

export const CPE_PLI_5 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_PLI_5.data.customerId,
        customerProductId: "YUCPID0000000140",
        earn_rate: 10,
        start_date: "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "ocean",
        taken_up: false
    }
} as IDatabaseItem

export const CPE_PLI_6 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_46.data.customerId,
        customerProductId: "YUCPID0000000142",
        earn_rate: 10,
        start_date: "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "ocean",
        taken_up: false
    }
} as IDatabaseItem

export const CPE_43_WELLBEING = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000143",
        customer_id: customer.CUSTOMER_43.data.customerId,
        earn_rate: 10,
        product_variant_id: "YuLife_Wellbeing_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_48_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000144",
        customer_id: customer.CUSTOMER_48.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_48_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000145",
        customer_id: customer.CUSTOMER_48.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_48_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000146",
        customer_id: customer.CUSTOMER_48.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_48_WELLBEING = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000148",
        customer_id: customer.CUSTOMER_48.data.customerId,
        earn_rate: 1,
        product_variant_id: "YuLife_Wellbeing_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_49_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000149",
        customer_id: customer.CUSTOMER_49.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_49_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000150",
        customer_id: customer.CUSTOMER_49.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_49_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000151",
        customer_id: customer.CUSTOMER_49.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_49_WELLBEING = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000152",
        customer_id: customer.CUSTOMER_49.data.customerId,
        earn_rate: 1,
        product_variant_id: "YuLife_Wellbeing_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem

export const CPE_51_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000153",
        customer_id: customer.CUSTOMER_51.data.customerId,
        earn_rate: 5,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_53_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000155",
        customer_id: customer.CUSTOMER_53.data.customerId,
        earn_rate: 0,
        product_variant_id: "AIG_GIP_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem


export const CPE_PLI_7 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_PLI_6.data.customerId,
        customerProductId: "YUCPID0000000156",
        earn_rate: 10,
        start_date: "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "ocean",
        taken_up: false
    }
} as IDatabaseItem

export const CPE_PLI_8 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_PLI_7.data.customerId,
        "customerProductId": "YUCPID0000000157",
        "earn_rate" : 0,
        "start_date" : "2022-10-04",
        "end_date" : "2199-12-31",
        "underwriting_step" : null,
        "is_banned_from_product" : false,
        "archived" : false,
        "archived_at" : null,
        "taken_up" : null,
        "created_at" : "2022-10-04T10:37:20.339Z",
        "created_by_id" : null,
        "modified_at" : "2022-10-04T10:37:23.768Z",
        "modified_by_id" : "1.92.0",
        product_variant_id : "Covea_FIB_02_01",
        "world_id" : "ocean"
    }
} as IDatabaseItem

export const CPE_PLI_9 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_PLI_9.data.customerId,
        "customerProductId": "YUCPID0000000158",
        "earn_rate" : 0,
        "start_date" : "2022-10-04",
        "end_date" : "2199-12-31",
        "underwriting_step" : null,
        "is_banned_from_product" : false,
        "archived" : false,
        "archived_at" : null,
        "taken_up" : null,
        "created_at" : "2022-10-04T10:37:20.339Z",
        "created_by_id" : null,
        "modified_at" : "2022-10-04T10:37:23.768Z",
        "modified_by_id" : "1.92.0",
        product_variant_id : "Bupa_Dent_01_01",
        "world_id" : "ocean"
    }
} as IDatabaseItem

export const CPE_PLI_10 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_PLI_10.data.customerId,
        "customerProductId": "YUCPID0000000159",
        "earn_rate" : 0,
        "start_date" : "2022-10-04",
        "end_date" : "2199-12-31",
        "underwriting_step" : null,
        "is_banned_from_product" : false,
        "archived" : false,
        "archived_at" : null,
        "taken_up" : null,
        "created_at" : "2022-10-04T10:37:20.339Z",
        "created_by_id" : null,
        "modified_at" : "2022-10-04T10:37:23.768Z",
        "modified_by_id" : "1.92.0",
        product_variant_id : "Covea_FIB_02_01",
        "world_id" : "forest"
    }
} as IDatabaseItem

export const CPE_74 = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000074",
        customer_id: customer.CUSTOMER_74.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem
    
export const CPE_82_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000001490",
        customer_id: customer.CUSTOMER_82.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, 'week')
    }
} as IDatabaseItem


export const CPE_85 = {
    type,
    modelName,
    data: {
        customer_product_id : "YUCPID00000001491",
        customer_id: customer.CUSTOMER_85.data.customerId,
        "earn_rate" : 10,
        "start_date" : "2023-03-10",
        "end_date" : "2199-12-31",
        "underwriting_step" : null,
        "is_banned_from_product" : false,
        "archived" : true,
        "archived_at" : null,
        "taken_up" : false,
        "created_at" : "2023-03-10T13:54:06.914Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : "1.114.0",
        product_variant_id : "Bupa_Dent_01_03",
        "world_id" : "forest"
    }
} as IDatabaseItem
    
export const CPE_FUTURE_PRODUCT = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000001495",
        customer_id: customer.CUSTOMER_FUTURE_PRODUCT.data.customerId,
        "earn_rate": 10,
        "start_date": moment().add(2, 'weeks'),
        "underwriting_step": null,
        "is_banned_from_product": false,
        "taken_up": true,
        product_variant_id: "AIG_ReGL_01_01",
    }
} as IDatabaseItem

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


export const CPE_GHI_FUTURE = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        "customer_product_id" : "YUCPID0000011375",
        customer_id: customer.CUSTOMER_GHI.data.customerId,
        "earn_rate" : 10,
        "start_date" :  "2024-05-05",
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_GHI_STARTED = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        "customer_product_id" : "YUCPID0000011376",
        customer_id: customer.CUSTOMER_GHI_STARTED.data.customerId,
        "earn_rate" : 10,
        "start_date" :  "2023-05-05",
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_93_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011377",
        customer_id: customer.CUSTOMER_93.data.customerId,
        earn_rate: 5,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "year").format("YYYY-MM-DD"),
        is_banned_from_product : false,
    }
} as IDatabaseItem

export const CPE_94_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000294",
        customer_id: customer.CUSTOMER_94.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_01",
        archived: false,
        taken_up: true
    }
} as IDatabaseItem


export const CPE_95_GDent = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_95.data.customerId,
        customer_product_id: "YUCPID0000011379",
        "earn_rate" : 5,
        "start_date" : moment().add(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GDentPlan_01_01",
    }
}

export const CPE_96_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011380",
        customer_id: customer.CUSTOMER_96.data.customerId,
        earn_rate: 6,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_97_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011381",
        customer_id: customer.CUSTOMER_97.data.customerId,
        earn_rate: 6,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_98_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011382",
        customer_id: customer.CUSTOMER_98.data.customerId,
        earn_rate: 6,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_99_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011383",
        customer_id: customer.CUSTOMER_99.data.customerId,
        earn_rate: 6,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: false,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_100_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011384",
        customer_id: customer.CUSTOMER_100.data.customerId,
        earn_rate: 6,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_101_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011385",
        customer_id: customer.CUSTOMER_101.data.customerId,
        earn_rate: 5,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_102_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011386",
        customer_id: customer.CUSTOMER_102.data.customerId,
        earn_rate: 6,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_103_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011387",
        customer_id: customer.CUSTOMER_103.data.customerId,
        earn_rate: 6,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_104_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011388",
        customer_id: customer.CUSTOMER_104.data.customerId,
        earn_rate: 6,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: false,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_105_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011389",
        customer_id: customer.CUSTOMER_105.data.customerId,
        earn_rate: 6,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_106_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011390",
        customer_id: customer.CUSTOMER_106.data.customerId,
        earn_rate: 6,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_107_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011391",
        customer_id: customer.CUSTOMER_107.data.customerId,
        earn_rate: 5,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "year").format("YYYY-MM-DD"),
        is_banned_from_product : false,
    }
} as IDatabaseItem

export const CPE_108_GDent = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_108.data.customerId,
        customer_product_id: "YUCPID0000011392",
        "earn_rate" : 5,
        "start_date" : moment().add(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GDentPlan_01_01",
    }
} as IDatabaseItem

export const CPE_116_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011393",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_117_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011394",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_118_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011395",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_119_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011396",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_120_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011397",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_121_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011398",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_123_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011399",
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD")
    }
} as IDatabaseItem

export const CPE_123_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011400",
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(7, "d").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_123_SaaS = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011401",
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "YuLife_SaaS_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD")
    }
} as IDatabaseItem

export const CPE_123_GHI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011402",
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "Bupa_GHealth_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD")
    }
} as IDatabaseItem

export const CPE_123_PLI = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        customerProductId: "YUCPID0000011403",
        earn_rate: 6,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "forest",
        taken_up: false
    }
} as IDatabaseItem

export const CPE_123_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011404",
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        earn_rate: 20,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "d").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_124_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011405",
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD")
    }
} as IDatabaseItem

export const CPE_124_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011406",
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(7, "d").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_124_SaaS = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011407",
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "YuLife_SaaS_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD")
    }
} as IDatabaseItem

export const CPE_124_GHI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011408",
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "Bupa_GHealth_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD")
    }
} as IDatabaseItem

export const CPE_124_PLI = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        customer_product_id: "YUCPID0000011409",
        earn_rate: 6,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "forest",
        taken_up: true
    }
} as IDatabaseItem

export const CPE_124_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011410",
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        earn_rate: 20,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "d").format("YYYY-MM-DD"),
    }
} as IDatabaseItem

export const CPE_125_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011411",
        customer_id: customer.CUSTOMER_125.data.customerId,
        earn_rate: 5,
        product_variant_id: "Bupa_GDentChoice_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().format("YYYY-MM-DD"),
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

export const CPE_127_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011413",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_130_GHI_LEAVER = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
        customer_product_id: "YUCPID0000011414",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_131_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011415",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_133_GHI_FUTURE = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_133_GHI_FUTURE.data.customerId,
        customer_product_id: "YUCPID0000011416",
        "earn_rate" : 0,
        "start_date" : moment().add(1, "weeks").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_134_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_134_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011417",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_134_GHI_REWARDS_2 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_134_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011418",
        "earn_rate" : 0,
        "start_date" : moment().subtract(1, "y").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem

export const CPE_DENTAL_RENEW = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_DENTAL_RENEW.data.customerId,
        customerProductId: "YUCPID00000011419",
        earn_rate: 10,
        productVariantId: "Bupa_Dent_01_03",
        startDate: moment().add(30, "days").subtract(1, "years").format(),
        world_id: "forest",
        taken_up: true
    }
} as IDatabaseItem

export const CPE_DENTAL_RENEW_2 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        customerProductId: "YUCPID00000011420",
        earn_rate: 10,
        productVariantId: "Bupa_Dent_01_03",
        startDate: "2023-02-01",
        world_id: "forest",
        taken_up: true
    }
} as IDatabaseItem

export const CPE_135_GHI_FUTURE = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_135_GHI_FUTURE.data.customerId,
        customer_product_id: "YUCPID0000011421",
        "earn_rate" : 0,
        "start_date" : moment().add(1, "weeks").format("YYYY-MM-DD"),
        "end_date" : "2199-12-31",
        "is_banned_from_product" : false,
        "archived" : false,
        "taken_up" : true,
        product_variant_id : "Bupa_GHealth_01_01",
    }
} as IDatabaseItem
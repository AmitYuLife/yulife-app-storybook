import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { CPE_DENPPO_1, CPE_Wellbeing_USA_1, CPE_DENHMO_1, CPE_DENCHOI_1, CPE_VIS_1, CPE_TLIF_1, CPE_ADD_2, CPE_WLIF_2, CPE_VLIF_4, CPE_VADD_2, CPE_STD_2, CPE_LTD_2, CPE_VSTD_3, CPE_VLTD_3, CPE_ACC_3, CPE_CRI_3, CPE_SPDIS_3, CPE_HI_3, CPE_ACCSICK_4, CPE_CAN_4, CPE_ULIF_2, CPE_GAP_5, CPE_VIS_5, CPE_GAP_6  } from "./customer_product_entity"
import moment = require('moment');
import { BUSINESS_PRODUCT_USA_1_DENPPO, BUSINESS_PRODUCT_USA_1_WB, BUSINESS_PRODUCT_USA_1_DENHMO, BUSINESS_PRODUCT_USA_1_DENCHOI, BUSINESS_PRODUCT_USA_1_VIS, BUSINESS_PRODUCT_USA_1_TLIF, BUSINESS_PRODUCT_USA_2_ADD, BUSINESS_PRODUCT_USA_2_WLIF, BUSINESS_PRODUCT_USA_4_VLIF, BUSINESS_PRODUCT_USA_2_ULIF, BUSINESS_PRODUCT_USA_2_VADD, BUSINESS_PRODUCT_USA_2_STD, BUSINESS_PRODUCT_USA_2_LTD, BUSINESS_PRODUCT_USA_3_VSTD, BUSINESS_PRODUCT_USA_3_VLTD, BUSINESS_PRODUCT_USA_3_ACC, BUSINESS_PRODUCT_USA_3_CRI, BUSINESS_PRODUCT_USA_3_SPDIS, BUSINESS_PRODUCT_USA_3_HI, BUSINESS_PRODUCT_USA_4_ACCSICK, BUSINESS_PRODUCT_USA_4_CAN, BUSINESS_PRODUCT_USA_5_GAP, BUSINESS_PRODUCT_USA_5_VIS, BUSINESS_PRODUCT_USA_6_GAP } from "./business_product";

const type = "postgres"
const modelName = "customer_business_product"

export const CBP_USA_1_WELLBEING = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_USA_1_WB.product.data.product_id,
        customer_product_id: CPE_Wellbeing_USA_1.data.customer_product_id,
        category_id: 1,
        start_date: CPE_Wellbeing_USA_1.data.start_date,
        data: {
            date_of_birth: CPE_Wellbeing_USA_1.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem
    
export const CBP_USA_1_DENPPO = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_1_DENPPO.product.data.product_id,
        customer_product_id: CPE_DENPPO_1.data.customer_product_id,
        category_id : "1",
        start_date: CPE_DENPPO_1.data.start_date,       
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
} as IDatabaseItem


export const CBP_USA_1_DENHMO = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_1_DENHMO.product.data.product_id,
        customer_product_id: CPE_DENHMO_1.data.customer_product_id,
        category_id : "1",
        start_date: CPE_DENHMO_1.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_1_DENCHOI = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_1_DENCHOI.product.data.product_id,
        customer_product_id: CPE_DENCHOI_1.data.customer_product_id,
        category_id : "1",
        start_date: CPE_DENCHOI_1.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_1_VIS = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_1_VIS.product.data.product_id,
        customer_product_id: CPE_VIS_1.data.customer_product_id,
        category_id : "1",
        start_date: CPE_VIS_1.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_1_TLIF = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_1_TLIF.product.data.product_id,
        customer_product_id: CPE_TLIF_1.data.customer_product_id,
        category_id : "1",
        start_date: CPE_TLIF_1.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_ADD = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_2_ADD.product.data.product_id,
        customer_product_id: CPE_ADD_2.data.customer_product_id,
        category_id : "1",
        start_date: CPE_ADD_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_WLIF = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_2_WLIF.product.data.product_id,
        customer_product_id: CPE_WLIF_2.data.customer_product_id,
        category_id : "1",
        start_date: CPE_WLIF_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_ULIF = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_2_ULIF.product.data.product_id,
        customer_product_id: CPE_ULIF_2.data.customer_product_id,
        category_id : "1",
        start_date: CPE_ULIF_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_VADD = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_2_VADD.product.data.product_id,
        customer_product_id: CPE_VADD_2.data.customer_product_id,
        category_id : "1",
        start_date: CPE_VADD_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_STD = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_2_STD.product.data.product_id,
        customer_product_id: CPE_STD_2.data.customer_product_id,
        category_id : "1",
        start_date: CPE_STD_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_LTD = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_2_LTD.product.data.product_id,
        customer_product_id: CPE_LTD_2.data.customer_product_id,
        category_id : "1",
        start_date: CPE_LTD_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_VSTD = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_3_VSTD.product.data.product_id,
        customer_product_id: CPE_VSTD_3.data.customer_product_id,
        category_id : "1",
        start_date: CPE_VSTD_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_VLTD = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_3_VLTD.product.data.product_id,
        customer_product_id: CPE_VLTD_3.data.customer_product_id,
        category_id : "1",
        start_date: CPE_VLTD_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_ACC = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_3_ACC.product.data.product_id,
        customer_product_id: CPE_ACC_3.data.customer_product_id,
        category_id : "1",
        start_date: CPE_ACC_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_CRI = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_3_CRI.product.data.product_id,
        customer_product_id: CPE_CRI_3.data.customer_product_id,
        category_id : "1",
        start_date: CPE_CRI_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_SPDIS = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_3_SPDIS.product.data.product_id,
        customer_product_id: CPE_SPDIS_3.data.customer_product_id,
        category_id : "1",
        start_date: CPE_SPDIS_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_HI = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_3_HI.product.data.product_id,
        customer_product_id: CPE_HI_3.data.customer_product_id,
        category_id : "1",
        start_date: CPE_HI_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_4_ACCSICK = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_4_ACCSICK.product.data.product_id,
        customer_product_id: CPE_ACCSICK_4.data.customer_product_id,
        category_id : "1",
        start_date: CPE_ACCSICK_4.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_4_CAN = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_4_CAN.product.data.product_id,
        customer_product_id: CPE_CAN_4.data.customer_product_id,
        category_id : "1",
        start_date: CPE_CAN_4.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_4_VLIF = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_4_VLIF.product.data.product_id,
        customer_product_id: CPE_VLIF_4.data.customer_product_id,
        category_id : "1",
        start_date: CPE_VLIF_4.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_5_GAP = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_5_GAP.product.data.product_id,
        customer_product_id: CPE_GAP_5.data.customer_product_id,
        category_id : "1",
        start_date: CPE_GAP_5.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"Five\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_5_VIS = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_5_VIS.product.data.product_id,
        customer_product_id: CPE_VIS_5.data.customer_product_id,
        category_id : "1",
        start_date: CPE_VIS_5.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_6_GAP = {
    type,
    modelName,
    data:{
        business_product_id: BUSINESS_PRODUCT_USA_6_GAP.product.data.product_id,
        customer_product_id: CPE_GAP_6.data.customer_product_id,
        category_id : "1",
        start_date: CPE_GAP_6.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"Five\",\"sexAtBirth\":\"M\"}"
    }
}

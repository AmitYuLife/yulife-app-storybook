import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import * as cpe from "./customer_product_entity"
import moment = require('moment');
import * as bp from "./business_product";

const type = "postgres"
const modelName = "customer_business_product"

export const CBP_USA_1_WELLBEING = {
    type,
    modelName,
    data: {
        business_product_id: bp.BUSINESS_PRODUCT_USA_1_WB.product.data.product_id,
        customer_product_id: cpe.CPE_Wellbeing_USA_1.data.customer_product_id,
        category_id: 1,
        start_date: cpe.CPE_Wellbeing_USA_1.data.start_date,
        data: {
            date_of_birth: cpe.CPE_Wellbeing_USA_1.data.date_of_birth,
            salary: 100000,
            country: "UK",
        }
    }
} as IDatabaseItem
    
export const CBP_USA_1_DENPPO = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_1_DENPPO.product.data.product_id,
        customer_product_id: cpe.CPE_DENPPO_1.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_DENPPO_1.data.start_date,       
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
} as IDatabaseItem


export const CBP_USA_1_DENHMO = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_1_DENHMO.product.data.product_id,
        customer_product_id: cpe.CPE_DENHMO_1.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_DENHMO_1.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_1_DENCHOI = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_1_DENCHOI.product.data.product_id,
        customer_product_id: cpe.CPE_DENCHOI_1.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_DENCHOI_1.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_1_VIS = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_1_VIS.product.data.product_id,
        customer_product_id: cpe.CPE_VIS_1.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_VIS_1.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_1_TLIF = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_1_TLIF.product.data.product_id,
        customer_product_id: cpe.CPE_TLIF_1.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_TLIF_1.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_ADD = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_2_ADD.product.data.product_id,
        customer_product_id: cpe.CPE_ADD_2.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_ADD_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_WLIF = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_2_WLIF.product.data.product_id,
        customer_product_id: cpe.CPE_WLIF_2.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_WLIF_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_ULIF = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_2_ULIF.product.data.product_id,
        customer_product_id: cpe.CPE_ULIF_2.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_ULIF_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_VADD = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_2_VADD.product.data.product_id,
        customer_product_id: cpe.CPE_VADD_2.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_VADD_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_STD = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_2_STD.product.data.product_id,
        customer_product_id: cpe.CPE_STD_2.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_STD_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_2_LTD = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_2_LTD.product.data.product_id,
        customer_product_id: cpe.CPE_LTD_2.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_LTD_2.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_VSTD = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_3_VSTD.product.data.product_id,
        customer_product_id: cpe.CPE_VSTD_3.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_VSTD_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_VLTD = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_3_VLTD.product.data.product_id,
        customer_product_id: cpe.CPE_VLTD_3.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_VLTD_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_ACC = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_3_ACC.product.data.product_id,
        customer_product_id: cpe.CPE_ACC_3.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_ACC_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_CRI = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_3_CRI.product.data.product_id,
        customer_product_id: cpe.CPE_CRI_3.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_CRI_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_SPDIS = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_3_SPDIS.product.data.product_id,
        customer_product_id: cpe.CPE_SPDIS_3.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_SPDIS_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_3_HI = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_3_HI.product.data.product_id,
        customer_product_id: cpe.CPE_HI_3.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_HI_3.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_4_ACCSICK = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_4_ACCSICK.product.data.product_id,
        customer_product_id: cpe.CPE_ACCSICK_4.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_ACCSICK_4.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_4_CAN = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_4_CAN.product.data.product_id,
        customer_product_id: cpe.CPE_CAN_4.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_CAN_4.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_4_VLIF = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_4_VLIF.product.data.product_id,
        customer_product_id: cpe.CPE_VLIF_4.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_VLIF_4.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_5_GAP = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_5_GAP.product.data.product_id,
        customer_product_id: cpe.CPE_GAP_5.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_GAP_5.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"Five\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_5_VIS = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_5_VIS.product.data.product_id,
        customer_product_id: cpe.CPE_VIS_5.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_VIS_5.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_6_GAP = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_6_GAP.product.data.product_id,
        customer_product_id: cpe.CPE_GAP_6.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_GAP_6.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"Five\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_7_VIS = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_7_VIS.product.data.product_id,
        customer_product_id: cpe.CPE_VIS_7.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_VIS_7.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_8_GAP = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_8_GAP.product.data.product_id,
        customer_product_id: cpe.CPE_GAP_8.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_GAP_8.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_10_GAP = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_10_GAP.product.data.product_id,
        customer_product_id: cpe.CPE_GAP_10.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_GAP_10.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_10_VIS = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_10_VIS.product.data.product_id,
        customer_product_id: cpe.CPE_VIS_10.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_VIS_10.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_11_ACC = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_11_ACC.product.data.product_id,
        customer_product_id: cpe.CPE_ACC_11.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_ACC_11.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}

export const CBP_USA_11_CAN = {
    type,
    modelName,
    data:{
        business_product_id: bp.BUSINESS_PRODUCT_USA_11_CAN.product.data.product_id,
        customer_product_id: cpe.CPE_CAN_11.data.customer_product_id,
        category_id : "1",
        start_date: cpe.CPE_CAN_11.data.start_date,
        archived : false,
        data : "{\"dateOfBirth\":\"1990-12-09\",\"firstName\":\"Usa\",\"lastName\":\"USA\",\"sexAtBirth\":\"M\"}"
    }
}
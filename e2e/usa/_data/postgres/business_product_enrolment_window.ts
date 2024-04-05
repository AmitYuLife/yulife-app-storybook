import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_USA_1 } from "./customers";
import moment from "moment"
import { BUSINESS_PRODUCT_USA_10_GAP, BUSINESS_PRODUCT_USA_10_VIS, BUSINESS_PRODUCT_USA_12_CAN, BUSINESS_PRODUCT_USA_13_CRI, BUSINESS_PRODUCT_USA_14_VSTD, BUSINESS_PRODUCT_USA_1_DENCHOI, BUSINESS_PRODUCT_USA_1_DENHMO, BUSINESS_PRODUCT_USA_1_DENPPO, BUSINESS_PRODUCT_USA_1_TLIF, BUSINESS_PRODUCT_USA_1_VIS, BUSINESS_PRODUCT_USA_2_ADD, BUSINESS_PRODUCT_USA_2_LTD, BUSINESS_PRODUCT_USA_2_STD, BUSINESS_PRODUCT_USA_2_VADD, BUSINESS_PRODUCT_USA_3_ACC, BUSINESS_PRODUCT_USA_3_CRI, BUSINESS_PRODUCT_USA_2_HI, BUSINESS_PRODUCT_USA_3_SPDIS, BUSINESS_PRODUCT_USA_3_VLTD, BUSINESS_PRODUCT_USA_3_VSTD, BUSINESS_PRODUCT_USA_5_GAP } from "./business_product";


const type = "postgres"
const modelName = "business_product_enrolment_window"

export const BPEEW_USA_1_DENPPO = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e11",
        "business_product_id" : BUSINESS_PRODUCT_USA_1_DENPPO.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_1_DENCHOI = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e20",
        "business_product_id" : BUSINESS_PRODUCT_USA_1_DENCHOI.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_1_DENHMO = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e21",
        "business_product_id" : BUSINESS_PRODUCT_USA_1_DENHMO.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_1_TLIF = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e22",
        "business_product_id" : BUSINESS_PRODUCT_USA_1_TLIF.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_1_VIS = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e23",
        "business_product_id" : BUSINESS_PRODUCT_USA_1_VIS.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_2_ADD = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e12",
        "business_product_id" : BUSINESS_PRODUCT_USA_2_ADD.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_2_LTD = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e24",
        "business_product_id" : BUSINESS_PRODUCT_USA_2_LTD.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_2_STD = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e25",
        "business_product_id" : BUSINESS_PRODUCT_USA_2_STD.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_2_VADD = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e27",
        "business_product_id" : BUSINESS_PRODUCT_USA_2_VADD.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_2_HI = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e13",
        "business_product_id" : BUSINESS_PRODUCT_USA_2_HI.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_3_ACC = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e26",
        "business_product_id" : BUSINESS_PRODUCT_USA_3_ACC.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_3_CRI = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e28",
        "business_product_id" : BUSINESS_PRODUCT_USA_3_CRI.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_3_SPDIS = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e29",
        "business_product_id" : BUSINESS_PRODUCT_USA_3_SPDIS.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_3_VLTD = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e30",
        "business_product_id" : BUSINESS_PRODUCT_USA_3_VLTD.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_3_VSTD = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e31",
        "business_product_id" : BUSINESS_PRODUCT_USA_3_VSTD.product.data.product_id,
        "enrolment_start_date" : moment().subtract(1, "month").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(1, "month").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_5 = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e14",
        "business_product_id" : BUSINESS_PRODUCT_USA_5_GAP.product.data.product_id,
        "enrolment_start_date" : moment().add(2, "d").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(3, "d").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_10_GAP = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e15",
        "business_product_id" : BUSINESS_PRODUCT_USA_10_GAP.product.data.product_id,
        "enrolment_start_date" : moment().subtract(4, "d").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(3, "d").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}
export const BPEEW_USA_10_VIS = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e16",
        "business_product_id" : BUSINESS_PRODUCT_USA_10_VIS.product.data.product_id,
        "enrolment_start_date" : moment().subtract(4, "d").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(3, "d").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_12_CAN_PRE = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e17",
        "business_product_id" : BUSINESS_PRODUCT_USA_12_CAN.product.data.product_id,
        "enrolment_start_date" : moment().format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(7, "d").format("YYYY-MM-DD"),
        "enrolment_type" : "pre",
    }
}

export const BPEEW_USA_12_CAN_MAIN = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e18",
        "business_product_id" : BUSINESS_PRODUCT_USA_12_CAN.product.data.product_id,
        "enrolment_start_date" : moment().add(7, "d").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(21, "d").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_13_CRI = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e19",
        "business_product_id" : BUSINESS_PRODUCT_USA_13_CRI.product.data.product_id,
        "enrolment_start_date" : moment().subtract(7, "d").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().add(7, "d").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

export const BPEEW_USA_14_VSTD = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e32",
        "business_product_id" : BUSINESS_PRODUCT_USA_14_VSTD.product.data.product_id,
        "enrolment_start_date" : moment().subtract(14, "d").format("YYYY-MM-DD"),
        "enrolment_end_date" :  moment().subtract(7, "d").format("YYYY-MM-DD"),
        "enrolment_type" : "main",
    }
}

    
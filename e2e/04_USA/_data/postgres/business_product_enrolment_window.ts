import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_USA_1 } from "./customers";
import moment from "moment"
import { BUSINESS_PRODUCT_USA_1_DENPPO, BUSINESS_PRODUCT_USA_2_ADD, BUSINESS_PRODUCT_USA_3_HI, BUSINESS_PRODUCT_USA_5_GAP } from "./business_product";


const type = "postgres"
const modelName = "business_product_enrolment_window"

export const BPEEW_USA_1 = {
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

export const BPEEW_USA_2 = {
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

export const BPEEW_USA_3 = {
    type,
    modelName,
    data:{
        "enrolment_window_id" : "56c379c3-7568-44c1-933f-6727f8062e13",
        "business_product_id" : BUSINESS_PRODUCT_USA_3_HI.product.data.product_id,
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
    

import { generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_PRODUCT_8_GHI, BUSINESS_PRODUCT_9_GDent } from "./business_product";


const type = "postgres"
const modelName = "business_product_enrolment_window"

export const BPEW_11 = {
    type,
    modelName,
    data:{
        enrolment_window_id : generateRandomTransformedUuid(),
        business_product_id : BUSINESS_PRODUCT_8_GHI.product.data.product_id,
        enrolment_start_date : moment().subtract(7, 'd').format("YYYY-MM-DD"),
        enrolment_end_date : moment().add(7, 'd').format("YYYY-MM-DD"),
        enrolment_type : "main",
    },
}; 
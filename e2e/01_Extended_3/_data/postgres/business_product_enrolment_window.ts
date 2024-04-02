import moment from "moment";
import { BUSINESS_PRODUCT_14_MPP_GDental } from "./business_product";

const type = "postgres";
const modelName = "business_product_enrolment_window";

export const BPEW_GDent_13 = {
    type,
    modelName,
    data: {
        enrolment_window_id: "08f5c3ab-322e-4adf-8b79-1a40a02aec96",
        business_product_id: BUSINESS_PRODUCT_14_MPP_GDental.product.data.product_id,
        enrolment_start_date: moment().add(1, "d").format("YYYY-MM-DD"),
        enrolment_end_date: moment().add(8, "d").format("YYYY-MM-DD"),
        enrolment_type: "main",
    },
};

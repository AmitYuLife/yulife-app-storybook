import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CPE_124_PLI } from "./customer_product_entity";
import moment from "moment";

const modelName = "customer_quote";

export const CUSTOMER_QUOTE_PLI_124 = {
    type: "postgres",
    modelName,
    data: {
        quoteId: "YUCPID0000000157_QUOTE_PLI_124",
        customer_product_id: CPE_124_PLI.data.customer_product_id,
        insurance_type: "Family Income Benefit",
        underwriting: "{}",
        insurance_monthly_payment: 6.85,
        insurance_cover_amount: 187500.0,
        insurance_term_years: 31,
        risk_rate: 0.01720584552,
        risk_premium_with_loading: 3.3074366181619372,
        bmi_loading: 1.0,
        cover_loading: 1.0252134,
        valid_till: moment().add(30, "d").format(),
        archived: false,
        cover_type: "common",
        risk_premium_wl_gender_spec: 3.6622398,
        risk_rate_gender_spec: 0.019051593,
    },
} as IDatabaseItem;

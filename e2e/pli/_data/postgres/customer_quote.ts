import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer_quote";

export const CUSTOMER_QUOTE_PLI_2_UPDATE = {
    type,
    modelName,
    updateKey: "quoteId",
    data: {
        quoteId: "YUCPID0000000137_QUOTE_PLI_2",
        createdAt: moment().subtract(61, "days").format(),
    },
} as IDatabaseItem;

export const CUSTOMER_QUOTE_PLI_3_UPDATE = {
    type,
    modelName,
    updateKey: "quoteId",
    data: {
        quoteId: "YUCPID0000000138_QUOTE_PLI_3",
        createdAt: moment().subtract(30, "days").format(),
    },
} as IDatabaseItem;

export const CUSTOMER_QUOTE_PLI_HOLDING = {
    type,
    modelName,
    data: {
        quoteId: "YUCPID0000011423_QUOTE_PLI",
        customer_product_id: "YUCPID0000011423",
        insurance_type: "Family Income Benefit",
        underwriting: "{}",
        insurance_monthly_payment: 6.85,
        insurance_cover_amount: 187500.0,
        insurance_term_years: 30,
        risk_rate: 0.01720584552,
        risk_premium_with_loading: 3.3074366181619372,
        bmi_loading: 1.0,
        cover_loading: 1.0252134,
        valid_till: moment().add(1, "d").format(),
        createdAt: moment().subtract(59, "d").format(),
        archived: false,
        cover_type: "common",
        risk_premium_wl_gender_spec: 3.6622398,
        risk_rate_gender_spec: 0.019051593,
    },
} as IDatabaseItem;

export const CUSTOMER_QUOTE_PLI_3 = {
    type,
    modelName,
    data: {
        quoteId: "YUCPID0000000138_QUOTE_PLI_3",
        customer_product_id: "YUCPID0000000138",
        insurance_type: "Family Income Benefit",
        underwriting: "{}",
        insurance_monthly_payment: 6.85,
        insurance_cover_amount: 187500.0,
        insurance_term_years: 30,
        risk_rate: 0.01720584552,
        risk_premium_with_loading: 3.3074366181619372,
        bmi_loading: 1.0,
        cover_loading: 1.0252134,
        valid_till: moment().add(1, "d").format(),
        createdAt: moment().subtract(61, "d").format(),
        archived: false,
        cover_type: "common",
        risk_premium_wl_gender_spec: 3.6622398,
        risk_rate_gender_spec: 0.019051593,
    },
} as IDatabaseItem;

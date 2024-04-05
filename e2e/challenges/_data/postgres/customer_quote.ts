import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_9 } from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "customer_quote";

export const QUOTE_1 = {
    type,
    modelName,
    data: {
        quote_id: CUSTOMER_9.data.customerId,
        customer_product_id: "YUCPID0000000032",
        insurance_type: "Family Income Benefit",
        underwriting: {
            financial_covers: [],
            uk_resident: "Yes",
            member_of_armed_forces: "No",
            height_measurement_unit: "ft",
            height: "5-6",
            weight_measurement_unit: "kg",
            weight: "90",
            smoking_cigars: "Never",
            smoking_vapes: "In the past month",
            alcohol_consumption: "3",
            recreational_drug_use: "No",
            counselling: "No",
            sex: "M",
            medical_history: "No",
            scheduled_treatments_detail: "No",
            medical_history_values: {},
            scheduled_treatments: "No",
            other_symptoms: "No",
            covid_isolation: "No",
            covid_symptoms: "No",
            financial_questions: "No",
            smoking_cigarettes: "In the past 6 months",
            smoking_cigarettes_amount: "1-9 per day",
            smoker_status: true,
            bmi: 23.66,
        },
        insurance_monthly_payment: 127.72,
        insurance_yearly_payment: null,
        insurance_cover_amount: 1152000.0,
        insurance_term_years: 32,
        risk_rate: 0.07623054873054873,
        risk_premium_contribution: null,
        risk_premium_with_loading: 92.25556801665215,
        bmi_loading: 1.14999998,
        cover_loading: 0.91350985,
        valid_till: moment().add(3, "months"),
        address_post_code: null,
        policy_summary_version: null,
        terms_and_conditions_version: null,
        rewards_policy_version: null,
        payment_submission: null,
        archived: false,
        underwriting_loading: null,
        risk_premium_wl_gender_spec: 100.75063,
        risk_rate_gender_spec: 0.08325
    },
} as IDatabaseItem;

import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CUSTOMER_9 } from "./customers";
import { CPE_DENTAL_1, CPE_DENTAL_2, CPE_DENTAL_3 } from "./customer_product_entity";
import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";

const modelName = "customer_quote";

export const QUOTE_1 = {
    type: "postgres",
    modelName: "customer_quote",
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

export const CUSTOMER_QUOTE_DENTAL_1 = {
    type: "postgres",
    modelName,
    data: {
        quoteId: generateRandomPostgresId(),
        customerProductId: CPE_DENTAL_1.data.customerProductId,
        insuranceType: "Dental",
        insuranceMonthlyPayment: "18.99",
        insuranceTermYears: -1,
        validTill: moment().add(1, "year").format(),
        createdAt: moment().format(),
        modifiedAt: moment().format(),
        coverType: "epic"
    }
} as IDatabaseItem;

export const CUSTOMER_QUOTE_DENTAL_2 = {
    type: "postgres",
    modelName,
    data: {
        quoteId: generateRandomPostgresId(),
        customerProductId: CPE_DENTAL_2.data.customerProductId,
        insuranceType: "Dental",
        insuranceMonthlyPayment: "12.99",
        insuranceTermYears: -1,
        validTill: moment().add(1, "year").format(),
        createdAt: moment().format(),
        modifiedAt: moment().format(),
        coverType: "common"
    }
} as IDatabaseItem;

export const CUSTOMER_QUOTE_PLI_2 = {
    type: "postgres",
    modelName,
    data: {
        quoteId: "YUCPID0000000137_QUOTE_PLI_2",
        customer_product_id : "YUCPID0000000137",
        insurance_type : "Family Income Benefit",
        underwriting : "{}",
        insurance_monthly_payment : 6.85,
        insurance_cover_amount : 187500.0,
        insurance_term_years : 30,
        risk_rate : 0.01720584552,
        risk_premium_with_loading : 3.3074366181619372,
        bmi_loading : 1.0,
        cover_loading : 1.0252134,
        valid_till : moment().subtract(30, "d").format(),
        archived : false,
        cover_type : "common",
        risk_premium_wl_gender_spec : 3.6622398,
        risk_rate_gender_spec : 0.019051593
    }
} as IDatabaseItem;

// UPDATE CUSTOMER_QUOTE_PLI_2 to set the createdAt to be in the past
export const CUSTOMER_QUOTE_PLI_2_UPDATE = {
    type: "postgres",
    modelName,
    updateKey: "quoteId",
    data: {
        quoteId: "YUCPID0000000137_QUOTE_PLI_2",
        createdAt : moment().subtract(63, "days").format(),
    }
} as IDatabaseItem;


export const CUSTOMER_QUOTE_PLI_3 = {
    type: "postgres",
    modelName,
    data: {
        quoteId: "YUCPID0000000138_QUOTE_PLI_3",
        customer_product_id : "YUCPID0000000138",
        insurance_type : "Family Income Benefit",
        underwriting : "{}",
        insurance_monthly_payment : 6.85,
        insurance_cover_amount : 187500.0,
        insurance_term_years : 30,
        risk_rate : 0.01720584552,
        risk_premium_with_loading : 3.3074366181619372,
        bmi_loading : 1.0,
        cover_loading : 1.0252134,
        valid_till : moment().subtract(30, "d").format(),
        archived : false,
        cover_type : "common",
        risk_premium_wl_gender_spec : 3.6622398,
        risk_rate_gender_spec : 0.019051593
    }
} as IDatabaseItem;

export const CUSTOMER_QUOTE_PLI_3_UPDATE = {
    type: "postgres",
    modelName,
    updateKey: "quoteId",
    data: {
        quoteId: "YUCPID0000000138_QUOTE_PLI_3",
        createdAt : moment().subtract(30, "days").format(),
    }
} as IDatabaseItem;

export const CUSTOMER_QUOTE_PLI_4 = {
    type: "postgres",
    modelName,
    data: {
        quoteId: "YUCPID0000000140_QUOTE_PLI_4",
        customer_product_id : "YUCPID0000000140",
        insurance_type : "Family Income Benefit",
        underwriting : "{}",
        insurance_monthly_payment : 6.85,
        insurance_cover_amount : 187500.0,
        insurance_term_years : 30,
        risk_rate : 0.01720584552,
        risk_premium_with_loading : 3.3074366181619372,
        bmi_loading : 1.0,
        cover_loading : 1.0252134,
        valid_till : moment().subtract(30, "d").format(),
        archived : false,
        cover_type : "common",
        risk_premium_wl_gender_spec : 3.6622398,
        risk_rate_gender_spec : 0.019051593
    }
} as IDatabaseItem;

export const CUSTOMER_QUOTE_PLI_4_UPDATE = {
    type: "postgres",
    modelName,
    updateKey: "quoteId",
    data: {
        quoteId: "YUCPID0000000140_QUOTE_PLI_4",
        createdAt : moment().subtract(61, "days").format(),
    }
} as IDatabaseItem;

export const CUSTOMER_QUOTE_DENTAL_3 = {
    type: "postgres",
    modelName,
    data: {
        quoteId: generateRandomPostgresId(),
        customerProductId: CPE_DENTAL_3.data.customerProductId,
        insuranceType: "Dental",
        insuranceMonthlyPayment: "12.99",
        insuranceTermYears: -1,
        validTill: moment().add(1, "year").format(),
        createdAt: moment().format(),
        modifiedAt: moment().format(),
        coverType: "common"
    }
} as IDatabaseItem;

export const CUSTOMER_QUOTE_PLI_6 = {
    type: "postgres",
    modelName,
    data: {
        quoteId: "YUCPID0000000156_QUOTE_PLI_6",
        customer_product_id : "YUCPID0000000156",
        insurance_type : "Family Income Benefit",
        underwriting : "{}",
        insurance_monthly_payment : 6.85,
        insurance_cover_amount : 187500.0,
        insurance_term_years : 31,
        risk_rate : 0.01720584552,
        risk_premium_with_loading : 3.3074366181619372,
        bmi_loading : 1.0,
        cover_loading : 1.0252134,
        valid_till : moment().subtract(30, "d").format(),
        archived : false,
        cover_type : "common",
        risk_premium_wl_gender_spec : 3.6622398,
        risk_rate_gender_spec : 0.019051593
    }
} as IDatabaseItem;
    
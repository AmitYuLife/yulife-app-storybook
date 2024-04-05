import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CPE_85, CPE_DENTAL_1, CPE_DENTAL_2, CPE_DENTAL_3, CPE_DENTAL_RENEW, CPE_DENTAL_RENEW_2 } from "./customer_product_entity";
import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const modelName = "customer_quote";
const type = "postgres";

export const CUSTOMER_QUOTE_DENTAL_1 = {
    type,
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
        coverType: "epic",
    },
} as IDatabaseItem;

export const CUSTOMER_QUOTE_DENTAL_2 = {
    type,
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
        coverType: "common",
    },
} as IDatabaseItem;

export const CUSTOMER_QUOTE_DENTAL_3 = {
    type,
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
        coverType: "common",
    },
} as IDatabaseItem;

export const CUSTOMER_QUOTE_DENTAL_85 = {
    type,
    modelName,
    data: {
        quoteId: generateRandomPostgresId(),
        customerProductId: CPE_85.data.customer_product_id,
        insurance_type: "Dental",
        underwriting: "{}",
        insurance_monthly_payment: 18.99,
        insurance_yearly_payment: null,
        insurance_cover_amount: null,
        insurance_term_years: -1,
        risk_rate: null,
        risk_premium_contribution: null,
        risk_premium_with_loading: null,
        bmi_loading: null,
        cover_loading: null,
        valid_till: "2023-06-10T13:56:29.827Z",
        address_post_code: null,
        policy_summary_version: null,
        terms_and_conditions_version: null,
        rewards_policy_version: null,
        payment_submission: null,
        archived: true,
        record_modified_at: null,
        created_at: "2023-03-10T13:56:29.827Z",
        created_by_id: "1.114.0",
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: "1.114.0",
        cover_type: "rare",
        underwriting_loading: null,
        risk_premium_wl_gender_spec: null,
        risk_rate_gender_spec: null,
    },
} as IDatabaseItem;

export const CUSTOMER_QUOTE_DENTAL_RENEW = {
    type,
    modelName,
    data: {
        quoteId: generateRandomPostgresId(),
        customerProductId: CPE_DENTAL_RENEW.data.customerProductId,
        insuranceType: "Dental",
        insuranceMonthlyPayment: "18.99",
        insuranceTermYears: -1,
        validTill: moment().add(30, "days").format(),
        createdAt: moment().add(30, "days").subtract(1, "years").format(),
        modifiedAt: moment().format(),
        coverType: "epic",
    },
} as IDatabaseItem;

export const CUSTOMER_QUOTE_DENTAL_RENEW_2 = {
    type,
    modelName,
    data: {
        quoteId: generateRandomPostgresId(),
        customerProductId: CPE_DENTAL_RENEW_2.data.customerProductId,
        insuranceType: "Dental",
        insuranceMonthlyPayment: "18.99",
        insuranceTermYears: -1,
        validTill: moment().add(30, "days").format(),
        createdAt: "2023-02-01",
        modifiedAt: moment().format(),
        coverType: "epic",
    },
} as IDatabaseItem;

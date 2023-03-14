import moment from "moment";
import { CUSTOMER_QUOTE_DENTAL_1, CUSTOMER_QUOTE_DENTAL_2, CUSTOMER_QUOTE_DENTAL_3, CUSTOMER_QUOTE_DENTAL_85, CUSTOMER_QUOTE_PLI_6 } from "./customer_quote";
import { CUSTOMER_DENTAL_1, CUSTOMER_DENTAL_2,  CUSTOMER_45, CUSTOMER_PLI_6, CUSTOMER_85 } from "./customers";
import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";

const modelName = "customer_policy";

export const CUSTOMER_POLICY_DENTAL_1 = {
    type: "postgres",
    modelName,
    data: {
        externalPolicyId: "123",
        quoteId: CUSTOMER_QUOTE_DENTAL_1.data.quoteId,
        policyId: generateRandomPostgresId(),
        policyType: "Dental",
        policyOwner: `${CUSTOMER_DENTAL_1.data.firstName} ${CUSTOMER_DENTAL_1.data.lastName}`,
        startDate: moment().format(),
        finalPayment: null,
        indexation: "Level",
        indexationPercentage: 0,
        indexationFrequency: "Monthly",
        premiumFrequency: "Monthly",
        jointLifeIndicator: "Single",
        companyFca: 783352,
        region: "UK",
        postIssueSample: false,
        policyStatus: "Live"
    }
};

export const CUSTOMER_POLICY_DENTAL_2 = {
    type: "postgres",
    modelName,
    data: {
        externalPolicyId: "321",
        quoteId: CUSTOMER_QUOTE_DENTAL_2.data.quoteId,
        policyId: generateRandomPostgresId(),
        policyType: "Dental",
        policyOwner: `${CUSTOMER_DENTAL_2.data.firstName} ${CUSTOMER_DENTAL_2.data.lastName}`,
        startDate: moment().format(),
        endDate: moment().add(7, "d").format(),
        finalPayment: null,
        indexation: "Level",
        indexationPercentage: 0,
        indexationFrequency: "Monthly",
        premiumFrequency: "Monthly",
        jointLifeIndicator: "Single",
        companyFca: 783352,
        region: "UK",
        postIssueSample: false,
        policyStatus: "Cancelled"
    }
};

export const CUSTOMER_POLICY_DENTAL_3 = {
    type: "postgres",
    modelName,
    data: {
        externalPolicyId: "321",
        quoteId: CUSTOMER_QUOTE_DENTAL_3.data.quoteId,
        policyId: generateRandomPostgresId(),
        policyType: "Dental",
        policyOwner: `${ CUSTOMER_45.data.firstName} ${ CUSTOMER_45.data.lastName}`,
        startDate: moment().format(),
        endDate: moment().add(7, "d").format(),
        finalPayment: null,
        indexation: "Level",
        indexationPercentage: 0,
        indexationFrequency: "Monthly",
        premiumFrequency: "Monthly",
        jointLifeIndicator: "Single",
        companyFca: 783352,
        region: "UK",
        postIssueSample: false,
        policyStatus: "Live"
    }
};

export const CUSTOMER_POLICY_PLI_6 = {
    type: "postgres",
    modelName,
    data: {
        "externalPolicyId": "3211",
        "policyId" : generateRandomPostgresId(),
        "quote_id" : CUSTOMER_QUOTE_PLI_6.data.quoteId,
        "policy_owner" : `${CUSTOMER_PLI_6.data.firstName} ${CUSTOMER_PLI_6.data.lastName}`,
        "policy_type" : "Family Income Benefit",
        "product_code" : null,
        "startDate" : moment().format(),
        "endDate" : moment().add(7, "d").format(),
        "finalPayment" : null,
        "treaty_indicator" : false,
        "policy_status" : "Failed Payment",
        "new_business_indicator" : false,
        "indexation" : "Decreasing",
        "indexation_percentage" : 0,
        "indexation_frequency" : "Monthly",
        "premium_frequency" : "Monthly",
        "esc_benefit_type" : "N",
        "esc_premium_type" : "N",
        "annual_premium_increase_rate" : null,
        "joint_life_indicator" : "Single",
        "initial_sum_assured" : 193750.0,
        "initial_sum_re_assured" : null,
        "standard_reinsurace_premium" : null,
        "sub_standard_reinsurance_premium" : null,
        "company_fca" : 783352,
        "gio_option" : false,
        "gio_option_taken" : false,
        "gio_reference" : null,
        "region" : "UK",
        "post_issue_sample" : false,
        "archived" : false,
        "archived_reason" : null,
        "archived_at" : null,
        "modified_by_id" : "1.86.0",
        "external_policy_id" : null
    }
};

export const CUSTOMER_POLICY_DENTAL_85 = {
    type: "postgres",
    modelName,
    data: {
        policyId : generateRandomPostgresId(),
        "quote_id" : CUSTOMER_QUOTE_DENTAL_85.data.quoteId,
        "policy_owner" :`${ CUSTOMER_85.data.firstName} ${ CUSTOMER_85.data.lastName}`,
        "policy_type" : "Dental",
        "product_code" : null,
        "start_date" : "2023-03-01T00:00:00.000Z",
        "end_date" : null,
        "final_payment" : null,
        "treaty_indicator" : false,
        "policy_status" : "Termination",
        "new_business_indicator" : false,
        "indexation" : "Level",
        "indexation_percentage" : 0,
        "indexation_frequency" : "Monthly",
        "premium_frequency" : "Monthly",
        "esc_benefit_type" : "N",
        "esc_premium_type" : "N",
        "annual_premium_increase_rate" : null,
        "joint_life_indicator" : "Single",
        "initial_sum_assured" : null,
        "initial_sum_re_assured" : null,
        "standard_reinsurace_premium" : null,
        "sub_standard_reinsurance_premium" : null,
        "company_fca" : 783352,
        "gio_option" : false,
        "gio_option_taken" : false,
        "gio_reference" : null,
        "region" : "UK",
        "post_issue_sample" : false,
        "archived" : true,
        "archived_reason" : "policy_cancelled",
        "archived_at" : "2023-03-10T17:27:47.000Z",
        "record_modified_at" : "2023-03-10T14:00:21.000Z",
        "created_at" : "2023-03-10T14:00:13.305Z",
        "created_by_id" : null,
        "modified_at" : "2023-03-10T17:27:47.678Z",
        "modified_by_id" : "1.114.0",
        "external_policy_id" : "00000000000000"
    }
}
    
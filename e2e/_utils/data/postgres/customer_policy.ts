import moment from "moment";
import { CUSTOMER_QUOTE_DENTAL_1, CUSTOMER_QUOTE_DENTAL_2, CUSTOMER_QUOTE_DENTAL_3 } from "./customer_quote";
import { CUSTOMER_DENTAL_1, CUSTOMER_DENTAL_2,  CUSTOMER_45 } from "./customers";
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
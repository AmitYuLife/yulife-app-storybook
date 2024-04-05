import moment from "moment";
import { CUSTOMER_QUOTE_PLI_124 } from "./customer_quote";
import { CUSTOMER_124_MPP } from "./customers";
import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";

const modelName = "customer_policy";

export const CUSTOMER_POLICY_PLI_124 = {
    type: "postgres",
    modelName,
    data: {
        externalPolicyId: "3211",
        policyId: generateRandomPostgresId(),
        quote_id: CUSTOMER_QUOTE_PLI_124.data.quoteId,
        policy_owner: `${CUSTOMER_124_MPP.data.firstName} ${CUSTOMER_124_MPP.data.lastName}`,
        policy_type: "Family Income Benefit",
        product_code: null,
        startDate: moment().format(),
        endDate: moment().add(7, "d").format(),
        finalPayment: null,
        treaty_indicator: false,
        policy_status: "Failed Payment",
        new_business_indicator: false,
        indexation: "Decreasing",
        indexation_percentage: 0,
        indexation_frequency: "Monthly",
        premium_frequency: "Monthly",
        esc_benefit_type: "N",
        esc_premium_type: "N",
        annual_premium_increase_rate: null,
        joint_life_indicator: "Single",
        initial_sum_assured: 193750.0,
        initial_sum_re_assured: null,
        standard_reinsurace_premium: null,
        sub_standard_reinsurance_premium: null,
        company_fca: 783352,
        gio_option: false,
        gio_option_taken: false,
        gio_reference: null,
        region: "UK",
        post_issue_sample: false,
        archived: false,
        archived_reason: null,
        archived_at: null,
        modified_by_id: "1.86.0",
        external_policy_id: null,
    },
};

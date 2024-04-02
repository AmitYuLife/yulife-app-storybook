import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_POLICY_DENTAL_1,  CUSTOMER_POLICY_DENTAL_2, CUSTOMER_POLICY_DENTAL_3, CUSTOMER_POLICY_DENTAL_85, CUSTOMER_POLICY_DENTAL_RENEW, CUSTOMER_POLICY_DENTAL_RENEW_2 } from "./customer_policy";
import { PAYMENT_PLAN_DENTAL_1,  PAYMENT_PLAN_DENTAL_2, PAYMENT_PLAN_DENTAL_3, PAYMENT_PLAN_DENTAL_85, PAYMENT_PLAN_DENTAL_RENEW, PAYMENT_PLAN_DENTAL_RENEW_2 } from "./payment_plan";

const modelName = "customer_payment";
const type = "postgres";

export const CUSTOMER_PAYMENT_1 = {
    type,
    modelName,
    data: {
        policyId: CUSTOMER_POLICY_DENTAL_1.data.policyId,
        planId: PAYMENT_PLAN_DENTAL_1.data.planId,
    }
} as IDatabaseItem

export const CUSTOMER_PAYMENT_2 = {
    type,
    modelName,
    data: {
        policyId: CUSTOMER_POLICY_DENTAL_2.data.policyId,
        planId: PAYMENT_PLAN_DENTAL_2.data.planId,
    }
} as IDatabaseItem

export const CUSTOMER_PAYMENT_3 = {
    type,
    modelName,
    data: {
        policyId: CUSTOMER_POLICY_DENTAL_3.data.policyId,
        planId: PAYMENT_PLAN_DENTAL_3.data.planId,
    }
} as IDatabaseItem

export const CUSTOMER_PAYMENT_85 = {
    type,
    modelName,
    data: {
        policy_id: CUSTOMER_POLICY_DENTAL_85.data.policyId,
        plan_id: PAYMENT_PLAN_DENTAL_85.data.planId,
    }
}

export const CUSTOMER_PAYMENT_RENEW = {
    type,
    modelName,
    data: {
        policy_id: CUSTOMER_POLICY_DENTAL_RENEW.data.policyId,
        plan_id: PAYMENT_PLAN_DENTAL_RENEW.data.planId,
    }
}

export const CUSTOMER_PAYMENT_RENEW_2 = {
    type,
    modelName,
    data: {
        policy_id: CUSTOMER_POLICY_DENTAL_RENEW_2.data.policyId,
        plan_id: PAYMENT_PLAN_DENTAL_RENEW_2.data.planId,
    }
}

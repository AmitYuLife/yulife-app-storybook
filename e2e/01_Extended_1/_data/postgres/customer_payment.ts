import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_POLICY_DENTAL_3 } from "./customer_policy";
import { PAYMENT_PLAN_DENTAL_3 } from "./payment_plan";

const modelName = "customer_payment";

export const CUSTOMER_PAYMENT_3 = {
    type: "postgres",
    modelName,
    data: {
        policyId: CUSTOMER_POLICY_DENTAL_3.data.policyId,
        planId: PAYMENT_PLAN_DENTAL_3.data.planId,
    }
} as IDatabaseItem

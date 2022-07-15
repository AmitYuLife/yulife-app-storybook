
import { CUSTOMER_PAYMENT_METHOD_DENTAL_1 } from "@data";
import { CUSTOMER_POLICY_DENTAL_1 } from "./customer_policy";
import { PAYMENT_PLAN_DENTAL_1 } from "./payment_plan";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";


const modelName = "customer_payment";

export const CUSTOMER_PAYMENT_1 = {
    type: "postgres",
    modelName,
    data: {
        policyId: CUSTOMER_POLICY_DENTAL_1.data.policyId,
        planId: PAYMENT_PLAN_DENTAL_1.data.planId,
    }
} as IDatabaseItem
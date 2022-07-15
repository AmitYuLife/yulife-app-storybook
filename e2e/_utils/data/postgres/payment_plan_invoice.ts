import { PAYMENT_PLAN_DENTAL_1 } from "./payment_plan";

const modelName = "payment_plan_invoice";

export const PAYMENT_PLAN_INVOICE_1 = {
    type: "postgres",
    modelName,
    data: {
        amount: 1899,
        chargeCapturedDate: "2022-02-01",
        planId: PAYMENT_PLAN_DENTAL_1.data.planId,
        status: "charged"
    }
};
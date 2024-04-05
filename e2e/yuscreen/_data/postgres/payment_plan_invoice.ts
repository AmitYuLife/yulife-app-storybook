import moment from "moment";
import { PAYMENT_PLAN_DENTAL_3 } from "./payment_plan";

const modelName = "payment_plan_invoice";

export const PAYMENT_PLAN_INVOICE_3 = {
    type: "postgres",
    modelName,
    data: {
        amount: 1299,
        chargeCapturedDate: "2022-02-01",
        created_at: moment().subtract(1, "m").format(),
        planId: PAYMENT_PLAN_DENTAL_3.data.planId,
        status: "failed"
    }
};

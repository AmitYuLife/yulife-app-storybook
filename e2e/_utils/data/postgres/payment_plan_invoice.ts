import { PAYMENT_PLAN_DENTAL_1, PAYMENT_PLAN_DENTAL_2, PAYMENT_PLAN_DENTAL_3, PAYMENT_PLAN_PLI_6 } from "./payment_plan";
import moment from "moment";


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

export const PAYMENT_PLAN_INVOICE_2 = {
    type: "postgres",
    modelName,
    data: {
        amount: 1299,
        chargeCapturedDate: "2022-02-01",
        created_at: moment().subtract(1, "m").format(),
        planId: PAYMENT_PLAN_DENTAL_2.data.planId,
        status: "failed"
    }
};

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

export const PAYMENT_PLAN_INVOICE_6 = {
    type: "postgres",
    modelName,
    data: {
        amount: 1299,
        chargeCapturedDate: "2022-09-01",
        created_at: moment().subtract(1, "m").format(),
        planId: PAYMENT_PLAN_PLI_6.data.planId,
        status: "failed",
    }
};

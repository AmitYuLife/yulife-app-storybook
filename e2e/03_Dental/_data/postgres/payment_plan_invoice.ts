import { PAYMENT_PLAN_DENTAL_1, PAYMENT_PLAN_DENTAL_2, PAYMENT_PLAN_DENTAL_3, PAYMENT_PLAN_DENTAL_85, /*PAYMENT_PLAN_PLI_6*/ } from "./payment_plan";
import moment from "moment";

const type = "postgres";
const modelName = "payment_plan_invoice";

export const PAYMENT_PLAN_INVOICE_1 = {
    type,
    modelName,
    data: {
        amount: 1899,
        chargeCapturedDate: "2022-02-01",
        planId: PAYMENT_PLAN_DENTAL_1.data.planId,
        status: "charged",
    },
};

export const PAYMENT_PLAN_INVOICE_2 = {
    type,
    modelName,
    data: {
        amount: 1299,
        chargeCapturedDate: "2022-02-01",
        created_at: moment().subtract(1, "m").format(),
        planId: PAYMENT_PLAN_DENTAL_2.data.planId,
        status: "failed",
    },
};

export const PAYMENT_PLAN_INVOICE_3 = {
    type,
    modelName,
    data: {
        amount: 1299,
        chargeCapturedDate: "2022-02-01",
        created_at: moment().subtract(1, "m").format(),
        planId: PAYMENT_PLAN_DENTAL_3.data.planId,
        status: "failed",
    },
};

export const PAYMENT_PLAN_INVOICE_85 = {
    type,
    modelName,
    data: {
        amount: 1899,
        chargeCapturedDate: `${moment().subtract(10, "d").format("YYYY-MM-DD")}`,
        planId: PAYMENT_PLAN_DENTAL_85.data.planId,
        created_at: moment().subtract(10, "d").format(),
        status: "charged",
    },
};

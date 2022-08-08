import { CUSTOMER_DENTAL_1, CUSTOMER_DENTAL_2, CUSTOMER_45 } from "./customers";
import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";

const modelName = "payment_plan";

export const PAYMENT_PLAN_DENTAL_1 = {
    type: "postgres",
    modelName,
    data: {
        planId: generateRandomPostgresId(),
        providerSubscriptionId: `sub_${CUSTOMER_DENTAL_1.data.customerId}`,
        raiseInvoiceDayOfMonth: 1,
        paymentCaptureDaysAfterInvoice: 0
    }
};

export const PAYMENT_PLAN_DENTAL_2 = {
    type: "postgres",
    modelName,
    data: {
        planId: generateRandomPostgresId(),
        providerSubscriptionId: `sub_${CUSTOMER_DENTAL_2.data.customerId}`,
        raiseInvoiceDayOfMonth: 1,
        paymentCaptureDaysAfterInvoice: 0
    }
};

export const PAYMENT_PLAN_DENTAL_3 = {
    type: "postgres",
    modelName,
    data: {
        planId: generateRandomPostgresId(),
        providerSubscriptionId: `sub_${CUSTOMER_45.data.customerId}`,
        raiseInvoiceDayOfMonth: 1,
        paymentCaptureDaysAfterInvoice: 0
    }
};
import { CUSTOMER_DENTAL_1, CUSTOMER_DENTAL_2, CUSTOMER_45, CUSTOMER_85, CUSTOMER_DENTAL_RENEW, CUSTOMER_DENTAL_RENEW_2 } from "./customers";
import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";

const modelName = "payment_plan";
const type = "postgres";

export const PAYMENT_PLAN_DENTAL_1 = {
    type,
    modelName,
    data: {
        planId: generateRandomPostgresId(),
        providerSubscriptionId: `sub_${CUSTOMER_DENTAL_1.data.customerId}`,
        raiseInvoiceDayOfMonth: 1,
        paymentCaptureDaysAfterInvoice: 0,
    },
};

export const PAYMENT_PLAN_DENTAL_2 = {
    type,
    modelName,
    data: {
        planId: generateRandomPostgresId(),
        providerSubscriptionId: `sub_${CUSTOMER_DENTAL_2.data.customerId}`,
        raiseInvoiceDayOfMonth: 1,
        paymentCaptureDaysAfterInvoice: 0,
    },
};

export const PAYMENT_PLAN_DENTAL_3 = {
    type,
    modelName,
    data: {
        planId: generateRandomPostgresId(),
        providerSubscriptionId: `sub_${CUSTOMER_45.data.customerId}`,
        raiseInvoiceDayOfMonth: 1,
        paymentCaptureDaysAfterInvoice: 0,
    },
};

export const PAYMENT_PLAN_DENTAL_85 = {
    type,
    modelName,
    data: {
        planId: generateRandomPostgresId(),
        providerSubscriptionId: `sub_${CUSTOMER_85.data.customerId}`,
        raiseInvoiceDayOfMonth: 1,
        paymentCaptureDaysAfterInvoice: 0,
        created_at: "2022-08-22T14:39:15.317Z",
        created_by_id: null,
        modified_at: "2023-02-01T06:06:15.053Z",
        modified_by_id: "1.108.0",
    },
};

export const PAYMENT_PLAN_DENTAL_RENEW = {
    type,
    modelName,
    data: {
        planId: generateRandomPostgresId(),
        providerSubscriptionId: `sub_${CUSTOMER_DENTAL_RENEW.data.customerId}`,
        raiseInvoiceDayOfMonth: 1,
        paymentCaptureDaysAfterInvoice: 0,
    },
};

export const PAYMENT_PLAN_DENTAL_RENEW_2 = {
    type,
    modelName,
    data: {
        planId: generateRandomPostgresId(),
        providerSubscriptionId: `sub_${CUSTOMER_DENTAL_RENEW_2.data.customerId}`,
        raiseInvoiceDayOfMonth: 1,
        paymentCaptureDaysAfterInvoice: 0,
    },
};

import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_45 } from "./customers";

const modelName = "payment_plan";

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

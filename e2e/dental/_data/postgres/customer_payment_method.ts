import { CUSTOMER_DENTAL_1, CUSTOMER_DENTAL_2, CUSTOMER_DENTAL_RENEW, CUSTOMER_DENTAL_RENEW_2 } from "./customers";

const modelName = "customer_payment_method";
const type = "postgres";

export const CUSTOMER_PAYMENT_METHOD_DENTAL_1 = {
    type,
    modelName,
    data: {
        accountNumberEnding: "4242",
        customerId: CUSTOMER_DENTAL_1.data.customerId,
        paymentMethodId: "YUPAYMENTMETHOD002",
        status: "active",
        isPrimary: true
    }
};

export const CUSTOMER_PAYMENT_METHOD_DENTAL_2 = {
    type,
    modelName,
    data: {
        accountNumberEnding: "4242",
        customerId: CUSTOMER_DENTAL_2.data.customerId,
        paymentMethodId: "YUPAYMENTMETHOD002",
        status: "active",
        isPrimary: true
    }
};

export const CUSTOMER_PAYMENT_METHOD_DENTAL_RENEW = {
    type,
    modelName,
    data: {
        accountNumberEnding: "4242",
        customerId: CUSTOMER_DENTAL_RENEW.data.customerId,
        paymentMethodId: "YUPAYMENTMETHOD002",
        status: "active",
        isPrimary: true
    }
};

export const CUSTOMER_PAYMENT_METHOD_DENTAL_RENEW_2 = {
    type,
    modelName,
    data: {
        accountNumberEnding: "4242",
        customerId: CUSTOMER_DENTAL_RENEW_2.data.customerId,
        paymentMethodId: "YUPAYMENTMETHOD002",
        status: "active",
        isPrimary: true
    }
};
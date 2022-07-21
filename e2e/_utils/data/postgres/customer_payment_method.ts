import { CUSTOMER_DENTAL_1, CUSTOMER_DENTAL_2 } from "./customers";
import moment from "moment";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";


const modelName = "customer_payment_method";

export const CUSTOMER_PAYMENT_METHOD_DENTAL_1 = {
    type: "postgres",
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
    type: "postgres",
    modelName,
    data: {
        accountNumberEnding: "4242",
        customerId: CUSTOMER_DENTAL_2.data.customerId,
        paymentMethodId: "YUPAYMENTMETHOD002",
        status: "active",
        isPrimary: true
    }
};
    
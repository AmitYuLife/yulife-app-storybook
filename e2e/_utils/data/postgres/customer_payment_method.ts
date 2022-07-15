import { CUSTOMER_DENTAL_1 } from "./customers";
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
    
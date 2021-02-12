import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const PAYMENT_METHOD_STRIPE = {
    type: "postgres",
    modelName: "payment_method",
    data: {
        payment_method_id: "YUPAYMENTMETHOD002",
        payment_provider: "stripe",
        payment_type:"credit_card"
    }
} as IDatabaseItem;
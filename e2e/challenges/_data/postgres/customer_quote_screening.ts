import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_9 } from "./customers";

export const QUOTE_SCREENING_1 = {
    type: "postgres",
    modelName: "customer_quote_screening",
    data: {
        quote_id:CUSTOMER_9.data.customerId,
    }
} as IDatabaseItem

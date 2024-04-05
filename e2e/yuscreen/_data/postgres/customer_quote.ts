import { IDatabaseItem, generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CPE_DENTAL_3 } from "./customer_product_entity";

const modelName = "customer_quote";

export const CUSTOMER_QUOTE_DENTAL_3 = {
    type: "postgres",
    modelName,
    data: {
        quoteId: generateRandomPostgresId(),
        customerProductId: CPE_DENTAL_3.data.customerProductId,
        insuranceType: "Dental",
        insuranceMonthlyPayment: "12.99",
        insuranceTermYears: -1,
        validTill: moment().add(1, "year").format(),
        createdAt: moment().format(),
        modifiedAt: moment().format(),
        coverType: "common"
    }
} as IDatabaseItem;

import { IDatabaseItem, generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_33, CUSTOMER_34 } from "./customers";
import moment = require("moment");

const type = "postgres"
const modelName = "customer_beneficiary"

export const BENEFICIARY_33_1 = {
    type,
    modelName,
    data: {
        beneficiary_id: generateRandomPostgresId(),
        beneficiary_first_name: "Alfred",
        beneficiary_last_name: "Pennyworth",
        customer_id: CUSTOMER_33.data.customerId,
        phone: "07123456789",
        percentage: "100",
        relationship: "Butler",
        created_at: moment().subtract(1, "days").toDate(),
        active: true
    }
} as IDatabaseItem

export const BENEFICIARY_34_1 = {
    type,
    modelName,
    data: {
        beneficiary_id: generateRandomPostgresId(),
        beneficiary_first_name: "Bruce",
        beneficiary_last_name: "Wayne",
        customer_id: CUSTOMER_34.data.customerId,
        phone: "07123456789",
        percentage: "100",
        relationship: "Bossman",
        created_at: moment().subtract(1, "days").toDate(),
        active: true
    }
} as IDatabaseItem
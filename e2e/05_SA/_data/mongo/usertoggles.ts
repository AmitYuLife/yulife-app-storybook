
import {CUSTOMER_SA_1, CUSTOMER_SA_2 } from '../postgres/customers';
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo"
const modelName = "usertoggles"


export const CUSTOMER_SA_1_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_SA_1.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_SA_2_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_SA_2.data.customerId,
        features: {
        }
    }
} as IDatabaseItem
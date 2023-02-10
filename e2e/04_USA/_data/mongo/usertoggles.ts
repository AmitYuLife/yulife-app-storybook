
import {CUSTOMER_USA_1, CUSTOMER_USA_2, CUSTOMER_USA_3, CUSTOMER_USA_4 } from '../postgres/customers';
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo"
const modelName = "usertoggles"




export const CUSTOMER_USA_1_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_1.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_2_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_2.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_3_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_3.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_4_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_4.data.customerId,
        features: {
        }
    }
} as IDatabaseItem
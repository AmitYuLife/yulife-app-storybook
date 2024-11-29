import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';
import { AUTH_TEMPLATE } from "./_templates"

const type = "mongo"
const modelName ="authpassword"

export const AUTH_1 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_1.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_2 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_2_SMOKING.data.customerId,
    }
}  as IDatabaseItem

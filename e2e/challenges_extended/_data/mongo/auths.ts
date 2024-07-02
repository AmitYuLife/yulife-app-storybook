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
        _id: generateRandomMongoId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_1.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_34 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.000",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_34.data.customerId,
    }
} as IDatabaseItem

export const AUTH_FIIT = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_FIIT.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_BODY_COACH = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_BODY_COACH.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_122 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_122.data.customerId,
    }
}  as IDatabaseItem

import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';
import moment = require('moment');
import { AUTH_TEMPLATE } from "./_templates"

const type = "mongo"
const modelName ="auth"


export const AUTH_USA_1 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_1.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_2 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_2.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_3 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_3.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_4 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_4.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_5 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_5.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_6 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_6.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_7 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_7.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_8 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_8.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_9 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_9.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_10 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_10.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_11 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_11.data.customerId,
    }
}  as IDatabaseItem
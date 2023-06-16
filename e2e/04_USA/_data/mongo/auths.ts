import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {CUSTOMER_USA_1, CUSTOMER_USA_2, CUSTOMER_USA_3, CUSTOMER_USA_4, CUSTOMER_USA_5, CUSTOMER_USA_6 } from '../postgres/customers';
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
        userId: CUSTOMER_USA_1.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_2 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_2.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_3 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_3.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_4 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_4.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_5 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_5.data.customerId,
    }
}  as IDatabaseItem

export const AUTH_USA_6 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "37.34.118.97",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_6.data.customerId,
    }
}  as IDatabaseItem

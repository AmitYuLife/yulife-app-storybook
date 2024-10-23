import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';
import { AUTH_TEMPLATE } from "./_templates"

const type = "mongo"
const modelName ="authpassword"

export const AUTH_FRY = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_FRY.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_LEELA = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_LEELA.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_BENDER = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_BENDER.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_ZOIDBERG = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_ZOIDBERG.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_ZAPP = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_ZAPP.data.customerId,
    },
} as IDatabaseItem;
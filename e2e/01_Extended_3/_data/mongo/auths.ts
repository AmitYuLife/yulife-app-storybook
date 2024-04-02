import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

import { AUTH_TEMPLATE } from "./_templates";

export const AUTH_FUTURE_PRODUCT = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.41129",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_FUTURE_PRODUCT.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_123 = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_123_MPP.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_124 = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_124_MPP.data.customerId,
    },
} as IDatabaseItem;

import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

const type = "mongo";
const modelName = "users";

export const USER_37 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_37.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 10,
            },
        ],
        earnRate: 10,
    },
} as IDatabaseItem;

export const USER_PLI_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_2.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 1,
            },
        ],
        earnRate: 1,
    },
} as IDatabaseItem;

export const USER_PLI_3 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_3.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 1,
            },
        ],
        earnRate: 1,
    },
} as IDatabaseItem;

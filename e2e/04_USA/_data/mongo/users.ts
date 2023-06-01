import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_USA_1, CUSTOMER_USA_2, CUSTOMER_USA_3, CUSTOMER_USA_4 } from '../postgres/customers';
import moment from "moment";

const type = "mongo"
const modelName = "users"

const USER_DATA_TEMPLATE = {
    data: {
        _id: "",
        userId: "",
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 1,
        }],
        isAvatarCreated: false,
        earnRate: 1,
    }

}

export const USER_USA_1 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_1.data.customerId,
        nickname:"First User USA",
    }
} as IDatabaseItem

export const USER_USA_2 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_2.data.customerId,
        nickname:"Second User USA"
    }
} as IDatabaseItem

export const USER_USA_3 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_3.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
        nickname:"Third User USA"
    }
} as IDatabaseItem

export const USER_USA_4 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_4.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
        nickname:"Fourth User USA"
    }
} as IDatabaseItem

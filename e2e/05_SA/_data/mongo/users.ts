import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_SA_1, CUSTOMER_SA_2 } from '../postgres/customers';
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

export const USER_SA_1 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_SA_1.data.customerId,
        nickname:"First User SA"
    }
} as IDatabaseItem

export const USER_SA_2 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_SA_2.data.customerId,
        nickname:"Rei Buldo"
    }
} as IDatabaseItem


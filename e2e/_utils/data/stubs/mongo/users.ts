
import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_2, CUSTOMER_3, CUSTOMER_4 } from '../postgres/customers';

export const USER_2 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_2.data.customerId,
        earnRate: 20,
        products: [{
            _id: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 20,
            type: "employer"
        }]
    }
} as IDatabaseItem

export const USER_3 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_3.data.customerId,
    }
} as IDatabaseItem

export const USER_4 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_4.data.customerId,
    }
} as IDatabaseItem
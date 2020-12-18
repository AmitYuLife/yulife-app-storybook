
import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_2, CUSTOMER_3, CUSTOMER_4, CUSTOMER_16, CUSTOMER_17, CUSTOMER_18, CUSTOMER_ALPHA, CUSTOMER_21, CUSTOMER_23, CUSTOMER_20, CUSTOMER_19, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_9, CUSTOMER_15, CUSTOMER_22, CUSTOMER_24, CUSTOMER_13, CUSTOMER_25, CUSTOMER_12 } from '../postgres/customers';

const USER_DATA_TEMPLATE = {
    data: {
        _id: "",
        userId: "",
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        isAvatarCreated: false,
        earnRate: 10,
    }

}


export const USER_2 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_2.data.customerId,
        earnRate: 20,
        products: [{
            productId: generateRandomMongoId(),
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

export const USER_5 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_5.data.customerId,
        earnRate: 10,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }]
    }
} as IDatabaseItem

export const USER_6 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_6.data.customerId,
        earnRate: 10,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }]
    }
} as IDatabaseItem

export const USER_7 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_7.data.customerId,
        earnRate: 10,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }]
    }
} as IDatabaseItem


export const USER_9 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_9.data.customerId,
        earnRate: 10,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }]
    }
} as IDatabaseItem

export const USER_12 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_12.data.customerId,
        earnRate: 10,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }]
    }
} as IDatabaseItem


export const USER_13 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_13.data.customerId,
        earnRate: 10,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }]
    }
} as IDatabaseItem


export const USER_15 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_15.data.customerId,
        earnRate: 10,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }]
    }
} as IDatabaseItem



export const USER_17 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: "5f2ab87a75ffd2a445b11263",
        userId: CUSTOMER_17.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        isAvatarCreated: true,
        earnRate: 10,
        cloudinaryAvatar:{
            filename:"api/local/avatars/530EDE9E07434A4EB1E251A8548D834C",
            version:1
        },
    }
} as IDatabaseItem


export const USER_18 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_18.data.customerId,
    }
} as IDatabaseItem

export const USER_19 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_19.data.customerId,
        nickname:"Angela"
    }
} as IDatabaseItem


export const USER_20 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_20.data.customerId,
        nickname:"Oscar"
    }
} as IDatabaseItem

export const USER_ALPHA = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_ALPHA.data.customerId,
        customer_membership: CUSTOMER_ALPHA.data.membershipType,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        isAvatarCreated: false,
        earnRate: 10,
    }
} as IDatabaseItem

export const USER_22 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_22.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        earnRate: 10,
    }
} as IDatabaseItem



export const USER_23 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: "5f3160808da1c85af12478e9",
        userId: CUSTOMER_23.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        isAvatarCreated: true,
        earnRate: 10,
        cloudinaryAvatar: {
            filename: "api/local/avatars/530EDE9E07434A4EB1E251A8548D834C",
            version: 1
        },

    }
} as IDatabaseItem

export const USER_25 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_25.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        earnRate: 10,
    }
} as IDatabaseItem

export const USER_24 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_24.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        earnRate: 10,
    }
} as IDatabaseItem


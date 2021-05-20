
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_2, CUSTOMER_3, CUSTOMER_4, CUSTOMER_16, CUSTOMER_17, CUSTOMER_18, CUSTOMER_ALPHA, CUSTOMER_21, CUSTOMER_23, CUSTOMER_20, CUSTOMER_19, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_9, CUSTOMER_15, CUSTOMER_22, CUSTOMER_24, CUSTOMER_13, CUSTOMER_25, CUSTOMER_12, CUSTOMER_10, CUSTOMER_27, CUSTOMER_28, CUSTOMER_29, CUSTOMER_30, CUSTOMER_31, CUSTOMER_32 } from '../postgres/customers';

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
        }],
        isAvatarCreated: true,
        avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg"
    }
} as IDatabaseItem

export const USER_10 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_10.data.customerId,
        earnRate: 10,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }],
        isAvatarCreated: true,
        avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg"
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
        avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg"
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

export const USER_21 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_21.data.customerId,
        nickname:"Dwight"
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
        avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg"
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


export const USER_27 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_27.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 8,
        }],
        earnRate: 8,
    }
} as IDatabaseItem

export const USER_28 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_28.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 7,
        }],
        earnRate: 7,
    }
} as IDatabaseItem

export const USER_29 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_29.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 7,
        }],
        earnRate: 7,
    }
} as IDatabaseItem

export const USER_30 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_30.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 7,
        }],
        earnRate: 7,
        avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg"
    }
} as IDatabaseItem

export const USER_31 = {
    type,
    modelName,
    data:{
        _id: generateRandomMongoId(),
        userId: CUSTOMER_31.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        earnRate: 10,
        isAvatarCreated:true,
        avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg"
    }
} as IDatabaseItem

export const USER_32 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_32.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        earnRate: 10,
        isAvatarCreated: true,
        avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg"
    }
} as IDatabaseItem
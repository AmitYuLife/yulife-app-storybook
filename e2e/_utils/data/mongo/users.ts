import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_1, CUSTOMER_2, CUSTOMER_3, CUSTOMER_4, CUSTOMER_8, CUSTOMER_14, CUSTOMER_16, CUSTOMER_17, CUSTOMER_18, CUSTOMER_ALPHA, CUSTOMER_21, CUSTOMER_23, CUSTOMER_20, CUSTOMER_19, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_9, CUSTOMER_15, CUSTOMER_22, CUSTOMER_24, CUSTOMER_13, CUSTOMER_25, CUSTOMER_12, CUSTOMER_10, CUSTOMER_27, CUSTOMER_28, CUSTOMER_29, CUSTOMER_30, CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_34, CUSTOMER_35, CUSTOMER_36, CUSTOMER_37, CUSTOMER_38, CUSTOMER_39, CUSTOMER_40, CUSTOMER_41, CUSTOMER_42, CUSTOMER_43, CUSTOMER_44, CUSTOMER_45, CUSTOMER_46, CUSTOMER_47, CUSTOMER_50, CUSTOMER_MEDITOPIA_1, CUSTOMER_MEDITOPIA_2, CUSTOMER_MEDITOPIA_3, CUSTOMER_PLI_6, CUSTOMER_52, CUSTOMER_54, CUSTOMER_55, CUSTOMER_56, CUSTOMER_57, CUSTOMER_58, CUSTOMER_PLI_7, CUSTOMER_PLI_9, CUSTOMER_PLI_10, CUSTOMER_60, CUSTOMER_61, CUSTOMER_63, CUSTOMER_64, CUSTOMER_66, CUSTOMER_48, CUSTOMER_49, CUSTOMER_51, CUSTOMER_69, CUSTOMER_65, CUSTOMER_70, CUSTOMER_67, CUSTOMER_68, CUSTOMER_71, CUSTOMER_72, CUSTOMER_73, CUSTOMER_74, CUSTOMER_75, CUSTOMER_76, CUSTOMER_77, CUSTOMER_78 } from '../postgres/customers';
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
            earnRate: 10,
        }],
        isAvatarCreated: false,
        earnRate: 10,
    }

}

export const USER_1 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_1.data.customerId,
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

export const USER_8 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_8.data.customerId,
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

export const USER_14 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
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


export const USER_16 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_16.data.customerId,
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
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg"
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

export const USER_33 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_33.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        earnRate: 10,
        isAvatarCreated: true,
        cloudinaryAvatar: {
            "filename": "api/detox/avatars/609be5870c928c573fcb3140",
            "version": 1
        }
    }
} as IDatabaseItem

export const USER_34 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_34.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        earnRate: 10,
        isAvatarCreated: true,
        cloudinaryAvatar: {
            "filename": "api/detox/avatars/609be5870c928c573fcb3140",
            "version": 1
        }
    }
} as IDatabaseItem

export const USER_35 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_35.data.customerId,
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

export const USER_36 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_36.data.customerId,
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

export const USER_37 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_37.data.customerId,
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

export const USER_38 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_38.data.customerId,
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

export const USER_39 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_39.data.customerId,
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

export const USER_40 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_40.data.customerId,
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

export const USER_MEDITOPIA_1 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_MEDITOPIA_1.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }],
        earnRate: 10,
    }
} as IDatabaseItem

export const USER_41 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_41.data.customerId,
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

export const USER_MEDITOPIA_2 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_MEDITOPIA_2.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }],
        earnRate: 10,
    }
} as IDatabaseItem

export const USER_MEDITOPIA_3 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_MEDITOPIA_3.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            earnRate: 10,
            type: "employer"
        }],
        earnRate: 10,
    }
} as IDatabaseItem


export const USER_42 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_42.data.customerId,
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


export const USER_PLI_2 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_42.data.customerId,
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

export const USER_43 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_43.data.customerId,
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


export const USER_44 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_44.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem



export const USER_45 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_45.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 6,
        }],
        earnRate: 6,
    }
} as IDatabaseItem

export const USER_46 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_46.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 5,
        }],
        earnRate: 5,
    }
} as IDatabaseItem

export const USER_47 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_47.data.customerId,
        nickname:"Gill",
    }
} as IDatabaseItem

export const USER_48 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_48.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 31,
        }],
        earnRate: 31,
    }
} as IDatabaseItem

export const USER_49 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_49.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 31,
        }],
        earnRate: 31,
    }
} as IDatabaseItem

export const USER_50 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_50.data.customerId,
        nickname:"Lynton",
    }
} as IDatabaseItem

export const USER_51 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_51.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 5,
        }],
        earnRate: 5,
    }
} as IDatabaseItem

export const USER_52 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_52.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 6,
            nickname:"Niamh",
        }],
        earnRate: 13,
    }
} as IDatabaseItem

export const USER_54 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_54.data.customerId,
        nickname:"Sasha",
    }
} as IDatabaseItem

export const USER_55 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_55.data.customerId,
        nickname:"Simone",
    }
} as IDatabaseItem

export const USER_56 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_56.data.customerId,
        nickname:"Milton",
    }
} as IDatabaseItem

export const USER_57 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_57.data.customerId,
        nickname:"Stephen",
    }
} as IDatabaseItem

export const USER_PLI_6 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_6.data.customerId,
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

export const USER_PLI_7 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_7.data.customerId,
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

export const USER_PLI_9 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_9.data.customerId,
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

export const USER_PLI_10 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_10.data.customerId,
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

export const USER_58 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_58.data.customerId,
        nickname:"Paris",
    }
} as IDatabaseItem

export const USER_60 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_60.data.customerId,
        nickname:"Ivan",
    }
} as IDatabaseItem

export const USER_61 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_61.data.customerId,
        nickname:"Alex",
    }
} as IDatabaseItem

export const USER_63 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_63.data.customerId,
        nickname:"Sam",
    }
} as IDatabaseItem

export const USER_64 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_64.data.customerId,
        nickname:"Tony",
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 20,
        }],
        earnRate: 20,
    }
} as IDatabaseItem

export const USER_65 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_65.data.customerId,
        nickname:"Gordon",
        "activityLastReceived": {
            "cycling": moment().subtract(1, "days").toString()
        }
    }
} as IDatabaseItem

export const USER_66 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_66.data.customerId,
        nickname:"Theresa",
    }
} as IDatabaseItem

export const USER_67 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_67.data.customerId,
        nickname:"Rishi",
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 20,
        }],
        earnRate: 20,
    }
} as IDatabaseItem

export const USER_68 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_68.data.customerId,
        nickname:"Alex",
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 20,
        }],
        earnRate: 20,
    }
} as IDatabaseItem
export const USER_69 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_69.data.customerId,
        nickname:"John",
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 6,
        }],
        earnRate: 6,
    }
} as IDatabaseItem

export const USER_70 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_70.data.customerId,
        nickname:"Robert",
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 6,
        }],
        earnRate: 6,
    }
} as IDatabaseItem



export const USER_71 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_71.data.customerId,
        nickname:"Cersei",
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

export const USER_72 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_72.data.customerId,
        nickname:"Jamie",
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

export const USER_73 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: "5f2ab87a75ffd2a445b11267",
        userId: CUSTOMER_73.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        isAvatarCreated: true,
        earnRate: 10,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg"
    }
} as IDatabaseItem


export const USER_74 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_74.data.customerId,
        nickname:"TV",
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


export const USER_75 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_75.data.customerId,
    }
} as IDatabaseItem

export const USER_76 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_76.data.customerId,
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

export const USER_77 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_77.data.customerId,
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 10,
        }],
        isAvatarCreated: true,
        earnRate: 10,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg"
    }
} as IDatabaseItem

export const USER_78 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_78.data.customerId,
        nickname:"Poog",
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 9,
        }],
        earnRate: 9,
    }
} as IDatabaseItem
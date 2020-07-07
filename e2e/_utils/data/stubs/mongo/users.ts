
import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_2, CUSTOMER_3, CUSTOMER_4, CUSTOMER_16, CUSTOMER_17, CUSTOMER_18, CUSTOMER_ALPHA } from '../postgres/customers';

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

export const USER_17 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
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
        avatar: {
            "head": {
                "partId": "male_head_1",
                "colorSchemeId": "skin_peach"
            },
            "hair": {
                "partId": "spiral_curls",
                "colorSchemeId": "hair_charcoal_black"
            },
            "body": {
                "partId": "male_body_1",
                "colorSchemeId": "skin_peach"
            },
            "pants": {
                "partId": "male_pants_1",
                "colorSchemeId": ""
            },
            "chest": {
                "partId": "male_chest_1",
                "colorSchemeId": ""
            },
            "gloves": {
                "partId": "",
                "colorSchemeId": ""
            },
            "facialHair": {
                "partId": "cowboy_moustache",
                "colorSchemeId": "facial_hair_black"
            },
            "glasses": {
                "partId": "",
                "colorSchemeId": ""
            },
            "boots": {
                "partId": "male_boots_1",
                "colorSchemeId": ""
            },
            "leftEye": {
                "partId": "eyes_1",
                "colorSchemeId": "eyes_deadshot_black"
            },
            "rightEye": {
                "partId": "eyes_1",
                "colorSchemeId": "eyes_deadshot_black"
            }
        }
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
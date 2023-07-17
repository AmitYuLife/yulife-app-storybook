import * as customer from '../postgres/customers';
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo"
const modelName = "usertoggles"




export const CUSTOMER_USA_1_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_1.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_2_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_2.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_3_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_3.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_4_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_4.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_5_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_5.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_6_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_6.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_7_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_7.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_8_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_8.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_9_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_9.data.customerId,
        features: {
        }
    }
} as IDatabaseItem

export const CUSTOMER_USA_10_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_10.data.customerId,
        features: {
        }
    }
} as IDatabaseItem
import moment = require("moment");
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
;
import { CUSTOMER_16, CUSTOMER_17, CUSTOMER_18, CUSTOMER_19, CUSTOMER_20, CUSTOMER_21, CUSTOMER_27, CUSTOMER_28, CUSTOMER_29, CUSTOMER_30, CUSTOMER_47, CUSTOMER_84 } from "../postgres/customers";

const type = "mongo"
const modelName = "userduel"

export const user_duel_1 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
        {
                userId: CUSTOMER_16.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(1, "hours").toISOString(),
                score:100,
            },
            {
                userId: CUSTOMER_17.data.customerId,
                status: "accepted",
                startDateTime: moment().subtract(1, "hours").toISOString(),
            }
        ],
        date: moment().subtract(1, "hours").format("YYYY-MM-DD"),
        type: "steps",
        status: "accepted",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_19.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(5, "days").toISOString(),
                score: 600,
            },
            {
                userId: CUSTOMER_20.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(5, "days").toISOString(),
                score:400
            }
        ],
        date: moment().subtract(5, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_3 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_19.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(8, "days").toISOString(),
                score: 300,
            },
            {
                userId: CUSTOMER_16.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(8, "days").toISOString(),
                score: 500
            }
        ],
        date: moment().subtract(8, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem


export const user_duel_4 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_19.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(8, "days").toISOString(),
                score: 400,
            },
            {
                userId: CUSTOMER_17.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(8, "days").toISOString(),
                score: 800
            }
        ],
        date: moment().subtract(8, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_5 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_19.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(8, "days").toISOString(),
                score: 400,
            },
            {
                userId: CUSTOMER_18.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(8, "days").toISOString(),
                score: 500
            }
        ],
        date: moment().subtract(8, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_6 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_19.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(8, "days").toISOString(),
                score: 300,
            },
            {
                userId: CUSTOMER_21.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(8, "days").toISOString(),
                score: 200
            }
        ],
        date: moment().subtract(8, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_7 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_27.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(6, "days").toISOString(),
                score: 300,
            },
            {
                userId: CUSTOMER_28.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(6, "days").toISOString(),
                score: 200
            }
        ],
        date: moment().subtract(6, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_8 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_27.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(7, "days").toISOString(),
                score: 300,
            },
            {
                userId: CUSTOMER_29.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(7, "days").toISOString(),
                score: 200
            }
        ],
        date: moment().subtract(7, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_9 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_27.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(8, "days").toISOString(),
                score: 300,
            },
            {
                userId: CUSTOMER_30.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(8, "days").toISOString(),
                score: 200
            }
        ],
        date: moment().subtract(8, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_10 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_47.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(1, "days").toISOString(),
                score: 300,
            },
            {
                userId: CUSTOMER_21.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(1, "days").toISOString(),
                score: 200
            }
        ],
        date: moment().subtract(1, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem


export const user_duel_11 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_47.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(19, "days").toISOString(),
                score: 600,
            },
            {
                userId: CUSTOMER_18.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(19, "days").toISOString(),
                score: 400
            }
        ],
        date: moment().subtract(19, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_12 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_47.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(20, "days").toISOString(),
                score: 400,
            },
            {
                userId: CUSTOMER_18.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(20, "days").toISOString(),
                score: 600
            }
        ],
        date: moment().subtract(20, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_13 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_47.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(21, "days").toISOString(),
                score: 400,
            },
            {
                userId: CUSTOMER_18.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(21, "days").toISOString(),
                score: 600
            }
        ],
        date: moment().subtract(21, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem

export const user_duel_14 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        opponents: [
            {
                userId: CUSTOMER_84.data.customerId,
                status: "submitted",
                startDateTime: moment().subtract(21, "days").toISOString(),
                score: 300,
            },
            {
                userId: "deleted-user-should-not-match",
                status: "submitted",
                startDateTime: moment().subtract(21, "days").toISOString(),
                score: 500
            }
        ],
        date: moment().subtract(21, "days").format("YYYY-MM-DD"),
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
        updatedAt: moment().toISOString()
    }
} as IDatabaseItem
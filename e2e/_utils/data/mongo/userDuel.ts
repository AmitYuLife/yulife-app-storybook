import moment = require("moment");
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
;
import { CUSTOMER_16, CUSTOMER_17, CUSTOMER_19, CUSTOMER_20 } from "../postgres/customers";

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
                startDateTime: moment().add(1, "hours").toISOString(),
                score:100,
            },
            {
                userId: CUSTOMER_17.data.customerId,
                status: "accepted",
                startDateTime: moment().add(1, "hours").toISOString(),
            }
        ],
        type: "steps",
        status: "accepted",
        duration: 86400,
        yucoin: 10,
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
                startDateTime: moment().add(5, "days").toISOString(),
                score:400
            }
        ],
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
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
                startDateTime: moment().add(8, "days").toISOString(),
                score: 500
            }
        ],
        type: "steps",
        status: "finished",
        duration: 86400,
        yucoin: 10,
    }
} as IDatabaseItem

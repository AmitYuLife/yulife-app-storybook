import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_84 } from "../postgres/customers";
import moment from "moment";

const type = "mongo"
const modelName = "userduel"

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

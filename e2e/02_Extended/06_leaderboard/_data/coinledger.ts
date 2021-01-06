import { LEADERBOARD_CUSTOMERS } from "./customers";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { CHALLENGE_TEMPLATE } from "@data";

export const LEADERBOARD_COINLEDGER = LEADERBOARD_CUSTOMERS.map((item) => ({
    type: "mongo",
    modelName: "coinledger",
    data: {
        "_id": generateRandomMongoId(),
        "customerId": item.data.customerId,
        "userId": item.data.customerId,
        "transactions": [{ _id: generateRandomMongoId(), coins: 10, source: "challenge", sourceId: CHALLENGE_TEMPLATE.data._id, timestamp: CHALLENGE_TEMPLATE.data.endDateTime, totalCoins: 210, level: 1 }],
        "currentBalance": 0,
        "currentStreak": 0,
        "currentLevel": 1,
    }
}))

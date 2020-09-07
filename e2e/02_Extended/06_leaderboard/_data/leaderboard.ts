import { generateRandomMongoId } from "_utils/data/utils";
import { LEADERBOARD_CUSTOMERS } from "./customers";

const LEADERBOARD_ID = generateRandomMongoId();

export const LEADERBOARD_LEADERBOARD = LEADERBOARD_CUSTOMERS.map((item) => ({
    type: "mongo",
    modelName: "user_leaderboards",
    data: {
        leaderboardId: LEADERBOARD_ID,
        userId: item.data.customerId,
        name: "LB1",
        creatorName: item.data.firstName,
        consent: true,
        primaryBusinessLeaderboard: true,
        hasAccepted: true,
        days: 30,
        isCreatedByCurrentUser: true
    }
}))

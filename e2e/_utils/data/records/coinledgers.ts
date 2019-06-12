import { DatabaseCollection } from "../types";
import { generateRandomId } from "../utils";

export const COIN_LEDGER_USER2_1 = {
    collection: DatabaseCollection.coinledgers,
    data: {
        _id: generateRandomId(),
        updatedAt: "2019-05-08T15:46:51.717Z",
        createdAt: "2019-05-03T15:10:35.549Z",
        customerId: "9826F33EEFFA48D49DFC30ADBD2F81C3",
        userId: "9826F33EEFFA48D49DFC30ADBD2F81C3",
        transactions: [
            {
                totalCoins: 218,
                multiplierId: null,
                timestamp: "2019-05-08T16:39:12.000Z",
                sourceId: "5cf53df416a91d0025657da5",
                source: "challenge",
                coins: 6,
                updatedAt: "2019-05-08T15:46:51.701Z",
                createdAt: "2019-05-08T15:46:51.701Z",
                _id: generateRandomId(),
                level: 4
            },
            {
                totalCoins: 212,
                multiplierId: null,
                timestamp: "2019-06-05T16:39:12.000Z",
                sourceId: "5cf53df416a91d0025657da5",
                source: "challenge",
                coins: 6,
                updatedAt: "2019-06-05T15:46:51.701Z",
                createdAt: "2019-06-05T15:46:51.701Z",
                _id: generateRandomId(),
                level: 3
            },
            {
                totalCoins: 206,
                multiplierId: null,
                timestamp: "2019-06-03T16:39:12.000Z",
                sourceId: "5cf53df416a91d0025657da5",
                source: "challenge",
                coins: 6,
                updatedAt: "2019-06-03T15:46:51.701Z",
                createdAt: "2019-06-03T15:46:51.701Z",
                _id: generateRandomId(),
                level: 2
            },
            {
                totalCoins: 200,
                sourceId: "5cf53bfbf2066d00330bf91c",
                source: "onboardingChallenge",
                coins: 200,
                updatedAt: "2019-05-03T15:25:47.885Z",
                createdAt: "2019-05-03T15:25:47.885Z",
                _id: generateRandomId(),
                level: 1
            }
        ],
        currentStreak: 1,
        currentBalance: 218,
        currentLevel: 4,
        // "__v" : 0,
        activeStreakId: "YU_STREAK_001",
        nextLevelAvailableAt: "2019-05-09T00:00:00",
        nextStreakAvailableAt: "2019-05-09T00:00:00"
    }
};

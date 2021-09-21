
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_2, CUSTOMER_3, CUSTOMER_4, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8, CUSTOMER_9, CUSTOMER_12, CUSTOMER_13, CUSTOMER_14, CUSTOMER_15, CUSTOMER_18, CUSTOMER_17, CUSTOMER_22, CUSTOMER_23, CUSTOMER_24, CUSTOMER_19, CUSTOMER_16, CUSTOMER_35, CUSTOMER_36 } from '../postgres/customers';
import {
    CHALLENGE_2, CHALLENGE_USER_6_A, CHALLENGE_USER_7_A, CHALLENGE_USER_7_B, CHALLENGE_USER_7_C, CHALLENGE_USER_7_D,
    CHALLENGE_USER_8_B, CHALLENGE_USER_8_A, CHALLENGE_USER_9_B, CHALLENGE_USER_9_A, CHALLENGE_USER_9_C, CHALLENGE_USER_9_D,
    CHALLENGE_USER_9_E, CHALLENGE_USER_9_F, CHALLENGE_USER_14_B, CHALLENGE_USER_14_A, CHALLENGE_USER_14_C, CHALLENGE_USER_14_D,
    CHALLENGE_USER_14_E, CHALLENGE_USER_14_F, CHALLENGE_USER_14_G, CHALLENGE_USER_14_H, CHALLENGE_USER_14_I, CHALLENGE_USER_15_B,
    CHALLENGE_USER_15_A, CHALLENGE_USER_15_C, CHALLENGE_USER_18_A, CHALLENGE_USER_18_B, CHALLENGE_USER_17_A, CHALLENGE_USER_35_A, CHALLENGE_USER_35_B, CHALLENGE_USER_35_C, CHALLENGE_USER_35_D, CHALLENGE_USER_35_E,

} from './challenge';

import moment = require('moment');

export const COIN_LEDGER_2 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        "_id": generateRandomMongoId(),
        "customerId": CUSTOMER_2.data.customerId,
        "userId": CUSTOMER_2.data.customerId,
        "transactions": [{ _id: generateRandomMongoId(), coins: 10, source: "challenge", sourceId: CHALLENGE_2.data._id, timestamp: CHALLENGE_2.data.endDateTime, totalCoins: 210, level: 1 }],
        "currentBalance": 0,
        "currentStreak": 0,
        "currentLevel": 1,
    }
} as IDatabaseItem

export const COIN_LEDGER_3 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_3.data.customerId,
        userId: CUSTOMER_3.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 90
    }
} as IDatabaseItem

export const COIN_LEDGER_4 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_4.data.customerId,
        userId: CUSTOMER_4.data.customerId,
        transactions: [],
        currentBalance: 15000,
        currentStreak: 0,
        currentLevel: 10
    }
} as IDatabaseItem

export const COIN_LEDGER_6 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_6.data.customerId,
        userId: CUSTOMER_6.data.customerId,
        transactions: [
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_6_A.data._id,
                "timestamp": CHALLENGE_USER_6_A.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 260,
                "level": 2
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 200,
                "source": "onboardingChallenge",
                "sourceId": generateRandomMongoId(),
                "totalCoins": 200,
                "level": 1
            }
        ],
        currentBalance: 0,
        currentStreak: 1,
        currentLevel: 2,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const COIN_LEDGER_7 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_7.data.customerId,
        userId: CUSTOMER_7.data.customerId,
        transactions: [
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_7_D.data._id,
                "timestamp": CHALLENGE_USER_7_D.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 440,
                "level": 5
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_7_C.data._id,
                "timestamp": CHALLENGE_USER_7_C.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 380,
                "level": 4
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_7_B.data._id,
                "timestamp": CHALLENGE_USER_7_B.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 320,
                "level": 3
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_7_A.data._id,
                "timestamp": CHALLENGE_USER_7_A.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 260,
                "level": 2
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 200,
                "source": "onboardingChallenge",
                "sourceId": generateRandomMongoId(),
                "totalCoins": 200,
                "level": 1
            }
        ],
        activeStreakId: "YU_STREAK_001",
        currentBalance: 440,
        currentStreak: 4,
        currentLevel: 5,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),

    }
} as IDatabaseItem


export const COIN_LEDGER_8 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_8.data.customerId,
        userId: CUSTOMER_8.data.customerId,
        transactions: [
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_8_B.data._id,
                "timestamp": CHALLENGE_USER_8_B.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 320,
                "level": 3
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_8_A.data._id,
                "timestamp": CHALLENGE_USER_8_A.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 260,
                "level": 2
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 200,
                "source": "onboardingChallenge",
                "sourceId": generateRandomMongoId(),
                "totalCoins": 200,
                "level": 1
            }
        ],
        activeStreakId: "YU_STREAK_001",
        currentBalance: 320,
        currentLevel: 3,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")

    }
} as IDatabaseItem

export const COIN_LEDGER_9 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_9.data.customerId,
        userId: CUSTOMER_9.data.customerId,
        transactions: [
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_9_F.data._id,
                "timestamp": CHALLENGE_USER_9_F.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 560,
                "level": 7
            },

            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_9_E.data._id,
                "timestamp": CHALLENGE_USER_9_E.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 500,
                "level": 6
            },

            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_9_D.data._id,
                "timestamp": CHALLENGE_USER_9_D.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 440,
                "level": 5
            },


            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_9_C.data._id,
                "timestamp": CHALLENGE_USER_9_C.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 380,
                "level": 4
            },

            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_9_B.data._id,
                "timestamp": CHALLENGE_USER_9_B.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 320,
                "level": 3
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_9_A.data._id,
                "timestamp": CHALLENGE_USER_9_A.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 260,
                "level": 2
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 200,
                "source": "onboardingChallenge",
                "sourceId": generateRandomMongoId(),
                "totalCoins": 200,
                "level": 1
            }
        ],
        activeStreakId: "YU_STREAK_001",
        currentBalance: 560,
        currentLevel: 7,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const COIN_LEDGER_12 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_12.data.customerId,
        userId: CUSTOMER_12.data.customerId,
        transactions: [],
        currentBalance: 27500,
        currentStreak: 0,
        currentLevel: 115
    }
} as IDatabaseItem



export const COIN_LEDGER_13 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_13.data.customerId,
        userId: CUSTOMER_13.data.customerId,
        transactions: [],
        currentBalance: 50000,
        currentStreak: 0,
        currentLevel: 175,
    }
} as IDatabaseItem


export const COIN_LEDGER_14 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_14.data.customerId,
        userId: CUSTOMER_14.data.customerId,
        transactions: [
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_14_I.data._id,
                "timestamp": CHALLENGE_USER_14_I.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 560,
                "level": 7
            },


            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_14_H.data._id,
                "timestamp": CHALLENGE_USER_14_H.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 560,
                "level": 7
            },

            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_14_G.data._id,
                "timestamp": CHALLENGE_USER_14_G.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 560,
                "level": 7
            },

            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_14_F.data._id,
                "timestamp": CHALLENGE_USER_14_F.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 560,
                "level": 7
            },

            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_14_E.data._id,
                "timestamp": CHALLENGE_USER_14_E.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 500,
                "level": 6
            },

            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_14_D.data._id,
                "timestamp": CHALLENGE_USER_14_D.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 440,
                "level": 5
            },


            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_14_C.data._id,
                "timestamp": CHALLENGE_USER_14_C.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 380,
                "level": 4
            },

            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_14_B.data._id,
                "timestamp": CHALLENGE_USER_14_B.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 320,
                "level": 3
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_14_A.data._id,
                "timestamp": CHALLENGE_USER_14_A.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 260,
                "level": 2
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 200,
                "source": "onboardingChallenge",
                "sourceId": generateRandomMongoId(),
                "totalCoins": 200,
                "level": 1
            }
        ],
        activeStreakId: "YU_STREAK_001",
        currentBalance: 560,
        currentLevel: 7,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem


export const COIN_LEDGER_15 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_15.data.customerId,
        userId: CUSTOMER_15.data.customerId,
        transactions: [
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_15_C.data._id,
                "timestamp": CHALLENGE_USER_15_C.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 320,
                "level": 4
            },

            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_15_B.data._id,
                "timestamp": CHALLENGE_USER_15_B.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 320,
                "level": 3
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_15_A.data._id,
                "timestamp": CHALLENGE_USER_15_A.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 260,
                "level": 2
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 200,
                "source": "onboardingChallenge",
                "sourceId": generateRandomMongoId(),
                "totalCoins": 200,
                "level": 1
            }
        ],
        activeStreakId: "YU_STREAK_001",
        currentBalance: 320,
        currentLevel: 4,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")

    }
} as IDatabaseItem

export const COIN_LEDGER_16 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_16.data.customerId,
        userId: CUSTOMER_16.data.customerId,
        transactions: [],
        activeStreakId: "YU_STREAK_001",
        currentBalance: 50,
        currentLevel: 1,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")

    }
} as IDatabaseItem


export const COIN_LEDGER_17 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_17.data.customerId,
        userId: CUSTOMER_17.data.customerId,
        transactions: [
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_17_A.data._id,
                "timestamp": CHALLENGE_USER_17_A.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 260,
                "level": 1
            },
        ],
        activeStreakId: "YU_STREAK_001",
        currentBalance: 360,
        currentLevel: 2,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")

    }
} as IDatabaseItem


export const COIN_LEDGER_18 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_18.data.customerId,
        userId: CUSTOMER_18.data.customerId,
        transactions: [
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_18_A.data._id,
                "timestamp": CHALLENGE_USER_18_A.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 320,
                "level": 1
            },

            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_18_B.data._id,
                "timestamp": CHALLENGE_USER_18_B.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 260,
                "level": 2
            },
        ],
        activeStreakId: "YU_STREAK_001",
        currentBalance: 320,
        currentLevel: 2,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")

    }
} as IDatabaseItem

export const COIN_LEDGER_19 = {
    type:"mongo",
    modelName:"coinledger",
    data:{
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_19.data.customerId,
        userId: CUSTOMER_19.data.customerId,
        transactions: [],
        currentBalance: 250,
        currentStreak: 0,
        currentLevel: 1
    }
} as IDatabaseItem


export const COIN_LEDGER_22 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_22.data.customerId,
        userId: CUSTOMER_22.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 49
    }
} as IDatabaseItem

export const COIN_LEDGER_23 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_23.data.customerId,
        userId: CUSTOMER_23.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 99
    }
} as IDatabaseItem


export const COIN_LEDGER_24 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_24.data.customerId,
        userId: CUSTOMER_24.data.customerId,
        transactions: [],
        currentBalance: 20000,
        currentStreak: 0,
        currentLevel: 199
    }
} as IDatabaseItem

export const COIN_LEDGER_35 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_35.data.customerId,
        userId: CUSTOMER_35.data.customerId,
        transactions: [
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_35_A.data._id,
                "timestamp": CHALLENGE_USER_35_A.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 260,
                "level": 1,
                "currentStreak":1
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_35_B.data._id,
                "timestamp": CHALLENGE_USER_35_B.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 280,
                "level": 2,
                "currentStreak": 2
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_35_C.data._id,
                "timestamp": CHALLENGE_USER_35_C.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 380,
                "level": 3,
                "currentStreak": 3
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_35_D.data._id,
                "timestamp": CHALLENGE_USER_35_D.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 420,
                "level": 4,
                "currentStreak": 4,
            },
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_35_E.data._id,
                "timestamp": CHALLENGE_USER_35_E.data.endDateTime,
                "multiplierId": null,
                "totalCoins": 480,
                "level": 5,
                "currentStreak": 5
            },
            {
                "coins": 2500,
                "source": "streak",
                "sourceId": `award_${CHALLENGE_USER_35_E.data._id}`,
                "timestamp": CHALLENGE_USER_35_E.data.endDateTime,
            },
            {
                "coins": 100,
                "source": "avatar_creation_award",
                "sourceId": CHALLENGE_USER_35_E.data.customerId,
                "timestamp": moment().subtract(24, "hours").toDate(),
            }
        ],
        activeStreakId: "YU_STREAK_001",
        currentBalance: 3080,
        currentStreak: 5,
        currentLevel: 6,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        }
    } as IDatabaseItem

    export const COIN_LEDGER_36 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: CUSTOMER_36.data.customerId,
            userId: CUSTOMER_36.data.customerId,
            transactions: [],
            currentBalance: 100000,
            currentStreak: 0,
            currentLevel: 90
        }
    } as IDatabaseItem
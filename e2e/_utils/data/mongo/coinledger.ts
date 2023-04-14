
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';
import {
    CHALLENGE_2, CHALLENGE_USER_6_A, CHALLENGE_USER_7_A, CHALLENGE_USER_7_B, CHALLENGE_USER_7_C, CHALLENGE_USER_7_D,
    CHALLENGE_USER_8_B, CHALLENGE_USER_8_A, CHALLENGE_USER_9_B, CHALLENGE_USER_9_A, CHALLENGE_USER_9_C, CHALLENGE_USER_9_D,
    CHALLENGE_USER_9_E, CHALLENGE_USER_9_F, CHALLENGE_USER_14_B, CHALLENGE_USER_14_A, CHALLENGE_USER_14_C, CHALLENGE_USER_14_D,
    CHALLENGE_USER_14_E, CHALLENGE_USER_14_F, CHALLENGE_USER_14_G, CHALLENGE_USER_14_H, CHALLENGE_USER_14_I, CHALLENGE_USER_15_B,
    CHALLENGE_USER_15_A, CHALLENGE_USER_15_C, CHALLENGE_USER_18_A, CHALLENGE_USER_18_B, CHALLENGE_USER_17_A, CHALLENGE_USER_35_A, CHALLENGE_USER_35_B, CHALLENGE_USER_35_C, CHALLENGE_USER_35_D, CHALLENGE_USER_35_E, CHALLENGE_USER_42_A, CHALLENGE_USER_77_A
} from './challenge';

import moment = require('moment');

export const COIN_LEDGER_2 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        "_id": generateRandomMongoId(),
        "customerId": customer.CUSTOMER_2.data.customerId,
        "userId": customer.CUSTOMER_2.data.customerId,
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
        customerId: customer.CUSTOMER_3.data.customerId,
        userId: customer.CUSTOMER_3.data.customerId,
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
        customerId: customer.CUSTOMER_4.data.customerId,
        userId: customer.CUSTOMER_4.data.customerId,
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
        customerId: customer.CUSTOMER_6.data.customerId,
        userId: customer.CUSTOMER_6.data.customerId,
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
        customerId: customer.CUSTOMER_7.data.customerId,
        userId: customer.CUSTOMER_7.data.customerId,
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
        customerId: customer.CUSTOMER_8.data.customerId,
        userId: customer.CUSTOMER_8.data.customerId,
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
        customerId: customer.CUSTOMER_9.data.customerId,
        userId: customer.CUSTOMER_9.data.customerId,
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
        customerId: customer.CUSTOMER_12.data.customerId,
        userId: customer.CUSTOMER_12.data.customerId,
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
        customerId: customer.CUSTOMER_13.data.customerId,
        userId: customer.CUSTOMER_13.data.customerId,
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
        customerId: customer.CUSTOMER_14.data.customerId,
        userId: customer.CUSTOMER_14.data.customerId,
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
        customerId: customer.CUSTOMER_15.data.customerId,
        userId: customer.CUSTOMER_15.data.customerId,
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
        customerId: customer.CUSTOMER_16.data.customerId,
        userId: customer.CUSTOMER_16.data.customerId,
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
        customerId: customer.CUSTOMER_17.data.customerId,
        userId: customer.CUSTOMER_17.data.customerId,
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
        customerId: customer.CUSTOMER_18.data.customerId,
        userId: customer.CUSTOMER_18.data.customerId,
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
        currentLevel: 4,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const COIN_LEDGER_19 = {
    type:"mongo",
    modelName:"coinledger",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_19.data.customerId,
        userId: customer.CUSTOMER_19.data.customerId,
        transactions: [],
        currentBalance: 250,
        currentStreak: 0,
        currentLevel: 1
    }
} as IDatabaseItem

export const COIN_LEDGER_20 = {
    type:"mongo",
    modelName:"coinledger",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_20.data.customerId,
        userId: customer.CUSTOMER_20.data.customerId,
        transactions: [],
        currentBalance: 20,
        currentStreak: 0,
        currentLevel: 1
    }
} as IDatabaseItem

export const COIN_LEDGER_22 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_22.data.customerId,
        userId: customer.CUSTOMER_22.data.customerId,
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
        customerId: customer.CUSTOMER_23.data.customerId,
        userId: customer.CUSTOMER_23.data.customerId,
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
        customerId: customer.CUSTOMER_24.data.customerId,
        userId: customer.CUSTOMER_24.data.customerId,
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
        customerId: customer.CUSTOMER_35.data.customerId,
        userId: customer.CUSTOMER_35.data.customerId,
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
            {   "_id": generateRandomMongoId(),
                "coins": 2500,
                "source": "streak",
                "sourceId": `award_${CHALLENGE_USER_35_E.data._id}`,
                "timestamp": CHALLENGE_USER_35_E.data.endDateTime,
                "_key": generateRandomMongoId(),

            },
            {   "_id": generateRandomMongoId(),
                "coins": 100,
                "source": "avatar_creation_award",
                "sourceId": CHALLENGE_USER_35_E.data.customerId,
                "timestamp": moment().subtract(24, "hours").toDate(),
                "_key": generateRandomMongoId(),
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
            customerId: customer.CUSTOMER_36.data.customerId,
            userId: customer.CUSTOMER_36.data.customerId,
            transactions: [],
            currentBalance: 100000,
            currentStreak: 0,
            currentLevel: 90
        }
    } as IDatabaseItem

    export const COIN_LEDGER_37 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_37.data.customerId,
            userId: customer.CUSTOMER_37.data.customerId,
            transactions: [],
            currentBalance: 100000,
            currentStreak: 0,
            currentLevel: 90
        }
    } as IDatabaseItem

    export const COIN_LEDGER_38 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            "_id": generateRandomMongoId(),
            "customerId": customer.CUSTOMER_38.data.customerId,
            "userId": customer.CUSTOMER_38.data.customerId,
            "transactions": [],
            "currentBalance": 0,
            "currentStreak": 0,
            "currentLevel": 1,
        }
    } as IDatabaseItem

    export const COIN_LEDGER_39 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_39.data.customerId,
            userId: customer.CUSTOMER_39.data.customerId,
            transactions: [],
            currentBalance: 20000,
            currentStreak: 0,
            currentLevel: 201,
            yuniversalMap: 1,
            yuniversalLevel: 1
        }
    } as IDatabaseItem

    export const COIN_LEDGER_40 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_40.data.customerId,
            userId: customer.CUSTOMER_40.data.customerId,
            transactions: [],
            currentBalance: 20000,
            currentStreak: 0,
            currentLevel: 49,
        }
    } as IDatabaseItem


    export const COIN_LEDGER_41 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_41.data.customerId,
            userId: customer.CUSTOMER_41.data.customerId,
            transactions: [],
            currentBalance: 27500,
            currentStreak: 0,
            currentLevel: 149
        }
    } as IDatabaseItem

    export const COIN_LEDGER_44 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_44.data.customerId,
            userId: customer.CUSTOMER_44.data.customerId,
            transactions: [],
            currentBalance: 0,
            currentStreak: 0,
            currentLevel: 90
        }
    } as IDatabaseItem

    export const COIN_LEDGE_MEDITOPIA_2 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
            userId: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
            transactions: [],
            currentBalance: 350,
            currentStreak: 0,
            currentLevel: 10
        }
    } as IDatabaseItem

    export const COIN_LEDGER_MEDITOPIA_3 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_MEDITOPIA_3.data.customerId,
            userId: customer.CUSTOMER_MEDITOPIA_3.data.customerId,
            transactions: [],
            currentBalance: 550,
            currentStreak: 0,
            currentLevel: 15,
        }
    } as IDatabaseItem

    export const COIN_LEDGER_42 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_42.data.customerId,
            userId: customer.CUSTOMER_42.data.customerId,
            transactions: [
                {
                    "_id": generateRandomMongoId(),
                    "coins": 60,
                    "source": "challenge",
                    "sourceId": CHALLENGE_USER_42_A.data._id,
                    "timestamp": CHALLENGE_USER_42_A.data.endDateTime,
                    "multiplierId": null,
                    "totalCoins": 320,
                    "level": 51
                },
            ],
            activeStreakId: "YU_STREAK_001",
            currentBalance: 320,
            currentStreak: 5,
            currentLevel: 51,
            nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
        }
    } as IDatabaseItem

    export const COIN_LEDGER_47 = {
        type:"mongo",
        modelName:"coinledger",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_47.data.customerId,
            userId: customer.CUSTOMER_47.data.customerId,
            transactions: [],
            currentBalance: 500,
            currentStreak: 1,
            currentLevel: 1
        }
    } as IDatabaseItem

    export const COIN_LEDGER_50 = {
        type:"mongo",
        modelName:"coinledger",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_50.data.customerId,
            userId: customer.CUSTOMER_50.data.customerId,
            transactions: [],
            currentBalance: 500,
            currentStreak: 1,
            currentLevel: 1
        }
    } as IDatabaseItem

    export const COIN_LEDGER_52 = {
        type:"mongo",
        modelName:"coinledger",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_52.data.customerId,
            userId: customer.CUSTOMER_52.data.customerId,
            transactions: [],
            currentBalance: 500,
            currentStreak: 1,
            currentLevel: 1
        }
    } as IDatabaseItem

    export const COIN_LEDGER_54 = {
        type:"mongo",
        modelName:"coinledger",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_54.data.customerId,
            userId: customer.CUSTOMER_54.data.customerId,
            transactions: [],
            currentBalance: 400,
            currentStreak: 2,
            currentLevel: 2
        }
    } as IDatabaseItem

    export const COIN_LEDGER_55 = {
        type:"mongo",
        modelName:"coinledger",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_55.data.customerId,
            userId: customer.CUSTOMER_55.data.customerId,
            transactions: [],
            currentBalance: 401,
            currentStreak: 3,
            currentLevel: 2
        }
    } as IDatabaseItem

    export const COIN_LEDGER_56 = {
        type:"mongo",
        modelName:"coinledger",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_56.data.customerId,
            userId: customer.CUSTOMER_56.data.customerId,
            transactions: [],
            currentBalance: 451,
            currentStreak: 3,
            currentLevel: 3
        }
    } as IDatabaseItem


    export const COIN_LEDGER_57 = {
        type:"mongo",
        modelName:"coinledger",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_57.data.customerId,
            userId: customer.CUSTOMER_57.data.customerId,
            transactions: [],
            currentBalance: 455,
            currentStreak: 4,
            currentLevel: 4
        }
    } as IDatabaseItem


    export const COIN_LEDGER_58 = {
        type:"mongo",
        modelName:"coinledger",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_58.data.customerId,
            userId: customer.CUSTOMER_58.data.customerId,
            transactions: [],
            currentBalance: 465,
            currentStreak: 5,
            currentLevel: 4
        }
    } as IDatabaseItem

    export const COIN_LEDGER_60 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_60.data.customerId,
            userId: customer.CUSTOMER_60.data.customerId,
            transactions: [],
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 49
        }
    } as IDatabaseItem

    export const COIN_LEDGER_61 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_61.data.customerId,
            userId: customer.CUSTOMER_61.data.customerId,
            transactions: [],
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 51
        }
    } as IDatabaseItem

    export const COIN_LEDGER_63 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_63.data.customerId,
            userId: customer.CUSTOMER_63.data.customerId,
            transactions: [],
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 199
        }
    } as IDatabaseItem

    export const COIN_LEDGER_64 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_64.data.customerId,
            userId: customer.CUSTOMER_64.data.customerId,
            transactions: [],
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 201
        }
    } as IDatabaseItem

    export const COIN_LEDGER_65 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_65.data.customerId,
            userId: customer.CUSTOMER_65.data.customerId,
            transactions: [],
            currentBalance: 220,
            currentStreak: 0,
            currentLevel: 21
        }
    } as IDatabaseItem

    export const COIN_LEDGER_66 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_66.data.customerId,
            userId: customer.CUSTOMER_66.data.customerId,
            transactions: [],
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 201
        }
    } as IDatabaseItem

    export const COIN_LEDGER_67 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_67.data.customerId,
            userId: customer.CUSTOMER_67.data.customerId,
            transactions: [],
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 251
        }
    } as IDatabaseItem

    export const COIN_LEDGER_68 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_68.data.customerId,
            userId: customer.CUSTOMER_68.data.customerId,
            transactions: [],
            currentBalance: 17500,
            currentStreak: 0,
            yuniversalMap: 1,
            yuniversalLevel: 1,
            currentLevel: 201,
        }
    } as IDatabaseItem

    export const COIN_LEDGER_69 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_69.data.customerId,
            userId: customer.CUSTOMER_69.data.customerId,
            transactions: [],
            currentBalance: 17500,
            currentStreak: 0,
            currentLevel: 200,
        }
    } as IDatabaseItem

    export const COIN_LEDGER_70 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_70.data.customerId,
            userId: customer.CUSTOMER_70.data.customerId,
            transactions: [],
            currentBalance: 17500,
            currentStreak: 0,
            yuniversalMap: 1,
            yuniversalLevel: 7,
            currentLevel: 201,
        }
    } as IDatabaseItem

    export const COIN_LEDGER_71 = {
        type:"mongo",
        modelName:"coinledger",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_71.data.customerId,
            userId: customer.CUSTOMER_71.data.customerId,
            transactions: [],
            currentBalance: 500,
            currentStreak: 1,
            currentLevel: 1
        }
    } as IDatabaseItem

    export const COIN_LEDGER_72 = {
        type:"mongo",
        modelName:"coinledger",
        data:{
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_72.data.customerId,
            userId: customer.CUSTOMER_72.data.customerId,
            transactions: [],
            currentBalance: 500,
            currentStreak: 1,
            currentLevel: 152
        }
    } as IDatabaseItem

    export const COIN_LEDGER_73 = {
        type: "mongo",
        modelName: "coinledger",
        data: {
            _id: generateRandomMongoId(),
            customerId: customer.CUSTOMER_73.data.customerId,
            userId: customer.CUSTOMER_73.data.customerId,
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


export const COIN_LEDGER_75 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_75.data.customerId,
        userId: customer.CUSTOMER_75.data.customerId,
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
        currentLevel: 4,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const COIN_LEDGER_76 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        "_id": generateRandomMongoId(),
        "customerId": customer.CUSTOMER_76.data.customerId,
        "userId": customer.CUSTOMER_76.data.customerId,
        "transactions": [{ _id: generateRandomMongoId(), coins: 10, source: "challenge", sourceId: CHALLENGE_2.data._id, timestamp: CHALLENGE_2.data.endDateTime, totalCoins: 210, level: 1 }],
        "currentBalance": 0,
        "currentStreak": 0,
        "currentLevel": 1,
    }
} as IDatabaseItem

export const COIN_LEDGER_77 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_77.data.customerId,
        userId: customer.CUSTOMER_77.data.customerId,
        transactions: [
            {
                "_id": generateRandomMongoId(),
                "coins": 60,
                "source": "challenge",
                "sourceId": CHALLENGE_USER_77_A.data._id,
                "timestamp": CHALLENGE_USER_77_A.data.endDateTime,
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

export const COIN_LEDGER_78 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_78.data.customerId,
        userId: customer.CUSTOMER_78.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        yuniversalMap: 1,
        yuniversalLevel: 7,
        currentLevel: 201,
    }
} as IDatabaseItem

export const COIN_LEDGER_79 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_79.data.customerId,
        userId: customer.CUSTOMER_79.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 250,
    }
} as IDatabaseItem

export const COIN_LEDGER_80 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_80.data.customerId,
        userId: customer.CUSTOMER_80.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 400,
    }
} as IDatabaseItem

export const COIN_LEDGER_81 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_81.data.customerId,
        userId: customer.CUSTOMER_81.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 201,
    }
} as IDatabaseItem

export const COIN_LEDGER_83 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_83.data.customerId,
        userId: customer.CUSTOMER_83.data.customerId,
        transactions: [],
        currentBalance: 0,
        currentStreak: 0,
        currentLevel: 1,
    }
} as IDatabaseItem

export const COIN_LEDGER_FIIT = {
  type: "mongo",
  modelName: "coinledger",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_FIIT.data.customerId,
    userId: customer.CUSTOMER_FIIT.data.customerId,
    transactions: [],
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 5,
  },
} as IDatabaseItem;

export const COIN_LEDGER_86 = {
    type:"mongo",
    modelName:"coinledger",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_86.data.customerId,
        userId: customer.CUSTOMER_86.data.customerId,
        transactions: [],
        currentBalance: 500,
        currentStreak: 1,
        currentLevel: 152
    }
} as IDatabaseItem
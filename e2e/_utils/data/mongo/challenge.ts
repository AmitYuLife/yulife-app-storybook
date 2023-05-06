import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_2, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8, CUSTOMER_9, CUSTOMER_14, CUSTOMER_15, CUSTOMER_18, CUSTOMER_17, CUSTOMER_19, CUSTOMER_35, CUSTOMER_40, CUSTOMER_42, CUSTOMER_47, CUSTOMER_50, CUSTOMER_52, CUSTOMER_54, CUSTOMER_55, CUSTOMER_56, CUSTOMER_57, CUSTOMER_58, CUSTOMER_65, CUSTOMER_75, CUSTOMER_76, CUSTOMER_77, CUSTOMER_83, CUSTOMER_20, CUSTOMER_84 } from '../postgres/customers';
import { SHORT_STROLL_MILESTONE_1, LONG_WALK_MILESTONE_1, MEDITATION_MILESTONE_1, SUDOKU_MILESTONE } from './map_milestone_templates';
import { MEDITATION_1, LONG_WALK_1, SHORT_STROLL_1, CYCLING_1 } from './map_level_slot_templates';
import { CHALLENGE_TEMPLATE } from "./_templates";
import moment = require('moment');

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
    return {
        startTime: startDate.toDate(),
        date: startDate.format('YYYY-MM-DD'),
        startDateTime: startDate.format(),
        endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
    };
}

export const CHALLENGE_2 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_2.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        "sources": {
            "device": {
                "steps": 4461
            }
        },
        "incomingData": {
            "steps": 309,
            "meditation": 0
        },
        "levelSlotTemplateId": "DAILY_PASSIVE_001",
        "isNewType": true,
        "status": "passive",
        "passive": true,
        "yuCoinAwarded": 0,
        "milestoneLog": [
            {
                "completionData": [],
                "_id": generateRandomMongoId(),
                "data": {
                    "meditation": 0,
                    "steps": 4461
                },
                "yuCoinAwarded": 20,
                "completed": moment().subtract(1, "day").toDate(),
                "id": "YU_MILESTONE_DAILY_STEPS_0"
            },
        ],
    }

} as IDatabaseItem;


export const CHALLENGE_USER_6_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        "_id": generateRandomMongoId(),
        "challengeTemplateId": [],
        "data": [],
        "actions": [],
        "target": [],
        "userId": CUSTOMER_6.data.customerId,
        "level": 1,
        "levelId": "YU_LEVEL_0001",
        "levelSlotId": "YU_LEVEL_0001_1",
        "levelSlotTemplateId": "SHORT_STROLL_001",
        "subtype": "short stroll",
        "isNewType": true,
        "status": "completed",
        "passive": false,
        "incomingData": {
            "steps": 125
        },
        ...generateChallengeDates(moment().subtract(1, "days")),
        "yuCoinAwarded": 60,
        "milestoneLog": [
            {
                "completionData": [],
                "_id": generateRandomMongoId(),
                "id": "YU_MILESTONE_SS0001_0",
                "completed": moment().subtract(1, "day").toDate(),
                "data": {
                    "steps": 108,
                    "meditation": 0,
                    "distance": 0
                },
                "yuCoinAwarded": 60
            }
        ],
        "rating": 3,
        "multiplierId": null
    }
} as IDatabaseItem

export const CHALLENGE_USER_7_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_7.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
    }
} as IDatabaseItem;

export const CHALLENGE_USER_7_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_7.data.customerId,
        ...generateChallengeDates(moment().subtract(3, "days")),
        level: 2,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 2300
                },
                yuCoinAwarded: 20,
                completed: moment().subtract(3, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_7_C = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_7.data.customerId,
        ...generateChallengeDates(moment().subtract(2, "days")),
        levelSlotTemplateId: MEDITATION_1.data.id,
        subtype: MEDITATION_1.data.subtype,
        incomingData: {
            minutes: 10
        },
        level: 3,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: moment().subtract(2, "day").toDate(),
                data: {
                    steps: 0,
                    meditation: 10,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_7_D = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_7.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        incomingData: {
            steps: 2200
        },
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: LONG_WALK_MILESTONE_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    steps: 2500,
                    meditation: 0,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;


export const CHALLENGE_USER_8_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_8.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(3, "days")),
        level: 1,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 400
                },
                yuCoinAwarded: 20,
                completed: moment().subtract(3, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],


    }
} as IDatabaseItem;

export const CHALLENGE_USER_8_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_8.data.customerId,
        ...generateChallengeDates(moment().subtract(2, "days")),
        level: 2,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 600
                },
                yuCoinAwarded: 20,
                completed: moment().subtract(2, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],

    }
} as IDatabaseItem;


export const CHALLENGE_USER_9_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_9.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(8, "days")),
        level: 1,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 400
                },
                yuCoinAwarded: 20,
                completed: moment().subtract(3, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],


    }
} as IDatabaseItem;

export const CHALLENGE_USER_9_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_9.data.customerId,
        ...generateChallengeDates(moment().subtract(7, "days")),
        level: 2,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 2300
                },
                yuCoinAwarded: 20,
                completed: moment().subtract(7, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_9_C = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_9.data.customerId,
        ...generateChallengeDates(moment().subtract(6, "days")),
        levelSlotTemplateId: MEDITATION_1.data.id,
        subtype: MEDITATION_1.data.subtype,
        incomingData: {
            minutes: 10
        },
        level: 3,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: moment().subtract(6, "day").toDate(),
                data: {
                    steps: 0,
                    meditation: 10,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_9_D = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_9.data.customerId,
        ...generateChallengeDates(moment().subtract(5, "days")),
        incomingData: {
            steps: 2200
        },
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: LONG_WALK_MILESTONE_1.data.id,
                completed: moment().subtract(5, "day").toDate(),
                data: {
                    steps: 2500,
                    meditation: 0,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_9_E = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_9.data.customerId,
        ...generateChallengeDates(moment().subtract(4, "days")),
        incomingData: {
            steps: 2200
        },
        level: 5,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: LONG_WALK_MILESTONE_1.data.id,
                completed: moment().subtract(4, "day").toDate(),
                data: {
                    steps: 2500,
                    meditation: 0,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_9_F = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_9.data.customerId,
        ...generateChallengeDates(moment().subtract(3, "days")),
        incomingData: {
            steps: 2200
        },
        level: 6,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                completed: moment().subtract(3, "day").toDate(),
                data: {
                    steps: 2500,
                    meditation: 0,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_14_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_14.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(6, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 400
                },
                yuCoinAwarded: 118118,
                completed: moment().subtract(6, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_14_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
        ...generateChallengeDates(moment().subtract(5, "days")),
        level: 2,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 2300
                },
                yuCoinAwarded: 20,
                completed: moment().subtract(5, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_14_C = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
        ...generateChallengeDates(moment("2020-06-08 10:06:22.686Z")),
        levelSlotTemplateId: "DAILY_PASSIVE_002",
        subtype: MEDITATION_1.data.subtype,
        incomingData: {
            meditation: 100
        },
        level: 3,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: "2020-06-08 10:06:22.686Z",
                data: {
                    meditation: 100,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_14_D = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
        ...generateChallengeDates(moment("2020-06-09 10:06:22.686Z")),
        incomingData: {
            meditation: 100
        },
        levelSlotTemplateId: "DAILY_PASSIVE_002",
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: "2020-06-09 10:06:22.686Z",
                data: {
                    meditation: 100,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_14_E = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
        ...generateChallengeDates(moment().subtract(12, "days")),
        incomingData: {
            steps: 2200
        },
        level: 5,
        levelSlotTemplateId: LONG_WALK_1.data.id,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: LONG_WALK_MILESTONE_1.data.id,
                completed: moment().subtract(12, "day").toDate(),
                data: {
                    steps: 2500,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_14_F = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
        ...generateChallengeDates(moment().subtract(7, "days")),
        incomingData: {
            steps: 2500
        },
        level: 6,
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    steps: 2500,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_14_G = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
        ...generateChallengeDates(moment().subtract(30, "minutes"), moment().subtract(25, "minutes")),
        incomingData: {
            steps: 2500
        },
        level: 6,
        levelSlotTemplateId: SHORT_STROLL_1.data.id,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    steps: 2500,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_14_H = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
        ...generateChallengeDates(moment().subtract(8, "days")),
        incomingData: {
            steps: 2500
        },
        level: 6,
        levelSlotTemplateId: SHORT_STROLL_1.data.id,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    steps: 2500,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_14_I = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
        ...generateChallengeDates(moment("2020-05-02 10:06:22.686Z")),
        incomingData: {
            meditation: 10000
        },
        levelSlotTemplateId: "DAILY_PASSIVE_002",
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: "2020-05-02 10:06:22.686Z",
                data: {
                    meditation: 10000,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_15_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_15.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 400
                },
                yuCoinAwarded: 118118,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],


    }
} as IDatabaseItem;

export const CHALLENGE_USER_15_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_15.data.customerId,
        ...generateChallengeDates(moment().subtract(3, "days")),
        level: 2,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 2300
                },
                yuCoinAwarded: 20,
                completed: moment().subtract(3, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_15_C = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_15.data.customerId,
        ...generateChallengeDates(moment().subtract(2, "days")),
        levelSlotTemplateId: "DAILY_PASSIVE_002",
        subtype: MEDITATION_1.data.subtype,
        incomingData: {
            meditation: 100
        },
        level: 3,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: moment().subtract(2, "day").toDate(),
                data: {
                    meditation: 100,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_15_D = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_15.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        date: null,
        incomingData: {
            steps: 450
        },
        level: 4,
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        status: "active",

        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    steps: 450
                },
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],
    }
} as IDatabaseItem;


export const CHALLENGE_USER_17_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_17.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 250
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 250
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;


export const CHALLENGE_USER_18_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_18.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 400
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 400
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_18_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_18.data.customerId,
        ...generateChallengeDates(moment().subtract(3, "days")),
        level: 2,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 400
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 200
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(3, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_18_C = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_18.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        status: "completed",
        passive: true,
        levelSlotTemplateId: "DAILY_PASSIVE_003",
        subtype: CYCLING_1.data.subtype,
        incomingData: {
            distance: 4010
        },
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: CYCLING_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    distance: 4010,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem

export const CHALLENGE_USER_18_D = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_18.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        incomingData: {
            meditation: 1000
        },
        levelSlotTemplateId: "DAILY_PASSIVE_002",
        level: 3,
        status: "completed",
        passive: true,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: moment().subtract(1, "days").toDate(),
                data: {
                    meditation: 1000,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_19 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_19.data.customerId,
        ...generateChallengeDates(moment().subtract(3, "days")),
        level: 2,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 50
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 50
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(3, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_20 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_20.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(5, "days")),
        level: 1,
    }
} as IDatabaseItem;

export const CHALLENGE_USER_35_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_35.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(5, "days")),
        level: 1,
    }
} as IDatabaseItem;

export const CHALLENGE_USER_35_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_35.data.customerId,
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 2,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 2300
                },
                yuCoinAwarded: 20,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_35_C = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_35.data.customerId,
        ...generateChallengeDates(moment().subtract(3, "days")),
        levelSlotTemplateId: MEDITATION_1.data.id,
        subtype: MEDITATION_1.data.subtype,
        incomingData: {
            minutes: 10
        },
        level: 3,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: moment().subtract(3, "day").toDate(),
                data: {
                    steps: 0,
                    meditation: 10,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_35_D = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_35.data.customerId,
        ...generateChallengeDates(moment().subtract(2, "days")),
        incomingData: {
            steps: 2200
        },
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: LONG_WALK_MILESTONE_1.data.id,
                completed: moment().subtract(2, "day").toDate(),
                data: {
                    steps: 2500,
                    meditation: 0,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_35_E = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_35.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        incomingData: {
            steps: 2200
        },
        level: 5,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: LONG_WALK_MILESTONE_1.data.id,
                completed: moment().subtract(2, "day").toDate(),
                data: {
                    steps: 2500,
                    meditation: 0,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_40_DAY1 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_40.data.customerId,
        ...generateChallengeDates(moment("00:01", "HH:mm").subtract(5, "days"), moment("23:59", "HH:mm").subtract(5, "days")),
        "sources": {
            "device": {
                "steps": 75000
            }
        },
        "incomingData": {
            "steps": 75000,
            "meditation": 0
        },
        "levelSlotTemplateId": "DAILY_PASSIVE_001",
        "isNewType": true,
        "status": "passive",
        "passive": true,
        "yuCoinAwarded": 0,
        "milestoneLog": [
            {
                "completionData": [],
                "_id": generateRandomMongoId(),
                "data": {
                    "meditation": 0,
                    "steps": 75000
                },
                "yuCoinAwarded": 20,
                "completed": moment().subtract(1, "day").toDate(),
                "id": "YU_MILESTONE_DAILY_STEPS_0"
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_40_DAY2 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_40.data.customerId,
        ...generateChallengeDates(moment("00:01", "HH:mm").subtract(4, "days"), moment("23:59", "HH:mm").subtract(4, "days")),
        "sources": {
            "device": {
                "steps": 75000
            }
        },
        "incomingData": {
            "steps": 75000,
            "meditation": 0
        },
        "levelSlotTemplateId": "DAILY_PASSIVE_001",
        "isNewType": true,
        "status": "passive",
        "passive": true,
        "yuCoinAwarded": 0,
        "milestoneLog": [
            {
                "completionData": [],
                "_id": generateRandomMongoId(),
                "data": {
                    "meditation": 0,
                    "steps": 75000
                },
                "yuCoinAwarded": 20,
                "completed": moment().subtract(1, "day").toDate(),
                "id": "YU_MILESTONE_DAILY_STEPS_0"
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_40_DAY3 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_40.data.customerId,
        ...generateChallengeDates(moment("00:01", "HH:mm").subtract(3, "days"), moment("23:59", "HH:mm").subtract(3, "days")),
        "sources": {
            "device": {
                "steps": 75000
            }
        },
        "incomingData": {
            "steps": 75000,
            "meditation": 0
        },
        "levelSlotTemplateId": "DAILY_PASSIVE_001",
        "isNewType": true,
        "status": "passive",
        "passive": true,
        "yuCoinAwarded": 0,
        "milestoneLog": [
            {
                "completionData": [],
                "_id": generateRandomMongoId(),
                "data": {
                    "meditation": 0,
                    "steps": 75000
                },
                "yuCoinAwarded": 20,
                "completed": moment().subtract(1, "day").toDate(),
                "id": "YU_MILESTONE_DAILY_STEPS_0"
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_40_DAY4 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_40.data.customerId,
        ...generateChallengeDates(moment("00:01", "HH:mm").subtract(2, "days"), moment("23:59", "HH:mm").subtract(2, "days")),
        "sources": {
            "device": {
                "steps": 75000
            }
        },
        "incomingData": {
            "steps": 75000,
            "meditation": 0
        },
        "levelSlotTemplateId": "DAILY_PASSIVE_001",
        "isNewType": true,
        "status": "passive",
        "passive": true,
        "yuCoinAwarded": 0,
        "milestoneLog": [
            {
                "completionData": [],
                "_id": generateRandomMongoId(),
                "data": {
                    "meditation": 0,
                    "steps": 75000
                },
                "yuCoinAwarded": 20,
                "completed": moment().subtract(1, "day").toDate(),
                "id": "YU_MILESTONE_DAILY_STEPS_0"
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_40_DAY5 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_40.data.customerId,
        ...generateChallengeDates(moment("00:01", "HH:mm").subtract(1, "days"), moment("23:59", "HH:mm").subtract(1, "days")),
        "sources": {
            "device": {
                "steps": 75000
            }
        },
        "incomingData": {
            "steps": 75000,
            "meditation": 0
        },
        "levelSlotTemplateId": "DAILY_PASSIVE_001",
        "isNewType": true,
        "status": "passive",
        "passive": true,
        "yuCoinAwarded": 0,
        "milestoneLog": [
            {
                "completionData": [],
                "_id": generateRandomMongoId(),
                "data": {
                    "meditation": 0,
                    "steps": 75000
                },
                "yuCoinAwarded": 20,
                "completed": moment().subtract(1, "day").toDate(),
                "id": "YU_MILESTONE_DAILY_STEPS_0"
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_42_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_42.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        isNewType: true,
        yuCoinAwarded: 10,
        XPAwarded: 0,
        rating: 3,
        incomingData: {
            "steps": 305
        },
        sources: {},
        level: 51,
        levelId: "YU_LEVEL_0051",
        levelSlotId: "YU_LEVEL_0051_2",
        levelSlotTemplateId: "SHORT_STROLL_001",
        milestoneTemplateId: "YU_MILESTONE_SS0006",
        subtype: "short stroll",
        status: "completed",
        passive: false,
        __v: 0,
        multiplierId: null
    }
} as IDatabaseItem;

export const CHALLENGE_USER_42_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_42.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        date: null,
        incomingData: {
            steps: 450
        },
        level: 51,
        status: "active",

        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    steps: 450
                },
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_47_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_47.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days"), moment().subtract(1, "days").endOf("day")),
        level: 2,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 10000
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    steps: 10000
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(1, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_47_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_47.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        incomingData: {
            meditation: 6000
        },
        levelSlotTemplateId: "DAILY_PASSIVE_002",
        level: 3,
        status: "completed",
        passive: true,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: moment().subtract(1, "days").toDate(),
                data: {
                    meditation: 6000,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_47_C = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_47.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        levelSlotTemplateId: "DAILY_PASSIVE_003",
        subtype: CYCLING_1.data.subtype,
        incomingData: {
            distance: 30000
        },
        level: 4,
        status: "completed",
        passive: true,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: CYCLING_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    distance: 30000,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_50_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_50.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 6400
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 6400
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_50_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_50.data.customerId,
        ...generateChallengeDates(moment().subtract(3, "days")),
        level: 2,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 6400
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 6200
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(3, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_50_C = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_50.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        levelSlotTemplateId: "DAILY_PASSIVE_003",
        subtype: CYCLING_1.data.subtype,
        incomingData: {
            distance: 4010
        },
        level: 4,
        status: "completed",
        passive: true,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: CYCLING_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    distance: 4010,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem

export const CHALLENGE_USER_50_D = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_50.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        incomingData: {
            meditation: 1000
        },
        levelSlotTemplateId: "DAILY_PASSIVE_002",
        level: 3,
        status: "completed",
        passive: true,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: moment().subtract(1, "days").toDate(),
                data: {
                    meditation: 1000,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_52_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_52.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 250
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 250
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_54_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_54.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 300
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 300
                },
                yuCoinAwarded: 300,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_55_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_55.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 310
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 310
                },
                yuCoinAwarded: 100,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_56_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_56.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 200
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 200
                },
                yuCoinAwarded: 180,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_57_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_57.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 201
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 201
                },
                yuCoinAwarded: 90,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_58_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_58.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 202
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 202
                },
                yuCoinAwarded: 100,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_65_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_65.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days").startOf("day").add(1, "hour"), moment().subtract(1, "days").endOf("day")),
        createdAt: moment().subtract(1, "days").startOf("day").toDate(),
        updatedAt: moment().subtract(1, "days").startOf("day").toDate(),
        levelSlotTemplateId: "DAILY_PASSIVE_003",
        status: "completed",
        sources: {
            garmin: {
              distance: 1000
            },
            strava: {
                distance: 1000
            },
            fitbit: {
                distance: 1000
            },
            withings: {
                distance: 1000
            },
          },
        passive: true,
        isNewType: true,
        subtype: CYCLING_1.data.subtype,
        incomingData: {
            distance: 3000
        },
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: CYCLING_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    distance: 3000,
                },
                yuCoinAwarded: 10
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_65_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_65.data.customerId,
        ...generateChallengeDates(moment().subtract(2, "days")),
        createdAt: moment().subtract(2, "days").toDate(),
        updatedAt: moment().subtract(2, "days").toDate(),
        levelSlotTemplateId: "DAILY_PASSIVE_003",
        status: "completed",
        sources: {
            fitbit: {
              distance: 4000
            }
          },
        passive: true,
        isNewType: true,
        subtype: CYCLING_1.data.subtype,
        incomingData: {
            distance: 4000
        },
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: CYCLING_1.data.id,
                completed: moment().subtract(2, "day").toDate(),
                data: {
                    distance: 4000,
                },
                yuCoinAwarded: 10
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_65_C = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_65.data.customerId,
        ...generateChallengeDates(moment().subtract(3, "days")),
        createdAt: moment().subtract(3, "days").toDate(),
        updatedAt: moment().subtract(3, "days").toDate(),
        levelSlotTemplateId: "DAILY_PASSIVE_003",
        status: "completed",
        sources: {
            strava: {
              distance: 5000
            },
            withings: {
                distance: 5000
              },
          },
        passive: true,
        isNewType: true,
        subtype: CYCLING_1.data.subtype,
        incomingData: {
            distance: 5000
        },
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: CYCLING_1.data.id,
                completed: moment().subtract(3, "day").toDate(),
                data: {
                    distance: 5000,
                },
                yuCoinAwarded: 10
            }
        ],
    }
} as IDatabaseItem;

// we need this to not overwrite activityLastReceived date in users table
export const ONBOARDING_CHALLENGE_65_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_65.data.customerId,
        "isNewType": true,
        "yuCoinAwarded": 200,
        "XPAwarded": 0,
        "rating": 0,
        "incomingData": {},
        "sources": {},
        "passive": true,
        "levelSlotTemplateId": "MAIN_ONBOARDING_001",
        "status": "completed",
        "date": moment().format("YYYY-MM-DD").toString(),
        "milestoneLog": [],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_75_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_75.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 400
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 400
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_75_B = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_75.data.customerId,
        ...generateChallengeDates(moment().subtract(3, "days")),
        level: 2,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 400
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 200
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(3, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_75_C = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_75.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        levelSlotTemplateId: "DAILY_PASSIVE_003",
        subtype: CYCLING_1.data.subtype,
        incomingData: {
            distance: 4010
        },
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: CYCLING_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    distance: 4010,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem

export const CHALLENGE_USER_75_D = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_75.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        incomingData: {
            meditation: 1000
        },
        levelSlotTemplateId: "DAILY_PASSIVE_002",
        level: 3,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: MEDITATION_MILESTONE_1.data.id,
                completed: moment().subtract(1, "days").toDate(),
                data: {
                    meditation: 1000,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_76 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_76.data.customerId,
        ...generateChallengeDates(moment().subtract(1, "days")),
        "sources": {
            "device": {
                "steps": 4461
            }
        },
        "incomingData": {
            "steps": 309,
            "meditation": 0
        },
        "levelSlotTemplateId": "DAILY_PASSIVE_001",
        "isNewType": true,
        "status": "passive",
        "passive": true,
        "yuCoinAwarded": 0,
        "milestoneLog": [
            {
                "completionData": [],
                "_id": generateRandomMongoId(),
                "data": {
                    "meditation": 0,
                    "steps": 4461
                },
                "yuCoinAwarded": 20,
                "completed": moment().subtract(1, "day").toDate(),
                "id": "YU_MILESTONE_DAILY_STEPS_0"
            },
        ],
    }

} as IDatabaseItem;

export const CHALLENGE_USER_77_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_77.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 250
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 250
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(4, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_83 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_83.data.customerId,
        ...generateChallengeDates(moment().subtract(6, "days")),
        level: 2,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 2300
                },
                yuCoinAwarded: 20,
                completed: moment().subtract(6, "days").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id
            },
        ],

    }
} as IDatabaseItem;

export const CHALLENGE_USER_84 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_84.data.customerId,
        subtype: "sudoku",
        level: 152,
        incomingData: {
            duration: 400,
          },
        startTime: moment().toDate(),
        startDateTime: moment().toDate(),
        endDateTime: moment().toDate(),
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    duration: 400
                },
                yuCoinAwarded: 20,
                completed: moment().format("YYYY-MM-DD"),
                id: SUDOKU_MILESTONE.data.id
            },
        ],

    }
} as IDatabaseItem;
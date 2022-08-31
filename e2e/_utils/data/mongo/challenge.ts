import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_2, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8, CUSTOMER_9, CUSTOMER_14, CUSTOMER_15, CUSTOMER_18, CUSTOMER_17, CUSTOMER_19, CUSTOMER_35, CUSTOMER_40, CUSTOMER_42, CUSTOMER_47 } from '../postgres/customers';
import moment = require('moment');
import { SHORT_STROLL_MILESTONE_1, LONG_WALK_MILESTONE_1, MEDITATION_MILESTONE_1 } from './map_milestone_templates';
import { MEDITATION_1, LONG_WALK_1, SHORT_STROLL_1, CYCLING_1 } from './map_level_slot_templates';
import { CHALLENGE_TEMPLATE } from "./_templates"


export const CHALLENGE_2 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_2.data.customerId,
        startTime: moment().subtract(1, "day").toDate(),
        startDateTime: moment().subtract(1, "day").toDate(),
        endDateTime: moment().subtract(1, "day").toDate(),
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
        "startTime": moment().subtract(1, "day").toDate(),
        "startDateTime": moment().subtract(1, "day").toDate(),
        "endDateTime": moment().subtract(1, "day").toDate(),
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
        startTime: moment().subtract(4, "days").toDate(),
        startDateTime: moment().subtract(4, "days").toDate(),
        endDateTime: moment().subtract(4, "days").toDate(),
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
        startTime: moment().subtract(3, "days").toDate(),
        startDateTime: moment().subtract(3, "days").toDate(),
        endDateTime: moment().subtract(3, "days").toDate(),
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
        startTime: moment().subtract(2, "days").toDate(),
        startDateTime: moment().subtract(2, "days").toDate(),
        endDateTime: moment().subtract(2, "days").toDate(),
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
        startTime: moment().subtract(1, "days").toDate(),
        startDateTime: moment().subtract(1, "days").toDate(),
        endDateTime: moment().subtract(1, "days").toDate(),
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
        startTime: moment().subtract(3, "days").toDate(),
        startDateTime: moment().subtract(3, "days").toDate(),
        endDateTime: moment().subtract(3, "days").toDate(),
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
        startTime: moment().subtract(2, "days").toDate(),
        startDateTime: moment().subtract(2, "days").toDate(),
        endDateTime: moment().subtract(2, "days").toDate(),
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
        startTime: moment().subtract(8, "days").toDate(),
        startDateTime: moment().subtract(8, "days").toDate(),
        endDateTime: moment().subtract(8, "days").toDate(),
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
        startTime: moment().subtract(7, "days").toDate(),
        startDateTime: moment().subtract(7, "days").toDate(),
        endDateTime: moment().subtract(7, "days").toDate(),
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
        startTime: moment().subtract(6, "days").toDate(),
        startDateTime: moment().subtract(6, "days").toDate(),
        endDateTime: moment().subtract(6, "days").toDate(),
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
        startTime: moment().subtract(5, "days").toDate(),
        startDateTime: moment().subtract(5, "days").toDate(),
        endDateTime: moment().subtract(5, "days").toDate(),
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
        startTime: moment().subtract(4, "days").toDate(),
        startDateTime: moment().subtract(4, "days").toDate(),
        endDateTime: moment().subtract(4, "days").toDate(),
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
        startTime: moment().subtract(3, "days").toDate(),
        startDateTime: moment().subtract(3, "days").toDate(),
        endDateTime: moment().subtract(3, "days").toDate(),
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
        startTime: moment().subtract(6, "days").toDate(),
        startDateTime: moment().subtract(6, "days").toDate(),
        endDateTime: moment().subtract(6, "days").toDate(),
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
        startTime: moment().subtract(5, "days").toDate(),
        startDateTime: moment().subtract(5, "days").toDate(),
        endDateTime: moment().subtract(5, "days").toDate(),
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
        startTime: "2020-06-08 10:06:22.686Z",
        startDateTime: "2020-06-08 10:06:22.686Z",
        endDateTime: "2020-06-08 10:06:22.686Z",
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
        startTime: "2020-06-09 10:06:22.686Z",
        startDateTime: "2020-06-09 10:06:22.686Z",
        endDateTime: "2020-06-09 10:06:22.686Z",
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
        startTime: moment().subtract(12, "days").toDate(),
        startDateTime: moment().subtract(12, "days").toDate(),
        endDateTime: moment().subtract(12, "days").toDate(),
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
        startTime: moment().subtract(7, "days").toDate(),
        startDateTime: moment().subtract(7, "days").toDate(),
        endDateTime: moment().subtract(7, "days").toDate(),
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
        startTime: moment().subtract(30, "minutes").toDate(),
        startDateTime: moment().subtract(30, "minutes").toDate(),
        endDateTime: moment().subtract(25, "minutes").toDate(),
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
        startTime: moment().subtract(8, "days").toDate(),
        startDateTime: moment().subtract(8, "days").toDate(),
        endDateTime: moment().subtract(8, "days").toDate(),
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
        startTime: "2020-05-02 10:06:22.686Z",
        startDateTime: "2020-05-02 10:06:22.686Z",
        endDateTime: "2020-05-02 10:06:22.686Z",
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
        startTime: moment().subtract(4, "days").toDate(),
        startDateTime: moment().subtract(4, "days").toDate(),
        endDateTime: moment().subtract(4, "days").toDate(),
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
        startTime: moment().subtract(3, "days").toDate(),
        startDateTime: moment().subtract(3, "days").toDate(),
        endDateTime: moment().subtract(3, "days").toDate(),
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
        startTime: moment().subtract(2, "days").toDate(),
        startDateTime: moment().subtract(2, "days").toDate(),
        endDateTime: moment().subtract(2, "days").toDate(),
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
        startTime: moment().subtract(1, "days").toDate(),
        startDateTime: moment().subtract(1, "days").toDate(),
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
        startTime: moment().subtract(4, "days").toDate(),
        startDateTime: moment().subtract(4, "days").toDate(),
        endDateTime: moment().subtract(4, "days").toDate(),
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
        startTime: moment().subtract(4, "days").toDate(),
        startDateTime: moment().subtract(4, "days").toDate(),
        endDateTime: moment().subtract(4, "days").toDate(),
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
        startTime: moment().subtract(3, "days").toDate(),
        startDateTime: moment().subtract(3, "days").toDate(),
        endDateTime: moment().subtract(3, "days").toDate(),
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
        startTime: moment().subtract(1, "days").toDate(),
        startDateTime: moment().subtract(1, "days").toDate(),
        endDateTime: moment().subtract(1, "days").toDate(),
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
        startTime: moment().subtract(1, "days").toDate(),
        startDateTime: moment().subtract(1, "days").toDate(),
        endDateTime: moment().subtract(1, "days").toDate(),
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

export const CHALLENGE_USER_19 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_19.data.customerId,
        startTime: moment().subtract(3, "days").toDate(),
        startDateTime: moment().subtract(3, "days").toDate(),
        endDateTime: moment().subtract(3, "days").toDate(),
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

export const CHALLENGE_USER_35_A = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: CUSTOMER_35.data.customerId,
        _id: generateRandomMongoId(),
        startTime: moment().subtract(5, "days").toDate(),
        startDateTime: moment().subtract(5, "days").toDate(),
        endDateTime: moment().subtract(5, "days").toDate(),
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
        startTime: moment().subtract(4, "days").toDate(),
        startDateTime: moment().subtract(4, "days").toDate(),
        endDateTime: moment().subtract(4, "days").toDate(),
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
        startTime: moment().subtract(3, "days").toDate(),
        startDateTime: moment().subtract(3, "days").toDate(),
        endDateTime: moment().subtract(3, "days").toDate(),
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
        startTime: moment().subtract(2, "days").toDate(),
        startDateTime: moment().subtract(2, "days").toDate(),
        endDateTime: moment().subtract(2, "days").toDate(),
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
        startTime: moment().subtract(1, "days").toDate(),
        startDateTime: moment().subtract(1, "days").toDate(),
        endDateTime: moment().subtract(1, "days").toDate(),
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
        startTime: moment("00:01", "HH:mm").subtract(5, "days").toDate(),  
        startDateTime: moment("00:01", "HH:mm").subtract(5, "days").toDate(), 
        endDateTime: moment("23:59", "HH:mm").subtract(5, "days").toDate(), 
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
        startTime: moment("00:01", "HH:mm").subtract(4, "days").toDate(),  
        startDateTime: moment("00:01", "HH:mm").subtract(4, "days").toDate(), 
        endDateTime: moment("23:59", "HH:mm").subtract(4, "days").toDate(), 
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
        startTime: moment("00:01", "HH:mm").subtract(3, "days").toDate(),  
        startDateTime: moment("00:01", "HH:mm").subtract(3, "days").toDate(), 
        endDateTime: moment("23:59", "HH:mm").subtract(3, "days").toDate(), 
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
        startTime: moment("00:01", "HH:mm").subtract(2, "days").toDate(),  
        startDateTime: moment("00:01", "HH:mm").subtract(2, "days").toDate(), 
        endDateTime: moment("23:59", "HH:mm").subtract(2, "days").toDate(), 
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
        startTime: moment("00:01", "HH:mm").subtract(1, "days").toDate(),  
        startDateTime: moment("00:01", "HH:mm").subtract(1, "days").toDate(), 
        endDateTime: moment("23:59", "HH:mm").subtract(1, "days").toDate(), 
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
        startTime: moment().subtract(1, "days").toDate(),
        startDateTime: moment().subtract(1, "days").toDate(),
        endDateTime: moment().subtract(1, "days").toDate(),
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
        startTime: moment().subtract(1, "days").toDate(),
        startDateTime: moment().subtract(1, "days").toDate(),
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
        startTime: moment().subtract(1, "days").toDate(),
        startDateTime: moment().subtract(1, "days").toDate(),
        endDateTime: moment().subtract(1, "days").endOf("day").toDate(),
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
        startTime: moment().subtract(1, "days").toDate(),
        startDateTime: moment().subtract(1, "days").toDate(),
        endDateTime: moment().subtract(1, "days").toDate(),
        incomingData: {
            meditation: 1100
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
                    meditation: 1100,
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
        startTime: moment().subtract(1, "days").toDate(),
        startDateTime: moment().subtract(1, "days").toDate(),
        endDateTime: moment().subtract(1, "days").toDate(),
        levelSlotTemplateId: "DAILY_PASSIVE_003",
        subtype: CYCLING_1.data.subtype,
        incomingData: {
            distance: 4500
        },
        level: 4,
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: CYCLING_1.data.id,
                completed: moment().subtract(1, "day").toDate(),
                data: {
                    distance: 4500,
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

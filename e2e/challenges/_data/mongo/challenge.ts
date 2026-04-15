import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';
import { SHORT_STROLL_MILESTONE_1, LONG_WALK_MILESTONE_1, MEDITATION_MILESTONE_1, SUDOKU_MILESTONE } from './map_milestone_templates';
import { CHALLENGE_TEMPLATE } from "./_templates";
import moment from "moment";
import { MEDITATION_1 } from "./map_level_slot_templates";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
    return {
        startTime: startDate.toDate(),
        date: startDate.format('YYYY-MM-DD'),
        startDateTime: startDate.format(),
        endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
    };
}

const type = "mongo";
const modelName = "challenge";

export const CHALLENGE_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_2.data.customerId,
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
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "challengeTemplateId": [],
        "data": [],
        "actions": [],
        "target": [],
        "userId": customer.CUSTOMER_6.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: customer.CUSTOMER_7.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(4, "days")),
        level: 1,
    }
} as IDatabaseItem;

export const CHALLENGE_USER_7_B = {
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_7.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_7.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_7.data.customerId,
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

export const CHALLENGE_USER_9_A = {
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: customer.CUSTOMER_9.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_9.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_9.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_9.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_9.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_9.data.customerId,
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

export const CHALLENGE_USER_35_A = {
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: customer.CUSTOMER_35.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(5, "days")),
        level: 1,
    }
} as IDatabaseItem;

export const CHALLENGE_USER_35_B = {
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_35.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_35.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_35.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_35.data.customerId,
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

export const CHALLENGE_USER_52_A = {
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: customer.CUSTOMER_52.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: customer.CUSTOMER_54.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: customer.CUSTOMER_55.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: customer.CUSTOMER_56.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: customer.CUSTOMER_57.data.customerId,
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
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: customer.CUSTOMER_58.data.customerId,
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

export const CHALLENGE_76 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_76.data.customerId,
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

const challengeUser84Data = {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_84.data.customerId,
    subtype: "sudoku",
    level: 152,
    incomingData: {
        duration: 400,
      },
    milestoneLog: [
        {
            completionData: [],
            _id: generateRandomMongoId(),
            data: {
                duration: 400
            },
            yuCoinAwarded: 20,
            id: SUDOKU_MILESTONE.data.id
        },
    ],
};

export const CHALLENGE_USER_84 = {
    type,
    modelName,
    data: {
        ...challengeUser84Data,
        startTime: moment().toDate(),
        startDateTime: moment().toDate(),
        endDateTime: moment().toDate(),
        date: moment().format('YYYY-MM-DD'),
        milestoneLog: [
            { ...challengeUser84Data.milestoneLog[0], completed: moment().format("YYYY-MM-DD") },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_84_NEXT_DAY = {
    type,
    modelName,
    data: {
        ...challengeUser84Data,
        _id: generateRandomMongoId(),
        startTime: moment().add(1, "day").toDate(),
        startDateTime: moment().add(1, "day").toDate(),
        endDateTime: moment().add(1, "day").toDate(),
        date: moment().add(1, "day").format('YYYY-MM-DD'),
        milestoneLog: [
            { ...challengeUser84Data.milestoneLog[0], _id: generateRandomMongoId(), completed: moment().add(1, "day").format("YYYY-MM-DD") },
        ],
    }
} as IDatabaseItem;

export const CHALLENGE_USER_132 = {
    type,
    modelName,
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_132.data.customerId,
        ...generateChallengeDates(moment("23:59", "HH:mm").subtract(1, "days"), moment("00:01", "HH:mm")),
        incomingData: {
            steps: 450
        },
        level: 1,
        status: "active",
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                id: LONG_WALK_MILESTONE_1.data.id,
                completed: moment("00:01", "HH:mm"),
                data: {
                    steps: 450,
                    meditation: 0,
                    distance: 0
                },
                yuCoinAwarded: 60
            }
        ],
    }
} as IDatabaseItem;

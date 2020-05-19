import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_2, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8 } from '../postgres/customers';
import moment = require('moment');
import { SHORT_STROLL_MILESTONE_1, LONG_WALK_MILESTONE_1, MEDITATION_MILESTONE_1 } from './map_milestone_templates';
import { MEDITATION_1 } from './map_level_slot_templates';

const CHALLENGE_TEMPLATE = {
    type: "mongo",
    modelName: "challenge",
    data: {
        "_id": generateRandomMongoId(),
        "challengeTemplateId": [],
        "data": [],
        "actions": [],
        "target": [],
        "userId": "",
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
}

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

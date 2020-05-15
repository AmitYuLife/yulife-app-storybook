import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_2 } from '../postgres/customers';
import moment = require('moment');

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

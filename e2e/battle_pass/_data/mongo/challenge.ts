import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";
import { CHALLENGE_TEMPLATE } from "./_templates";
import { SHORT_STROLL_MILESTONE_1 } from "./map_milestone_templates";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
    return {
        startTime: startDate.toDate(),
        date: startDate.format("YYYY-MM-DD"),
        startDateTime: startDate.format(),
        endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
    };
}

export const CHALLENGE_USER_CARMY = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        userId: customer.CUSTOMER_CARMY.data.customerId,
        _id: generateRandomMongoId(),
        ...generateChallengeDates(moment().subtract(5, "days")),
        level: 421,
        status: "completed",
        levelSlotTemplateId: "DAILY_PASSIVE_001",
        passive: true,
        incomingData: {
            steps: 3125,
        },
        milestoneLog: [
            {
                completionData: [],
                _id: generateRandomMongoId(),
                data: {
                    meditation: 0,
                    steps: 3125,
                },
                yuCoinAwarded: 60,
                completed: moment().subtract(3, "day").toDate(),
                id: SHORT_STROLL_MILESTONE_1.data.id,
                isNewType: true,
            },
        ],
    },
} as IDatabaseItem;

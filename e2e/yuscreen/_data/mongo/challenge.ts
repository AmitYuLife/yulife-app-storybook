import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CHALLENGE_TEMPLATE } from "./_templates";
import { CUSTOMER_109 } from "../postgres/customers";
import moment from "moment";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
    return {
        startTime: startDate.toDate(),
        date: startDate.format('YYYY-MM-DD'),
        startDateTime: startDate.format(),
        endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
    };
}

export const ONBOARDING_CHALLENGE_109 = {
    type: "mongo",
    modelName: "challenge",
    data: {
        ...CHALLENGE_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_109.data.customerId,
        isNewType: true,
        yuCoinAwarded: 200,
        XPAwarded: 0,
        rating: 0,
        incomingData: {},
        sources: {},
        passive: true,
        levelSlotTemplateId: "MAIN_ONBOARDING_001",
        status: "completed",
        date: moment().format("YYYY-MM-DD"),
        milestoneLog: [],
    }
} as IDatabaseItem;

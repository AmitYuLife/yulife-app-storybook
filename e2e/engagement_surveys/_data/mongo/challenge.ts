import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

const type = "mongo";
const modelName = "challenge";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
  return {
    startTime: startDate.toDate(),
    date: startDate.format("YYYY-MM-DD"),
    startDateTime: startDate.format(),
    endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
  };
}

export const CHALLENGE_USER_10 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    challengeTemplateId: [],
    data: [],
    actions: [],
    target: [],
    userId: customer.CUSTOMER_10.customer.data.customerId,
    level: 856,
    levelId: "YU_LEVEL_0856",
    levelSlotId: "YU_LEVEL_0856_1",
    levelSlotTemplateId: "SHORT_STROLL_001",
    subtype: "short stroll",
    isNewType: true,
    status: "completed",
    passive: false,
    incomingData: {
      steps: 125,
    },
    ...generateChallengeDates(moment().subtract(1, "day")),
    yuCoinAwarded: 60,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: "YU_MILESTONE_SS0001_0",
        completed: moment().subtract(1, "day").toDate(),
        data: {
          steps: 108,
          meditation: 0,
          distance: 0,
        },
        yuCoinAwarded: 60,
      },
    ],
    rating: 3,
    multiplierId: null,
  },
} as IDatabaseItem;

import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import {
  SHORT_STROLL_MILESTONE_1,
  LONG_WALK_MILESTONE_1,
  MEDITATION_MILESTONE_1,
  SUDOKU_MILESTONE,
} from "../../../challenges/_data/mongo/map_milestone_templates";
import { CHALLENGE_TEMPLATE } from "../../../challenges/_data/mongo/_templates";
import moment from "moment";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
  return {
    startTime: startDate.toDate(),
    date: startDate.format("YYYY-MM-DD"),
    startDateTime: startDate.format(),
    endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
  };
}

const type = "mongo";
const modelName = "challenge";

export const CHALLENGE_USER_BARRY = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_USA_4.customer.data.customerId,
    ...generateChallengeDates(
      moment().subtract(1, "days"),
      moment().subtract(1, "days").endOf("day")
    ),
    level: 2,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 1000,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          steps: 1000,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(1, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_AXEL = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_USA_3.customer.data.customerId,
    ...generateChallengeDates(
      moment().subtract(1, "days"),
      moment().subtract(1, "days").endOf("day")
    ),
    level: 2,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 4200,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          steps: 4200,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(1, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

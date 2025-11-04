import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CHALLENGE_TEMPLATE } from "./_templates";
import { CUSTOMER_109, CUSTOMER_MAXIMISE_YU } from "../postgres/customers";
import moment from "moment";
import { SHORT_STROLL_MILESTONE_1 } from "./map_milestone_templates";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
  return {
    startTime: startDate.toDate(),
    date: startDate.format("YYYY-MM-DD"),
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
  },
} as IDatabaseItem;

export const CHALLENGE_USER_MAXI_1 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: CUSTOMER_MAXIMISE_YU.data.customerId,
    ...generateChallengeDates(moment().subtract(5, "minutes")),
    level: 124,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 400,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(5, "minutes").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_MAXI_2 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: CUSTOMER_MAXIMISE_YU.data.customerId,
    ...generateChallengeDates(moment().subtract(20, "minutes")),
    level: 124,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 400,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(20, "minutes").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
      },
    ],
  },
} as IDatabaseItem;

export const ONBOARDING_CHALLENGE_MAXI = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: CUSTOMER_MAXIMISE_YU.data.customerId,
    isNewType: true,
    yuCoinAwarded: 200,
    XPAwarded: 0,
    rating: 0,
    incomingData: {},
    sources: {},
    passive: true,
    levelSlotTemplateId: "MAIN_ONBOARDING_001",
    status: "completed",
    date: moment().subtract(5, "months").format("YYYY-MM-DD").toString(),
    milestoneLog: [],
  },
} as IDatabaseItem;

export const CHALLENGE_PASSIVE_MAXI = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_MAXIMISE_YU.data.customerId,
    ...generateChallengeDates(moment().subtract(48, "minutes")),
    sources: {
      device: {
        steps: 2502,
      },
    },
    incomingData: {
      steps: 2502,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 10,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 2502,
        },
        yuCoinAwarded: 10,
        completed: moment().subtract(48, "minutes").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

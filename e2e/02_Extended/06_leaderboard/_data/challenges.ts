import { LEADERBOARD_CUSTOMERS } from "./customers";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require("moment");
import { CHALLENGE_TEMPLATE, SHORT_STROLL_MILESTONE_1 } from "@data";

export const LEADERBOARD_CHALLENGES = LEADERBOARD_CUSTOMERS.map((item, i) => ({
  type: "mongo",
  modelName: "challenge",
  data: {
      ...CHALLENGE_TEMPLATE.data,
      _id: generateRandomMongoId(),
      userId: item.data.customerId,
      startTime: moment().subtract(3, "days").toDate(),
      startDateTime: moment().subtract(3, "days").toDate(),
      endDateTime: moment().subtract(3, "days").toDate(),
      level: 2,
      status: "completed",
      levelSlotTemplateId: "DAILY_PASSIVE_001",
      passive: true,
      incomingData: {
          steps: i * 100000 - 1000 * i
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
}))
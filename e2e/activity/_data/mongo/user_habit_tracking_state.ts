import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as user from "../postgres/customers";
import { v4 as uuid } from "uuid";

const sharedFields = {
  currencySymbol: "£",
  weeklyExpense: 5,
  amountUsedPerDay: 8,
  smokingType: "both",
  triggers: ["celebrate", "financial stress"],
  motivations: ["save_money", "improve_health"],
};

const generateStreakDays = (length: number): number[] => Array.from({ length }, (_, i) => i + 1);

export const USER_HABIT_SMOKING_STATE_CUSTOMER_141 = {
  type: "mongo",
  modelName: "user_habit_tracking_state",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_141.customer.data.customerId,
    type: "smoking",
    inputData: {
      journeySessionId: uuid(),
      currencySymbol: "£",
      weeklyExpense: 10,
      amountUsedPerDay: 12,
      smokingType: "both",
      triggers: ["celebrate", "financial stress"],
      motivations: ["save_money", "improve_health"],
    },
    active: true,
    archived: false,
    streakStartedAt: moment().subtract(6, "days").toDate(),
    lastUpdatedStreakAt: moment().subtract(1, "days").toDate(),
    streakLength: 6,
    claimedStreakDays: generateStreakDays(6),
    previousStreaks: [1],
    optOutCount: 0,
    optedOut: false,
  },
} as IDatabaseItem;

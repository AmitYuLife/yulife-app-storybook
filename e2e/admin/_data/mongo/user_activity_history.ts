import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";
import moment from "moment";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "useractivityhistory",
};

export const CUSTOMER_5_ACTIVITY_HISTORY = {
  ...MODEL_DEFAULTS,
  data: {
    date: moment().subtract(1, "days"),
    userId: customers.CUSTOMER_5.data.customerId,
    additionalActivities: [
      {
        source: "streak",
        yuCoin: 400,
        transactionId: generateRandomMongoId(),
      },
      {
        source: "avatar_creation_award",
        yuCoin: 100,
        transactionId: generateRandomMongoId(),
      },
    ],
    levelInfo: {
      level: 5,
    },
    questChallenges: [
      {
        levelSlotTemplateId: "LONG_WALK_001",
        rating: 3,
        yuCoin: 60,
        data: {
          steps: 2200,
          distance: 0,
          meditation: 0,
        },
      },
    ],
  },
} as IDatabaseItem;

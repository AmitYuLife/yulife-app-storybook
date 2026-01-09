import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";
import moment from "moment";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "useractivityhistory",
};

export const USER_83_ACTIVITY_HISTORY = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_83.data.customerId,
    date: moment().subtract(6, "days").toDate(),
    totalYuCoin: 20,
    coreActivities: {
      DAILY_PASSIVE_001: {
        yuCoin: 20,
        data: {
          stepSources: {
            device: 2300,
          },
          totalSteps: 2300,
        },
      },
    },
    levelInfo: {
      level: 2,
    },
  },
} as IDatabaseItem;

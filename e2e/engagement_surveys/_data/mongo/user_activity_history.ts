import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";
import moment from "moment";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "useractivityhistory",
};

export const CUSTOMER_12_ACTIVITY_HISTORY = {
  ...MODEL_DEFAULTS,
  data: {
    userId: customers.CUSTOMER_12.customer.data.customerId,
    date: moment().subtract(1, "day").format("YYYY-MM-DD"),
    totalYuCoin: 90,
    levelInfo: { level: 855 },
    additionalActivities: [
      {
        source: "pathways_challenge",
        yuCoin: 90,
        transactionId: generateRandomMongoId(),
      },
    ],
  },
} as IDatabaseItem;

import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
} from "@yu-life/yulife-bdd-framework";
import moment = require("moment");

export const CUSTOMER_USA_1 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Usa",
    lastName: "Customer",
    status: "onboarded",
  },
} as IDatabaseItem;

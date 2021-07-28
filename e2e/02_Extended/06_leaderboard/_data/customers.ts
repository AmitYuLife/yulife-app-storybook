import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment = require("moment");

export const LEADERBOARD_CUSTOMERS = Array.from({ length: 120 }).map((_, i) => ({
  type: "postgres",
  modelName: "customer_detail",
  data: {
      customerId: generateRandomMongoId(),
      email: `vitaly+biz${i.toString().padStart(3, "0")}@yulife.com`,
      firstName: "Mistah",
      lastName: i.toString().padStart(3, "0"),
      dateOfBirth: moment().subtract(30, "years").toDate(),
      status: "onboarded"
  }
} as IDatabaseItem))
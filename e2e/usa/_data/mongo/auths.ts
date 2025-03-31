import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment = require("moment");
import { AUTH_TEMPLATE } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_USA_1 = {
  type: "mongo",
  modelName: "authpassword",
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "37.34.118.97",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_USA_1.data.customerId,
  },
} as IDatabaseItem;

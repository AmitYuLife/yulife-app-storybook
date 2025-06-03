import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

import moment from "moment";

const type = "mongo";
const modelName = "users";

const USER_DATA_TEMPLATE = {
  data: {
    _id: "",
    userId: "",
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 1,
      },
    ],
    isAvatarCreated: false,
    earnRate: 1,
  },
};

export const USER_USA_1 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_USA_1.data.customerId,
  },
} as IDatabaseItem;

export const USER_USA_2 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_USA_2.data.customerId,
  },
} as IDatabaseItem;

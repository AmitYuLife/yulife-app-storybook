import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "usergift",
};

export const CUSTOMER_2_SMOKING_GIFT_A = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_1.data.customerId,
    toUserId: customer.CUSTOMER_2_SMOKING.data.customerId,
    thanksSentAt: false,
    createdAt: moment().subtract(10, "minutes").toISOString(),
    claimedAt: moment().subtract(5, "minutes").toISOString(),
  },
} as IDatabaseItem;

export const CUSTOMER_2_SMOKING_GIFT_B = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_2_SMOKING.data.customerId,
    toUserId: customer.CUSTOMER_1.data.customerId,
    assetType: "yucoin",
    amount: 250,
    message: "Great work today!",
    background: "forest",
    sticker: "lantern",
    createdAt: moment().subtract(10, "minutes").toISOString(),
  },
} as IDatabaseItem;

import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "usergift",
};

export const USER_2_GIFT_A = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_2.data.customerId,
    toUserId: customer.CUSTOMER_1.data.customerId,
    assetType: "yucoin",
    amount: 250,
    message: "Great work today!",
    background: "forest",
    sticker: "lantern",
    createdAt: moment().subtract(3, "hours").toISOString(),
  },
} as IDatabaseItem;

export const USER_2_GIFT_B = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_2.data.customerId,
    toUserId: customer.CUSTOMER_1.data.customerId,
    assetType: "yucoin",
    amount: 250,
    message: "game.gifting.message_preset.4",
    background: "forest",
    sticker: "lantern",
    createdAt: moment().subtract(2, "hours").toISOString(),
  },
} as IDatabaseItem;

import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "usergift",
};

export const USER_18_GIFT_A = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_18.data.customerId,
    toUserId: customer.CUSTOMER_17.data.customerId,
    assetType: "yucoin",
    amount: 250,
    message: "Great work today!",
    background: "forest",
    sticker: "lantern",
    createdAt: moment().subtract(3, "hours").toISOString(),
  },
} as IDatabaseItem;

export const USER_18_GIFT_B = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_18.data.customerId,
    toUserId: customer.CUSTOMER_17.data.customerId,
    assetType: "yucoin",
    amount: 250,
    message: "game.gifting.message_preset.4",
    background: "forest",
    sticker: "lantern",
    createdAt: moment().subtract(2, "hours").toISOString(),
  },
} as IDatabaseItem;

export const USER_18_GIFT_C = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_18.data.customerId,
    toUserId: customer.CUSTOMER_17.data.customerId,
    assetType: "yucoin",
    amount: 250,
    message: "game.gifting.message_preset.4",
    background: "forest",
    sticker: "lantern",
    createdAt: moment().subtract(1, "hours").toISOString(),
  },
} as IDatabaseItem;

export const USER_17_GIFT_A = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_17.data.customerId,
    toUserId: customer.CUSTOMER_28.data.customerId,
    assetType: "yucoin",
    amount: 450,
    message: "Great work today!",
    background: "forest",
    sticker: "lantern",
    createdAt: moment().subtract(3, "days").toISOString(),
  },
} as IDatabaseItem;

export const USER_20_GIFT_A = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_19.data.customerId,
    toUserId: customer.CUSTOMER_20.data.customerId,
    thanksSentAt: false,
    createdAt: moment().subtract(3, "hours").toISOString(),
    claimedAt: moment().subtract(2, "hours").toISOString(),
  },
} as IDatabaseItem;

export const USER_20_GIFT_B = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_20.data.customerId,
    toUserId: customer.CUSTOMER_19.data.customerId,
    assetType: "yucoin",
    amount: 250,
    message: "Great work today!",
    background: "forest",
    sticker: "lantern",
    createdAt: moment().subtract(3, "hours").toISOString(),
  },
} as IDatabaseItem;

export const USER_139_GIFT_B = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_139.data.customerId,
    toUserId: customer.CUSTOMER_138.data.customerId,
    assetType: "yucoin",
    amount: 10,
    message: "Great work today!",
    background: "forest",
    sticker: "lantern",
    autoClaimAfter: moment().subtract(1, "days").toDate(),
  },
} as IDatabaseItem;

export const USER_16_GIFT_B = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    fromUserId: customer.CUSTOMER_16.data.customerId,
    toUserId: customer.CUSTOMER_138.data.customerId,
    assetType: "yucoin",
    amount: 50,
    message: "Great work today!",
    background: "forest",
    sticker: "lantern",
    autoClaimAfter: moment().subtract(1, "days").toDate(),
  },
} as IDatabaseItem;

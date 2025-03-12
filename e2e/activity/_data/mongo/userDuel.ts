import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as customer from "../postgres/customers";

const type = "mongo";
const modelName = "userduel";

export const USER_DUEL_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_16.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(1, "hours").toISOString(),
        score: 100,
      },
      {
        userId: customer.CUSTOMER_17.data.customerId,
        status: "accepted",
        startDateTime: moment().subtract(1, "hours").toISOString(),
      },
    ],
    date: moment().subtract(1, "hours").format("YYYY-MM-DD"),
    type: "steps",
    status: "accepted",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_19.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(5, "days").toISOString(),
        score: 600,
      },
      {
        userId: customer.CUSTOMER_20.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(5, "days").toISOString(),
        score: 400,
      },
    ],
    date: moment().subtract(5, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_3 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_19.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(8, "days").toISOString(),
        score: 300,
      },
      {
        userId: customer.CUSTOMER_16.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(8, "days").toISOString(),
        score: 500,
      },
    ],
    date: moment().subtract(8, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_4_PENDING = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_19.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(1, "days").toISOString(),
        score: 100,
      },
      {
        userId: customer.CUSTOMER_17.data.customerId,
        status: "pending_submission",
        startDateTime: moment().subtract(1, "days").toISOString(),
      },
    ],
    date: moment().subtract(1, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "accepted",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_5_PENDING = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_18.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(2, "days").toISOString(),
        score: 4000,
      },
      {
        userId: customer.CUSTOMER_17.data.customerId,
        status: "pending_submission",
        startDateTime: moment().subtract(2, "days").toISOString(),
      },
    ],
    date: moment().subtract(2, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "accepted",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_6 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_19.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(8, "days").toISOString(),
        score: 400,
      },
      {
        userId: customer.CUSTOMER_18.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(8, "days").toISOString(),
        score: 500,
      },
    ],
    date: moment().subtract(8, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_7 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_19.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(8, "days").toISOString(),
        score: 300,
      },
      {
        userId: customer.CUSTOMER_21.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(8, "days").toISOString(),
        score: 200,
      },
    ],
    date: moment().subtract(8, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_8 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_27.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(6, "days").toISOString(),
        score: 300,
      },
      {
        userId: customer.CUSTOMER_28.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(6, "days").toISOString(),
        score: 200,
      },
    ],
    date: moment().subtract(6, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_9 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_27.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(7, "days").toISOString(),
        score: 300,
      },
      {
        userId: customer.CUSTOMER_29.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(7, "days").toISOString(),
        score: 200,
      },
    ],
    date: moment().subtract(7, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_10 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_27.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(8, "days").toISOString(),
        score: 300,
      },
      {
        userId: customer.CUSTOMER_30.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(8, "days").toISOString(),
        score: 200,
      },
    ],
    date: moment().subtract(8, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_11 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_47.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(1, "days").toISOString(),
        score: 300,
      },
      {
        userId: customer.CUSTOMER_21.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(1, "days").toISOString(),
        score: 200,
      },
    ],
    date: moment().subtract(1, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_12 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_47.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(19, "days").toISOString(),
        score: 600,
      },
      {
        userId: customer.CUSTOMER_18.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(19, "days").toISOString(),
        score: 400,
      },
    ],
    date: moment().subtract(19, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_13 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_47.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(20, "days").toISOString(),
        score: 400,
      },
      {
        userId: customer.CUSTOMER_18.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(20, "days").toISOString(),
        score: 600,
      },
    ],
    date: moment().subtract(20, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_14 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_47.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(21, "days").toISOString(),
        score: 400,
      },
      {
        userId: customer.CUSTOMER_18.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(21, "days").toISOString(),
        score: 600,
      },
    ],
    date: moment().subtract(21, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

export const USER_DUEL_15 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    opponents: [
      {
        userId: customer.CUSTOMER_84.data.customerId,
        status: "submitted",
        startDateTime: moment().subtract(21, "days").toISOString(),
        score: 300,
      },
      {
        userId: "deleted-user-should-not-match",
        status: "submitted",
        startDateTime: moment().subtract(21, "days").toISOString(),
        score: 500,
      },
    ],
    date: moment().subtract(21, "days").format("YYYY-MM-DD"),
    type: "steps",
    status: "finished",
    duration: 86400,
    yucoin: 10,
    updatedAt: moment().toISOString(),
  },
} as IDatabaseItem;

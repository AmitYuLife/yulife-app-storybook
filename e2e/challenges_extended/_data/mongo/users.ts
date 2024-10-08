import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';

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
        earnRate: 10,
      },
    ],
    isAvatarCreated: false,
    earnRate: 10,
  },
};

export const USER_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_1.data.customerId,
    earnRate: 20,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        earnRate: 20,
        type: "employer",
      },
    ],
  },
} as IDatabaseItem;

export const USER_34 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_34.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 10,
      },
    ],
    earnRate: 10,
    isAvatarCreated: true,
    cloudinaryAvatar: {
      filename: "api/detox/avatars/609be5870c928c573fcb3140",
      version: 1,
    },
  },
} as IDatabaseItem;

export const USER_FIIT = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_FIIT.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 19,
      },
    ],
    earnRate: 19,
  },
} as IDatabaseItem;

export const USER_BODY_COACH = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_BODY_COACH.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 19,
      },
    ],
    earnRate: 19,
  },
} as IDatabaseItem;

export const USER_122 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_122.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 10,
      },
    ],
    earnRate: 10,
  },
} as IDatabaseItem;

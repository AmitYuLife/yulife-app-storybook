import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';

const type = "mongo";
const modelName = "users";

export const NPC_YUGI_YULIFER = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: "NPC_YUGI",
    earnRate: 0,
    isAvatarCreated: false,
    npcInfo: {
      firstName: "Yugi",
      lastName: "",
    },
  },
} as IDatabaseItem;

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

export const USER_LEAVER = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_LEAVER.data.customerId,
    earnRate: 1
  },
} as IDatabaseItem;

export const USER_111 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_111.data.customerId,
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_112 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_112.data.customerId,
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_113 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_113.data.customerId,
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_114 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_114.data.customerId,
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_126 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
    earnRate: 1
  },
} as IDatabaseItem;

export const USER_STORE_ACCESS_PERIOD = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_PERIOD.data.customerId,
    earnRate: 1
  },
} as IDatabaseItem;

export const USER_STORE_ACCESS_DENIED = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_DENIED.data.customerId,
    earnRate: 1
  },
} as IDatabaseItem;

export const USER_STORE_ACCESS_NEVER = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_NEVER.data.customerId,
    earnRate: 1
  },
} as IDatabaseItem;

import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as customer from "../postgres/customers";

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

export const USER_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_2.data.customerId,
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

export const USER_5 = {
  type,
  modelName,
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_5.data.customerId,
    earnRate: 10,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        earnRate: 10,
        type: "employer",
      },
    ],
  },
} as IDatabaseItem;

export const USER_6 = {
  type,
  modelName,
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_6.data.customerId,
    earnRate: 10,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        earnRate: 10,
        type: "employer",
      },
    ],
  },
} as IDatabaseItem;

export const USER_7 = {
  type,
  modelName,
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_7.data.customerId,
    earnRate: 10,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        earnRate: 10,
        type: "employer",
      },
    ],
  },
} as IDatabaseItem;

export const USER_8 = {
  type,
  modelName,
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_8.data.customerId,
  },
} as IDatabaseItem;

export const USER_15 = {
  type,
  modelName,
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_15.data.customerId,
    earnRate: 10,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        earnRate: 10,
        type: "employer",
      },
    ],
  },
} as IDatabaseItem;

export const USER_16 = {
  type,
  modelName,
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_16.data.customerId,
  },
} as IDatabaseItem;

export const USER_17 = {
  type,
  modelName,
  data: {
    _id: "5f2ab87a75ffd2a445b11263",
    userId: customer.CUSTOMER_17.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 10,
      },
    ],
    isAvatarCreated: true,
    earnRate: 10,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_18 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_18.data.customerId,
  },
} as IDatabaseItem;

export const USER_19 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_19.data.customerId,
  },
} as IDatabaseItem;

export const USER_20 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_20.data.customerId,
  },
} as IDatabaseItem;

export const USER_21 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_21.data.customerId,
  },
} as IDatabaseItem;

export const USER_27 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_27.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 8,
      },
    ],
    earnRate: 8,
  },
} as IDatabaseItem;

export const USER_28 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_28.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 7,
      },
    ],
    earnRate: 7,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_39 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_39.data.customerId,
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
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_40 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_40.data.customerId,
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

export const USER_42 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_42.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 20,
      },
    ],
    earnRate: 20,
  },
} as IDatabaseItem;

export const USER_44 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_44.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 1,
      },
    ],
    earnRate: 1,
  },
} as IDatabaseItem;

export const USER_45 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_45.data.customerId,
  },
} as IDatabaseItem;

export const USER_46 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_46.data.customerId,
  },
} as IDatabaseItem;

export const USER_47 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_47.data.customerId,
  },
} as IDatabaseItem;

export const USER_48 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_48.data.customerId,
  },
} as IDatabaseItem;

export const USER_49 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_49.data.customerId,
  },
} as IDatabaseItem;

export const USER_50 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_50.data.customerId,
  },
} as IDatabaseItem;

export const USER_51 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_51.data.customerId,
  },
} as IDatabaseItem;

export const USER_65 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_65.data.customerId,
    activityLastReceived: {
      cycling: moment().subtract(1, "days").toString(),
    },
  },
} as IDatabaseItem;

export const USER_66 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_66.data.customerId,
  },
} as IDatabaseItem;

export const USER_71 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_71.data.customerId,
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

export const USER_73 = {
  type,
  modelName,
  data: {
    _id: "5f2ab87a75ffd2a445b11267",
    userId: customer.CUSTOMER_73.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 10,
      },
    ],
    isAvatarCreated: true,
    earnRate: 10,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_83 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_83.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 20,
      },
    ],
    earnRate: 20,
    activityLastReceived: {
      cycling: moment().subtract(5, "days").toString(),
      steps: moment().subtract(5, "days").toString(),
      meditation: moment().subtract(5, "days").toString(),
    },
  },
} as IDatabaseItem;

export const USER_84 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_84.data.customerId,
    earnRate: 20,
  },
} as IDatabaseItem;

export const USER_89 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_89.data.customerId,
  },
} as IDatabaseItem;

export const USER_90 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_90.data.customerId,
  },
} as IDatabaseItem;

export const USER_138 = {
  type,
  modelName,
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_138.data.customerId,
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_139 = {
  type,
  modelName,
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_139.data.customerId,
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_142 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_142.data.customerId,
  },
} as IDatabaseItem;

export const USER_143 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_143.data.customerId,
  },
} as IDatabaseItem;

import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
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

export const USER_3 = {
    type,
    modelName,
    data: {
      _id: generateRandomMongoId(),
      userId: customer.CUSTOMER_3.data.customerId,
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

export const USER_12 = {
  type,
  modelName,
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_12.data.customerId,
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

export const USER_13 = {
  type,
  modelName,
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_13.data.customerId,
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

export const USER_60 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_60.data.customerId,
    nickname: "Ivan",
  },
} as IDatabaseItem;

export const USER_63 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_63.data.customerId,
    nickname: "Sam",
  },
} as IDatabaseItem;

export const USER_64 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_64.data.customerId,
    nickname: "Tony",
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

export const USER_67 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_67.data.customerId,
    nickname: "Rishi",
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

export const USER_69 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_69.data.customerId,
    nickname: "John",
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 6,
      },
    ],
    earnRate: 6,
  },
} as IDatabaseItem;

export const USER_70 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_70.data.customerId,
    nickname: "Robert",
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 6,
      },
    ],
    earnRate: 6,
  },
} as IDatabaseItem;

export const USER_78 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_78.data.customerId,
    nickname: "Poog",
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 9,
      },
    ],
    earnRate: 9,
  },
} as IDatabaseItem;

export const USER_79 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_79.data.customerId,
    nickname: "Sloog",
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
  },
} as IDatabaseItem;

export const USER_80 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_80.data.customerId,
    nickname: "Poog Master General",
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

export const USER_81 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_81.data.customerId,
    nickname: "Isaac le Frank",
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

export const USER_89 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_89.data.customerId,
    nickname: "Mr Bright",
  },
} as IDatabaseItem;

export const USER_90 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_90.data.customerId,
    nickname: "Boi",
    earnRate: 6,
  },
} as IDatabaseItem;

export const USER_91 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_91.data.customerId,
    nickname: "Spod",
    earnRate: 20,
  },
} as IDatabaseItem;

export const USER_92 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_92.data.customerId,
    nickname: "El",
  },
} as IDatabaseItem;


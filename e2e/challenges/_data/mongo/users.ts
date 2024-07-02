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

export const USER_7 = {
  type,
  modelName,
  data: {
    ...USER_1.data,
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
    ...USER_1.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_8.data.customerId,
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


export const USER_9 = {
  type,
  modelName,
  data: {
    ...USER_1.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_9.data.customerId,
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
    isAvatarCreated: true,
    avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg",
  },
} as IDatabaseItem;

export const USER_13 = {
  type,
  modelName,
  data: {
    ...USER_1.data,
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

export const USER_35 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_35.data.customerId,
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
    avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg",
  },
} as IDatabaseItem;

export const USER_MEDITOPIA_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_MEDITOPIA_1.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        earnRate: 10,
        type: "employer",
      },
    ],
    earnRate: 10,
  },
} as IDatabaseItem;

export const USER_MEDITOPIA_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        earnRate: 10,
        type: "employer",
      },
    ],
    earnRate: 10,
  },
} as IDatabaseItem;

export const USER_52 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_52.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 6,
        nickname: "Niamh",
      },
    ],
    earnRate: 13,
  },
} as IDatabaseItem;

export const USER_54 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_54.data.customerId,
    nickname: "Sasha",
  },
} as IDatabaseItem;

export const USER_55 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_55.data.customerId,
    nickname: "Simone",
  },
} as IDatabaseItem;

export const USER_56 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_56.data.customerId,
    nickname: "Milton",
  },
} as IDatabaseItem;

export const USER_57 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_57.data.customerId,
    nickname: "Stephen",
  },
} as IDatabaseItem;

export const USER_58 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_58.data.customerId,
    nickname: "Paris",
  },
} as IDatabaseItem;

export const USER_61 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_61.data.customerId,
    nickname: "Alex",
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

export const USER_68 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_68.data.customerId,
    nickname: "Alex",
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

export const USER_71 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_71.data.customerId,
    nickname: "Cersei",
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

export const USER_72 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_72.data.customerId,
    nickname: "Jamie",
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

export const USER_76 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_76.data.customerId,
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

export const USER_84 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_84.data.customerId,
    nickname: "Sloogy Dreamer",
    earnRate: 20,
  },
} as IDatabaseItem;

export const USER_86 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_86.data.customerId,
    nickname: "Brainy",
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

export const USER_132 = {
  type,
  modelName,
  data: {
    ...USER_1.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_132.data.customerId,
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

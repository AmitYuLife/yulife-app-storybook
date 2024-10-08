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

export const USER_43 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_43.data.customerId,
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

export const USER_45 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_45.data.customerId,
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

export const USER_49 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_49.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 31,
      },
    ],
    earnRate: 31,
  },
} as IDatabaseItem;

export const USER_51 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_51.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 5,
      },
    ],
    earnRate: 5,
  },
} as IDatabaseItem;

export const USER_53 = {
  type,
  modelName,
  data: {
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 0,
      },
    ],
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_53.data.customerId,
    earnRate: 1,
  },
} as IDatabaseItem;

export const USER_GHI = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_GHI.data.customerId,
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
  }
}

export const USER_GHI_STARTED = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_GHI_STARTED.data.customerId,
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
  }
}

export const USER_93 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_93.data.customerId,
  },
} as IDatabaseItem;

export const USER_95 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_95.data.customerId,
  },
} as IDatabaseItem;

export const USER_96 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_96.data.customerId,
  },
} as IDatabaseItem;

export const USER_97 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_97.data.customerId,
  },
} as IDatabaseItem;

export const USER_98 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_98.data.customerId,
  },
} as IDatabaseItem;

export const USER_99 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_99.data.customerId,
  },
} as IDatabaseItem;

export const USER_100 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_100.data.customerId,
  },
} as IDatabaseItem;

export const USER_101 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_101.data.customerId,
  },
} as IDatabaseItem;

export const USER_102 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_102.data.customerId,
  },
} as IDatabaseItem;

export const USER_103 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_103.data.customerId,
  },
} as IDatabaseItem;

export const USER_104 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_104.data.customerId,
  },
} as IDatabaseItem;

export const USER_105 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_105.data.customerId,
  },
} as IDatabaseItem;

export const USER_106 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_106.data.customerId,
  },
} as IDatabaseItem;

export const USER_107 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_107.data.customerId,
  },
} as IDatabaseItem;

export const USER_109 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_109.data.customerId,
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_110 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_110.data.customerId,
  },
} as IDatabaseItem;

export const USER_115 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_115.data.customerId,
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_125 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_125.data.customerId,
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 5,
      },
    ],
    earnRate: 5,
  },
} as IDatabaseItem;

export const USER_138 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
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
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_139.data.customerId,
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;


export const USER_MAXIMISE_YU = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_MAXIMISE_YU.data.customerId,
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_140 = {
  type,
  modelName,
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_140.data.customerId,
    isAvatarCreated: false,
  },
} as IDatabaseItem;

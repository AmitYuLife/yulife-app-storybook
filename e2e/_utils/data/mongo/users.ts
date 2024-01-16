import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
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
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_3.data.customerId,
  },
} as IDatabaseItem;

export const USER_4 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_4.data.customerId,
  },
} as IDatabaseItem;

export const USER_5 = {
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_8.data.customerId,
  },
} as IDatabaseItem;

export const USER_9 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_2.data,
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

export const USER_10 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_10.data.customerId,
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

export const USER_12 = {
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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

export const USER_14 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_14.data.customerId,
  },
} as IDatabaseItem;

export const USER_15 = {
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_16.data.customerId,
  },
} as IDatabaseItem;

export const USER_17 = {
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_18.data.customerId,
  },
} as IDatabaseItem;

export const USER_19 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_19.data.customerId,
    nickname: "Angela",
  },
} as IDatabaseItem;

export const USER_20 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_20.data.customerId,
    nickname: "Oscar",
  },
} as IDatabaseItem;

export const USER_21 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_21.data.customerId,
    nickname: "Dwight",
  },
} as IDatabaseItem;

export const USER_ALPHA = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_ALPHA.data.customerId,
    customer_membership: customer.CUSTOMER_ALPHA.data.membershipType,
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
} as IDatabaseItem;

export const USER_22 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_22.data.customerId,
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

export const USER_23 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: "5f3160808da1c85af12478e9",
    userId: customer.CUSTOMER_23.data.customerId,
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
    avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg",
  },
} as IDatabaseItem;

export const USER_25 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_25.data.customerId,
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

export const USER_24 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_24.data.customerId,
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

export const USER_27 = {
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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

export const USER_29 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_29.data.customerId,
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

export const USER_30 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_30.data.customerId,
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
    avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg",
  },
} as IDatabaseItem;

export const USER_31 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_31.data.customerId,
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

export const USER_32 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_32.data.customerId,
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

export const USER_33 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_33.data.customerId,
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

export const USER_36 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_36.data.customerId,
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

export const USER_37 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_37.data.customerId,
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

export const USER_38 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_38.data.customerId,
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

export const USER_MEDITOPIA_1 = {
  type: "mongo",
  modelName: "users",
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

export const USER_41 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_41.data.customerId,
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

export const USER_MEDITOPIA_2 = {
  type: "mongo",
  modelName: "users",
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

export const USER_MEDITOPIA_3 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_MEDITOPIA_3.data.customerId,
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

export const USER_42 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_42.data.customerId,
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

export const USER_43 = {
  type: "mongo",
  modelName: "users",
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

export const USER_44 = {
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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

export const USER_46 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_46.data.customerId,
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

export const USER_47 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_47.data.customerId,
    nickname: "Gill",
  },
} as IDatabaseItem;

export const USER_48 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_48.data.customerId,
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

export const USER_49 = {
  type: "mongo",
  modelName: "users",
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

export const USER_50 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_50.data.customerId,
    nickname: "Lynton",
  },
} as IDatabaseItem;

export const USER_51 = {
  type: "mongo",
  modelName: "users",
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

export const USER_52 = {
  type: "mongo",
  modelName: "users",
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

export const USER_53 = {
  type: "mongo",
  modelName: "users",
  data: {
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 0,
        nickname: "NoEarnRate",
      },
    ],
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_53.data.customerId,
    earnRate: 1,
  },
} as IDatabaseItem;

export const USER_54 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_54.data.customerId,
    nickname: "Sasha",
  },
} as IDatabaseItem;

export const USER_55 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_55.data.customerId,
    nickname: "Simone",
  },
} as IDatabaseItem;

export const USER_56 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_56.data.customerId,
    nickname: "Milton",
  },
} as IDatabaseItem;

export const USER_57 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_57.data.customerId,
    nickname: "Stephen",
  },
} as IDatabaseItem;

export const USER_PLI_6 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_6.data.customerId,
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

export const USER_PLI_7 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_7.data.customerId,
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

export const USER_PLI_9 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_9.data.customerId,
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

export const USER_PLI_10 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_10.data.customerId,
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

export const USER_58 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_58.data.customerId,
    nickname: "Paris",
  },
} as IDatabaseItem;

export const USER_60 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_60.data.customerId,
    nickname: "Ivan",
  },
} as IDatabaseItem;

export const USER_61 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_61.data.customerId,
    nickname: "Alex",
  },
} as IDatabaseItem;

export const USER_63 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_63.data.customerId,
    nickname: "Sam",
  },
} as IDatabaseItem;

export const USER_64 = {
  type: "mongo",
  modelName: "users",
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

export const USER_65 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_65.data.customerId,
    nickname: "Gordon",
    activityLastReceived: {
      cycling: moment().subtract(1, "days").toString(),
    },
  },
} as IDatabaseItem;

export const USER_66 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_66.data.customerId,
    nickname: "Theresa",
  },
} as IDatabaseItem;

export const USER_67 = {
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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
export const USER_69 = {
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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

export const USER_71 = {
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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

export const USER_73 = {
  type: "mongo",
  modelName: "users",
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

export const USER_74 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_74.data.customerId,
    nickname: "TV",
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

export const USER_75 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_75.data.customerId,
  },
} as IDatabaseItem;

export const USER_76 = {
  type: "mongo",
  modelName: "users",
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

export const USER_77 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_77.data.customerId,
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

export const USER_78 = {
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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
  type: "mongo",
  modelName: "users",
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

export const USER_83 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_83.data.customerId,
    nickname: "Sloogy Dreamer",
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
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_84.data.customerId,
    nickname: "Sloogy Dreamer",
    earnRate: 20,
  },
} as IDatabaseItem;

export const USER_DENTAL_1 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_DENTAL_1.data.customerId,
    nickname: "Sloogy Dreamer",
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 0,
      },
    ],
    earnRate: 0,
    activityLastReceived: {
      cycling: moment().subtract(5, "days").toString(),
      steps: moment().subtract(5, "days").toString(),
      meditation: moment().subtract(5, "days").toString(),
    },
  },
} as IDatabaseItem;

export const USER_DENTAL_2 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_DENTAL_2.data.customerId,
    nickname: "Sloogy Dreamer",
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 0,
      },
    ],
    earnRate: 0,
    activityLastReceived: {
      cycling: moment().subtract(5, "days").toString(),
      steps: moment().subtract(5, "days").toString(),
      meditation: moment().subtract(5, "days").toString(),
    },
  },
} as IDatabaseItem;

export const USER_85 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_85.data.customerId,
    nickname: "Dental Cancelled",
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 0,
      },
    ],
    earnRate: 0,
    activityLastReceived: {
      cycling: moment().subtract(5, "days").toString(),
      steps: moment().subtract(5, "days").toString(),
      meditation: moment().subtract(5, "days").toString(),
    },
  },
} as IDatabaseItem;

export const USER_PLI_2 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_2.data.customerId,
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

export const USER_PLI_3 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_3.data.customerId,
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

export const USER_PLI_4 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_4.data.customerId,
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

export const USER_PLI_5 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_5.data.customerId,
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

export const USER_FIIT = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_FIIT.data.customerId,
    nickname: "Fiitman",
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

export const USER_86 = {
  type: "mongo",
  modelName: "users",
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

export const USER_FUTURE_PRODUCT = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_FUTURE_PRODUCT.data.customerId,
    nickname: "Future-Man",
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


export const USER_LEAVER = {
  type: "mongo",
  modelName: "users",
  data: {
    userId: customer.CUSTOMER_LEAVER.data.customerId,
    nickname: "leaf",
    earnRate: 1
  },
} as IDatabaseItem;

export const USER_GHI = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_GHI.data.customerId,
    nickname: "GHIman",
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
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_GHI_STARTED.data.customerId,
    nickname: "GHImanStarted",
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

export const USER_89 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_89.data.customerId,
    nickname: "Mr Bright",
  },
} as IDatabaseItem;

export const USER_90 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_90.data.customerId,
    nickname: "Boi",
    earnRate: 6,
  },
} as IDatabaseItem;

export const USER_91 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_91.data.customerId,
    nickname: "Spod",
    earnRate: 20,
  },
} as IDatabaseItem;

export const USER_92 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_92.data.customerId,
    nickname: "El",
  },
} as IDatabaseItem;

export const USER_93 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_93.data.customerId,
    nickname: "David",
  },
} as IDatabaseItem;

export const USER_94 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_94.data.customerId,
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

export const USER_95 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_95.data.customerId,
    nickname: "Mrr",
  },
} as IDatabaseItem;

export const USER_96 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_96.data.customerId,
    nickname: "Mrr",
  },
} as IDatabaseItem;

export const USER_97 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_97.data.customerId,
    nickname: "CanEnrol",
  },
} as IDatabaseItem;

export const USER_98 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_98.data.customerId,
    nickname: "Inholding",
  },
} as IDatabaseItem;

export const USER_99 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_99.data.customerId,
    nickname: "Nochoice",
  },
} as IDatabaseItem;

export const USER_100 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_100.data.customerId,
    nickname: "Choicemade",
  },
} as IDatabaseItem;

export const USER_101 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_101.data.customerId,
    nickname: "Choicemade",
  },
} as IDatabaseItem;

export const USER_102 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_102.data.customerId,
    nickname: "Choicemade",
  },
} as IDatabaseItem;

export const USER_103 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_103.data.customerId,
    nickname: "Choicemade",
  },
} as IDatabaseItem;

export const USER_104 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_104.data.customerId,
    nickname: "Choicemade",
  },
} as IDatabaseItem;

export const USER_105 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_105.data.customerId,
    nickname: "Choicemade",
  },
} as IDatabaseItem;

export const USER_106 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_106.data.customerId,
    nickname: "Choicemade",
  },
} as IDatabaseItem;

export const USER_107 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_107.data.customerId,
    nickname: "Availablesoon",
  },
} as IDatabaseItem;

export const USER_108 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_108.data.customerId,
    nickname: "Luke",
  },
} as IDatabaseItem;

export const USER_109 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_109.data.customerId,
    nickname: "Penorino",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_110 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_110.data.customerId,
    nickname: "Penorino",
  },
} as IDatabaseItem;

export const USER_111 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_111.data.customerId,
    nickname: "Activo",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_112 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_112.data.customerId,
    nickname: "Activo",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_113 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_113.data.customerId,
    nickname: "Activo",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_114 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_114.data.customerId,
    nickname: "Activo",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_115 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_115.data.customerId,
    nickname: "Penorino",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_116 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
    nickname: "Rewardsio",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_117 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
    nickname: "Rewardsio",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_118 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
    nickname: "Rewardsio",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_119 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
    nickname: "Rewardsio",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_120 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
    nickname: "Rewardsio",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;


export const USER_121 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
    nickname: "Rewardsio",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_122 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_122.data.customerId,
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

export const USER_123 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_123_MPP.data.customerId,
    nickname: "Multz",
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

export const USER_124 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_124_MPP.data.customerId,
    nickname: "Multz",
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

export const USER_125 = {
  type: "mongo",
  modelName: "users",
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

export const USER_126 = {
  type: "mongo",
  modelName: "users",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
    nickname: "Leavo",
    earnRate: 1
  },
} as IDatabaseItem;

export const USER_127 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
    nickname: "Rewazza",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_128 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_128_WELLBEING_ELIGIBILITY.data.customerId,
    nickname: "Elig",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_129 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_129_WELLBEING_ELIGIBILITY.data.customerId,
    nickname: "Elig",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_130 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
    nickname: "Leavs",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_131 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_DATA_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
    nickname: "Rewardsio",
    isAvatarCreated: true,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
} as IDatabaseItem;

export const USER_132 = {
  type: "mongo",
  modelName: "users",
  data: {
    ...USER_2.data,
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

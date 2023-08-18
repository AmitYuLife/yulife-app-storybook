import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "userprofile",
}

const RECORD_DEFAULTS = {
    rewardStoreLocation: "GB",
    gameSettings: {
        cyclingMeasurement: "km",
    },
}

export const USER_PROFILE_1 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_1.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_2 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_2.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_3 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_3.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_4 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_4.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_6 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_6.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_7 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_7.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_8 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_8.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_9 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_9.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_12 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_12.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_13 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_13.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_14 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_14.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_15 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_15.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_16 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_16.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_17 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_17.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_18 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_18.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_19 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_19.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_22 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_22.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_23 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_23.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_24 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_24.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_35 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_35.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_36 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_36.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_37 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_37.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_38 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_38.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_39 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_39.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_40 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_40.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_41 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_41.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_44 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_44.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const COIN_LEDGE_MEDITOPIA_2_ = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_MEDITOPIA_2.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_MEDITOPIA_3 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_MEDITOPIA_3.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_42 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_42.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_47 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_47.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_50 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_50.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_52 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_52.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_54 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_54.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_55 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_55.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_56 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_56.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_57 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_57.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_58 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_58.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_60 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_60.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_61 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_61.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_63 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_63.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_64 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_64.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_65 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_65.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_66 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_66.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_67 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_67.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_68 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_68.data.customerId,
        ...RECORD_DEFAULTS,
        yuniversalLevel: 1,
    },
} as IDatabaseItem;

export const USER_PROFILE_69 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_69.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_70 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_70.data.customerId,
        ...RECORD_DEFAULTS,
        yuniversalLevel: 7,
    },
} as IDatabaseItem;

export const USER_PROFILE_71 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_71.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_72 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_72.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_73 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_73.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_75 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_75.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_76 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_76.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_77 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_77.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_78 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_78.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_79 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_79.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_80 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_80.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_81 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_81.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_83 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_83.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_84 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_84.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_FIIT = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_FIIT.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_86 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_86.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_89 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_89.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_90 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_90.data.customerId,
        ...RECORD_DEFAULTS,
        yuniversalLevel: 7,
    },
} as IDatabaseItem;

export const USER_PROFILE_91 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_91.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_92 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_92.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_FUTURE = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_FUTURE_PRODUCT.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_LEAVER = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_LEAVER.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_109 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_109.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_110 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_110.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_111 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_111.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_112 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_112.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_113 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_113.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_114 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_114.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_115 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_115.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_116 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_116_GHI_REWARDS.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;
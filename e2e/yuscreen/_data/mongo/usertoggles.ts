import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { DEFAULT_TOGGLES } from "./_templates";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_1_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_1.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_45_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_45.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,

      hasCoveaFibActive: true,
      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_49_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_49.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,

      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_51_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_51.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,

      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_53_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_53.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_GHI_PRODUCT_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_GHI.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_93_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_93.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
      showBrainGameSudoku: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_95_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_95.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_96_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_96.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_97_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_97.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showYumojiMakeup: true,
      tempGameEnableYumojiMasks: true,
      tempGameEnableJapaneseHairStyles: true,
      tempGameEnableSammyHair: true,
      tempShowYumojiEyesCategory: true,
      showYumojiHeadband: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_98_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_98.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_99_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_99.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_100_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_100.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_101_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_101.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_102_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_102.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_103_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_103.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_104_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_104.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_105_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_105.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_106_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_106.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_107_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_107.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_109_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_109.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_110_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_110.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_115_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_115.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_125_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_125.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,

      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_138_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_138.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasCoveaFibActive: false,
      hasBupaDentActive: false,
      enableYuScreenV5: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_139_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_139.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,

      hasCoveaFibActive: false,
      hasBupaDentActive: false,

      hasSmartPensionActive: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_MAXIMISE_YU_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_MAXIMISE_YU.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,

      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_140_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_140.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,

      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_141_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_141.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,

      showReferrals: true,
    },
  },
} as IDatabaseItem;

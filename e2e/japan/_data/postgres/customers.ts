import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
} from "@yu-life/yulife-bdd-framework";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_1 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "明",
    lastName: "サルシェド",
    status: "onboarded",
    name_variants: {
      furigana: "あきら",
      latin: "Akira",
    },
  },
} as IDatabaseItem;

export const CUSTOMER_2_SMOKING = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "太郎",
    lastName: "福田",
    status: "onboarded",
    locale: "ja-JP",
    preferredContentLocation: "JP",
  },
} as IDatabaseItem;

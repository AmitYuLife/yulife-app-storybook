import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { USER_2 } from "./users";
import {
  CORE_REWARDS_NIKE,
  CORE_REWARDS_URBAN_GHI_REWARDS,
  CORE_REWARDS_CHARITY_DONATION,
} from "./core_rewards";

const type = "mongo";
const modelName = "rewardsledgers";

export const REWARD_LEDGER_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: USER_2.data.userId,
    deliveryUrl:
      "https://playground.wegift.io/public/gifts/instant/cbe60a2a-1453-4e88-a74e-1dfe11bdd385",
    expiryDate: moment().add(24, "months").format("YYYY-MM-DD"),
    status: "approved",
    code: "NIKE-GB",
    rewardProviderId: "wegift",
    amount: 10,
    yuCoinsSpent: 7750,
    type: "voucher",
    restrictions: {
      locations: ["GB"],
    },
    reward: CORE_REWARDS_NIKE.data._id,
    createdAt: moment().startOf("day").add(12, "hours").toISOString(),
    claimedAt: moment().startOf("day").add(12, "hours").toISOString(),
  },
} as IDatabaseItem;

export const REWARD_LEDGER_DONATION_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: USER_2.data.userId,
    status: "approved",
    code: "save-the-children",
    rewardProviderId: "link",
    amount: 5,
    yuCoinsSpent: 500,
    type: "donation",
    restrictions: {
      locations: ["GB"],
    },
    reward: CORE_REWARDS_CHARITY_DONATION.data._id,
    createdAt: moment().startOf("day").add(10, "hours").toISOString(),
    claimedAt: moment().startOf("day").add(10, "hours").toISOString(),
  },
} as IDatabaseItem;

export const REWARD_LEDGER_EXPIRED = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: USER_2.data.userId,
    deliveryUrl: "https://playground.wegift.io/public/gifts/instant/expired-voucher",
    expiryDate: moment().subtract(2, "months").format("YYYY-MM-DD"),
    status: "approved",
    code: "NIKE-GB",
    rewardProviderId: "wegift",
    amount: 10,
    yuCoinsSpent: 7750,
    type: "voucher",
    restrictions: {
      locations: ["GB"],
    },
    reward: CORE_REWARDS_NIKE.data._id,
    createdAt: moment().subtract(3, "months").toISOString(),
    claimedAt: moment().subtract(3, "months").toISOString(),
  },
} as IDatabaseItem;

const createUsedLedger = (userId: string, daysAgo: number) => ({
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId,
    deliveryUrl: "https://playground.wegift.io/public/gifts/instant/used-voucher",
    expiryDate: moment().add(24, "months").format("YYYY-MM-DD"),
    status: "approved",
    code: "NIKE-GB",
    rewardProviderId: "wegift",
    amount: 10,
    yuCoinsSpent: 7750,
    type: "voucher",
    restrictions: {
      locations: ["GB"],
    },
    reward: CORE_REWARDS_NIKE.data._id,
    createdAt: moment().subtract(daysAgo, "days").toISOString(),
    claimedAt: moment().subtract(daysAgo, "days").toISOString(),
    markedAsUsedAt: moment().subtract(1, "day").toDate(),
  },
} as IDatabaseItem);

export const REWARD_LEDGER_USED_1 = createUsedLedger(USER_2.data.userId, 4);
export const REWARD_LEDGER_USED_2 = createUsedLedger(USER_2.data.userId, 3);
export const REWARD_LEDGER_USED_3 = createUsedLedger(USER_2.data.userId, 2);
export const REWARD_LEDGER_USED_4 = createUsedLedger(USER_2.data.userId, 1);

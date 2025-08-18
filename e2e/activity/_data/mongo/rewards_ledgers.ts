import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { USER_2 } from "./users";
import { CORE_REWARDS_NIKE } from "./core_rewards";

export const REWARD_LEDGER_1 = {
  type: "mongo",
  modelName: "rewardsledgers",
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
    restrictions: {
      locations: ["GB"],
    },
    reward: CORE_REWARDS_NIKE.data._id,
    createdAt: moment().subtract(10, "minutes").toISOString(),
    claimedAt: moment().subtract(10, "minutes").toISOString(),
    updatedAt: moment().subtract(5, "minutes").toISOString(),
  },
} as IDatabaseItem;

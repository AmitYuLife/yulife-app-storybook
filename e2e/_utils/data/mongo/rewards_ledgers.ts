import { CORE_REWARDS_NIKE, CORE_REWARDS_URBAN_GHI_REWARDS, CUSTOMER_130_GHI_LEAVER, CUSTOMER_137_GHI_REWARDS, GOAL_PARTICIPATION_12_GHI_LEAVER } from "@data";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { USER_130, USER_2 } from "./users";

export const REWARD_LEDGER_1 = {
    type:"mongo",
    modelName:"rewardsledgers",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_2.data.userId,
        "deliveryUrl": "https://playground.wegift.io/public/gifts/instant/cbe60a2a-1453-4e88-a74e-1dfe11bdd385",
        "expiryDate": moment().add(24, "months").format("YYYY-MM-DD"),
        "status": "approved",
        "code": "NIKE-GB",
        "rewardProviderId": "wegift",
        "amount": 10,
        "yuCoinsSpent": 7750,
        "restrictions": {
            "locations": ["GB"]
        },
        reward: CORE_REWARDS_NIKE.data._id,
        createdAt: moment().subtract(10, "minutes").toISOString(),
        claimedAt: moment().subtract(10, "minutes").toISOString(),
        updatedAt: moment().subtract(5, "minutes").toISOString(),
    }
} as IDatabaseItem

export const REWARD_LEDGER_2 = {
    type:"mongo",
    modelName:"rewardsledgers",
    data: {
        "_id": generateRandomMongoId(),
        "amount": 1,
        "claimBy": moment().add(7, "days").toISOString(),
        "reward": CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        "userId": CUSTOMER_130_GHI_LEAVER.data.customerId,
        "status": "unlocked",
        unlockedAt: moment().subtract(5, "minutes").toISOString(),
        updatedAt: moment().subtract(10, "minutes").toISOString(),
      }
} as IDatabaseItem

export const REWARD_LEDGER_3 = {
    type:"mongo",
    modelName:"rewardsledgers",
    data: {
        "_id": generateRandomMongoId(),
        "amount": 1,
        "claimBy": moment().add(7, "days").toISOString(),
        "reward": CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        "userId": CUSTOMER_137_GHI_REWARDS.data.customerId,
        "status": "unlocked",
        unlockedAt: moment().subtract(6, "months").toISOString(),
        updatedAt: moment().subtract(6, "months").toISOString(),
      }
} as IDatabaseItem

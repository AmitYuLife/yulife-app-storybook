import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CORE_REWARDS_NIKE, CORE_REWARDS_URBAN_GHI_REWARDS } from "./core_rewards";
import { CUSTOMER_130_GHI_LEAVER, CUSTOMER_137_GHI_REWARDS } from "../postgres/customers";

export const REWARD_LEDGER_2 = {
    type: "mongo",
    modelName: "rewardsledgers",
    data: {
        _id: generateRandomMongoId(),
        amount: 1,
        claimBy: moment().add(7, "days").toISOString(),
        reward: CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        userId: CUSTOMER_130_GHI_LEAVER.data.customerId,
        status: "unlocked",
        unlockedAt: moment().subtract(5, "minutes").toISOString(),
        updatedAt: moment().subtract(10, "minutes").toISOString(),
    },
} as IDatabaseItem;

export const REWARD_LEDGER_3 = {
    type: "mongo",
    modelName: "rewardsledgers",
    data: {
        _id: generateRandomMongoId(),
        amount: 1,
        claimBy: moment().add(7, "days").toISOString(),
        reward: CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        userId: CUSTOMER_137_GHI_REWARDS.data.customerId,
        status: "unlocked",
        unlockedAt: moment().subtract(6, "months").toISOString(),
        updatedAt: moment().subtract(6, "months").toISOString(),
    },
} as IDatabaseItem;

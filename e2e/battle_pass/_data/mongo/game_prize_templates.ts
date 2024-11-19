import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CORE_REWARDS_BUZZBIKE } from "./core_rewards";

const type = "mongo";
const modelName = "gameprizetemplate";

export const GAME_PRIZE_BUZZBIKE = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        title: "Buzzbike voucher",
        imageKey: "reward/background/BUZZ-GB.jpg",
        description: "GAME_PRIZE_BUZZBIKE",
        instantActivation: true,
        itemCategories: ["entertainment"],
        options: {
            type: "CoreReward",
            denomination: 0,
            rewardId: CORE_REWARDS_BUZZBIKE.data._id,
        },
        type: "random_prize_template",
        scope: "global",
        claimType: "unlimited",
        createdAt: moment().subtract(2, "days").toDate(),
        updatedAt: moment().subtract(1, "days").toDate(),
        __v: 0,
    },
} as IDatabaseItem;

export const GAME_PRIZE_EXTRA_CHALLENGE = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        description: "Extra short stroll challenge - enterprise (generated)",
        instantActivation: false,
        options: {
            type: "PowerUp",
            startTimeMarker: "immediate",
            endTimeMarker: "endOfDay",
            endTimeOffset: {
                seconds: 0,
            },
            powerUpType: "extra_challenge",
            levelSlotTemplateIds: ["SHORT_STROLL_001"],
            value: 1,
        },
        imageKey: "game/battle-pass/rewards/challenge-extra/challenge-extra-icon.png",
        title: "Extra short stroll challenge",
        type: "game_prize_template",
    },
} as IDatabaseItem;

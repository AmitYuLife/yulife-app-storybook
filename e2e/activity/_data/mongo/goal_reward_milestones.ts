import { GOALS_3, GOALS_6, GOALS_FTUE } from "./goals";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo";
const modelName = "goal_reward_milestones_for_global";

export const GOAL_REWARD_MILESTONE_6 = {
  type,
  modelName,
  data: {
    goal: GOALS_3.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 0.2,
    rewardType: "coin",
    rewardValue: 50,
    rewardTitle: "50 YuCoin",
    rewardDescription: "2km cycled",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_7 = {
  type,
  modelName,
  data: {
    goal: GOALS_3.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 0.5,
    rewardType: "coin",
    rewardValue: 100,
    rewardTitle: "100 YuCoin",
    rewardDescription: "5km cycled",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_8 = {
  type,
  modelName,
  data: {
    goal: GOALS_3.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 1,
    rewardType: "coin",
    rewardValue: 150,
    rewardTitle: "150 YuCoin",
    rewardDescription: "10km cycled",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_29_GHI_REWARDS = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    parentType: "goals",
    goal: GOALS_6.data._id,
    targetValue: 1,
    rewardType: "coin",
    rewardValue: 0,
    earnRateBased: false,
    rewardTitle: {
      "en-GB": "YuCoin",
      "ja-JP": "ユーコイン",
    },
    rewardDescription: {
      "en-GB": "1 quiz",
      "ja-JP": "1クイズ",
    },
    rewardBackgroundImageKey: "",
    rewardImageKey: "imgix::cms/1709633296566_YuCoin.png",
    animated: false,
    _migrated: true,
    __v: 0,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_FTUE_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    parentType: "goals",
    goal: GOALS_FTUE.data._id,
    targetValue: 0.5,
    rewardType: "coin",
    rewardValue: 10,
    earnRateBased: true,
    rewardTitle: {
      "en-GB": "${amount} YuCoin",
      "ja-JP": "金額ユーコイン",
      _id: {
        $oid: "65d71b2ce4898182bc68d61b",
      },
    },
    rewardDescription: {
      "en-GB": "500 Steps",
      "ja-JP": "5,000歩",
    },
    rewardBackgroundImageKey: "events/milestones/coinback_blue.png",
    rewardImageKey: "events/milestones/yucoin.png",
    animated: true,
    _migrated: true,
    __v: 0,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_FTUE_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    parentType: "goals",
    goal: GOALS_FTUE.data._id,
    targetValue: 1,
    rewardType: "coin",
    rewardValue: 15,
    earnRateBased: true,
    rewardTitle: {
      "en-GB": "${amount} YuCoin",
      "ja-JP": "金額ユーコイン",
    },
    rewardDescription: {
      "en-GB": "1,000 Steps",
      "ja-JP": "10,000歩",
    },
    rewardBackgroundImageKey: "events/milestones/coinback_gold.png",
    rewardImageKey: "events/milestones/yucoin.png",
    animated: true,
    _migrated: true,
    __v: 0,
  },
} as IDatabaseItem;

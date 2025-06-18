import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { GOALS_2, GOALS_4, GOALS_5, GOALS_TOURNAMENT } from "./goals";

const type = "mongo";
const modelName = "goal_reward_milestones";

export const GOAL_REWARD_MILESTONE_3 = {
  type,
  modelName,
  data: {
    goal: GOALS_2.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 0.2,
    rewardType: "coin",
    rewardValue: 50,
    rewardTitle: "${amount} YuCoin",
    rewardDescription: "1 Profile viewed",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;
export const GOAL_REWARD_MILESTONE_3_d = {
  type,
  modelName,
  data: {
    goal: GOALS_2.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 0.4,
    rewardType: "coin",
    rewardValue: 50,
    rewardTitle: "${amount} YuCoin",
    rewardDescription: "2 Profiles viewed",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_3_c = {
  type,
  modelName,
  data: {
    goal: GOALS_2.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 0.6,
    rewardType: "coin",
    rewardValue: 50,
    rewardTitle: "${amount} YuCoin",
    rewardDescription: "3 Profiles viewed",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_3_b = {
  type,
  modelName,
  data: {
    goal: GOALS_2.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 0.8,
    rewardType: "coin",
    rewardValue: 50,
    rewardTitle: "${amount} YuCoin",
    rewardDescription: "4 Profiles viewed",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_3_a = {
  type,
  modelName,
  data: {
    goal: GOALS_2.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 1.0,
    rewardType: "coin",
    rewardValue: 50,
    rewardTitle: "${amount} YuCoin",
    rewardDescription: "5 Profiles viewed",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_9 = {
  type,
  modelName,
  data: {
    goal: GOALS_4.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 0.25,
    rewardType: "coin",
    rewardValue: 100,
    rewardTitle: "100 YuCoin",
    rewardDescription: "1 perfect challenge",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_10 = {
  type,
  modelName,
  data: {
    goal: GOALS_4.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 0.75,
    rewardType: "coin",
    rewardValue: 150,
    rewardTitle: "150 YuCoin",
    rewardDescription: "3 perfect challenges",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_11 = {
  type,
  modelName,
  data: {
    goal: GOALS_4.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 1,
    rewardType: "coin",
    rewardValue: 200,
    rewardTitle: "200 YuCoin",
    rewardDescription: "4 perfect challenges",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_12 = {
  type,
  modelName,
  data: {
    goal: GOALS_5.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 0.25,
    rewardType: "coin",
    rewardValue: 100,
    rewardTitle: "100 YuCoin",
    rewardDescription: "Steps",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_13 = {
  type,
  modelName,
  data: {
    goal: GOALS_5.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 0.5,
    rewardType: "coin",
    rewardValue: 100,
    rewardTitle: "100 YuCoin",
    rewardDescription: "Steps",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_14 = {
  type,
  modelName,
  data: {
    goal: GOALS_5.data._id,
    animated: true,
    rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
    rewardImageKey: "cms/1650355411333_CoinTop.png",
    targetValue: 1,
    rewardType: "coin",
    rewardValue: 500,
    rewardTitle: "500 YuCoin",
    rewardDescription: "All steps",
    parentType: "goals",
    earnRateBased: true,
  },
} as IDatabaseItem;

export const GOAL_REWARD_MILESTONE_TOURNAMENT = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    parentType: "goals",
    goal: GOALS_TOURNAMENT.data._id,
    targetValue: 1.5,
    rewardType: "coin",
    rewardValue: 250,
    earnRateBased: false,
    rewardTitle: {
      "en-GB": "Detox Reward",
    },
    rewardDescription: {
      "en-GB": "Test reward",
    },
    rewardBackgroundImageKey: "",
    rewardImageKey: "events/milestones/coinback_gold.png",
    animated: false,
    explanations: [],
  },
} as IDatabaseItem;

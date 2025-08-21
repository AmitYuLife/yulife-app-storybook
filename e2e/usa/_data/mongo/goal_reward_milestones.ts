import { GOALS_1 } from "./goals";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";

const type = "mongo";
const modelName = "goal_reward_milestones";

export const GOAL_REWARD_MILESTONE_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    goal: GOALS_1.data._id,
    parentType: "goals",
    targetValue: 0.5,
    rewardType: "coin",
    rewardValue: 150,
    earnRateBased: true,
    rewardTitle: {
      "en-GB": "150 YuCoin",
    },
    rewardDescription: {
      "en-GB": "50,000 Steps",
    },
    rewardBackgroundImageKey: "events/milestones/coinback_pale.png",
    rewardOverlayImageKey: "cms/1651149900294_CoinBack_overlay.png",
    rewardImageKey: "events/milestones/yucoin.png",
    animated: false,
    explanations: [],
  },
};

export const GOAL_REWARD_MILESTONE_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    goal: GOALS_1.data._id,
    parentType: "goals",
    targetValue: 0.75,
    rewardType: "coin",
    rewardValue: 200,
    earnRateBased: true,
    rewardTitle: {
      "en-GB": "200 YuCoin",
    },
    rewardDescription: {
      "en-GB": "75,000 Steps",
    },
    rewardBackgroundImageKey: "events/milestones/coinback_blue.png",
    rewardOverlayImageKey: "cms/1651149900294_CoinBack_overlay.png",
    rewardImageKey: "events/milestones/yucoin.png",
    animated: false,
    explanations: [],
  },
};

export const GOAL_REWARD_MILESTONE_3 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    goal: GOALS_1.data._id,
    parentType: "goals",
    targetValue: 1,
    rewardType: "coin",
    rewardValue: 200,
    earnRateBased: true,
    rewardTitle: {
      "en-GB": "200 YuCoin",
    },
    rewardDescription: {
      "en-GB": "100,000 Steps",
    },
    rewardBackgroundImageKey: "events/milestones/coinback_gold.png",
    rewardOverlayImageKey: "cms/1651149900294_CoinBack_overlay.png",
    rewardImageKey: "events/milestones/yucoin.png",
    animated: false,
    explanations: [],
  },
};

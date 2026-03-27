import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { GOALS_1 } from "./goals_for_global";
import { WEEKLY_GOAL_REFLECTIONS } from "./goal_weeklies_for_global";

const type = "mongo";
const modelName = "goal_reward_milestones_for_global";

export const GOAL_REWARD_MILESTONE_8_REWARDS = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    parentType: "goals",
    goal: GOALS_1.data._id,
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
};

export const WEEKLY_MILESTONE_REFLECTIONS = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    goal: WEEKLY_GOAL_REFLECTIONS.data._id,
    parentType: "goal_weeklies_for_global",
    targetValue: 1,
    rewardType: "coin",
    rewardValue: 10,
    earnRateBased: true,
    rewardTitle: {
      "en-GB": "${amount}",
    },
    rewardDescription: {
      "en-GB": "Complete 3 reflections",
    },
    rewardBackgroundImageKey: " ",
    rewardImageKey: " ",
    animated: false,
  },
};

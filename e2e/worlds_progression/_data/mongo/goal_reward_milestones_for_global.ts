import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { WEEKLY_GOAL_1 } from "./goal_weeklies_for_global";

const type = "mongo";
const modelName = "goal_reward_milestones_for_global";

export const WEEKLY_MILESTONE_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    goal: WEEKLY_GOAL_1.data._id,
    parentType: "goal_weeklies_for_global",
    earnRateBased: true,
    animated: false,
    rewardBackgroundImageKey: "cms/1674555849471_Screenshot 2022-10-04 at 14.49.16 (2).png",
    rewardImageKey: "cms/1674555859611_Screenshot 2022-10-19 at 12.57.25.png",
    targetValue: 0.9,
    rewardType: "coin",
    rewardValue: 100,
    rewardTitle: "100",
    rewardDescription: "100 coins",
  },
} as IDatabaseItem;

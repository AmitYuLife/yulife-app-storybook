import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require('moment');
import { GOALS_1 } from "./goals";




const type = "mongo"
const modelName = "goal_reward_milestones"

export const GOAL_REWARD_MILESTONES_1 = {
    type,
    modelName,
    data:{
        goal: GOALS_1.data._id,
        animated: true,
        rewardBackgroundImageKey: "cms/1650637601404_1649948159245_Ellipse 330.png",
        rewardImageKey: "part_swiper_products_assets/chest/epic/forest.svg",
        stageId: "test_stage",
        targetValue: 0.5,
        rewardType: "coin",
        rewardValue: 500,
        rewardTitle: "500 YuCoin",
        rewardDescription: "1 Challenge",
        rewardTooltip: "From now you will be able to participate in future individual and community events. In community events you can work together with your colleagues and friends to achieve goals and win prizes.",
    }
} as IDatabaseItem

export const GOAL_REWARD_MILESTONES_2 = {
    type,
    modelName,
    data:{
        goal: GOALS_1.data._id,
        animated: true,
        rewardBackgroundImageKey: "cms/1650638733500_1649948159245_Ellipse 330.png",
        rewardImageKey: "email/icon_yucoin.png",
        stageId: "test_stage",
        targetValue: 1,
        rewardType: "coin",
        rewardValue: 1000,
        rewardTitle: "1,000 YuCoin",
        rewardDescription: "1 Challenge",
        rewardTooltip: "From now you will be able to participate in future individual and community events. In community events you can work together with your colleagues and friends to achieve goals and win prizes.",
    }
} as IDatabaseItem
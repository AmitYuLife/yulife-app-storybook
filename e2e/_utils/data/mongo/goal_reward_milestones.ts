import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { GOALS_1, GOALS_2, GOALS_3, GOALS_4 } from "./goals";

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
        targetValue: 1,
        rewardType: "coin",
        rewardValue: 1000,
        rewardTitle: "1,000 YuCoin",
        rewardDescription: "1 Challenge",
        rewardTooltip: "From now you will be able to participate in future individual and community events. In community events you can work together with your colleagues and friends to achieve goals and win prizes.",
    }
} as IDatabaseItem

export const GOAL_REWARD_MILESTONE_3 = {
    type,
    modelName,
    data:{
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
    }
};

export const GOAL_REWARD_MILESTONE_4 = {
    type,
    modelName,
    data:{
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
    }
};

export const GOAL_REWARD_MILESTONE_5 = {
    type,
    modelName,
    data:{
        goal: GOALS_2.data._id,
        animated: true,
        rewardBackgroundImageKey: "cms/1651149900294_CoinBack.png",
        rewardImageKey: "cms/1650355411333_CoinTop.png",
        targetValue: 1,
        rewardType: "coin",
        rewardValue: 50,
        rewardTitle: "${amount} YuCoin",
        rewardDescription: "5 Profiles viewed",
        parentType: "goals",
        earnRateBased: true, 
    }
};

export const GOAL_REWARD_MILESTONE_6 = {
    type,
    modelName,
    data:{
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
    }
};

export const GOAL_REWARD_MILESTONE_7 = {
    type,
    modelName,
    data:{
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
    }
};

export const GOAL_REWARD_MILESTONE_8 = {
    type,
    modelName,
    data:{
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
    }
};

export const GOAL_REWARD_MILESTONE_9 = {
    type,
    modelName,
    data:{
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
    }
};

export const GOAL_REWARD_MILESTONE_10 = {
    type,
    modelName,
    data:{
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
    }
};

export const GOAL_REWARD_MILESTONE_11 = {
    type,
    modelName,
    data:{
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
    }
};
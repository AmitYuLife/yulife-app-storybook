import { GOALS_3, GOALS_6 } from "./goals";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_3 } from "./goal_products";

const type = "mongo";
const modelName = "goal_reward_milestones";

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
};

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
};

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
};

export const GOAL_REWARD_MILESTONE_15_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691152361046_Illustration-discounts@2x.png",
        targetValue: 0.025,
        rewardType: "core_reward",
        rewardId: "64c8f5a1d4e9db6e99f5248f",
        rewardValue: 1,
        rewardQuantity: 100000000,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        rewardDescription: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_16_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153069424_Illustration-discounts@3x.png",
        targetValue: 0.025,
        rewardType: "core_reward",
        rewardId: "64c38f7ecb39c9d50a3c14ef",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        rewardDescription: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_17_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153142045_Illustration-urban@3x.png",
        targetValue: 0.05,
        rewardType: "core_reward",
        rewardId: "649bd68bf4e68234f8dd9f3b",
        rewardValue: 1,
        rewardQuantity: 3,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Urban Massage Vouchers",
            "ja-JP": "アーバン",
        },
        rewardDescription: {
            "en-GB": "Massage Vouchers",
            "ja-JP": "アーバン",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_18_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153338274_Illustration-thriva@3x.png",
        targetValue: 0.25,
        rewardType: "core_reward",
        rewardId: "64b7b195a85859af773442e4",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Free Thriva Health Screening Kit",
            "ja-JP": "トリバ",
        },
        rewardDescription: {
            "en-GB": "Free Health Screening Kit",
            "ja-JP": "トリバ",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_19_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153464467_Illustration-livingDNA@3x.png",
        targetValue: 0.5,
        rewardType: "core_reward",
        rewardId: "64ad4e2d87cea9cd5185cd8f",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 3,
        rewardTitle: {
            "en-GB": "Free Living DNA Test Kit",
            "ja-JP": "生きたDNA",
        },
        rewardDescription: {
            "en-GB": "Free DNA Kit",
            "ja-JP": "生きたDNA",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_20_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153946782_Illustration-healthassessment@3x.png",
        targetValue: 0.75,
        rewardType: "core_reward",
        rewardId: "64a403a408975d03a0aa63ff",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Free In-person Health Assessment",
            "ja-JP": "ブパ・ヘルス",
        },
        rewardDescription: {
            "en-GB": "Free Health Assessment",
            "ja-JP": "ブパ・ヘルス",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_21_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        animated: false,
        rewardImageKey: "cms/1691153993964_Illustration-garmin@3x.png",
        targetValue: 1,
        rewardType: "core_reward",
        rewardId: "64bf87537b74ab1ef759eece",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 2,
        rewardTitle: {
            "en-GB": "Free Garmin Smartwatch",
            "ja-JP": "ガーミン",
        },
        rewardDescription: {
            "en-GB": "Free Smartwatch",
            "ja-JP": "ガーミン",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_22_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691152361046_Illustration-discounts@2x.png",
        targetValue: 0.025,
        rewardType: "core_reward",
        rewardId: "64c8f5a1d4e9db6e99f5248f",
        rewardValue: 1,
        rewardQuantity: 100000000,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        rewardDescription: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_23_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153069424_Illustration-discounts@3x.png",
        targetValue: 0.025,
        rewardType: "core_reward",
        rewardId: "64c38f7ecb39c9d50a3c14ef",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        rewardDescription: {
            "en-GB": "Exclusive Discounts",
            "ja-JP": "特別割引",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_24_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153142045_Illustration-urban@3x.png",
        targetValue: 0.05,
        rewardType: "core_reward",
        rewardId: "649bd68bf4e68234f8dd9f3b",
        rewardValue: 1,
        rewardQuantity: 3,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Urban Massage Vouchers",
            "ja-JP": "アーバン",
        },
        rewardDescription: {
            "en-GB": "Massage Vouchers",
            "ja-JP": "アーバン",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_25_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153338274_Illustration-thriva@3x.png",
        targetValue: 0.25,
        rewardType: "core_reward",
        rewardId: "64b7b195a85859af773442e4",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 1,
        rewardTitle: {
            "en-GB": "Free Thriva Health Screening Kit",
            "ja-JP": "トリバ",
        },
        rewardDescription: {
            "en-GB": "Free Health Screening Kit",
            "ja-JP": "トリバ",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_26_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153464467_Illustration-livingDNA@3x.png",
        targetValue: 0.5,
        rewardType: "core_reward",
        rewardId: "64ad4e2d87cea9cd5185cd8f",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 3,
        rewardTitle: {
            "en-GB": "Free Living DNA Test Kit",
            "ja-JP": "生きたDNA",
        },
        rewardDescription: {
            "en-GB": "Free DNA Kit",
            "ja-JP": "生きたDNA",
        },
        parentType: "goal_products",
        earnRateBased: false,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_27_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153946782_Illustration-healthassessment@3x.png",
        targetValue: 0.75,
        rewardType: "core_reward",
        rewardId: "64a403a408975d03a0aa63ff",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 2,
        rewardTitle: {
            "en-GB": "Free In-person Health Assessment",
            "ja-JP": "ブパ・ヘルス",
        },
        rewardDescription: {
            "en-GB": "Free Health Assessment",
            "ja-JP": "ブパ・ヘルス",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

export const GOAL_REWARD_MILESTONE_28_GHI_REWARDS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        animated: false,
        rewardImageKey: "cms/1691153993964_Illustration-garmin@3x.png",
        targetValue: 1,
        rewardType: "core_reward",
        rewardId: "64bf87537b74ab1ef759eece",
        rewardValue: 1,
        rewardQuantity: 1,
        eligibilityFrequency: 2,
        rewardTitle: {
            "en-GB": "Free Garmin Smartwatch",
            "ja-JP": "ガーミン",
        },
        rewardDescription: {
            "en-GB": "Free Smartwatch",
            "ja-JP": "ガーミン",
        },
        parentType: "goal_products",
        earnRateBased: true,
        status: "active",
    },
};

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
};

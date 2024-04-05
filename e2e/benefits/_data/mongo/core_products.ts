import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const CORE_PRODUCT_FIB = {
    type: "mongo",
    modelName: "coreproducts",
    updateKey: "code",
    data: {
        productId: "family_income_benefit",
        code: "YULFIB",
        name: "Family Income Benefit",
        productType: "personal",
        itemSlot: "chest",
        options: [
            {
                styles: [
                    {
                        world: "desert",
                        name: "Desert Trailblazer",
                        icon: "api/detox/product_option_styles/desert_icon",
                        background: "api/detox/product_option_styles/desert_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/desert_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 3,
                    },
                    {
                        world: "forest",
                        name: "Forest Pathfinder",
                        icon: "api/detox/product_option_styles/forest_icon",
                        background: "api/detox/product_option_styles/forest_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/forest_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 1,
                    },
                    {
                        world: "mountain",
                        name: "Mountain Adventurer",
                        icon: "api/detox/product_option_styles/mountain_icon",
                        background: "api/detox/product_option_styles/mountain_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/mountain_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 4,
                    },
                    {
                        world: "ocean",
                        name: "Ocean Explorer",
                        icon: "api/detox/product_option_styles/ocean_icon",
                        background: "api/detox/product_option_styles/ocean_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/ocean_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 2,
                    },
                ],
                powers: [
                    {
                        id: "double_chest",
                        title: "Double Chest",
                        description: "Increase your chances of getting a double chest on a quest.",
                        icon: "",
                    },
                ],
                type: "common",
                earnRate: 5,
                heading: "Designed to cover the basics",
                percentageCovered: 0.25,
            },
            {
                styles: [
                    {
                        world: "desert",
                        name: "Desert Trailblazer",
                        icon: "api/detox/product_option_styles/desert_icon",
                        background: "api/detox/product_option_styles/desert_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/desert_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 3,
                    },
                    {
                        world: "forest",
                        name: "Forest Pathfinder",
                        icon: "api/detox/product_option_styles/forest_icon",
                        background: "api/detox/product_option_styles/forest_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/forest_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 1,
                    },
                    {
                        world: "mountain",
                        name: "Mountain Adventurer",
                        icon: "api/detox/product_option_styles/mountain_icon",
                        background: "api/detox/product_option_styles/mountain_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/mountain_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 4,
                    },
                    {
                        world: "ocean",
                        name: "Ocean Explorer",
                        icon: "api/detox/product_option_styles/ocean_icon",
                        background: "api/detox/product_option_styles/ocean_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/ocean_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 2,
                    },
                ],
                powers: [
                    {
                        id: "double_chest",
                        title: "Double Chest",
                        description: "Increase your chances of getting a double chest on a quest.",
                        icon: "",
                    },
                    {
                        id: "streak_reward",
                        title: "Increased Streak Reward",
                        description: "Earn a larger YuCoin bounty for hitting streaks.",
                        icon: "",
                    },
                ],
                type: "rare",
                earnRate: 10,
                heading: "Cover the home and basics",
                percentageCovered: 0.5,
            },
            {
                styles: [
                    {
                        world: "desert",
                        name: "Desert Trailblazer",
                        icon: "api/detox/product_option_styles/desert_icon",
                        background: "api/detox/product_option_styles/desert_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/desert_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 3,
                    },
                    {
                        world: "forest",
                        name: "Forest Pathfinder",
                        icon: "api/detox/product_option_styles/forest_icon",
                        background: "api/detox/product_option_styles/forest_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/forest_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 1,
                    },
                    {
                        world: "mountain",
                        name: "Mountain Adventurer",
                        icon: "api/detox/product_option_styles/mountain_icon",
                        background: "api/detox/product_option_styles/mountain_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/mountain_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 4,
                    },
                    {
                        world: "ocean",
                        name: "Ocean Explorer",
                        icon: "api/detox/product_option_styles/ocean_icon",
                        background: "api/detox/product_option_styles/ocean_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/ocean_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 2,
                    },
                ],
                powers: [
                    {
                        id: "double_chest",
                        title: "Double Chest",
                        description: "Increase your chances of getting a double chest on a quest.",
                        icon: "",
                    },
                    {
                        id: "streak_reward",
                        title: "Increased Streak Reward",
                        description: "Earn a larger YuCoin bounty for hitting streaks.",
                        icon: "",
                    },
                    {
                        id: "daily_step_limit",
                        title: "Increased Daily Step Limit ",
                        description: "Increases the number of daily steps for which you earn YuCoin.",
                        icon: "",
                    },
                ],
                type: "epic",
                earnRate: 20,
                heading: "Maximum protection for your loved ones",
                percentageCovered: 0.75,
            },
            {
                styles: [
                    {
                        world: "desert",
                        name: "Desert Trailblazer",
                        icon: "api/detox/product_option_styles/desert_icon",
                        background: "api/detox/product_option_styles/desert_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/desert_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 3,
                    },
                    {
                        world: "forest",
                        name: "Forest Pathfinder",
                        icon: "api/detox/product_option_styles/forest_icon",
                        background: "api/detox/product_option_styles/forest_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/forest_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 1,
                    },
                    {
                        world: "mountain",
                        name: "Mountain Adventurer",
                        icon: "api/detox/product_option_styles/mountain_icon",
                        background: "api/detox/product_option_styles/mountain_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/mountain_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 4,
                    },
                    {
                        world: "ocean",
                        name: "Ocean Explorer",
                        icon: "api/detox/product_option_styles/ocean_icon",
                        background: "api/detox/product_option_styles/ocean_background",
                        armor: {
                            cloudinaryId: "api/detox/product_option_styles/ocean_armor",
                            coreAvatarPartId: null,
                        },
                        displayOrder: 2,
                    },
                ],
                powers: [],
                type: "custom",
                earnRate: 10,
                heading: "Maximum protection for your loved ones",
                percentageCovered: 0.25,
            },
        ],
    },
} as IDatabaseItem;

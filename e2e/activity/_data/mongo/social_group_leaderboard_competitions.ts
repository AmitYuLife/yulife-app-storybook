import { IDatabaseItem, generateRandomMongoId, generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";
import { SOCIAL_GROUP_LEADERBOARD_C1_STEPS, SOCIAL_GROUP_LEADERBOARD_5_STEPS } from "./social_group_leaderboards";
import moment from "moment";

export const SOCIAL_GROUP_LEADERBOARD_COMPETITION_1 = {
    type: "mongo",
    modelName: "social_group_leaderboard_competitions",
    data: {
        _id: generateRandomMongoId(),
        isEnabled: true,
        name: {
            "en-GB": "Test Competition 1",
            _id: generateRandomMongoId(),
        },
        description: {
            "en-GB": "Super fun competition",
            _id: generateRandomMongoId(),
        },
        imageKey: "quest_map/1.1/challenge/details/dolphin.png",
        scale: "absolute",
        leaderboardConfigId: "STEPS_30_DAYS",
        socialGroupLeaderboardIds: [
            SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
            SOCIAL_GROUP_LEADERBOARD_5_STEPS.data._id,
        ],
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_COMPETITION_2 = {
    type: "mongo",
    modelName: "social_group_leaderboard_competitions",
    data: {
        _id: generateRandomMongoId(),
        isEnabled: true,
        name: {
            "en-GB": "Test Competition 2",
            _id: generateRandomMongoId(),
        },
        description: {
            "en-GB": "Very boring competition",
            _id: generateRandomMongoId(),
        },
        imageKey: "quest_map/1.1/challenge/details/dolphin.png",
        scale: "average",
        leaderboardConfigId: "STEPS_30_DAYS",
        socialGroupLeaderboardIds: [
            SOCIAL_GROUP_LEADERBOARD_5_STEPS.data._id,
            SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
        ],
    }
} as IDatabaseItem

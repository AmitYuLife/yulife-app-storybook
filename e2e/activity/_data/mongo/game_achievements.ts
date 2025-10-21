import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "game_achievements",
};

export const ENDURING_WANDERER_ACHIEVEMENT = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    name: {
      "en-GB": "Enduring Wanderer",
      "ja-JP": "永遠の旅人",
    },
    description: {
      "en-GB": "You have walked 100 steps in a month!",
      "ja-JP": "月間500000歩を達成済です",
    },
    lockedDescription: {
      "en-GB": "Walk 100 steps in a month!",
      "ja-JP": "月間500000歩達成で付与",
    },
    iconKey: "achievements/unlocked/enduring-wanderer-15-07-25.png",
    lockedIconKey: "achievements/locked/enduring-wanderer-15-07-25.png",
    enabled: true,
    achievementType: "explorers",
    target: 100,
    targetType: "steps",
    level: 1,
    points: 0,
    percentageOfUsersWithAchievement: 0,
    backgroundColor: "#5300BD",
    backgroundImageKey: "achievements/backgrounds/yudoku-workout-background-05-08-25.png",
    textColor: "white",
    topBarType: "white",
  },
} as IDatabaseItem;

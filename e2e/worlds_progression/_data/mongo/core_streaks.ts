import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const CORE_STREAK_1 = {
  type: "mongo",
  modelName: "core_streaks",
  updateKey: "id",
  data: {
    id: "YU_STREAK_CHEST_0002",
    active: true,
    type: "yucoin",
    value: 250,
    maxStreak: 5,
    daysOff: 0,
  },
} as IDatabaseItem;

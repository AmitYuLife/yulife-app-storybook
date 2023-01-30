import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const WEEKLY_GOAL_1 = {
    type: "mongo",
    modelName: "goal_weeklies",
    data: {
      _id: generateRandomMongoId(),
      status: "active",
      tags: [],
      synchronousProgress: true,
      title: "Test weekly goal",
      weekStartDate: "2023-01-23",
    }
  } as IDatabaseItem
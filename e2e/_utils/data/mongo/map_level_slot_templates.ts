import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const SHORT_STROLL_1 = {
  type: "mongo",
  modelName: "map_level_slot_templates",
  updateKey: "id",
  data: {
    id: "SHORT_STROLL_001",
    passive: false,
    subtype: "short stroll",
    timeLimit: 30,
    type: "move",
    unit: "steps",
    canFinishAtLastGoal: false,
    fitKitTypes: ["StepCount"],
  },
} as IDatabaseItem;

export const LONG_WALK_1 = {
  type: "mongo",
  modelName: "map_level_slot_templates",
  updateKey: "id",
  data: {
    id: "LONG_WALK_001",
    passive: false,
    subtype: "long walk",
    timeLimit: 30,
    type: "move",
    unit: "steps",
    canFinishAtLastGoal: false,
    fitKitTypes: ["StepCount"],
  },
} as IDatabaseItem;

export const MEDITATION_1 = {
  type: "mongo",
  modelName: "map_level_slot_templates",
  updateKey: "id",
  data: {
    id: "MEDITATION_001",
    passive: false,
    subtype: "meditation",
    timeLimit: 60,
    type: "mindfulness",
    unit: "minutes",
    canFinishAtLastGoal: true,
    fitKitTypes: ["MindfulSession"],
  },
} as IDatabaseItem;

export const BRISK_WALK_1 = {
  type: "mongo",
  modelName: "map_level_slot_templates",
  updateKey: "id",
  data: {
    id: "BRISK_WALK_001",
    passive: false,
    subtype: "brisk walk",
    timeLimit: 10,
    type: "move",
    unit: "steps",
    canFinishAtLastGoal: false,
    fitKitTypes: ["StepCount"],
  },
} as IDatabaseItem;

export const CYCLING_1 = {
  type: "mongo",
  modelName: "map_level_slot_templates",
  updateKey: "id",
  data: {
    id: "CYCLING_001",
    timeLimit: 3600,
    passive: false,
    type: "move",
    subtype: "cycling",
    unit: "meters",
    canFinishAtLastGoal: false,
    fitKitTypes: ["Cycling"],
  },
} as IDatabaseItem;

export const FIIT_1 = {
  type: "mongo",
  modelName: "map_level_slot_templates",
  updateKey: "id",
  data: {
    id: "FIIT_001",
    timeLimit: 3600,
    passive: false,
    type: "move",
    subtype: "fiit",
    unit: "minutes",
    fitKitTypes: ["Flexibility", "HIIT", "Strength", "Yoga", "Pilates"],
    canFinishAtLastGoal: true,
  },
} as IDatabaseItem;

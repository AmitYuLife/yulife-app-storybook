import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as battlePassSeason from "./battle_pass_seasons";

const type = "mongo" as const;
const modelName = "battle_pass_season_milestones" as const;

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 1,
    archived: false,
    info: {
      $oid: "6720c8bee7bf79f585d057d2",
    },
  },
};

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 5,
    archived: false,
    info: {
      $oid: "6720c8f6e7bf79f585d057e6",
    },
  },
};

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_03: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 25,
    archived: false,
    info: {
      $oid: "672df430cda88d0669c7dc9d",
    },
  },
};

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_04: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 75,
    archived: false,
    info: {
      $oid: "6720c9977301f0d9f3dfe036",
    },
  },
};

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_05: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 125,
    archived: false,
    info: {
      $oid: "672df5ffcda88d0669c7dd69",
    },
  },
};

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_06: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 175,
    archived: false,
    info: {
      $oid: "672df68bcda88d0669c7dd97",
    },
  },
};

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_07: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 225,
    archived: false,
    info: {
      $oid: "672df71fcda88d0669c7ddc0",
    },
  },
};

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_08: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 275,
    archived: false,
    info: {
      $oid: "672df794cda88d0669c7ddf3",
    },
  },
};

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_09: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 325,
    archived: false,
    info: {
      $oid: "672df806ba23c7ae007cd3a6",
    },
  },
};

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_10: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 375,
    archived: false,
    info: {
      $oid: "672df87bcda88d0669c7de31",
    },
  },
};

export const BATTLE_PASS_PREVENTION_SEASON_MILESTONE_11: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassSeasonId: battlePassSeason.BATTLE_PASS_PREVENTION_SEASON_01.data._id.toString(),
    targetValue: 500,
    archived: false,
    info: {
      $oid: "672df9a1ba23c7ae007cd486",
    },
  },
};

import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require("moment");

export const AUTH_TEMPLATE = {
  type: "mongo",
  modelName: "authpassword",
  data: {
    userId: generateRandomMongoId(),
    attempts: 1,
    lastAttempt: "2019-03-12T14:10:29.275+00:00",
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
  },
} as IDatabaseItem;

export const allTogglesTrue = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: generateRandomMongoId(),
    features: {
      showNotifications: true,
      showStreaks: true,
      showCounter: true,
      showBuildNumber: true,
      showSettings: true,
      disableUserEntries: true,
      fitbit: true,
      showConnections: true,
      showLastSynced: true,
      newPassiveValidationRule: true,
      usePassiveMeditation: true,
      showDuels: true,
      showCommunityGoals: true,
      rewardRedemptionDisabled: false,
      showYucoinPowerButton: true,
      showBrainGameSudoku: true,
      useNewLeaderboardServices: true,
      enableChallengeBonuses: true,
      tempGameGoalWeekliesRefactor: true,
      tempGameUseSettingsConfigForQuestMapV3: true,
    },
  },
} as IDatabaseItem;

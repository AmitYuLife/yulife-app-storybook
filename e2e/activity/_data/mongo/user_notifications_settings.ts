import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as user from "./users";

export const USER_NOTIFICATIONS_17 = {
  type: "mongo",
  modelName: "usernotificationssettings",
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_17.data.userId,
    birthdaysInbox: { id: "99999910", isActive: false, isAvailable: true },
    birthdaysPush: { id: "99999909", isActive: false, isAvailable: true },
  },
} as IDatabaseItem;

export const USER_NOTIFICATIONS_18 = {
  type: "mongo",
  modelName: "usernotificationssettings",
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_18.data.userId,
    birthdaysInbox: { id: "99999910", isActive: true, isAvailable: true },
    birthdaysPush: { id: "99999909", isActive: true, isAvailable: true },
  },
} as IDatabaseItem;

export const USER_NOTIFICATIONS_19 = {
  type: "mongo",
  modelName: "usernotificationssettings",
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_19.data.userId,
    birthdaysInbox: { id: "99999910", isActive: false, isAvailable: true },
    birthdaysPush: { id: "99999909", isActive: false, isAvailable: true },
  },
} as IDatabaseItem;

export const USER_NOTIFICATIONS_47 = {
  type: "mongo",
  modelName: "usernotificationssettings",
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_47.data.userId,
    birthdaysInbox: { id: "99999910", isActive: true, isAvailable: true },
    birthdaysPush: { id: "99999909", isActive: true, isAvailable: true },
  },
} as IDatabaseItem;

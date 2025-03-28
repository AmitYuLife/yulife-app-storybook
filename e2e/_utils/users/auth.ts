import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo";
const modelName = "authpassword";

export const GENERIC_AUTH_PASSWORD = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    attempts: 1,
    lastAttempt: "2019-03-12T14:10:29.275+00:00",
    lastIp: "35.176.60.174",
    password: "LetmeinNow1!",
    scope: "user",
    strategy: "0",
    used: false,
  },
} as IDatabaseItem;

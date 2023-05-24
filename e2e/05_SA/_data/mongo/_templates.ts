import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
;
import moment = require("moment");

export const AUTH_TEMPLATE = {
    type: "mongo",
    modelName: "auth",
    data: {
        userId: generateRandomMongoId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
    }
} as IDatabaseItem

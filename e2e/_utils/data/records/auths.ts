import { DatabaseCollection, IDatabaseRecord } from "../types";
import { generateRandomId } from "../utils";
import { USER_1 } from "./users";

export const AUTH_1 = {
    collection: DatabaseCollection.auths,
    data: {
        _id: generateRandomId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "$2a$10$7unBRY3W71RPPXPwuF0.CucrV7IR1tzTSoqCaC6UVsWJWVAljAgcm",
        scope: "user",
        strategy: "0",
        used: false,
        userId: USER_1.data._id
    }
} as IDatabaseRecord;

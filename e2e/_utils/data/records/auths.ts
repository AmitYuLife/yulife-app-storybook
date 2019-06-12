import { DatabaseCollection, IDatabaseRecord } from "../types";
import { generateRandomId } from "../utils";
import { USER_1, USER_2, USER_3, USER_4, USER_5 } from "./users";

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

export const AUTH_2 = {
    collection: DatabaseCollection.auths,
    data: {
        _id: generateRandomId(),
        attempts: 1,
        lastAttempt: "2019-05-29T14:29:28.910Z",
        lastIp: "35.176.60.174",
        password: "$2a$10$zA.xzkYv2ASW/NVQ/CudH.X0/aqVjrXBzqw/Wh4Z6lS4gJW1Lv42i",
        scope: "user",
        strategy: "0",
        used: false,
        userId: USER_2.data._id
    }
} as IDatabaseRecord;

export const AUTH_3 = {
    collection: DatabaseCollection.auths,
    data: {
        _id: generateRandomId(),
        attempts: 1,
        lastAttempt: "2019-05-29T14:29:28.910Z",
        lastIp: "35.176.60.174",
        password: "$2a$10$/g2bQdmb28j6aWvAJ19WS.KcNn1ffW4fRU9v5CW8Uu/sM0OzByIDu",
        scope: "user",
        strategy: "0",
        used: false,
        userId: USER_3.data._id
    }
} as IDatabaseRecord;

export const AUTH_4 = {
    collection: DatabaseCollection.auths,
    data: {
        _id: generateRandomId(),
        attempts: 1,
        lastAttempt: "2019-05-29T14:29:28.910Z",
        lastIp: "35.176.60.174",
        password: "$2a$10$/g2bQdmb28j6aWvAJ19WS.KcNn1ffW4fRU9v5CW8Uu/sM0OzByIDu",
        scope: "user",
        strategy: "0",
        used: false,
        userId: USER_4.data._id
    }
} as IDatabaseRecord;

export const AUTH_5 = {
    collection: DatabaseCollection.auths,
    data: {
        _id: generateRandomId(),
        attempts: 1,
        lastAttempt: "2019-05-29T14:29:28.910Z",
        lastIp: "35.176.60.174",
        password: "$2a$10$/g2bQdmb28j6aWvAJ19WS.KcNn1ffW4fRU9v5CW8Uu/sM0OzByIDu",
        scope: "user",
        strategy: "0",
        used: false,
        userId: USER_5.data._id
    }
} as IDatabaseRecord;

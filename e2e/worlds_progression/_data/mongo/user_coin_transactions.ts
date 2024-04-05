import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as Challenges from "./challenge";
import * as Customers from "../postgres/customers";
import { v4 as uuid } from "uuid";

const type = "mongo";
const modelName = "cointransaction";
const transactions = [];

// customer 7
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_7.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_7_D.data._id,
    timestamp: Challenges.CHALLENGE_USER_7_D.data.endDateTime,
    multiplierId: null,
    totalCoins: 440,
    level: 5
},
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_7.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_7_C.data._id,
        timestamp: Challenges.CHALLENGE_USER_7_C.data.endDateTime,
        multiplierId: null,
        totalCoins: 380,
        level: 4
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_7.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_7_B.data._id,
        timestamp: Challenges.CHALLENGE_USER_7_B.data.endDateTime,
        multiplierId: null,
        totalCoins: 320,
        level: 3
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_7.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_7_A.data._id,
        timestamp: Challenges.CHALLENGE_USER_7_A.data.endDateTime,
        multiplierId: null,
        totalCoins: 260,
        level: 2
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_7.data.customerId,
        coins: 200,
        source: "onboardingChallenge",
        sourceId: generateRandomMongoId(),
        totalCoins: 200,
        level: 1
    });

// export all in 1 go
module.exports = transactions.reduce((acc, transaction) => {
    acc[transaction._id] = {
        type,
        modelName,
        data: {
            _key: uuid(),
            ...transaction,
        },
    };
    return acc;
}, {});
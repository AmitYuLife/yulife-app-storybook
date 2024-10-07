import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as challenges from "./challenge";
import * as customers from "../postgres/customers";
import { v4 as uuid } from "uuid";
import moment from "moment";

// exported at bottom of file
const type = "mongo";
const modelName = "cointransaction";
const transactions = [];

// customer 1
transactions.push({
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_1.data.customerId,
    coins: 10,
    source: "challenge",
    sourceId: challenges.CHALLENGE_1.data._id,
    timestamp: challenges.CHALLENGE_1.data.endDateTime,
    totalCoins: 210,
    level: 1,
});

// customer 4
transactions.push({
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_4.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: challenges.CHALLENGE_USER_4_B.data._id,
    timestamp: challenges.CHALLENGE_USER_4_B.data.endDateTime,
    multiplierId: null,
    totalCoins: 320,
    level: 3
},
{
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_4.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: challenges.CHALLENGE_USER_4_A.data._id,
    timestamp: challenges.CHALLENGE_USER_4_A.data.endDateTime,
    multiplierId: null,
    totalCoins: 260,
    level: 2
},
{
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_4.data.customerId,
    coins: 200,
    source: "onboardingChallenge",
    sourceId: generateRandomMongoId(),
    totalCoins: 200,
    level: 1
});

// customer 5
transactions.push({
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_5.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: challenges.CHALLENGE_USER_5_A.data._id,
    timestamp: challenges.CHALLENGE_USER_5_A.data.endDateTime,
    multiplierId: null,
    totalCoins: 260,
    level: 1,
    currentStreak:1
},
{
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_5.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: challenges.CHALLENGE_USER_5_B.data._id,
    timestamp: challenges.CHALLENGE_USER_5_B.data.endDateTime,
    multiplierId: null,
    totalCoins: 280,
    level: 2,
    currentStreak: 2
},
{
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_5.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: challenges.CHALLENGE_USER_5_C.data._id,
    timestamp: challenges.CHALLENGE_USER_5_C.data.endDateTime,
    multiplierId: null,
    totalCoins: 380,
    level: 3,
    currentStreak: 3
},
{
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_5.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: challenges.CHALLENGE_USER_5_D.data._id,
    timestamp: challenges.CHALLENGE_USER_5_D.data.endDateTime,
    multiplierId: null,
    totalCoins: 420,
    level: 4,
    currentStreak: 4,
},
{
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_5.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: challenges.CHALLENGE_USER_5_E.data._id,
    timestamp: challenges.CHALLENGE_USER_5_E.data.endDateTime,
    multiplierId: null,
    totalCoins: 480,
    level: 5,
    currentStreak: 5
},
{
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_5.data.customerId,
    coins: 400,
    source: "streak",
    sourceId: `award_${challenges.CHALLENGE_USER_5_E.data._id}`,
    timestamp: challenges.CHALLENGE_USER_5_E.data.endDateTime,
    _key: generateRandomMongoId(),

},
{
 _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_5.data.customerId,
    coins: 100,
    source: "avatar_creation_award",
    sourceId: challenges.CHALLENGE_USER_5_E.data.customerId,
    timestamp: moment().subtract(24, "hours").toDate(),
    _key: generateRandomMongoId(),
}),

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

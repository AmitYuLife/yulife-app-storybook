import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as Challenges from "./challenge";
import * as Customers from "../postgres/customers";
import { v4 as uuid } from "uuid";
import moment from "moment";

// exported at bottom of file
const type = "mongo";
const modelName = "cointransaction";
const transactions = [];

// customer 2
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_2.data.customerId,
    coins: 10,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_2.data._id,
    timestamp: Challenges.CHALLENGE_2.data.endDateTime,
    totalCoins: 210,
    level: 1,
});

// customer 6
transactions.push(
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_6.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_6_A.data._id,
        timestamp: Challenges.CHALLENGE_USER_6_A.data.endDateTime,
        multiplierId: null,
        totalCoins: 260,
        level: 2,
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_6.data.customerId,
        coins: 200,
        source: "onboardingChallenge",
        sourceId: generateRandomMongoId(),
        totalCoins: 200,
        level: 1,
    }
);

// customer 7
transactions.push(
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_7.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_7_D.data._id,
        timestamp: Challenges.CHALLENGE_USER_7_D.data.endDateTime,
        multiplierId: null,
        totalCoins: 440,
        level: 5,
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
        level: 4,
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
        level: 3,
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
        level: 2,
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_7.data.customerId,
        coins: 200,
        source: "onboardingChallenge",
        sourceId: generateRandomMongoId(),
        totalCoins: 200,
        level: 1,
    }
);

// customer 8
transactions.push(
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_8.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_8_B.data._id,
        timestamp: Challenges.CHALLENGE_USER_8_B.data.endDateTime,
        multiplierId: null,
        totalCoins: 320,
        level: 3,
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_8.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_8_A.data._id,
        timestamp: Challenges.CHALLENGE_USER_8_A.data.endDateTime,
        multiplierId: null,
        totalCoins: 260,
        level: 2,
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_8.data.customerId,
        coins: 200,
        source: "onboardingChallenge",
        sourceId: generateRandomMongoId(),
        totalCoins: 200,
        level: 1,
    }
);

// customer 15
transactions.push(
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_15.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_15_C.data._id,
        timestamp: Challenges.CHALLENGE_USER_15_C.data.endDateTime,
        multiplierId: null,
        totalCoins: 320,
        level: 4,
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_15.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_15_B.data._id,
        timestamp: Challenges.CHALLENGE_USER_15_B.data.endDateTime,
        multiplierId: null,
        totalCoins: 320,
        level: 3,
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_15.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_15_A.data._id,
        timestamp: Challenges.CHALLENGE_USER_15_A.data.endDateTime,
        multiplierId: null,
        totalCoins: 260,
        level: 2,
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_15.data.customerId,
        coins: 200,
        source: "onboardingChallenge",
        sourceId: generateRandomMongoId(),
        totalCoins: 200,
        level: 1,
    }
);

// customer 17
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_17.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_17_A.data._id,
    timestamp: Challenges.CHALLENGE_USER_17_A.data.endDateTime,
    multiplierId: null,
    totalCoins: 260,
    level: 1,
});

// customer 18
transactions.push(
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_18.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_18_A.data._id,
        timestamp: Challenges.CHALLENGE_USER_18_A.data.endDateTime,
        multiplierId: null,
        totalCoins: 320,
        level: 1,
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_18.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_18_B.data._id,
        timestamp: Challenges.CHALLENGE_USER_18_B.data.endDateTime,
        multiplierId: null,
        totalCoins: 260,
        level: 2,
    }
);

// customer 42
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_42.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_42_A.data._id,
    timestamp: Challenges.CHALLENGE_USER_42_A.data.endDateTime,
    multiplierId: null,
    totalCoins: 320,
    level: 51,
});

// customer 73
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_73.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_17_A.data._id,
    timestamp: Challenges.CHALLENGE_USER_17_A.data.endDateTime,
    multiplierId: null,
    totalCoins: 260,
    level: 1,
});

transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_2.data.customerId,
    coins: 200,
    source: "mood_monitor",
    timestamp: moment().subtract(1, "month").endOf("month").toDate(),
    multiplierId: null,
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

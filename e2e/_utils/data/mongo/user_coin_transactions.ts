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
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_6.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_6_A.data._id,
    timestamp: Challenges.CHALLENGE_USER_6_A.data.endDateTime,
    multiplierId: null,
    totalCoins: 260,
    level: 2
}, {
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_6.data.customerId,
    coins: 200,
    source: "onboardingChallenge",
    sourceId: generateRandomMongoId(),
    totalCoins: 200,
    level: 1
});

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

// customer 8
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_8.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_8_B.data._id,
    timestamp: Challenges.CHALLENGE_USER_8_B.data.endDateTime,
    multiplierId: null,
    totalCoins: 320,
    level: 3
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
        level: 2
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_8.data.customerId,
        coins: 200,
        source: "onboardingChallenge",
        sourceId: generateRandomMongoId(),
        totalCoins: 200,
        level: 1
    });

// customer 9
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_9.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_9_F.data._id,
    timestamp: Challenges.CHALLENGE_USER_9_F.data.endDateTime,
    multiplierId: null,
    totalCoins: 560,
    level: 7
},
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_9.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_9_E.data._id,
        timestamp: Challenges.CHALLENGE_USER_9_E.data.endDateTime,
        multiplierId: null,
        totalCoins: 500,
        level: 6
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_9.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_9_D.data._id,
        timestamp: Challenges.CHALLENGE_USER_9_D.data.endDateTime,
        multiplierId: null,
        totalCoins: 440,
        level: 5
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_9.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_9_C.data._id,
        timestamp: Challenges.CHALLENGE_USER_9_C.data.endDateTime,
        multiplierId: null,
        totalCoins: 380,
        level: 4
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_9.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_9_B.data._id,
        timestamp: Challenges.CHALLENGE_USER_9_B.data.endDateTime,
        multiplierId: null,
        totalCoins: 320,
        level: 3
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_9.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_9_A.data._id,
        timestamp: Challenges.CHALLENGE_USER_9_A.data.endDateTime,
        multiplierId: null,
        totalCoins: 260,
        level: 2
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_9.data.customerId,
        coins: 200,
        source: "onboardingChallenge",
        sourceId: generateRandomMongoId(),
        totalCoins: 200,
        level: 1
    });

// customer 14
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_14.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_14_I.data._id,
    timestamp: Challenges.CHALLENGE_USER_14_I.data.endDateTime,
    multiplierId: null,
    totalCoins: 560,
    level: 7
},
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_14.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_14_H.data._id,
        timestamp: Challenges.CHALLENGE_USER_14_H.data.endDateTime,
        multiplierId: null,
        totalCoins: 560,
        level: 7
    },

    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_14.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_14_G.data._id,
        timestamp: Challenges.CHALLENGE_USER_14_G.data.endDateTime,
        multiplierId: null,
        totalCoins: 560,
        level: 7
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_14.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_14_F.data._id,
        timestamp: Challenges.CHALLENGE_USER_14_F.data.endDateTime,
        multiplierId: null,
        totalCoins: 560,
        level: 7
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_14.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_14_E.data._id,
        timestamp: Challenges.CHALLENGE_USER_14_E.data.endDateTime,
        multiplierId: null,
        totalCoins: 500,
        level: 6
    },

    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_14.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_14_D.data._id,
        timestamp: Challenges.CHALLENGE_USER_14_D.data.endDateTime,
        multiplierId: null,
        totalCoins: 440,
        level: 5
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_14.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_14_C.data._id,
        timestamp: Challenges.CHALLENGE_USER_14_C.data.endDateTime,
        multiplierId: null,
        totalCoins: 380,
        level: 4
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_14.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_14_B.data._id,
        timestamp: Challenges.CHALLENGE_USER_14_B.data.endDateTime,
        multiplierId: null,
        totalCoins: 320,
        level: 3
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_14.data.customerId,
        coins: 60,
        source: "challenge",
        sourceId: Challenges.CHALLENGE_USER_14_A.data._id,
        timestamp: Challenges.CHALLENGE_USER_14_A.data.endDateTime,
        multiplierId: null,
        totalCoins: 260,
        level: 2
    },
    {
        _id: generateRandomMongoId(),
        userId: Customers.CUSTOMER_14.data.customerId,
        coins: 200,
        source: "onboardingChallenge",
        sourceId: generateRandomMongoId(),
        totalCoins: 200,
        level: 1
    });

// customer 15
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_15.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_15_C.data._id,
    timestamp: Challenges.CHALLENGE_USER_15_C.data.endDateTime,
    multiplierId: null,
    totalCoins: 320,
    level: 4
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
    level: 3
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
    level: 2
},
{
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_15.data.customerId,
    coins: 200,
    source: "onboardingChallenge",
    sourceId: generateRandomMongoId(),
    totalCoins: 200,
    level: 1
});

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
    level: 1
});

// customer 18
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_18.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_18_A.data._id,
    timestamp: Challenges.CHALLENGE_USER_18_A.data.endDateTime,
    multiplierId: null,
    totalCoins: 320,
    level: 1
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
    level: 2
});

// customer 35
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_35.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_35_A.data._id,
    timestamp: Challenges.CHALLENGE_USER_35_A.data.endDateTime,
    multiplierId: null,
    totalCoins: 260,
    level: 1,
    currentStreak:1
},
{
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_35.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_35_B.data._id,
    timestamp: Challenges.CHALLENGE_USER_35_B.data.endDateTime,
    multiplierId: null,
    totalCoins: 280,
    level: 2,
    currentStreak: 2
},
{
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_35.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_35_C.data._id,
    timestamp: Challenges.CHALLENGE_USER_35_C.data.endDateTime,
    multiplierId: null,
    totalCoins: 380,
    level: 3,
    currentStreak: 3
},
{
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_35.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_35_D.data._id,
    timestamp: Challenges.CHALLENGE_USER_35_D.data.endDateTime,
    multiplierId: null,
    totalCoins: 420,
    level: 4,
    currentStreak: 4,
},
{
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_35.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_35_E.data._id,
    timestamp: Challenges.CHALLENGE_USER_35_E.data.endDateTime,
    multiplierId: null,
    totalCoins: 480,
    level: 5,
    currentStreak: 5
},
{   
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_35.data.customerId,
    coins: 2500,
    source: "streak",
    sourceId: `award_${Challenges.CHALLENGE_USER_35_E.data._id}`,
    timestamp: Challenges.CHALLENGE_USER_35_E.data.endDateTime,
    _key: generateRandomMongoId(),

},
{   
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_35.data.customerId,
    coins: 100,
    source: "avatar_creation_award",
    sourceId: Challenges.CHALLENGE_USER_35_E.data.customerId,
    timestamp: moment().subtract(24, "hours").toDate(),
    _key: generateRandomMongoId(),
});

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
    level: 51
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
    level: 1
});

// customer 75
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_75.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_18_A.data._id,
    timestamp: Challenges.CHALLENGE_USER_18_A.data.endDateTime,
    multiplierId: null,
    totalCoins: 320,
    level: 1
},
{
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_75.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_18_B.data._id,
    timestamp: Challenges.CHALLENGE_USER_18_B.data.endDateTime,
    multiplierId: null,
    totalCoins: 260,
    level: 2
});

// customer 76
transactions.push({ 
    _id: generateRandomMongoId(), 
    userId: Customers.CUSTOMER_76.data.customerId,
    coins: 10, 
    source: "challenge", 
    sourceId: Challenges.CHALLENGE_2.data._id, 
    timestamp: Challenges.CHALLENGE_2.data.endDateTime, 
    totalCoins: 210, 
    level: 1, 
});

// customer 77
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_77.data.customerId,
    coins: 60,
    source: "challenge",
    sourceId: Challenges.CHALLENGE_USER_77_A.data._id,
    timestamp: Challenges.CHALLENGE_USER_77_A.data.endDateTime,
    multiplierId: null,
    totalCoins: 260,
    level: 1
});

// CUSTOMER_132
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_132.data.customerId,
    coins: 200,
    source: "onboardingChallenge",
    sourceId: generateRandomMongoId(),
    totalCoins: 200,
    level: 1
});

// CUSTOMER_109
transactions.push({
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_109.data.customerId,
    coins: 20,
    source: "duel",
    sourceId: generateRandomMongoId(),
    timestamp: moment().subtract(1, "hours"),
    createdAt: moment().subtract(1, "hours")
},{
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_109.data.customerId,
    coins: 100,
    source: "feedback_form",
    sourceId: generateRandomMongoId(),
    timestamp: moment().subtract(2, "hours"),
    createdAt: moment().subtract(2, "hours")
},{
    _id: generateRandomMongoId(),
    userId: Customers.CUSTOMER_109.data.customerId,
    coins: 200,
    source: "remote_user_action",
    sourceId: generateRandomMongoId(),
    timestamp: moment(),
    createdAt: moment()
},
);

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


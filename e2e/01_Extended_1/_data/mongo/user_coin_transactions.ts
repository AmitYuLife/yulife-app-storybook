import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as Customers from "../postgres/customers";
import { v4 as uuid } from "uuid";
import moment from "moment";

// exported at bottom of file
const type = "mongo";
const modelName = "cointransaction";
const transactions = [];

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

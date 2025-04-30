import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { v4 as uuid } from "uuid";
import { CUSTOMER_LEELA, CUSTOMER_ZOIDBERG } from "../postgres/customers";
import moment from "moment";
import {
  USER_HABIT_SMOKING_STATE_LEELA,
  USER_HABIT_SMOKING_STATE_ZOIDBERG,
} from "./user_habit_tracking_state";

const type = "mongo";
const modelName = "cointransaction";
const transactions = [];

function generateChallengeBonusObjects(userId: string, baseSourceId: string, N: number) {
  for (let i = 0; i < N; i++) {
    const incrementedSourceId = baseSourceId.replace(/-\d+$/, `-${i + 1}`);
    transactions.push({
      _id: generateRandomMongoId(),
      userId: userId,
      challengeBonusIds: [],
      coins: 11,
      metadata: {
        smokingStreakDay: i + 1,
      },
      source: "smoking_cessation_streak_increase",
      sourceId: incrementedSourceId,
      timeStamp: moment().format(),
      updatedAt: moment().format(),
    });
  }
}

const leela_smoking_id = USER_HABIT_SMOKING_STATE_LEELA.data._id + "-0";
generateChallengeBonusObjects(CUSTOMER_LEELA.data.customerId, leela_smoking_id, 25);
const zoidberg_smoking_id = USER_HABIT_SMOKING_STATE_ZOIDBERG.data._id + "-0";
generateChallengeBonusObjects(CUSTOMER_ZOIDBERG.data.customerId, zoidberg_smoking_id, 10);

module.exports = transactions.reduce((acc, transaction) => {
  console.log(transaction);
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

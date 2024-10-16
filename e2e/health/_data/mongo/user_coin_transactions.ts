import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { USER_LEELA } from "./users";
import { v4 as uuid } from "uuid";
import { CUSTOMER_LEELA, CUSTOMER_ZOIDBERG } from "../postgres/customers";
import { SMOKING_STATE_LEELA, SMOKING_STATE_ZOIDBERG } from "../postgres/customer_health_smoking_state";
import { timeStamp } from "console";
import moment from "moment";

const type = "mongo";
const modelName = "cointransaction";
const transactions = [];


function generateChallengeBonusObjects(userId: string, baseSourceId: string, N: number) {

  for (let i = 0; i < N; i++) {
    const incrementedSourceId = baseSourceId.replace(/-\d+$/, `-${i + 1}`)
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
      timeStamp:moment().format(),
      updatedAt:moment().format()
    });
  }
}

const leela_smoking_id = SMOKING_STATE_LEELA.data.customer_health_smoking_state_id + "-0"
generateChallengeBonusObjects(CUSTOMER_LEELA.data.customerId, leela_smoking_id, 25)
const zoidberg_smoking_id = SMOKING_STATE_ZOIDBERG.data.customer_health_smoking_state_id + "-0"
generateChallengeBonusObjects(CUSTOMER_ZOIDBERG.data.customerId, zoidberg_smoking_id, 10)

module.exports = transactions.reduce((acc, transaction) => {
    console.log(transaction)
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

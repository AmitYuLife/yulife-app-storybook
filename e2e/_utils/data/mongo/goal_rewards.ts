import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment from "moment"
import { CUSTOMER_137_GHI_REWARDS } from "../postgres/customers"
import { CPE_137_GHI_REWARDS } from "../postgres/customer_product_entity"
import { CORE_REWARDS_BUPA_GHI_REWARDS } from "./core_rewards"
import { GOAL_PRODUCTS_3 } from "./goal_products"
import { GOAL_REWARD_MILESTONE_27_GHI_REWARDS } from "./goal_reward_milestones"



const type = "mongo"
const modelName = "goal_rewards"

export const GOAL_REWARDS_1 = {
    type,
    modelName,
    data:{
        _id: generateRandomMongoId(),
        customerProductId: CPE_137_GHI_REWARDS.data.customer_product_id,
        iterationId: "1",
        milestone: GOAL_REWARD_MILESTONE_27_GHI_REWARDS.data._id,
        userId: CUSTOMER_137_GHI_REWARDS.data.customerId,
        completed: {
          user_levelled_up: 150
        },
        createdAt: {
          "$date": moment().subtract(30, "days").format("YYYY-MM-DDTHH:mm:ss")
        },
        earnRateBased: true,
        goal: GOAL_PRODUCTS_3.data._id,
        parentType: "goal_products",
        rewardId: CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        rewardQuantity: null,
        rewardType: "core_reward",
        rewardValue: null,
        claimedDateTime: moment().subtract(30, "days").format("YYYY-MM-DDTHH:mm:ss")
      }
} as IDatabaseItem




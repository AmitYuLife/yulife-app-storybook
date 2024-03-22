import { CUSTOMER_34, CUSTOMER_20, CUSTOMER_81, CUSTOMER_137_GHI_REWARDS} from '../postgres/customers';
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require('moment');
import { GOALS_1, GOALS_5, GOALS_6 } from "./goals";




const type = "mongo"
const modelName = "goal_invitation"

export const GOAL_INVITATION_1 = {
    type,
    modelName,
    data:{
        goal: GOALS_1.data._id,
        teamName:"TeamYulife",
        userId: CUSTOMER_34.data.customerId,
        endDateTime: moment().add(7, "day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const GOAL_INVITATION_2 = {
    type,
    modelName,
    data:{
        goal: GOALS_1.data._id,
        teamName:"TeamYulife",
        userId: CUSTOMER_20.data.customerId,
        endDateTime: moment().add(7, "day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const GOAL_INVITATION_5 = {
    type,
    modelName,
    data:{
        goal: GOALS_5.data._id,
        teamName:"TeamYulife",
        userId: CUSTOMER_81.data.customerId,
        endDateTime: moment().add(5, "day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const GOAL_INVITATION_6 = {
    type,
    modelName,
    data:{
        userId: CUSTOMER_137_GHI_REWARDS.data.customerId,
        goal: GOALS_6.data._id,
        endDateTime: moment().add(1, "weeks").format("YYYY-MM-DDTHH:mm:ss"),
      }
} as IDatabaseItem
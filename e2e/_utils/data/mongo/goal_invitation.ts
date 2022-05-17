import { CUSTOMER_34, CUSTOMER_20} from '../postgres/customers';
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require('moment');
import { GOALS_1 } from "./goals";




const type = "mongo"
const modelName = "goal_invitation"

export const GOAL_INVITATION_1 = {
    type,
    modelName,
    data:{
        goal: GOALS_1.data._id,
        stageId: "test_stage",
        teamName:"TeamYulife",
        userId: CUSTOMER_34.data.customerId,
        endDate: moment().add(7, "day").toDate(),
    }
} as IDatabaseItem

export const GOAL_INVITATION_2 = {
    type,
    modelName,
    data:{
        goal: GOALS_1.data._id,
        stageId: "test_stage",
        teamName:"TeamYulife",
        userId: CUSTOMER_20.data.customerId,
        endDate: moment().add(7, "day").toDate(),
    }
} as IDatabaseItem
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { CUSTOMER_81 } from "../postgres/customers";
import { GOALS_5 } from "./goals";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import moment from "moment";

export const GOAL_TEAM_5 = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOALS_5.data._id,
        teamName: CUSTOMER_81.data._id,
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        membersCount: 0,
        overallProgress: 0,
    },
} as IDatabaseItem
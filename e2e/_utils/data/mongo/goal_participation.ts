import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment = require('moment');
import { GOALS_2 } from "./goals";
import { GOAL_TEAM_1 } from "./goal_team";
import { CUSTOMER_52 } from "../postgres/customers";


export const GOAL_PARTICIPATION_1 = {
    type: "mongo",
    modelName: "goal_participation",
    data:{
        status: "active",
        typesToTrack: [
          "user_inspected"
        ],
        synchronousProgress: true,
        userId: CUSTOMER_52.data.customerId,
        goal: GOALS_2.data._id,
        parentType: "goals",
        team: GOAL_TEAM_1.data._id,
        startDate: moment().subtract(1, "day").toDate(),
        endDate: moment().add(24, "days").toDate(),
        trackingEndDate: moment().add(25, "days").toDate(),
        progressSyncedAt: moment(),
      }
} as IDatabaseItem

import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment = require('moment');
import { GOALS_2, GOALS_3 } from "./goals";
import { GOAL_TEAM_1, GOAL_TEAM_3 } from "./goal_team";
import { CUSTOMER_52, CUSTOMER_71 } from "../postgres/customers";


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

export const GOAL_PARTICIPATION_3 = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      status: "active",
      typesToTrack: [
        "passive_challenge_cycling"
      ],
      synchronousProgress: true,
      userId: CUSTOMER_71.data.customerId,
      goal: GOALS_3.data._id,
      parentType: "goals",
      team: GOAL_TEAM_3.data._id,
      startDate: moment().toDate(),
      endDate: moment().add(7, "days").toDate(),
      trackingEndDate: moment().add(8, "days").toDate(),
      progressSyncedAt: moment(),
    }
} as IDatabaseItem


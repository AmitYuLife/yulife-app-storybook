import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { GOALS_2, GOALS_3, GOALS_4 } from "./goals";
import { GOAL_TEAM_1, GOAL_TEAM_3, GOAL_TEAM_4 } from "./goal_team";
import * as customer from "../postgres/customers";
import moment from "moment";

export const GOAL_PARTICIPATION_1 = {
    type: "mongo",
    modelName: "goal_participation",
    data:{
        status: "active",
        typesToTrack: [
          "user_inspected"
        ],
        synchronousProgress: true,
        userId: customer.CUSTOMER_52.data.customerId,
        goal: GOALS_2.data._id,
        parentType: "goals",
        team: GOAL_TEAM_1.data._id,
        startDateTime: moment().subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss"),
        endDateTime: moment().add(24, "days").format("YYYY-MM-DDTHH:mm:ss"),
        trackingEndDateTime: moment().add(25, "days").format("YYYY-MM-DDTHH:mm:ss"),
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
      userId: customer.CUSTOMER_71.data.customerId,
      goal: GOALS_3.data._id,
      parentType: "goals",
      team: GOAL_TEAM_3.data._id,
      startDateTime: moment().format("YYYY-MM-DDTHH:mm:ss"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DDTHH:mm:ss"),
      trackingEndDateTime: moment().add(8, "days").format("YYYY-MM-DDTHH:mm:ss"),
      progressSyncedAt: moment(),
      participationId: null
    }
} as IDatabaseItem

export const GOAL_PARTICIPATION_4 = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      status: "active",
      typesToTrack: [
        "active_challenge_three_stars"
      ],
      synchronousProgress: true,
      userId: customer.CUSTOMER_72.data.customerId,
      goal: GOALS_4.data._id,
      parentType: "goals",
      team: GOAL_TEAM_4.data._id,
      startDateTime: moment().format("YYYY-MM-DDTHH:mm:ss"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DDTHH:mm:ss"),
      trackingEndDateTime: moment().add(8, "days").format("YYYY-MM-DDTHH:mm:ss"),
      progressSyncedAt: moment(),
      participationId: null
    }
} as IDatabaseItem
